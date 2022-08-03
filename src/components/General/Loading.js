const Loading = () => {
    return (
        <div className="space-y-8 inset-0 bg-[#FFFFFF] fixed flex w-full h-full items-center justify-center duration-300 transition-opacity z-30">
            <div className="flex-col text-center">
                <img src='/images/vev_logo.png' alt='vev' />
                <h5 className='text-xl md:text-2xl font-bold'>Loading...</h5>
            </div>
        </div>
    )
}

export default Loading