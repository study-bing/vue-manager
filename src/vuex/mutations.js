/**
 * @file vuex/mutations.js
 * @desc vuex mutations
 * @version 0.0.1
 * @author linbin <linbin@freshfirst.cn>
 * @date 2019-10-22
 */
import * as mutationTypes from './mutation-types';

export default {
	/**
   * 设置用户信息
   * @author linbin <linbin@freshfirst.cn>
   * @date   2019-10-22
   * @param  {Object} state
   * @return {object} data 用户信息
   */
	[mutationTypes.SET_USER_INFO](state, data) {
		state.userInfo = data;
	},
	[mutationTypes.SET_ROUTE_LIST](state, data) {
		state.routeList = data;
	},
};