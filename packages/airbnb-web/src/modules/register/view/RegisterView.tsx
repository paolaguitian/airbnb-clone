import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
const FormItem = Form.Item;

interface FormValues {
  email: '',
  password: '',
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterViewWrapper extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange,handleBlur,handleSubmit } = this.props;

    return (
      <form style={{ display:'flex' }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: "auto" }}>
          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Form.Item>
          <Form.Item>
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: 'srgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password:'' }),
  handleSubmit: async (values, {props,setErrors}) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(RegisterViewWrapper)