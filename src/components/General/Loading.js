import React from 'react'
import Layout from './Layout'

const Loading = () => {
    return (
        <Layout>
            <div className="space-y-8 inset-0 bg-[#FFFFFF] fixed flex w-full h-full items-center justify-center duration-300 transition-opacity">
                <div className="flex-col text-center">
                    <img src='/images/logo3.jpg' alt='vev' />
                    <h5 className='text-xl md:text-2xl font-bold'>Loading...</h5>
                </div>
            </div>
        </Layout>
    )
}

export default Loading