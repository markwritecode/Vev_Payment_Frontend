import { XIcon } from '@heroicons/react/solid'
import { DatePicker, Form, Input } from 'antd'
import { dateFormat } from '../../utils/helperVariables'
import InvoiceItemsList from './InvoiceItemsList'

const InvoiceForm = ({ invoiceForm, handleCloseDrawer }) => {
    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <h4 className='text-lg text-gray-500 font-medium'>Create new invoice</h4>
                <XIcon onClick={handleCloseDrawer} className='h-5 w-5 text-gray-500 font-semibold cursor-pointer' />
            </div>
            <div className='flex items-center justify-between'>
                <h5 className='text-xl font-medium text-gray-500'>#A78KMFS</h5>
                <p className='text-[#1EAAE7]'>COPY PAYMENT LINK</p>
            </div>
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

                <Form.Item
                    label="Additional Notes"
                    name="additional_notes"
                >
                    <Input.TextArea size='large' />
                </Form.Item>

                <InvoiceItemsList />

            </Form>
        </div>
    )
}

export default InvoiceForm