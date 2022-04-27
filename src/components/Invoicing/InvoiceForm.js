import { IoClose } from 'react-icons/io5'
import { Avatar, DatePicker, Form, Input, Select } from 'antd'
import InvoiceItemsList from './InvoiceItemsList'
import { usePoster } from '../../hooks/poster'
import { endpoints } from '../../utils/helperVariables'

const InvoiceForm = ({ invoiceForm, handleCloseDrawer, updateData }) => {

    const { mutate, isLoading, data } = usePoster(endpoints.USER_SHOW)

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
                <IoClose onClick={handleCloseDrawer} className='h-5 w-5 text-gray-500 font-semibold cursor-pointer' />
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
                    <div className='bg-blue-100 p-2 rounded-md border-[1px] border-gray-200'>
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
                                {data?.data?.email_name.map((item, index) => {
                                    const i = index > 9 ? `${index}`[1] : index
                                    return (
                                        <Select.Option key={item.id} value={item.email}>
                                            <Avatar
                                                size={'small'}
                                                src={`https://i.pravatar.cc/600?img=${item?.id}`}
                                            // style={{
                                            //     backgroundColor: colorList[i],
                                            //     opacity: 0.6,
                                            //     verticalAlign: 'middle',
                                            // }} 
                                            />
                                            {/* // className='uppercase'> */}
                                            {/* {item} */}
                                            {/* </Avatar> */}
                                            <span className='ml-3'>{item.email}</span>
                                        </Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>
                    </div>
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

                <div className='lg:grid lg:grid-cols-2 gap-2'>
                    <Form.Item
                        label="Issued on"
                        name="issued_on"
                        rules={[{ required: true, message: 'Please select date!' }]}
                    >
                        <DatePicker size='large' className='w-full' />
                    </Form.Item>
                    <Form.Item
                        label="Due on"
                        name="due_on"
                        rules={[{ required: true, message: 'Please select date!' }]}
                    >
                        <DatePicker size='large' className='w-full' />
                    </Form.Item>
                </div>

                <InvoiceItemsList />

            </Form>
        </div>
    )
}

export default InvoiceForm