import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Form, Input, Row, Col } from 'antd';
import { getFormChange } from '@src/utils';

@inject('loginForm')
@Form.create({
  onFieldsChange(props, changedFields) {
    props.loginForm.changeFormData(getFormChange(changedFields));
  },
  mapPropsToFields(props) {
    console.log(props);
    const { formData } = props.loginForm;
    const formConCreater = {};
    for(let [key, value] of Object.entries(formData)){
      formConCreater[key] = Form.createFormField({
        value
      });
    }
    return formConCreater;
  }
})
@observer
class LoginForm extends Component {
render() {
    const { getFieldDecorator } = this.props.form;
    const { verifycode, resetVerifycode } = this.props.loginForm;
    return (
      <Form>
        <Form.Item>
          {
            getFieldDecorator('account', {
              rules: [{
                required: true,
                message: '请输入登录名'
              }]
            })(
              <Input
                type="text"
                autoComplete="off"
                placeholder="请输入登录名"
                onPressEnter={this.props.onLogin}
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '请输入密码'
              }]
            })(
              <Input
                type="password"
                placeholder="请输入密码"
                onPressEnter={this.props.onLogin}
              />
            )
          }
        </Form.Item>
        <Form.Item>
          <Row gutter={16}>
            <Col span={18}>
              {
                getFieldDecorator('verifyCode', {
                  rules: [{
                    required: true,
                    message: '请输入验证码'
                  }]
                })(
                  <Input
                    type="text"
                    placeholder="请输入验证码"
                    onPressEnter={this.props.onLogin}
                    autoComplete="off"
                />
                )
              }
            </Col>
            <Col span={6}>
              <img
                src={verifycode}
                alt="验证码"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={resetVerifycode}
              />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
