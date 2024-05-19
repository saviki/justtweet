import Image from 'react-bootstrap/Image';
import cover from '../assets/cover.jpg'

function ProfileCover(){
    return <Image src={cover} height={300} className='w-100'/>
}

export default ProfileCover