#!/bin/sh
#
# @author  Jerry <superzcj_001@163.com>
# @version 0.1.2
# @since   2018-05-17

DIR=$(pwd)
ROOT=$(git rev-parse --show-toplevel)
cd $DIR

echo '正在清理...'

./shell/clean-dist.sh

echo '正在输出...'
curl 'https://oapi.dingtalk.com/robot/send?access_token=59358966317eeb0b2e87936f4326137a77063562882d526ce9b43f1ab1a35135' \
	-H 'Content-Type: application/json' \
	-d '
	{
		"msgtype": "text",
		"text": {
			"content": "@'$(git config --get user.name)' 正在输出静态资源 on branch '$(git symbolic-ref --short -q HEAD)'"
		},
		"at": {
			"isAtAll": false
		}
	}' 1> /dev/null 2> /dev/null

vue-cli-service build --mode development

cd $DIR
