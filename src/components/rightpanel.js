import Follower from "./follower"

function RightPanel(){
    return <div className="col-md-2">
        <h2 className="mb-4">Who to follow</h2>
        <Follower name='John' username='kamal'></Follower>
        <Follower name='Wasantha' username='rema'></Follower>
        <Follower name='Suji' username='lajim'></Follower>
    </div>
}

export default RightPanel