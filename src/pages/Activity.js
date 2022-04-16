import Layout from '../components/General/Layout'
import IndividualActivity from '../components/Activity/IndividualActivity'
import { HiDotsVertical } from 'react-icons/hi'
import { RiRefreshLine } from 'react-icons/ri'
import { usePullActivity } from '../hooks/activity/useActivity'
import Loading from '../components/General/Loading'
import { useState } from 'react'
import Checkout from '../components/Activity/Checkout'

const Activity = () => {

    const [search, setSearch] = useState('')
    const [step, setStep] = useState('default')

    const handleSearch = e => setSearch(e.target.value.toLowerCase())

    const { pulledActivity, pullActivityLoading, refetch } = usePullActivity()

    if (pullActivityLoading) return <Loading />

    return (
        <Layout>
            <div className='bg-white h-full w-full px-10'>
                <div className='border-b-[1px] lg:flex items-center gap-5 w-full py-5'>
                    <h3 className='font-medium text-lg'>Activity</h3>
                    <div className="relative text-gray-400 focus-within:text-gray-400 w-full">
                        <span className="absolute inset-y-0 left-5 flex items-center">
                            <button className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            onChange={handleSearch}
                            type="search"
                            className="w-full px-3 text-white bg-white rounded-md pl-12 focus:outline-none focus:text-gray-900"
                            placeholder="Search"
                        />
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <div className='bg-[#5253aac0] px-3 py-1 rounded-md text-white'>+</div>
                        <RiRefreshLine
                            onClick={refetch}
                            className='h-7 w-7 ml-3 text-gray-400 cursor-pointer' />
                        <HiDotsVertical className='h-7 w-7 text-gray-400' />
                    </div>
                </div>
                <div className='py-10 overflow-y-auto'>
                    {/* <div className='flex items-center justify-end gap-4'>
                        <div className='bg-[#5253aac0] px-3 py-1 rounded-md text-white'>+</div>
                        <RiRefreshLine
                            onClick={refetch}
                            className='h-7 w-7 ml-3 text-gray-400 cursor-pointer' />
                        <HiDotsVertical className='h-7 w-7 text-gray-400' />
                    </div> */}
                    <section className='space-y-6'>
                        {
                            step === 'default' ?
                                <div>
                                    {/* <h3 className='font-medium'>Today</h3> */}
                                    {pulledActivity
                                        ?.filter(activity => {
                                            return activity.type.toLowerCase().includes(search) || activity.owner.toLowerCase().includes(search) || activity.message.toLowerCase().includes(search)
                                        })
                                        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                                        ?.map(activity => <IndividualActivity activity={activity} key={activity.id} setStep={setStep} />)}
                                </div> : <Checkout />
                        }
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Activity