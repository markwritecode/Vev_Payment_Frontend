import { XIcon } from '@heroicons/react/solid'
import { PreviewInvoice } from './PreviewInvoice'

const CompleteInvoice = ({ handleCloseDrawer }) => {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h4 className='text-lg text-gray-500 font-medium'>Complete invoice</h4>
        <XIcon onClick={handleCloseDrawer} className='h-5 w-5 text-gray-500 font-semibold cursor-pointer' />
      </div>
      {/* <p className='italic text-lg'>To complete the process, click the send button below</p> */}
      <PreviewInvoice />
    </div>
  )
}

export default CompleteInvoice