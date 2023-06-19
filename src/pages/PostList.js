import React from "react";
import { useState, useEffect } from "react";
import RenderPosts from "../components/RenderPosts";
import "../styles/App.css";

   
const PostList = () => {

  // Retrieve data from local storage or use an empty array if no data is found
  const storedData = localStorage.getItem("forumData");
  const parsedData = storedData ? JSON.parse(storedData) : [] ;

  // Set initial state using the retrieved or default data
  const [posts, setPosts] = useState(parsedData);
  const [newPost, setNewPost] = useState('');

  // Save data to local storage when any of the posts changes
  useEffect(() => {
    localStorage.setItem("forumData", JSON.stringify(posts));
  }, [posts]);


  const addPost = () => { 
    // Check if the input field is empty or if the post already exists
    if (newPost.trim() !== '' && !posts.some(post => post.content === newPost)) {
      
      // Adds a new post, sorts the array and reset the input value
      setPosts( posts.length === 0 ? [{ id: 0, content: newPost, comments: [] }] :
        [...posts, { 
          id : posts[posts.length - 1].id + 1,
          content: newPost,
          comments:[]}
        ].sort((a, b) => a.id - b.id));  
      setNewPost('');
      
    } else {
      alert("Posts can't be empty or already exist");
      setNewPost('');
    }
  };

  // Clear all posts from local storage and reload the page
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  }; 

  return (
    <div className="MainPage">
          {/* Create input field and submit button for new posts */}
          <div className="PostInput">
            <textarea
              rows={5}
              cols={50}
              className="PostInputField"
              placeholder="Create a new post here"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button
              type="submit"
              onClick={addPost}>
              Submit
            </button>
          </div>
        <RenderPosts posts={posts} />
        <button className="ClearButton" onClick={clearLocalStorage}>Clear All Posts</button>
    </div>
  );
};

export default PostList;


