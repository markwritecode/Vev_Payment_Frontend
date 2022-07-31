import { Form, Modal, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ArrowRight } from 'iconsax-react'
import CustomInput from '../../components/General/CustomInput'
import { usePoster } from '../../hooks/poster'
import { endpoints } from '../../utils/helperVariables'
import CustomTextarea from '../General/CustomTextarea'

const CreateTransaction = ({ visible, onClose }) => {

    const { mutate, isLoading } = usePoster(endpoints.CREATE_TRANSACTION, 'Transaction created successfully', [], onClose)
    const [createTransaction] = Form.useForm()

    const submitTransaction = () => {
        createTransaction.validateFields().then(values => {
            mutate(values)
        })
    }

    return (
        <Modal
            centered
            visible={visible}
            onCancel={onClose}
            footer={null}
            closable={false}>
            <Form form={createTransaction}>
                <CustomInput item={{ name: 'amount', label: 'Amount', type: 'number', required: true }} />
                <CustomTextarea name='description' label='Description' valMessage='Field cannot be empty' />
                <button onClick={submitTransaction} className='bg-[#F3724F] rounded text-white px-[32px] py-[16px] font-semibold text-base w-fit mx-auto block'>
                    {
                        isLoading ?
                            <div className='flex items-center gap-2'>
                                <span>Loading</span>
                                <Spin indicator={
                                    <LoadingOutlined
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 24,
                                        }}
                                        spin
                                    />} />
                            </div> :
                            <div className='flex items-center gap-2'>
                                <span>Continue</span>
                                <ArrowRight />
                            </div>
                    }
                </button>
            </Form>
        </Modal>
    )
}

export default CreateTransaction