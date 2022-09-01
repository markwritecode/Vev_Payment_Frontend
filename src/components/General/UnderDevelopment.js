import { Building3 } from 'iconsax-react'

const UnderDevelopment = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-white py-48'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <Building3 className='h-20 w-20 text-indigo-500' />

                    <div className='font-bold text-2xl xl:text-5xl lg:text-4xl md:text-3xl mt-10 text-center'>
                        This page is currently under development
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderDevelopment