import { Modal } from 'antd'
import { useInvoice } from '../../contexts/invoice'
import InvoiceItemsList from './InvoiceItemsList'

const PreviewInvoiceModal = ({ showPreview, handleClosePreview }) => {
  return (
    <Modal
      visible={showPreview}
      closable={false}
      onCancel={handleClosePreview}
      footer={null}
    >
      <PreviewInvoice />
    </Modal>
  )
}

export default PreviewInvoiceModal

export const PreviewInvoice = () => {
  const [invoice] = useInvoice()

  const totalAmount = invoice.items.reduce((curr, value) => {
    return curr + value.item_total
  }, 0)

  return (
    <div className='space-y-6'>
      <div>
        <h4 className='text-gray-400'>Invoice for</h4>
        <h5>{invoice.email}</h5>
        <p className='text-gray-400'>{invoice.description}</p>
      </div>
      <InvoiceItemsList preview />
      <div className='flex items-center justify-between'>
        <div>
          {invoice.additional_notes && <p className='text-gray-400'>{invoice.additional_notes}</p>}
        </div>
        <div>
          <p className='text-gray-400'>Total Amount: <span className='text-black'>${totalAmount}</span></p>
        </div>
      </div>
    </div>
  )
}