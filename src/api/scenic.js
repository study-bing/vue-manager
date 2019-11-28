import service from './index';

// <<<<<景区信息管理>>>>>

/**
 * 获取景区信息
 * @author linbin
 * @date   2019-11-25
 */
export function getScenicInfo(data = {}) {
	return service.request({
		url: '/mis/spot/getspotdetail',
		method: 'get',
		params: data
	});
}
/**
 * 编辑景区信息
 * @author linbin
 * @date   2019-11-25
 */
export function editScenicInfo(data = {}) {
	return service.request({
		url: '/mis/spot/editbasespotinfo',
		method: 'post',
		data: data
	});
}
/**
 * 获取bannerList
 * @author linbin
 * @date   2019-11-25
 */
export function getBannerList(data = {}) {
	return service.request({
		url: '/mis/spot/bannerlist',
		method: 'get',
		params: data
	});
}
/**
 * 新增banner
 * @author linbin
 * @date   2019-11-25
 */
export function addBanner(data = {}) {
	return service.request({
		url: '/mis/spot/addbanner',
		method: 'post',
		data: data
	});
}
/**
 * 编辑banner
 * @author linbin
 * @date   2019-11-25
 */
export function editBanner(data = {}) {
	return service.request({
		url: '/mis/spot/editbanner',
		method: 'post',
		data: data
	});
}
/**
 * 删除banner
 * @author linbin
 * @date   2019-11-25
 */
export function deleteBanner(data = {}) {
	return service.request({
		url: '/mis/spot/delbanner',
		method: 'post',
		data: data
	});
}
/**
 * 批量删除banner
 * @author linbin
 * @date   2019-11-25
 */
export function deleteBatchBanner(data = {}) {
	return service.request({
		url: '',
		method: 'post',
		data: data
	});
}
/**
 * 获取公告List
 * @author linbin
 * @date   2019-11-25
 */
export function getNoticeList(data = {}) {
	return service.request({
		url: '/mis/spot/noticelist',
		method: 'get',
		params: data
	});
}
/**
 * 新增公告
 * @author linbin
 * @date   2019-11-25
 */
export function addNotice(data = {}) {
	return service.request({
		url: '/mis/spot/addnotice',
		method: 'post',
		data: data
	});
}
/**
 * 编辑公告
 * @author linbin
 * @date   2019-11-25
 */
export function editNotice(data = {}) {
	return service.request({
		url: '/mis/spot/editnotice',
		method: 'post',
		data: data
	});
}
/**
 * 删除公告
 * @author linbin
 * @date   2019-11-25
 */
export function deleteNotice(data = {}) {
	return service.request({
		url: '/mis/spot/delnotice',
		method: 'post',
		data: data
	});
}
/**
 * 批量删除公告
 * @author linbin
 * @date   2019-11-25
 */
export function deleteNoticeBanner(data = {}) {
	return service.request({
		url: '',
		method: 'post',
		data: data
	});
}
/**
 * 获取景区介绍详情
 * @author linbin
 * @date   2019-11-25
 */
export function getIntroduce(data = {}) {
	return service.request({
		url: '',
		method: 'post',
		data: data
	});
}
/**
 * 编辑介绍
 * @author linbin
 * @date   2019-11-25
 */
export function editIntroduce(data = {}) {
	return service.request({
		url: '',
		method: 'post',
		data: data
	});
}