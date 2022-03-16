const Header = () => {
    return (
        <header className='h-16 w-full flex items-center relative justify-end px-5 space-x-10'>
            <div className='flex flex-shrink-0 items-center space-x-4 text-black'>

                <div className='flex flex-col items-end '>
                    <div className='text-md font-medium '>Unknow Unknow</div>
                    <div className='text-sm font-regular'>Student</div>
                </div>

                <div className='h-10 w-10 rounded-full cursor-pointer bg-black-200 border-2 border-blue-400'></div>
            </div>
        </header>
    )
}

export default Header