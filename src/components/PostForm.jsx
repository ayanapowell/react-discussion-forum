import React from "react";
import styled from "@emotion/styled";
import v4 from "uuid";

const PostFormEl = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    background-color: #fafafa;
    padding: 30px;
    margin-bottom: 30px;
    border: 0.5px solid black;
  }
  input {
    height: 50px;
    width: 100%;
    background: #fafafa;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px;
  }

  button {
    height: 50px;
    width: 100px;
    margin-bottom: 0;
    background: #f15025;
    border: 0;
    border-radius: 4px;
    color: white;
    font-size: 15px;
  }
`;

function PostForm(props) {
  let _post = null;
  let _username = null;
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todaysDate = `${mm}/${dd}/${yyyy}`;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      username: _username.value,
      date: todaysDate,
      post: _post.value,
      id: v4(),
      upVotes: 0,
      downVotes: 0
    });
  }
  return (
    <div>
      <PostFormEl>
        <form action="" onSubmit={handleNewPostSubmission}>
          <div className="form-group group-username">
            <input
              type="text"
              name=""
              id="username"
              placeholder="Your username"
              ref={input => {
                _username = input;
              }}
            />
          </div>
          <div className="form-group group-post">
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
