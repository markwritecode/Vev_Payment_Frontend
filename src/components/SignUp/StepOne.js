import { Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { usePoster } from '../../hooks/poster'
import { endpoints, urls } from '../../utils/helperVariables'

const StepOne = ({ incrementStep, setResponseData }) => {

    const [verifyForm] = Form.useForm()
    const navigate = useNavigate()
    const { mutate, isLoading } = usePoster(endpoints.USER_VERIFY, 'Verification sent, check your email', [], callback)

    const handleFinish = () => {
        verifyForm.validateFields().then(values => {
            mutate(values)
        })
    }

    function callback(data) {
        incrementStep()
        setResponseData(data.userData)
    }

    const navigateToSignIn = () => navigate(urls.un_auth.LOGIN)

    return (
        <Form
            className='space-y-6'
            form={verifyForm}
            autoComplete='off'
        >
            <div className='px-5 py-10 sm:p-10 border-[1px] border-slate-200 shadow-lg rounded-md flex flex-col items-center space-y-4'>
                <div className='text-center'>
                    <div className='font-medium text-lg sm:text-3xl text-gray-800'>
                        Registration
                    </div>
                    <div className='mt-2 text-sm sm:text-lg text-gray-600'>
                        Create a new account with us
                    </div>
                </div>
                <Form.Item
                    className='w-full'
                    name='email'
                    rules={[{ required: true, message: 'Field cannot be empty' }, { type: 'email', message: 'Enter a valid email' }]}>
                    <Input className='p-3 border-[1px] border-slate-500 rounded-sm xs:w-80 focus:outline-none focus:border-[#1eabe7e3]' placeholder='Email' />
                </Form.Item>
                <Form.Item
                    className='w-full'
                    name='first_name'
                    rules={[{ required: true, message: 'Field cannot be empty' }]}>
                    <Input className='p-3 border-[1px] border-slate-500 rounded-sm xs:w-80 focus:outline-none focus:border-[#1eabe7e3]' placeholder='First name' />
                </Form.Item>
                <Form.Item
                    className='w-full'
                    name='last_name'
                    rules={[{ required: true, message: 'Field cannot be empty' }]}>
                    <Input className='p-3 border-[1px] border-slate-500 rounded-sm xs:w-80 focus:outline-none focus:border-[#1eabe7e3]' placeholder='Last name' />
                </Form.Item>
                <Form.Item
                    className='w-full'
                    name='password'
                    rules={[{ required: true, message: 'Field cannot be empty' }]}>
                    <Input className='p-3 border-[1px] border-slate-500 rounded-sm xs:w-80 focus:outline-none focus:border-[#1eabe7e3]' type='password' placeholder='Password' />
                </Form.Item>
                <div className='flex flex-col space-y-5 w-full'>
                    <button
                        disabled={isLoading}
                        onClick={handleFinish}
                        className='w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-3xl p-3 text-white font-bold transition duration-200'>
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <div className='flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative'>
                        <div className='-mt-1 font-bod bg-white px-5 absolute'>Or</div>
                    </div>
                    <button
                        onClick={navigateToSignIn}
                        className='w-full border-[#1eabe7e3] hover:border-[#1eabe7e3] border-2 rounded-3xl p-3 text-[#1eabe7e3] font-bold transition duration-200'>
                        Sign In
                    </button>
                </div>
            </div>
        </Form>
    )
}

export default StepOne