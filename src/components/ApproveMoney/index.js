import { Dropdown, Menu } from 'antd'
import { BsThreeDotsVertical } from 'react-icons/bs'

const index = ({ data }) => {

    const menu = (
        <Menu
            items={[
                { label: 'Approve', key: 'approve' },
                { label: 'Reject', key: 'reject' }
            ]}
        />
    )

    return (
        <div className='overflow-x-auto'>
            <table className='w-full whitespace-nowrap'>
                <thead>
                    <tr className='h-[52px] text-black opacity-50 text-base'>
                        <td>Business</td>
                        <td className='pl-24'>Date</td>
                        <td className='pl-5'>Payment Type</td>
                        <td className='pl-5'>Status</td>
                        <td className='pl-5'>Payment Amount</td>
                        <td className='pl-4'></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => {
                            return (
                                <tr tabIndex={index} key={index} className='focus:outline-none h-[83px] border-y border-black border-opacity-20 text-base font-semibold text-black text-opacity-60'>
                                    <td className=''>
                                        <div className='flex items-center gap-3'>
                                            <img alt='vev' className='h-12 w-12 rounded' src={item.img} />
                                            <div>
                                                <p>{item.name}</p>
                                                <p className='text-sm font-normal'>{item.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='pl-24'>{item.date}</td>
                                    <td className='pl-5'>{item.payment}</td>
                                    <td className='pl-5'>
                                        <button className={`border rounded-[10px] p-[5px] text-xs font-medium capitalize ${item.status === 'pending' ? 'text-[#FC8906] border-[#FC8906]' : item.status === 'paid' ? 'text-[#0A9807] border-[#0A9807]' : 'text-[#FF0D0D] border-[#FF0D0D]'}`}>{item.status}</button>
                                    </td>
                                    <td className='pl-5'>{item.amount}</td>
                                    <td className='pl-4'>
                                        <Dropdown overlay={menu} trigger={['click']}>
                                            <BsThreeDotsVertical className='w-5 h-5 cursor-pointer' />
                                        </Dropdown>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default index