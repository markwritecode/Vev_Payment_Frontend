import { Avatar } from 'antd'
import { SearchNormal1 } from 'iconsax-react'
import { useFetcher } from '../../hooks/fetcher'
import { useFetchLocalStorageData } from '../../hooks/utilities/useFetchLocalStorage'
import { endpoints } from '../../utils/helperVariables'

const Header = ({ expanded, toggleExpansion }) => {

    const { user } = useFetchLocalStorageData()
    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)

    const list = data?.beneficiaries

    return (
        <header className='w-full pl-5 space-x-10 sticky top-0 bg-[#E6E6E6] hidden lg:block lg:border-b-8 border-white'>
            <div className='flex items-center justify-between w-full py-4'>

                <div>
                    {
                        list?.length > 0 &&
                        <div className='relative text-gray-400 focus-within:text-gray-400 w-96'>
                            <span className='absolute inset-y-0 md:left-5 flex items-center'>
                                <SearchNormal1 className='h-4 w-4' />
                            </span>
                            <input className='w-full p-3 bg-white rounded-md pl-8 md:pl-12 focus:outline-none focus:text-gray-900' placeholder='Search for beneficiary' />
                        </div>
                    }
                </div>

                <div className='flex items-center space-x-4 pr-5 cursor-pointer'>
                    <Avatar size={50} src={`https://i.pravatar.cc/300?img=${user?.id}`} />
                    <div className='text-xs text-gray-500 font-regular'>{user?.email}</div>
                </div>
            </div>
        </header>
    )
}

export default Header