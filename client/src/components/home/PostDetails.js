import React from "react";
import {
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import BlockQuote from "./BlockQuote";

function PostDetails({ post }) {
  return (
    <Toast>
      <ToastHeader>{post.username ? post.username : "anonymous"}</ToastHeader>
      <ToastBody>
        <BlockQuote
          highlight={post.highlight}
          highlightAuthor={post.highlight_author}
        />
        <h4 className="comment">{post.comment}</h4>
      </ToastBody>
    </Toast>
  );
}

export default PostDetails;
