import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import ProfilePic from '../assets/profile_pic.webp'

function TweetCard(props){
    const delTweet = () => {
        console.log(props.id)
        fetch('/tweets/' + props.id, {
        method: 'DELETE',
        })
        .then(() => props.onDelete())
        .catch(() => false)
    }

    return <div className='d-flex mb-4'>
    <div><Image src={ProfilePic} alt="avatar" className="rounded-circle" style={{ width: '50px' }} fluid /></div>
    <div>
        <div className='d-flex'>
            <h4 className='mx-2'>{props.name}</h4>
            <h5 className='mx-2'>@{props.username} ~ {props.date}</h5>
            <Button variant="primary" onClick={()=> delTweet()}>delete</Button>
        </div>
        <div><p>{props.msg}</p></div>
        <div className="d-flex justify-content-left p-2 col-md-4">
            <div className="px-3">
            <p className="mb-0">51</p>
            </div>
            <div className="px-3">
            <p className="mb-0">420</p>
            </div>
            <div className="px-3">
            <p className="mb-0">583</p>
            </div>
            <div className="px-3">
            <p className="mb-0">241</p>
            </div>
        </div>
    </div>
</div>
}

export default TweetCard