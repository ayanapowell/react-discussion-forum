import React from "react";
import styled from "@emotion/styled";
import v4 from "uuid";

const PostFormEl = styled.div`
  form {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  input {
    height: 50px;
    width: 100%;
    background: #fafafa;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    height: 50px;
    width: 100px;
    margin-left: 30px;
    background: #f15025;
    border: 0;
    border-radius: 4px;
    color: white;
    font-size: 15px;
  }
  .form-group:first-of-type {
    width: 80%;
  }
`;

function PostForm(props) {
  let _post = null;
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      post: _post.value,
      id: v4()
    });
  }
  return (
    <div>
      <PostFormEl>
        <form action="" onSubmit={handleNewPostSubmission}>
          <div className="form-group">
            <input
              type="text"
              id="post"
              placeholder="Post something!"
              ref={input => {
                _post = input;
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit">Post!</button>
          </div>
        </form>
      </PostFormEl>
    </div>
  );
}

export default PostForm;
