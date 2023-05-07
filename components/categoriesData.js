import { BsAndroid2 } from 'react-icons/bs'
import { BsApple } from 'react-icons/bs'
import { FcDataRecovery } from 'react-icons/fc'
import { BiTransferAlt } from 'react-icons/bi'
import { IoMdDesktop } from 'react-icons/io'
import { MdLaptopMac } from 'react-icons/md'
const data = [ 
    {
        id:1,
        title:'Apple iPhone',
        image: <BsApple />,
        discription: 'Expert iPhone repair. Skilled technicians can fix screen, battery, charging port, and software issues. Fast turnaround time.',
    },
    {
        id:2,
        title:'Andriod Phone',
        image:  <BsAndroid2 />,
        discription: 'Expert repair for Android phones. Skilled technicians can fix screen, battery, charging port, and software issues. Fast turnaround time.',
    },
    {
        id:3,
        title:'Data Recovery',
        image: <FcDataRecovery />,
        discription: 'Expert data recovery. Restore lost, deleted, or damaged files from hard drives, phones, and other devices. Confidential and reliable service.',
    },
    {
        id:4,
        title:'Data Transfer',
        image: <BiTransferAlt />,
        discription: 'Effortless data transfer. Move contacts, photos, messages, and files between devices quickly and securely. Expert assistance available.',
    },
    {
        id:5,
        title:'Windows Desktop-Laptop',
        image: <IoMdDesktop />,
        discription: 'Expert data recovery for Windows desktop and laptop repair. Restore lost, deleted, or damaged files. Confidential and reliable service.',
    },
    {
        id:6,
        title:'Macbook',
        image: <MdLaptopMac />,
        discription: 'Expert MacBook repair. Skilled technicians can diagnose and fix hardware and software issues quickly and reliably.',
    }
]

export default data