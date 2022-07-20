import { Form, Input } from 'antd'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from '../hooks/poster'
import { urls } from '../utils/helperVariables'

const SignIn = () => {

    const [signinForm] = Form.useForm()
    const navigate = useNavigate()
    const { mutate, isLoading } = useSignIn()

    const handleFinish = () => {
        signinForm.validateFields().then(values => {
            mutate(values)
        })
    }

    const navigateToSignUp = () => navigate(urls.un_auth.SIGN_UP)

    const inputProps = {
        className: 'w-full p-3 xl:p-4 text-[#000000] text-opacity-50 text-xs xl:text-base border-[1px] border-[#6E7072] rounded-md hover:border-[#F5896C] focus:outline-0 focus:border focus:border-[#F5896C]'
    }

    return (
        <Form className='space-y-6' form={signinForm} autoComplete='off'>
            <div className='py-8 xl:py-14 lg:shadow-2xl bg-white'>
                <div className='lg:w-2/3 mx-auto space-y-4 xl:space-y-7 px-5 lg:px-0'>
                    <div className='text-center space-y-1 xl:space-y-3'>
                        <div className='font-bold text-2xl xl:text-4xl text-[#000000] hidden sm:block'>Payment Secured</div>
                        <img src='/images/vev_logo.png' className='h-10 mx-auto sm:hidden' alt='vev' />
                    </div>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Field cannot be empty' }, { type: 'email', message: 'Enter a valid email' }]}>
                        <Input {...inputProps} placeholder='Email:' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Field cannot be empty' }]}>
                        <Input {...inputProps} type='password' placeholder='Password:' />
                    </Form.Item>
                    <div className='text-right'>
                        <span className='text-[#000000] text-opacity-50 text-xs xl:text-sm'>Create an account?</span>
                        <span onClick={navigateToSignUp} className='text-[#F3724F] cursor-pointer text-xs xl:text-sm'> Sign Up</span>
                    </div>
                    <div className='lg:w-4/5 mx-auto'>
                        <button
                            disabled={isLoading}
                            onClick={handleFinish}
                            className='w-full bg-[#F3724F] rounded-lg p-3 text-white font-bold transition duration-200'>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-2 mx-auto w-full'>
                        <p className='text-[#000000] text-opacity-50 text-xs xl:text-sm'>Login with</p>
                        <BsApple className='h-5 w-5' />
                        <FcGoogle className='h-5 w-5' />
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default SignIn