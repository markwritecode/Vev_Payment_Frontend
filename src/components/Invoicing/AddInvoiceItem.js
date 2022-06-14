import { Button, Form, Input, InputNumber, Modal } from 'antd'
import { useInvoice } from '../../contexts/invoice'

const AddInvoiceItem = ({ visible, handleCloseModal, modalData }) => {

    const isEdit = Object.keys(modalData).length > 0

    const [, setInvoice] = useInvoice()

    const [itemsForm] = Form.useForm()

    const handleFinish = () => {
        itemsForm.validateFields().then(values => {
            if (isEdit) {
                setInvoice(prev => {
                    return {
                        ...prev, items: prev.items.map(item => {
                            if (item.id === modalData.id) {
                                return { ...item, ...values, 'item_total': values.item_quantity * values.item_price }
                            } else {
                                return item
                            }
                        })
                    }
                })
            } else {
                setInvoice(prev => {
                    return { ...prev, items: [...prev.items, { ...values, "item_total": values.item_quantity * values.item_price, id: Math.random() }] }
                })
            }
        }).then(() => handleCloseModal())
    }

    return (
        <Modal
            visible={visible}
            onCancel={handleCloseModal}
            closable={false}
            footer={null}
        >
            <Form
                layout='vertical'
                onFinish={handleFinish}
                form={itemsForm}
                autoComplete="off"
                className='space-y-1'
                initialValues={{ ...modalData }}
            >
                <Form.Item
                    label="Item"
                    name="item_name"
                    rules={[{ required: true, message: 'Field cannot be empty' }]}
                >
                    <Input />
                </Form.Item>
                <div className='grid grid-cols-2 gap-2'>
                    <Form.Item
                        label="Quantity"
                        name="item_quantity"
                        rules={[{ required: true, message: 'Field cannot be empty' }]}
                    >
                        <InputNumber className='w-full' />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="item_price"
                        rules={[{ required: true, message: 'Field cannot be empty' }]}
                    >
                        <InputNumber className='w-full' />
                    </Form.Item>
                </div>
                <div className='flex items-center justify-between'>
                    <Button htmlType='submit' type='primary' className='bg-[#1EAAE7] text-sm text-white px-2 py-1 space-x-2 rounded-sm'>ADD ITEM</Button>
                    {/* <p>Total: 0</p> */}
                </div>

            </Form>
        </Modal>
    )
}

export default AddInvoiceItem