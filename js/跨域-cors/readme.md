http 头部字段:
请求头
use-agent

响应头
set-cookie: 后端设置 cookie

通用头:
当用在请求的时候
Content-Type: application/x-www-form-urlencoded | application/json
<input name="name" />
<input name="pwd" />
application/x-www-form-urlencoded: name=xxx&pwd=xxx
application/json  {name:xxx,pwd:xxx}
mutipart/form-data:
--------分隔符--------
name=xxx
--------分隔符--------
pwd=xxx
--------分隔符--------

用在响应的时候
Content-Type: img/jpeg  imgage/png  text/html   text/javascript