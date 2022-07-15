import { Checkbox, Form, Input } from 'antd'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useSignUp } from '../hooks/poster'
import { urls } from '../utils/helperVariables'

const SignUp = () => {

    const [signUpForm] = Form.useForm()
    const navigate = useNavigate()
    const { mutate, isLoading } = useSignUp()

    const handleFinish = () => {
        signUpForm.validateFields().then(values => {
            const payload = {
                email: values.email,
                first_name: values.first_name,
                last_name: values.last_name,
                password: values.password
            }
            mutate(payload)
        })
    }

    const navigateToSignIn = () => navigate(urls.un_auth.LOGIN)

    const inputProps = {
        className: 'w-full p-3 xl:p-4 text-[#000000] text-opacity-50 text-xs xl:text-base border-[1px] border-[#6E7072] rounded-md hover:border-[#F5896C] focus:outline-0 focus:border focus:border-[#F5896C]'
    }

    return (
        <Form className='space-y-4 xl:space-y-6' form={signUpForm} autoComplete='off'>
            <div className='py-8 xl:py-14 shadow-2xl bg-white'>
                <div className='w-2/3 mx-auto space-y-4 xl:space-y-7'>
                    <div className='text-left space-y-1 xl:space-y-3 hidden sm:block'>
                        <div className='font-bold text-2xl xl:text-4xl text-[#000000] flex items-center'>
                            <span>Welcome to </span>
                            <img src='/images/vev_logo.png' className='ml-2 h-4 xl:h-8' alt='' />
                        </div>
                        <div className='text-sm xl:text-lg text-[#000000] text-opacity-50'>
                            Register your account
                        </div>
                    </div>
                    <img src='/images/logo.png' className='h-10 mx-auto sm:hidden' alt='vev' />
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Field cannot be empty' }, { type: 'email', message: 'Enter a valid email' }]}>
                        <Input {...inputProps} placeholder='Email:' />
                    </Form.Item>
                    <Form.Item
                        name='first_name'
                        rules={[{ required: true, message: 'Field cannot be empty' }]}>
                        <Input {...inputProps} placeholder='First name:' />
                    </Form.Item>
                    <Form.Item
                        name='last_name'
                        rules={[{ required: true, message: 'Field cannot be empty' }]}>
                        <Input {...inputProps} placeholder='Last name:' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Field cannot be empty' }]}>
                        <Input {...inputProps} type='password' placeholder='Create password:' />
                    </Form.Item>
                    <Form.Item
                        name='confirm_password'
                        rules={[
                            { required: true, message: 'Field cannot be empty' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'))
                                }
                            })
                        ]}>
                        <Input {...inputProps} type='password' placeholder='Confirm password:' />
                    </Form.Item>
                    <div className='text-right text-xs xl:text-sm'>
                        <span className='text-[#000000] text-opacity-50'>Already Sign Up?</span>
                        <span onClick={navigateToSignIn} className='text-[#F3724F] cursor-pointer'> Login</span>
                    </div>
                    <Form.Item name='agree' valuePropName='checked' rules={[{ required: true, message: 'Please agree before you proceed' }]}>
                        <Checkbox>
                            <span className='text-[#000000] text-opacity-50 text-xs xl:text-sm'>I agree to the</span>
                            <span className='text-[#F3724F] cursor-pointer text-xs xl:text-sm'> Terms privacy policy</span>
                        </Checkbox>
                    </Form.Item>
                    <div className='w-4/5 mx-auto'>
                        <button
                            disabled={isLoading}
                            onClick={handleFinish}
                            className='w-full bg-[#F3724F] rounded-lg p-3 text-white font-bold transition duration-200'>
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-2 mx-auto w-full'>
                        <p className='text-[#000000] text-opacity-50 text-xs xl:text-sm'>Create account with</p>
                        <BsApple className='h-5 w-5' />
                        <FcGoogle className='h-5 w-5' />
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default SignUp