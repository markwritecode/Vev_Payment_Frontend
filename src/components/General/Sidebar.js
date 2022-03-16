import { ChevronRightIcon, ServerIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className='h-full hidden lg:w-1/5 lg:flex lg:flex-col space-y-10 items-center justify-center text-black'>
            <Link to='/' className='flex items-center justify-center rounded-lg hover:text-[#1EAAE7] hover:duration-300 hover:ease-linear gap-10'>
                <ServerIcon className='h-7' />
                <span>Invoicing</span>
                <ChevronRightIcon className='h-7' />
            </Link>
        </aside>
    )
}

export default Sidebar