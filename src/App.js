import './App.css';
import NavBar from './components/navbar';
import NewTweet from './components/newtweet';
import ProfileCover from './components/profilecover';
import ProfileInfo from './components/profileinfo';
import ProfileStats from './components/profilestats';
import RightPanel from './components/rightpanel';
import TweetCard from './components/tweetcard';

import { useEffect, useState } from 'react';

function App() {

  const [tweets, setTweets] = useState([])

  const getTweets = () =>{
    fetch('http://localhost:8080/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then(async res => res.json())
    .then(json => setTweets(json.tweets))
  }

  useEffect(()=>{
    getTweets()
  }, [])
  
  return (
    <div>
      <NavBar></NavBar>
      <ProfileCover></ProfileCover>
      <ProfileStats tweets={51} followers={461} following={95} likes={64}></ProfileStats>
      <div className='d-flex col-md-12' style={{ backgroundColor: '#efefef' }}>
        <div className='col-md-2'></div>
        <ProfileInfo name='John Vann' username='john' address='Perth, WA' date='November 20'></ProfileInfo>
        <div className='col-md-4'>
          <NewTweet onChange={()=> getTweets()}></NewTweet>
          {tweets.map(tweet => <TweetCard name={tweet.author} username='john' date={tweet.date} msg={tweet.name} id={tweet._id} onDelete={()=> getTweets()}></TweetCard>)}
        </div>
        <RightPanel></RightPanel>
        <div className='col-md-2'></div>
      </div>
    </div>
  );
}

export default App;
