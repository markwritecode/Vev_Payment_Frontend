import { XIcon } from '@heroicons/react/solid'
import { Form, Input, Select } from 'antd'
import { useQueryEmail } from '../../hooks/invoice/useInvoice'
import InvoiceItemsList from './InvoiceItemsList'

const InvoiceForm = ({ invoiceForm, handleCloseDrawer, updateData }) => {

    const { mutate, isLoading, data } = useQueryEmail()

    const handleSearch = value => {
        if (value.length >= 4) {
            mutate({ 'email_name': value })
        }
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <h4 className='text-lg text-gray-500 font-medium'>
                    {updateData ? `Reference number: ${updateData.ref_number}` : 'Create new invoice'}
                </h4>
                <XIcon onClick={handleCloseDrawer} className='h-5 w-5 text-gray-500 font-semibold cursor-pointer' />
            </div>
            <Form
                layout='vertical'
                form={invoiceForm}
                autoComplete="off"
                className='space-y-6'
                initialValues={{
                    email: updateData?.recipient,
                    description: updateData?.description,
                    additional_note: updateData?.additional_note
                }}
            >
                {
                    !updateData &&
                    <Form.Item
                        label="Recipient Email"
                        name="email"
                        rules={[{ required: true, message: 'Please select an email!' }]}
                    >
                        <Select
                            showSearch
                            placeholder='Select Recipient'
                            size='large'
                            allowClear
                            showArrow={false}
                            loading={isLoading}
                            notFoundContent={isLoading ? 'Loading emails...' : data?.data?.email_name.length < 1 ? 'Email does not exist' : 'Enter atleast four characters to search'}
                            onSearch={handleSearch}
                            style={{ width: '100%' }}
                        >
                            {data?.data?.email_name.map(item => {
                                return (
                                    <Select.Option key={item.id} value={item.email}>
                                        {item.email}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                }

                <Form.Item
                    label="Project/Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input size='large' />
                </Form.Item>

                <Form.Item
                    label="Additional Notes"
                    name="additional_note"
                >
                    <Input.TextArea size='large' />
                </Form.Item>

                <InvoiceItemsList />

            </Form>
        </div>
    )
}

export default InvoiceForm