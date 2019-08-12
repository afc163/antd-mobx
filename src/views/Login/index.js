import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss';
import axios from '@src/axios';
import md5 from 'js-md5';

import LoginForm from './components/LoginForm';
import { Button, message as msg } from 'antd';

@inject('loginForm')
@observer
class Login extends Component {

  // 登录
  login = () => {
    const { form } = this.loginFormRef.props;
    const { loginForm: { changeFormData } } = this.props;
    changeFormData({
      account: '',
      password: ''
    });
    form.validateFields((err, formData) => {
      if (err) {
        return;
      }
      const { account, password, verifyCode } = formData;
      axios.post('/login', {
        account,
        password: md5(password),
        verifyCode,
        appId: '10'
      }).then(res => {
        const { data: { code } } = res;
        if (code === 0) {
          msg.success('登陆成功');
          // setTimeout(() => this.props.history.push('/system/admin'), 600);
        }
      });
    });
  }

  reset = () => {
    const { loginForm: { resetFormData } } = this.props;
    resetFormData();
  }

  render() {
    return (
      <div className="xy-login-wrap">
        <div className="xy-login-container">
          <div className="xy-login-logo"></div>
          <div className="xy-login-left">
            <div className="xy-login-left-img"></div>
            <span className="xy-login-title"></span>
            <span className="xy-login-desc"></span>
          </div>
          <div className="xy-login-right">
            <p className="xy-login-title">登录</p>
            <LoginForm
              wrappedComponentRef={form => this.loginFormRef = form}
              onLogin={this.login}
            />
            <Button
              type="primary"
              block
              className="xy-login-btn"
              onClick={this.login}
            >确定</Button>
            <Button
              type="primary"
              block
              onClick={this.reset}
            >重置</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
