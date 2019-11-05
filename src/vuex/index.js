/**
 * @file vuex/index.js
 * @desc vuex index
 * @version 0.0.1
 * @author linbin <linbin@freshfirst.cn>
 * @date 2019-10-22
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
});
