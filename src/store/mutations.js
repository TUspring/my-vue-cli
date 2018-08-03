
const SUBMIT_STATUS = 'SUBMIT_STATUS' //提交状态

export default {
	[SUBMIT_STATUS](state,repay) {
		state.value = repay
        console.log(repay)
	},
}