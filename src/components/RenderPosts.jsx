import React from "react";
import RenderPost from "./RenderPost";

// Render the list of posts or display a message if there are no posts
const RenderPosts = ({ posts }) => {
  return (
    <>
      {posts?.length > 0 ? (
        <div className="PostSection">
          <ol className="PostList">
            {posts.map((post) => (
              <li key={post.id} type="1">
                <RenderPost postInfo={post} /> 
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="empty">
          <p>No posts have been created yet</p>
        </div>
      )}
    </>
  );
};

export default RenderPosts;