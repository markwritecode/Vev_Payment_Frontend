import { Form } from 'antd'

const CustomInput = ({ item }) => {
    return (
        <Form.Item
            name={item.name}
            rules={[
                ...item.required ? [{ required: true, message: 'Field cannot be empty' }] : [],
                ...item.type === 'email' ? [{ type: item.type, message: 'Enter a valid email' }] : []
            ]}>
            <div className='space-y-1'>
                <label className='block text-sm capitalize font-medium text-black text-opacity-70'>{item.label}</label>
                <input
                    disabled={item.disabled}
                    defaultValue={item?.value}
                    type={item?.type || 'text'}
                    className='w-full p-2 text-black border-opacity-30 border-[1px] border-black rounded-md focus:outline-none focus:border-[1px] focus:border-opacity-30 focus:border-black' />
            </div>
        </Form.Item>
    )
}

export default CustomInput