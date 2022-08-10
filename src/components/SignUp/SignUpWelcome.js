import { useAuth } from '../../contexts/auth'

const SignUpWelcome = () => {

    const { setSignUp } = useAuth()

    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-[#F3F3F3] z-30'>
            <div className='flex items-center justify-center h-full relative'>
                <img src='/images/vev_logo.png' className='absolute top-20 left-20 h-10 hidden lg:block' alt='vev' />
                <div className='w-full md:w-[50%]'>
                    <div className='space-y-6'>
                        <div className='py-8 xl:py-14 lg:shadow-2xl bg-white'>
                            <div className='w-2/3 mx-auto space-y-4 xl:space-y-7'>
                                <div className='text-left space-y-1 xl:space-y-3'>
                                    <div className='font-bold text-2xl xl:text-4xl text-[#000000]'>Welcome to vev</div>
                                    <p className='text-lg'>Your number one escrow payment platform</p>
                                </div>
                                <img src='/images/welcome.png' alt='vev' className='w-5/6 mx-auto' />
                                <div className='text-right'>
                                    <button className='text-[#F3724F] border border-[#F3724F] rounded-md p-1' onClick={() => setSignUp(false)}>Skip</button>
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