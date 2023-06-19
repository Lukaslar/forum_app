import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

// Renders content of a single post linking to the post page and
// displaying the number of comments
const RenderPost = ({ postInfo }) => {
  return (
    <>
      <Link to={"/Post/" + postInfo.id} className="Link">
        <p className="PostLink">{
          postInfo.content.length > 30 ? postInfo.content.substring(0, 30) + "..." : postInfo.content} </p>
      </Link>
      <p className="CommentNumber"> {postInfo.comments.length} comments</p>
    </>
  );
};

export default RenderPost;