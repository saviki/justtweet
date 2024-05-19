import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProfilePic from '../assets/profile_pic.webp'
import { useState } from 'react';

function NewTweet(props){
    const [text, setText] = useState()
    const data = new FormData()
    data.append('name', text)
    data.append('author', 'John')
    data.append('date', '2024/05/16')

    const postTweet = () => {
        fetch('/tweets', {
        method: 'POST',
        body: data
        })
        .then(() => props.onChange())
        .catch(() => false)
    
    }

    return <div className="col-12 mt-4">
        <div className='d-flex mb-4'>
            <div ><Image src={ProfilePic} alt="avatar" className="rounded-circle" style={{ width: '50px' }} fluid /></div>
            <div className='col-10 mx-2'>
                <Form.Control as="textarea" value={text} onChange={(e) =>setText(e.target.value)} className='mb-2'/>   
                <Button variant="primary rounded-pill" onClick={()=> postTweet()}>Tweet</Button>
            </div>
        </div>
    </div>
}

export default NewTweet