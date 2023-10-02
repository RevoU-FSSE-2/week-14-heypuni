import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '../../types';
import { LoginForm } from '../../components';

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (values: LoginResponse) => {
    console.log(`Successfully logged in`, values)

    try {
        const response = await fetch (`https://mock-api.arikmpt.com/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        console.log(response)
        const data = await response.json()

        if (response.ok){
            const token = data.data.token

            localStorage.setItem('authToken', token)
            navigate('/');
        } else {
            alert(data.errors)
        }
    } catch (error) {
        console.error(error)
        alert("Login Failed")
    }

  }

  return (
    <LoginForm onSubmit={handleLogin} />

  );
};

export default Login;