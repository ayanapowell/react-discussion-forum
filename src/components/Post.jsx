import React from "react";
import styled from "@emotion/styled";

const PostEl = styled.div`
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 30px;
  p {
    font-style: italic;
    font-size: 18px;
  }
  .footer {
    font-size: 14px;
  }
`;

function Post(props) {
  return (
    <div>
      <PostEl>
        <p>{props.post}</p>
        <div className="footer">
          {props.username} | {props.date}
        </div>
      </PostEl>
    </div>
  );
}

export default Post;
