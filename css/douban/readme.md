## 切页面

boss
设计师给稿-> 切图崽(前端) + 后端(写sql) + 运营

扒页面

1. 设立目标
 从上到下，从左到右，注意细化结构   要求是一模一样

2. 分析HTML结构，使用emmet语法快速完成HTML编写

3. 扒css
<div class="account-body login-wrap login-start account-anonymous">
  <div class="account-body-tabs">
    <ul class="tab-start">
      <li class="account-tab-phone on">短信登录／注册</li>
      <li class="account-tab-account">密码登录</li>
    </ul>
    <ul class="tab-quick">
      <li class="account-tab-scan">二维码登录</li>
    </ul>
    <div class="account-tab-switch">
      <div class="account-tab-switch-icon">
        <a class="quick icon-switch"></a>
        <a class="start icon-switch"></a>
      </div>
      <div class="account-tab-switch-text">
        <span class="quick">扫码登录</span>
        <span class="start">短信登录／注册</span>
      </div>
    </div>
  </div>
  <div class="account-tabcon-start">
    <div class="account-form">
  <div class="account-form-tips">请仔细阅读 <a target="_blank" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a></div>
  <div class="account-form-error"><span class="hide"></span></div>
  
  <div class="account-form-raw">
    <label class="account-form-label">手机号：</label>
    <div class="account-form-field account-form-field-phone">
      <span class="icon clear-input hide"></span>
      <input type="phone" name="phone" maxlength="13" class="account-form-input" placeholder="手机号" tabindex="1">
      <div class="account-form-field-area-code">
        <div class="account-form-field-area-code-label js-choose-district">+86</div>
      </div>
    </div>
  </div>
  <div class="nation-select hide"></div>

  
  <div class="account-form-raw">
    <label class="account-form-label">验证码：</label>
    <div class="account-form-field account-form-codes">
      <input id="code" type="text" name="code" maxlength="6" class="account-form-input" placeholder="验证码" tabindex="2" autocomplete="off">
      <div class="account-form-field-code">
        <a href="javascript:;">获取验证码</a>
      </div>
    </div>
  </div>

  
  <div class="account-form-field-submit ">
    <a href="javascript:;" class="btn btn-phone">登录豆瓣</a>
  </div>

</div>
    <div class="account-form-ft">
      <p class="account-form-link"><a class="help-link" target="_blank" data-action="login_phone_nocode" href="https://help.douban.com/account?app=1#t1-q5">收不到验证码</a></p>
      <p class="account-form-remember">
        <input name="remember" type="checkbox" id="account-form-remember" tabindex="4"><label for="account-form-remember">下次自动登录</label>
      </p>
    </div>
    <div class="account-form-3rd account-form-3rd-anonymous">
      <div class="account-form-3rd-hd">第三方登录: </div>
      <div class="account-form-3rd-bd">
        
        <a href="https://www.douban.com/accounts/connect/wechat/?from=&amp;redir=https%3A//www.douban.com/" class="link-3rd-wx link-3rd-wx-on" target="_top" title="用微信登录">wechat</a>
        <a href="https://www.douban.com/accounts/connect/sina_weibo/?from=&amp;redir=https%3A//www.douban.com/&amp;fallback=" class="link-3rd-wb link-3rd-wb-on" target="_top" title="用微博登录">weibo</a>
      </div>
    </div>
  </div>
  <div class="account-tabcon-quick account-quick">
    <div class="account-qr-code">
      <div class="account-qr-scan">
        加载中...
      </div>
      <div class="account-qr-text">
          请打开豆瓣客户端扫一扫
      </div>
      <div class="account-qr-fail hide">
        <span>登录失败</span>  
        <a href="javascript:;" class="btn btn-refresh account-qr-refresh">点击刷新</a>
      </div>
    </div>
    <div class="account-qr-success hide">
      <div class="account-qr-success-hd">扫描成功！</div>
      <div class="account-qr-success-bd">
        <div class="account-qr-success-bd-text">请在手机上确认登录</div>
        <div class="account-qr-success-bd-pic"></div>
        <div class="account-qr-success-bd-link">
          <a href="javascript:;">返回二维码登录</a>
        </div>
      </div>
    </div>
    <div class="account-qr-link">
      <a href="javascript:;" class="link-phone">短信登录/注册</a>
      <span>|</span>
      <a href="javascript:;" class="link-account">密码登录</a>
    </div>
  </div>
    <div class="captcha-error hide fixed">登录出现问题，<a href="javascript:window.location.reload()" data-action="captch_error">反馈并刷新</a></div>
</div>