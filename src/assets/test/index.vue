<template>
    <div class="index" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中...">
        <a id="downlink"></a>
        <el-button class="button" @click="downloadFile(excelData)">导出excel表</el-button>

        <!--展示导入信息-->
        <el-table :data="excelData" tooltip-effect="dark">
            <el-table-column label="订单号" prop="order" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="客人名字" prop="size" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="酒店名称" prop="taste" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="产品名称" prop="price" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="入住时间" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="离店时间" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="夜间" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="面价" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="佣金" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="底价" prop="remain" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="开票金额" prop="remain" align="center" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
</template>

<script>
// 引入xlsx
var XLSX = require('xlsx')
export default {
  name: 'Index',
  data () {
return {
  fullscreenLoading: false, // 加载中
  outFile: '',  // 导出文件el
  excelData: [  // 测试数据
    {
        arrival_date:"2018-05-26",
        commission_deposit:3600,
        customer_name:"paco",
        departure_date:"2018-05-27",
        floor_price:13200,
        hotel_name:"港润酒店(广州北京路店)(原港润喜尔宾酒店)",
        number_of_rooms:1,
        order_number:20180526580,
        rate_plan_name:"Paco测试2",
        room_name:"豪华双床房",
        sale_price:16800,
        status:0,
        voice_deposit:3600,
    },
    {
        arrival_date:"2018-05-26",
        commission_deposit:1680,
        customer_name:"paco",
        departure_date:"2018-05-27",
        floor_price:15120,
        hotel_name:"港润酒店(广州北京路店)(原港润喜尔宾酒店)",
        number_of_rooms:1,
        order_number:20180526885,
        rate_plan_name:"Paco测试",
        room_name:"高级套房",
        sale_price:16800,
        status:0,
        voice_deposit:1680
    }
  ],
}
  },
  mounted () {
        this.outFile = document.getElementById('downlink')
  },
  methods: {
        downloadFile (rs) { // 点击导出按钮
            let data = [{}]
            for (let k in rs[0]) {
                data[0][k] = k
            }
            data = data.concat(rs)
            this.downloadExl(data, '趣看看账单表')
        },
        downloadExl (json, downName, type) {  // 导出到excel
            let keyMap = [] // 获取键
            for (let k in json[0]) {
                keyMap.push(k)
            }
            console.info('keyMap', keyMap, json)
            let tmpdata = [] // 用来保存转换好的json
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
                tmpdata[v.position] = {
                v: v.v
                }
            })
            console.log(tmpdata)
            let outputPos = Object.keys(tmpdata)  // 设置区域,比如表格从A1到D10
            let tmpWB = {
                SheetNames: ['总表','账单详情','商家承担退款','商家承担优惠','调整金额'], // 保存的表标题
                Sheets: {
                '总表': Object.assign({},
                    tmpdata, // 内容
                    {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
                    }),
                '账单详情': Object.assign({},
                    tmpdata, // 内容
                    {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
                    }),  
                '商家承担退款': Object.assign({},
                    tmpdata, // 内容
                    {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
                    }), 
                '商家承担优惠': Object.assign({},
                    tmpdata, // 内容
                    {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
                    }), 
                '调整金额': Object.assign({},
                    tmpdata, // 内容
                    {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
                    }),   
                }
            }
            let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
                {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
            ))], {
                type: ''
            })  // 创建二进制对象写入转换好的字节流
            var href = URL.createObjectURL(tmpDown)  // 创建对象超链接
            this.outFile.download = downName + '.xlsx'  // 下载名称
            this.outFile.href = href  // 绑定a标签
            this.outFile.click()  // 模拟点击实现下载
            setTimeout(function () {  // 延时释放
                URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
            }, 100)
        },
        s2ab (s) { // 字符串转字符流
            var buf = new ArrayBuffer(s.length)
            var view = new Uint8Array(buf)
                for (var i = 0; i !== s.length; ++i) {
                    view[i] = s.charCodeAt(i) & 0xFF
                }
          return buf
        },
        getCharCol (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
            let s = ''
            let m = 0
            while (n > 0) {
                m = n % 26 + 1
                s = String.fromCharCode(m + 64) + s
                n = (n - m) / 26
            }
            return s
        },
  }
}
</script>

<style>
    .el-table th>.cell {
        text-align: center;
    }
    
    .button {
        margin-bottom: 20px;
    }
</style>