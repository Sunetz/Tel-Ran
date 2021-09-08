import Post from "./Post"
import '../css/PostsList.css'

const PostsList = ({posts, setLike, setDislike})=>{
    return (
        <div className='post-list'>
            <ul>
                {posts.map(post=>
                    <Post
                        key = {post.id}
                        id = {post.id}
                        title = {post.title}
                        text = {post.text}
                        date = {post.date = new Date().toLocaleDateString()}
                        likes = {post.likes}
                        dislikes = {post.dislikes}
                        setLike = {setLike}
                        setDislike = {setDislike}/>)}
            </ul>
        </div>
    )
}

export default PostsList