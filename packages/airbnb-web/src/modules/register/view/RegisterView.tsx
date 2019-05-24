import * as React from 'react';
import {Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export class RegisterView extends React.Component {
  render() {
    return (
      <div style={{ display:'flex' }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Form.Item>
            <Input
              prefix={<Icon type="user"
              style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'srgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <FormItem>
            <Button
               type="primary"
               htmlType="submit"
               className="login-form-button"
             >
             Register Now!
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">Log In</a>
          </FormItem>
         </div>
      </div>
    );
  }
}