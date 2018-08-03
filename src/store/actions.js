const SUBMIT_STATUS = 'SUBMIT_STATUS' //提交状态
const ANYNC_SUBMIT_STATUS = 'ANYNC_SUBMIT_STATUS' //异步提交状态

export default {
	[ANYNC_SUBMIT_STATUS]({commit},state) {
	   commit(SUBMIT_STATUS, state)
       console.log(state)
	},
}