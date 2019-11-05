#!/bin/sh
#
# @author  Jerry <superzcj_001@163.com>
# @version 0.3.0
# @since   2018-05-16

echo
DIR=$(pwd)
ROOT=$(git rev-parse --show-toplevel)

cd $ROOT

git add -A
git commit -m "自动输出静态资源 by $(git config --get user.name) 📦"

STATUS=$(git status --porcelain 2> /dev/null | tail -n1)

if [[ ! -n $STATUS ]]; then
	git pull --rebase
	git push
else
	git stash
	git pull --rebase
	git push
	git stash pop
fi

curl 'https://oapi.dingtalk.com/robot/send?access_token=59358966317eeb0b2e87936f4326137a77063562882d526ce9b43f1ab1a35135' \
	-H 'Content-Type: application/json' \
	-d '
	{
		"msgtype": "text",
		"text": {
			"content": "@'$(git config --get user.name)' 完成了静态资源输出 on branch '$(git symbolic-ref --short -q HEAD)' "
		},
		"at": {
			"isAtAll": false
		}
	}'

cd $DIR
