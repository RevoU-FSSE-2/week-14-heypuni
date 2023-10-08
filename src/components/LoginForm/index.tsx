import { Button, Card, Input, Form as AntForm } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { LoginResponse } from '../../types';


interface Props {
    onSubmit: (values: LoginResponse) => void
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email!").required('Please Enter Your Email'),
    password: Yup.string().required('Please Enter Your Password')
})

const LoginForm = ({ onSubmit }: Props) => {

  const handleLogin = async (values: LoginResponse) => {
    console.log(`Successfully logged in`, values)
    onSubmit(values)
  }
  
  return (
        <Card title={"Login"}>
            <Formik 
            initialValues = {{ email: "test@gmail.com", password: "12345"}}
            validationSchema={validationSchema}
            onSubmit={handleLogin}>
                <Form name="basic" autoComplete="off">
                     
                    <AntForm.Item label="Email" name="email">
                        <div>
                            <Field prefix={<UserOutlined />} 
                        name="email" as={Input} placeholder="Enter your email" />
                        
                            <div>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                    </AntForm.Item>
                
                    <AntForm.Item label="Password" name="password">
                        <div>
                            <Field prefix={<LockOutlined />} 
                            name="password" as={Input} placeholder="Enter Password" 
                            />

                            <div >
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                    </AntForm.Item>
                
                    <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div>
                            <Button type="primary" htmlType="submit">
                            Log in
                            </Button>
                            Or <Link to={'/register'}>Register Here!</Link>
                        </div>
                    </AntForm.Item>
                </Form>
            </Formik>
        </Card>

    )
};

export default LoginForm;