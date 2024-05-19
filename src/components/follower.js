import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import ProfilePic from '../assets/profile_pic.webp'

function Follower(props){
    return <div className='d-flex mb-4'>
        <div><Image src={ProfilePic} alt="avatar" className="rounded-circle" style={{ width: '50px' }} fluid /></div>
        <div>
            <div className='d-flex'><h4>{props.name}</h4><h5>@{props.username}</h5></div>
            <Button variant="primary rounded-pill">Follow</Button>
        </div>
    </div>
}

export default Follower