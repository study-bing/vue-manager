/**
 * @file utils.js
 * @desc 工具函数库
 * @version 0.0.1
 * @author Linbin <linbin@freshfirst.cn>
 * @date 2017-9-10-22*
 */

/**
 * 解除对象之间的关联性的方法
 * @author linbin 
 * @date   2019-10-22
 * @param  {Array}   vueData 数据
 */
const parse = function (vueData) {
  return JSON.parse(JSON.stringify(vueData));
};

/**
 * 数字前加0
 * @author linbin 
 * @date   2019-10-22
 * @param  {Number}   num 需要修改的数字
 * @param  {Number}   bit 0的位数
 */
const fillZero = function (num, bit = 0) {
  let str = num.toString();
  if (str.length < bit) {
    let n = bit - str.length;
    while (n--) {
      str = '0' + str;
    }
  }
  return str;
};

/**
 * 获取日期 yyyy-mm-dd
 * @author linbin 
 * @date   2019-10-22
 * @param  {Date}     time 某个时间
 */
const getDate = function (time = new Date().getTime()) {
  let date = new Date(time);
  let formatDate = `${date.getFullYear()}-${fillZero(date.getMonth() + 1, 2)}-${fillZero(date.getDate(), 2)}`;
  return formatDate;
};

/**
 * 获取时间 HH-MM-SS
 * @author linbin 
 * @date   2019-10-22
 * @param  {Date}     time 某个时间
 */
const getTime = function (time = new Date().getTime()) {
  let date = new Date(time);
  let formatTime = `${fillZero(date.getHours(), 2)}:${fillZero(date.getMinutes(), 2)}:${fillZero(date.getSeconds(), 2)}`;
  return formatTime;
};
/**
 * 获取时间 yyyy-mm-dd HH:MM:SS
 * @author linbin 
 * @date   2019-10-22
 * @param  {Date}     time 某个时间
 */
const getDateTime = function (time = new Date().getTime()) {
  let date = new Date(time);
  let formatTime = `${date.getFullYear()}-${fillZero(date.getMonth() + 1, 2)}-${fillZero(date.getDate(), 2)} ${fillZero(date.getHours(), 2)}:${fillZero(date.getMinutes(), 2)}:${fillZero(date.getSeconds(), 2)}`;
  return formatTime;
};

/**
 * 数字金额大写转换(可以处理整数,小数,负数)
 * @author linbin <linbin@freshfirst.cn>
 * @date   2019-10-22
 * @param  {string | float}   n 数字金额
 * @return {string}     大写金额
 */
const digitUppercase = function (n) {
  let fraction = ['角', '分'];
  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  let head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
};

/**
 * 校验是否为空
 * @author linbin 
 * @date   2019-10-22
 * @param  {String | Object}   data 校验的内容
 */
const isEmpty = function (data) {
  if (typeof (data) === 'undefined' || data === '' || data === null) {
    return true;
  } else {
    return false;
  }
};

/**
 * 显示数字为xxx,xxx
 * @author linbin 
 * @date   2019-10-22
 * @param  {String | Object}   data 校验的内容
 */
const thousandFormat = function (num) {
  let isNegative = Number(num) < 0;
  let arryNum = String(num).split('.');
  let numInteger = Math.abs(arryNum[0]) + ''; // 数字转字符串
  let str = ''; // 字符串累加
  for (let i = numInteger.length - 1, j = 1; i > -1; i--, j++) {
    if (j % 3 === 0 && i !== 0) { // 每隔三位加逗号，过滤正好在第一个数字的情况
      str += numInteger[i] + ','; // 加千分位逗号
      continue;
    }
    str += numInteger[i]; // 倒着累加数字
  }
  if (arryNum.length > 1) {
    if (isNegative) {
      return `-${str.split('').reverse().join('')}.${arryNum[1]}`; // 字符串=>数组=>反转=>字符串
    } else {
      return `${str.split('').reverse().join('')}.${arryNum[1]}`; // 字符串=>数组=>反转=>字符串
    }
  } else {
    if (isNegative) {
      return `-${str.split('').reverse().join('')}`; // 字符串=>数组=>反转=>字符串
    } else {
      return str.split('').reverse().join(''); // 字符串=>数组=>反转=>字符串
    }
  }
};

/**
 * xxx,xxx变回数字
 * @author linbin 
 * @date   2019-10-22
 * @param  {Number}   price 以分为单位的价格
 */
const thousandToNumber = function (num) {
  let arryNum = num.split('.');
  let numInteger = arryNum[0].split(',').join(''); // 字符串转数字
  if (arryNum[1]) {
    numInteger = numInteger + '.' + arryNum[1];
  }
  return Number(numInteger);
};

/**
 * 超过N个数变为...
 * @author linbin 
 * @date   2019-10-22
 * @param  {String}   data 数据
 * @return {Number}   num 位数
 */
const showExplainData = function (data, num = 8) {
  if (isEmpty(data)) {
    return '';
  }
  if (String(data).length > num) {
    return String(data).substr(0, num) + '...';
  } else {
    return data;
  }
};
/**
 * 时间函数
 * @author linbin 
 * @date   2019-10-22
 * @param 变量 Number
 * @return {Array}  ["06-13", "06.13", "2018-06-13", "06月13日"]
 */
const dateResult = (value = 0) => {
  let dateTime = new Date();
  dateTime = dateTime.valueOf();
  dateTime = dateTime + value * 24 * 60 * 60 * 1000;
  dateTime = new Date(dateTime);
  let ys = dateTime.getFullYear();
  let ms = dateTime.getMonth() + 1;
  let ds = dateTime.getDate();
  let hs = dateTime.getHours();
  let is = dateTime.getMinutes();
  if (ms < 10) {
    ms = '0' + ms;
  }
  if (ds < 10) {
    ds = '0' + ds;
  }
  let nowFormat1 = ms + '-' + ds;
  let nowFormat2 = ms + '.' + ds;
  let nowFormat3 = ys + '-' + ms + '-' + ds;
  let nowFormat4 = ms + '月' + ds + '日';
  let nowFormat6 = ys + '-' + ms + '-' + ds + ' ' + hs + ':' + is;
  let nowFormat = [nowFormat1, nowFormat2, nowFormat3, nowFormat4, nowFormat6];
  return nowFormat;
};

/**
 * 获取指定日期的周的第一天、月的第一天、季的第一天、年的第一天
 * @author linbin 
 * @date   2019-10-22
 */
// 获取这周的周一
const getFirstDayOfWeek = function (date = new Date()) {
  var weekday = date.getDay() || 7;
  date.setDate(date.getDate() - weekday + 1);
  return getDate(date);
};
// 获取当月第一天
const getFirstDayOfMonth = function (date = new Date()) {
  date.setDate(1);
  return getDate(date);
};
// 获取当季第一天
const getFirstDayOfSeason = function (date = new Date()) {
  var month = date.getMonth();
  if (month < 3) {
    date.setMonth(0);
  } else if (month > 2 && month < 6) {
    date.setMonth(3);
  } else if (month > 5 && month < 9) {
    date.setMonth(6);
  } else if (month < 8 && month < 11) {
    date.setMonth(9);
  };
  date.setDate(1);
  return getDate(date);
};
// 获取当年第一天
const getFirstDayOfYear = function (date = new Date()) {
  date.setDate(1);
  date.setMonth(0);
  return getDate(date);
};

export {
  parse, // 解除对象之间的关联性的方法
  fillZero, // 数字前加0
  getDate, // 获取日期 yyyy-mm-dd
  getTime, // 获取时间 yyyy-mm-dd
  digitUppercase, // 数字金额大写转换(可以处理整数,小数,负数)
  isEmpty, // 校验是否为空
  showExplainData, // 价格转千分位展示
  dateResult, // 获取时间
  getFirstDayOfWeek, // 获取这周的周一
  getFirstDayOfMonth, // 获取当月第一天
  getFirstDayOfSeason, // 获取当季第一天
  getFirstDayOfYear, // 获取当年第一天
  thousandToNumber, // 千分位转数字
  thousandFormat, // 数字转千分
  getDateTime, // 获取时间 yyyy-mm-dd HH:MM:SS
};