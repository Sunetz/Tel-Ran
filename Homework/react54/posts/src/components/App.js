import '../css/App.css'
import Store from '../store/Store'
import {useState} from 'react'
import PostsList from './PostsList';

function App() {
  const[posts, setPosts] = useState(Store())

  const setLike = id=>{
    const newPosts = [...posts]
    const index = newPosts.findIndex(p => p.id === id)
    const post = {...newPosts[index]}
    if (post.likes !== undefined) post.likes++
    else post.likes = 1
    newPosts[index] = post
    setPosts(newPosts)
  }

  const setDislike = id=>{
    const newPosts = [...posts]
    const index = newPosts.findIndex(p => p.id === id)
    const post = {...newPosts[index]}
    if (post.dislikes !== undefined) post.dislikes++
    else post.dislikes = 1
    newPosts[index] = post
    setPosts(newPosts)
  }

  return (
    <div className = "App">
      <PostsList posts={posts} setLike={setLike} setDislike={setDislike}/>
    </div>
  )
}

export default App;
