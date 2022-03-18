import { DatePicker, Form, Input } from 'antd'
import { dateFormat } from '../../utils/helperVariables'
import InvoiceItemsList from './InvoiceItemsList'

const InvoiceForm = ({ invoiceForm }) => {
    return (
        <Form
            layout='vertical'
            form={invoiceForm}
            autoComplete="off"
            className='space-y-6'
        >
            <Form.Item
                label="Recipient Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Input a valid email' }]}
            >
                <Input size='large' />
            </Form.Item>

            <Form.Item
                label="Project/Description"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input size='large' />
            </Form.Item>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Form.Item
                    label="Issued on"
                    name="issued_on"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <DatePicker size='large' className='w-full' format={dateFormat} />
                </Form.Item>

                <Form.Item
                    label="Due on"
                    name="due_on"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <DatePicker size='large' className='w-full' format={dateFormat} />
                </Form.Item>
            </div>

            <InvoiceItemsList />

            <Form.Item
                label="Additional Notes"
                name="additional_notes"
            >
                <Input.TextArea size='large' />
            </Form.Item>

        </Form>
    )
}

export default InvoiceForm