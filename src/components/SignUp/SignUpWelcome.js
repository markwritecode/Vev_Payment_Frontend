import { useAuth } from '../../contexts/auth'

const SignUpWelcome = () => {

    const { setSignUp } = useAuth()

    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-[#F3F3F3]'>
            <div className='flex items-center justify-center h-full'>
                <div className='w-full md:w-[40%]'>
                    <div className='space-y-6'>
                        <div className='py-8 xl:py-14 shadow-2xl bg-white'>
                            <div className='w-2/3 mx-auto space-y-4 xl:space-y-7'>
                                <div className='text-center space-y-1 xl:space-y-3'>
                                    <div className='font-bold text-2xl xl:text-4xl text-[#000000]'>Welcome</div>
                                    <button onClick={() => setSignUp(false)}>Go to Dashboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpWelcome