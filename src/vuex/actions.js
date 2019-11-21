/**
 * @file vuex/actions.js
 * @desc vuex actions
 * @version 0.0.1
 * @author linbin <linbin@freshfirst.cn>
 * @date 2019-10-22
 */
import * as types from './mutation-types';

/**
 * 设置用户信息
 * @author linbin <linbin@freshfirst.cn>
 * @date   2019-10-22
 * @param {function} context.commit
 */
export const setUserInfo = ({
	commit
}, data) => {
	commit(types.SET_USER_INFO, data);
};
/**
 * 设置路由权限列表
 * @author linbin <linbin@freshfirst.cn>
 * @date   2019-10-22
 * @param {function} context.commit
 */
export const setRouteList = ({
	commit
}, data) => {
	commit(types.SET_ROUTE_LIST, data);
};