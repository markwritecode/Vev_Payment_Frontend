import { Modal } from 'antd'
import { useInvoice } from '../../contexts/invoice'

const PreviewInvoiceModal = ({ showPreview, handleClosePreview }) => {

  const [invoice] = useInvoice()
  console.log(invoice)

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
  return (
    <div>PreviewInvoice</div>
  )
}