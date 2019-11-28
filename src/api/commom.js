import service from './index';

/**
 * 获取图片cdn
 * @author linbin
 * @date   2019-11-27
 */
export function getBaseUrl(data = {}) {
	return service.request({
		url: '	/helper/getcdnurl',
		method: 'get',
		params: data
	});
}