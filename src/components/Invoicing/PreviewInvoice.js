import { Modal } from 'antd'
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
      <InvoiceItemsList preview={true} />
    </Modal>
  )
}

export default PreviewInvoiceModal

export const PreviewInvoice = () => {
  return (
    <div>Preview Invoice</div>
  )
}