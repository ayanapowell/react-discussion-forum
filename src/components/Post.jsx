import React from "react";
import styled from "@emotion/styled";

const PostEl = styled.div``;

function Post(props) {
  return (
    <div>
      <PostEl>{props.post}</PostEl>
    </div>
  );
}

export default Post;
