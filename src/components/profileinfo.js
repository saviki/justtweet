
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'; 
import ProfilePic from '../assets/profile_pic.webp'

function ProfileInfo(props){
    return <div className='col-md-2'>
        <Image src={ProfilePic} alt="avatar" className="rounded-circle mb-2" style={{ width: '250px' }} fluid />
        <h2 className="mb-1">{props.name}</h2>
        <p className="text-muted mb-4">@{props.username}</p>
        <p className="mb-4">twiter.com/{props.username}</p>
        <p className="mb-4">{props.address}</p>
        <p className="mb-4">Joined {props.date}</p>
        <Button className='primary rounded-pill col-12'>Follow</Button>
    </div>
}

export default ProfileInfo