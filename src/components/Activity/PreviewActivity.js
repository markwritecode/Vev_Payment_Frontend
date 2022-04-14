import { Modal } from 'antd'
import { formatDateAndTime2 } from '../../utils/helperFunctions'

const PreviewActivity = ({ visible, handleCloseModal, activity, type }) => {
    return (
        <Modal
            visible={visible}
            closable={false}
            onCancel={handleCloseModal}
            footer={null}
        >
            <section>
                <h4 className='text-lg uppercase text-gray-700'>{type} preview</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    <div>
                        <h3 className='text-xs font-semibold'>INVOICE NUMBER</h3>
                        <h4 className='text-gray-400 capitalize'>{activity?.ref_number}</h4>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold'>DESCRIPTION</h3>
                        <h4 className='text-gray-400 capitalize'>{activity?.description}</h4>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold'>DATE CREATED</h3>
                        <h4 className='text-gray-400 capitalize'>{formatDateAndTime2(activity?.created_at)}</h4>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold'>ADDITIONAL NOTE</h3>
                        <h4 className='text-gray-400 capitalize'>{activity?.additional_note}</h4>
                    </div>
                </div>
                <div className='mt-4'>
                    <button onClick={handleCloseModal} className='text-white bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 font-semibold px-3 py-2 rounded-lg'>CLOSE</button>
                </div>
            </section>
        </Modal>
    )
}

export default PreviewActivity