import React, { useState } from 'react'
import './App.css';
import Input from './Input';
import Navbar from './Navbar';
import Post from './Post';

// # Create PostId
let id = 1

function App() {

  const [posts, setPosts] = useState([])

  function addPost(title) {
    const newPost = { id, title }

    // # Set newPost into front of oldPosts
    setPosts([newPost, ...posts])
    // # Then set id ++
    id += 1
  }

  function deletePost(id) {

    // # Filtering for get only post,
    // # Which have postId !== id.
    const updatedPosts = posts.filter((post) => post.id !== id)
    // # Then set them into posts as newPosts.
    setPosts(updatedPosts)
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {
        posts.map((post) => 
          <Post 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          deletePost={deletePost}
          />
        )
      }
    </div>
  );
}

export default App;
