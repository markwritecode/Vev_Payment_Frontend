import { Form } from 'antd'

const CustomInput = ({ item }) => {
    return (
        <Form.Item
            name={item.name}
            rules={[
                ...item.required ? [{ required: true, message: 'Field cannot be empty' }] : [],
                ...item.type ? [{ type: item.type, message: 'Enter a valid email' }] : []
            ]}>
            <div className='space-y-3'>
                <label className='block text-xs capitalize'>{item.label}</label>
                <input
                    disabled={item.disabled}
                    defaultValue={item?.value}
                    type={item?.type || 'text'}
                    className='w-full p-2 text-gray-700 border-[1px] border-blue-100 rounded-md focus:outline-none focus:border-[1px] focus:border-opacity-30 focus:border-blue-900' />
            </div>
        </Form.Item>
    )
}

export default CustomInput