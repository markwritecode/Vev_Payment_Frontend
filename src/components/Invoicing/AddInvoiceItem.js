import { Button, Form, Input, InputNumber, Modal } from 'antd'
import { useInvoice } from '../../contexts/invoice'

const AddInvoiceItem = ({ visible, handleCloseModal }) => {

    const [, setInvoice] = useInvoice()

    const [itemsForm] = Form.useForm()

    const handleFinish = values => {
        setInvoice(prev => {
            return { ...prev, items: [...prev.items, { ...values, "item_total": values.item_quantity * values.item_price, id: Math.random() }] }
        })
        handleCloseModal(itemsForm.resetFields())
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
                    <Button htmlType='submit' type='primary' className='bg-[#1EAAE7] text-sm'>ADD ITEM</Button>
                    {/* <p>Total: 0</p> */}
                </div>

            </Form>
        </Modal>
    )
}

export default AddInvoiceItem