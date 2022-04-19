import { Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import { useSignIn } from '../hooks/user/useSignUp'
import { urls } from '../utils/helperVariables'

const SignIn = () => {

    const [signinForm] = Form.useForm()
    const navigate = useNavigate()
    const { mutate, data, status } = useSignIn(() => navigate(urls.auth.DASHBOARD))
    const [auth, action] = useAuth()
    console.log(auth)

    const handleFinish = () => {
        signinForm.validateFields().then(values => {
            // mutate(values)
            action('signin')
        })
    }

    const navigateToSignUp = () => navigate(urls.un_auth.SIGN_UP)

    return (
        <div className='min-h-screen flex justify-center items-center bg-white'>
            <Form
                className='space-y-6'
                form={signinForm}
                autoComplete='off'
            >
                <div className='p-10 border-[1px] border-slate-200 shadow-lg rounded-md flex flex-col items-center space-y-4'>
                    <div className='text-center'>
                        <div className='font-medium text-xl sm:text-3xl text-gray-800'>
                            Welcome Back
                        </div>
                        <div className='mt-2 text-xl sm:text-sm text-gray-600'>
                            Please enter your credentials to login
                        </div>
                    </div>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Field cannot be empty' }, { type: 'email', message: 'Enter a valid email' }]}>
                        <input className='p-3 border-[1px] border-slate-500 rounded-sm w-80 focus:outline-none focus:border-[#1eabe7e3]' placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Field cannot be empty' }]}>
                        <input className='p-3 border-[1px] border-slate-500 rounded-sm w-80 focus:outline-none focus:border-[#1eabe7e3]' type='password' placeholder='Password' />
                    </Form.Item>
                    <div className='mr-auto'>
                        <p className='font-bold text-[#1eabe7e3]'>Forgot password?</p>
                    </div>
                    <div className='flex flex-col space-y-5 w-full'>
                        <button onClick={handleFinish} className='w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-3xl p-3 text-white font-bold transition duration-200'>Sign in</button>
                        <div className='flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative'>
                            <div className='-mt-1 font-bod bg-white px-5 absolute'>Or</div>
                        </div>
                        <button onClick={navigateToSignUp} className='w-full border-[#1eabe7e3] hover:border-[#1eabe7e3] border-2 rounded-3xl p-3 text-[#1eabe7e3] font-bold transition duration-200'>Sign Up</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default SignIn