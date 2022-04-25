import { BiMessageSquareDots } from "react-icons/bi"
import { BsCamera2, BsHouse } from "react-icons/bs"
import { FaBitcoin } from "react-icons/fa"
import { IoBag, IoPricetags } from "react-icons/io5"
import { RiGamepadFill } from "react-icons/ri"

export const dummy_data = [
    { users: [{ avatar: '4', name: 'Johan Abraham' }], title: 'Discuss for research new fitured on mobile Skiny apps', from: 'Master', id: '45847', actions: ['issue', 'research'], time: 'Feb 7, 09:25' },
    {
        users:
            [
                { avatar: '8', name: 'Devon' },
                { avatar: '21', name: 'Benard' },
                { avatar: '15', name: 'Sylvia' }
            ], title: 'Fixing problem from Mobile Dev for new version 1.2.4', from: 'Master', id: '67342', actions: ['solve'], time: 'Feb 7, 08:12'
    },
    { users: [{ avatar: '10', name: 'Sophia Lillis' }], title: 'Invite Miriiam to join Task Onboarding Copy', from: 'UX Writer Team', id: '', actions: [], time: 'Feb 7, 08:05' },
   
]

export const dummy_dashboard = [
    { name: 'YouTube Music', url: 'https://img.icons8.com/color/344/youtube-music.png', price: '-$5', date: '07.09.2019' },
    { name: 'Netflix', url: 'https://img.icons8.com/color/452/netflix-desktop-app--v1.png', price: '-$12', date: '05.09.2019' },
    { name: 'DropBox', url: 'https://img.icons8.com/external-justicon-flat-justicon/344/external-dropbox-social-media-justicon-flat-justicon.png', price: '-$32', date: '29.09.2019' }
]

export const dummy_dashboard2 = [
    { name: 'Victa Wille', status: 'danger', price: '-$120', time: '8:24 pm' },
    { name: 'Vladimir Gruev', status: 'danger', price: '-$50', time: '3:01 pm' },
    { name: 'Artem Kovalenko', status: 'status', price: '$24', time: '11:55 am' }
]

export const dummy_transac = [
    { name: 'Reksadana', icon: <BiMessageSquareDots className='h-7 w-7 opacity-50' />, price: '$5,780,00', subtitle: 'Pluang' },
    { name: 'Crypto Ethereum', icon: <FaBitcoin className='h-7 w-7 opacity-50' />, price: '$16,438,000', subtitle: 'Tokocrypto' },
    { name: 'House Property', icon: <BsHouse className='h-7 w-7 opacity-50' />, price: '$8,187,000', subtitle: 'Ciputra Corporation' }
]

export const dummy_transac2 = [
    { name: 'Gaming Items', icon: <RiGamepadFill className='h-7 w-7' />, price: '$-60,000', subtitle: 'Steam' },
    { name: 'Uniqlo T-shirts', icon: <IoBag className='h-7 w-7' />, price: '-$145,000', subtitle: 'Uniqlo Website' },
    { name: 'Online Courses', icon: <IoPricetags className='h-7 w-7' />, price: '-$75,000', subtitle: 'Udemy' },
    { name: 'Assets Photography', icon: <BsCamera2 className='h-7 w-7' />, price: '-$30,000', subtitle: 'Unsplash' }
]