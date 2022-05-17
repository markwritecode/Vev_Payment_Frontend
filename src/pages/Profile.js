import { Form, Upload } from 'antd'
import { FaUpload } from 'react-icons/fa'
import CustomInput from '../components/General/CustomInput'
import { useFetchLocalStorageData } from '../hooks/utilities/useFetchLocalStorage'

const Profile = () => {

    const { user } = useFetchLocalStorageData()
    const [profileForm] = Form.useForm()

    const onChange = (newFile) => {

        const data = newFile.file

        const payload = new FormData()

        payload.append('pic', data)
    }

    return (
        <div className='bg-white h-full w-full p-5 md:px-10 overflow-auto'>
            <div className='w-1/2'>
                <h3>Edit Profile</h3>
                <div className='mt-8'>
                    {/* <img className='rounded-full h-28 w-28 object-cover object-center mx-auto' src={`https://i.pravatar.cc/300?img=${user.id}`} alt='' /> */}
                    <Upload
                        listType='picture-card'
                        fileList={[{
                            url: `https://i.pravatar.cc/300?img=${user.id}`,
                            uid: '1',
                            name: 'image.png',
                            status: 'done'
                        }]}
                        // accept={FILE_TYPES.img}
                        onChange={onChange}
                        maxCount={1}
                        beforeUpload={() => {
                            return false
                        }}
                    >
                        Edit
                    </Upload>
                </div>
                <Form
                    className='mt-8'
                    form={profileForm}
                    initialValues={{
                    }}>
                    <div className='grid grid-cols-2 gap-8'>
                        <CustomInput item={{ name: 'first_name', label: 'First Name', disabled: true, value: 'Timilehin' }} />
                        <CustomInput item={{ name: 'last_name', label: 'Last Name', disabled: true, value: 'Timmy' }} />
                    </div>
                    <CustomInput item={{ name: 'email', label: 'Email', disabled: true, value: 'timilehin@yahoo.com' }} />
                    <CustomInput item={{ name: 'contacts_number', label: 'Contacts Number', disabled: true, value: '234-900-232' }} />
                    <CustomInput item={{ name: 'address', label: 'Address', disabled: true, value: 'Garki 7, behind Ekiti.' }} />
                    <div className='grid grid-cols-2 gap-8'>
                        <CustomInput item={{ name: 'city', label: 'City', disabled: true, value: 'Abuja' }} />
                        <CustomInput item={{ name: 'state', label: 'State', disabled: true, value: 'FCT' }} />
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <CustomInput item={{ name: 'zip', label: 'Zip Code', disabled: true, value: '90001' }} />
                        <CustomInput item={{ name: 'country', label: 'Country', disabled: true, value: 'Nigeria' }} />
                    </div>
                    <CustomInput item={{ name: 'password', label: 'Password', disabled: true, value: '********' }} />
                    <button className='bg-blue-600 px-5 py-1 rounded-md text-white'>Save</button>
                </Form>
            </div>
        </div>
    )
}

export default Profile