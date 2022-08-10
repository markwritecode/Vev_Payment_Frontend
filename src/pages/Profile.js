import { Form, Upload } from 'antd'
import { useState } from 'react'
import { useFetchLocalStorageData } from '../hooks/utilities/useFetchLocalStorage'
import { useFetcher } from '../hooks/fetcher'
import { endpoints } from '../utils/helperVariables'
import Loading from '../components/General/Loading'
import { usePoster } from '../hooks/poster'
import CustomInput from '../components/General/CustomInput'

const Profile = () => {

    const { user } = useFetchLocalStorageData()
    const [profileForm] = Form.useForm()
    const [fileList, setFileList] = useState([{
        url: `https://i.pravatar.cc/300?img=${user.id}`,
        uid: '1',
        name: 'image.png',
        status: 'done'
    }])
    const { data, isLoading } = useFetcher(endpoints.USER_PROFILE)
    const { mutate, isLoading: isLoading2 } = usePoster(endpoints.USER_UPDATE)
    const profile = data?.profile[0]

    if (isLoading) return <Loading />

    const props = {
        onRemove: () => {
            setFileList([])
        },
        beforeUpload: file => {
            setFileList(() => {
                return ([file])
            })
            return false
        },
        fileList,
        maxCount: 1,
        listType: 'picture-card'
    }

    const submitProfileEdit = () => {
        profileForm.validateFields().then(values => {
            const payload = {
                address: values.address,
                phone_number: values.phone_number,
                country: values.country,
                state: values.state
            }
            mutate(payload)
        })
    }

    return (
        <div className='lg:px-[50px] lg:py-[80px]'>
            <h3 className='font-bold text-4xl opacity-50'>Settings</h3>
            <div className='mt-8 text-center'>
                <Upload {...props}>
                    <div className='text-base opacity-50'>
                        {/* <IoPencilSharp className='text-white h-4 w-4' /> */}
                        Edit
                    </div>
                </Upload>
            </div>
            <Form
                className='mt-10'
                form={profileForm}
                initialValues={{
                    phone_number: profile?.phone_number,
                    address: profile?.address,
                    state: profile?.state,
                    country: profile?.country
                }}
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-9'>
                    <CustomInput item={{ name: 'first_name', label: 'First Name:', disabled: true, value: profile?.first_name }} />
                    <CustomInput item={{ name: 'last_name', label: 'Last Name:', disabled: true, value: profile?.last_name }} />
                    <CustomInput item={{ name: 'email', label: 'Email:', disabled: true, value: profile?.email || '-' }} />
                    <CustomInput item={{ name: 'country', label: 'Country', required: true, value: 'Nigeria' }} />
                    <CustomInput item={{ name: 'address', label: 'Address', required: true, value: profile?.address || '-' }} />
                    <CustomInput item={{ name: 'phone_number', label: 'Contacts Number', required: true, value: profile?.phone_number || '-' }} />
                </div>
                <button onClick={submitProfileEdit} className='bg-[#F3724F] px-3 py-1 rounded-[5px] text-white mt-12'>
                    {isLoading2 ? 'Saving...' : 'Save Details'}
                </button>
            </Form>
        </div>
    )
}

export default Profile