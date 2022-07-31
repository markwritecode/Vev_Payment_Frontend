import { Form } from 'antd'

const CustomTextarea = ({ value, name, label, placeholder, valMessage }) => {
    return (
        <Form.Item name={name} rules={[{ required: true, message: valMessage || 'Please enter a value' }]}>
            <div className='space-y-3'>
                <label className='block text-xs capitalize'>{label}</label>
                <textarea
                    rows={8}
                    defaultValue={value}
                    placeholder={placeholder}
                    className='w-full p-2 text-black border-opacity-30 border-[1px] border-black rounded-md focus:outline-none focus:border-[1px] focus:border-opacity-30 focus:border-black'
                />
            </div>
        </Form.Item>
    )
}

export default CustomTextarea