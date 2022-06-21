import React, {useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  
//   useEffect(()=> {
//     axios.get('/api/v1/posts.json')
//     .then( resp => {
//         setPosts(resp.data)
//     } )
//     .catch( resp => console.log(resp))
//   }, [posts.length])

  const getPosts = async () => {
      const { data } = await axios("/api/v1/posts.json");
      setPosts(data)
  }

  useEffect(()=> {
      getPosts();
  }, [])

  const list = posts.map( item => {
      return (
      <Post key={item.id}
        title={item.title}
        body={item.body}
      />)
  })
  return (
    <Fragment>
        <ul>{list}</ul>
    </Fragment>
  )
}

export default Posts