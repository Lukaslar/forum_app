import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import RenderComments from "../components/RenderComments";
import { Link } from "react-router-dom";
import "../styles/App.css";

const PostPage = () => {

  // Retrieve data from local storage or use an empty array if no data is found
  const storedData = localStorage.getItem("forumData");
  const parsedData = storedData ? JSON.parse(storedData) : [];

  // Set state for posts, new comments and edits
  const [posts, setPosts] = useState(parsedData);
  const [newEdit, setNewEdit] = useState("");
  const [newComment, setNewComment] = useState("");

  // Save data to local storage when the posts changes
  useEffect(() => {
    localStorage.setItem("forumData", JSON.stringify(posts));
  }, [posts]);

  // Find the post with the given id
  const { id } = useParams();

  // Filter the posts array to find the post with the matching id
  var post = posts.find(post => post.id === parseInt(id)) || alert("Error, post not found");

  const addComment = () => {
    // Check if the input field is empty
    if (newComment.trim() !== '') {
      // Add a new comment and reset the input value
      post.comments.push(newComment);
      var postIndex = posts.findIndex(p => p.id === post.id);
      // Create a new posts array with the updated post
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = post;
      setPosts(updatedPosts);
      setNewComment('');

    } else {
      alert("Comments can't be empty");
      setNewComment('');
    }
  };

  const editPost = () => {
    // Check if the input field is empty
    if (newEdit.trim() !== '') {
      // Edit the post and reset the input value
      post.content = newEdit;
      var postIndex = posts.findIndex(p => p.id === post.id);
      // Create a new posts array with the updated post
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = post;
      setPosts(updatedPosts);
      setNewEdit('');

    } else {
      alert("Posts can't be empty");
      setNewEdit('');
    }
  };

  return (
    <div className="PostPage">
      <div className="Post">
        <h2>Post:</h2>
        <p className="PostText">{post.content}</p>
        {/* Create input field and submit button to edit post */}
        <div className="EditPost">
          <textarea
            placeholder="Edit post here"
            value={newEdit}
            onChange={(e) => setNewEdit(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={editPost}>
            Edit
          </button>
        </div>

        <div className="Comments">
          <h2>Comments</h2>
          <RenderComments comments={post.comments} />
        </div>

        {/* Create input field and submit button to create new comments */}
        <div className="CommentInput">
          <textarea
            placeholder="Write a new comment here"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={addComment}>
            Add
          </button>
        </div>
        <Link to={"/"} className="SecondLink">
          <h3>Go back to posts</h3>
        </Link>
      </div>
    </div>
      )
}

      export default PostPage;