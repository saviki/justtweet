function ProfileStats(props){
    return <div className="d-flex col-md-12">
        <div className="col-md-4"></div>
        <div className="d-flex justify-content-left p-2 col-md-4">
            <div className="px-3">
            <p className="small text-muted mb-1">Tweets</p>
            <p className="mb-0">{props.tweets}</p>
            </div>
            <div className="px-3">
            <p className="small text-muted mb-1">Following</p>
            <p className="mb-0">{props.following}</p>
            </div>
            <div className="px-3">
            <p className="small text-muted mb-1">Followers</p>
            <p className="mb-0">{props.followers}</p>
            </div>
            <div className="px-3">
            <p className="small text-muted mb-1">Likes</p>
            <p className="mb-0">{props.likes}</p>
            </div>
        </div>
        <div className="col-md-4"></div>
  </div>
}

export default ProfileStats