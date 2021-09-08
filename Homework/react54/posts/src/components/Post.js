import "../css/Post.css"



const Post = ({id, title, text, date, likes, dislikes, setLike, setDislike}) =>{
    return (
        <li className='post'>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{date}</p>
            <button className = 'like' onClick = {() => setLike(id)}><span>{likes ? likes : 0}</span> Likes</button>
            <button className = 'dislike' onClick = {() => setDislike(id)}><span>{dislikes ? dislikes : 0}</span> Dislikes</button>
        </li>
    )
}

export default Post