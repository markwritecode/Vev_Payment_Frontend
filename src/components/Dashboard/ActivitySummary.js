import { AiOutlineCalendar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

const ActivitySummary = () => {
  return (
    <div className='p-5 space-y-8'>
        <div className='flex items-center justify-between'>
            <h4 className='opacity-50 text-xs'>Activity Graph</h4>
            <h5 className='text-sm font-semibold'>$186k</h5>
        </div>
        <div></div>
        <div className='space-y-8'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#eceafd] p-2 rounded-lg'>
                        <AiOutlineCalendar className='h-5 w-5 text-[#6e52e3]' />
                    </div>
                    <h4 className='opacity-50'>Monthly Plan</h4>
                </div>
                <BiChevronRight className='h-5 w-5' />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#eceafd] p-2 rounded-lg'>
                        <FiSettings className='h-5 w-5 text-[#6e52e3]' />
                    </div>
                    <h4 className='opacity-50'>Settings</h4>
                </div>
                <BiChevronRight className='h-5 w-5' />
            </div>
        </div>
    </div>
  )
}

export default ActivitySummary