import React from 'react'
import Layout from './Layout'

const Loading = () => {
    return (
        <Layout>
            <div className="space-y-8 inset-0 bg-[#FFFFFF] fixed flex w-full h-full items-center justify-center duration-300 transition-opacity">
                <div className="flex-col">
                    <h2 className='text-lg md:text-4xl text-blue-500 font-bold text-center animate-ping'>Loading...</h2>
                </div>
            </div>
        </Layout>
    )
}

export default Loading