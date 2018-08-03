/**
 * Created by Administrator on 2018/3/7.
 */
import validate, {Validator} from 'vee-validate';
const messagesCn = {
    after: (field, [target]) => ` ${field}必须在${target}之后`,
    alpha_dash: (field) => ` ${field}能够包含字母数字字符，包括破折号、下划线`,
    alpha_num: (field) => `${field} 只能包含字母数字字符.`,
    alpha_spaces: (field) => ` ${field} 只能包含字母字符，包括空格.`,
    alpha: (field) => ` ${field} 只能包含字母字符.`,
    before: (field, [target]) => ` ${field} 必须在${target} 之前.`,
    between: (field, [min, max]) => ` ${field} 必须在${min}~${max}之间.`,
    confirmed: (field, [confirmedField]) => ` ${field} 不能和${confirmedField}匹配.`,
    date_between: (field, [min, max]) => ` ${field}必须在${min}和${max}之间.`,
    date_format: (field, [format]) => ` ${field}必须在在${format}格式中.`,
    decimal: (field, [decimals] = ['*']) => ` ${field} 必须是数字的而且最多包含${decimals === '*' ? '' : decimals}位小数.`,
    digits: (field, [length]) => ` ${field} 必须是${length}位数字`,
    dimensions: (field, [width, height]) => ` ${field}必须是 ${width} 像素到 ${height} 像素.`,
    email: (field) => ` ${field} 必须是有效的邮箱.`,
    ext: (field) => ` ${field} 必须是有效的文件.`,
    image: (field) => ` ${field} 必须是图片.`,
    in: (field) => ` ${field} 必须是一个有效值.`,
    ip: (field) => ` ${field} 必须是一个有效的地址.`,
    max: (field, [length]) => ` ${field} 不能大于${length}个字.`,
    mimes: (field) => ` ${field} 必须是有效的文件类型.`,
    min: (field, [length]) => ` ${field} 不能少于${length}个字.`,
    not_in: (field) => ` ${field}必须是一个有效值.`,
    numeric: (field) => ` ${field}只能包含数字.`,
    regex: (field) => ` ${field} 格式无效.`,
    required: (field) => `${field}不能为空.`,
    size: (field, [size]) => ` ${field} 必须小于 ${size} KB.`,
    url: (field) => ` ${field}不是有效的url.`,
    phone: (field) => ` ${field} 格式不正确.`,
    msgCode: (field) => ` ${field} 格式不正确.`,
    nickname: (field) => ` ${field} 只能包含字母、数字或中文.`,
    minChar: (field, [length]) => ` ${field}不能小于${length}个字符.`,
    maxChar: (field, [length]) => ` ${field}不能大于${length}个字符.`
}
//手机号码
Validator.extend('phone', {
    getMessage: field => field + ' 格式不正确',
    validate: value => !!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)
});
//6位手机短信验证码
Validator.extend('msgCode', {
    getMessage: field => field + ' 格式不正确',
    validate: value => !!/^[a-zA-Z0-9]{6}$/.test(value)
});
//昵称
Validator.extend('nickname', {
    getMessage: field => field + ' 只能包含字母、数字或中文',
    validate: value => !!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value)
});
//最小字符
Validator.extend('minChar', {
    getMessage:(field,params) => {
        return field+ '不能小于'+params[0]+'个字符.'
    },
    validate: (value,params) => {
        return !(value.replace(/[^\x00-\xff]/g, 'xx').length<parseInt(params[0]))
    }
})
// 最大字符
Validator.extend('maxChar', {
    getMessage:(field,params) => {
        return field+ '不能大于'+params[0]+'个字符.'
    },
    validate: (value,params) => {
        return !(value.replace(/[^\x00-\xff]/g, 'xx').length>parseInt(params[0]))
    }
})
export const config = {
    errorBagName: 'errors', // change if property conflicts
    // fieldsBagName: 'fields',
    fieldsBagName: 'fieldsBag',
    locale: 'zh_CN',
    dictionary: {
        zh_CN: {
            messages: messagesCn
        }
    }
};
export default validate