import React from "react";
import "../styles/App.css";

// Render the list of comments or display a message if there aren't any
const RenderComments = ({ comments }) => {
  return (
    <>
      {comments?.length > 0 ? (
        <div className="CommentSection">
          <ol>
            {comments.map((comment) => (
              <li type="1" key={comment} >
                <p className="comment" >{comment}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="empty">
          <p>No comments yet</p>
        </div>
      )}
    </>
  );
};

export default RenderComments;