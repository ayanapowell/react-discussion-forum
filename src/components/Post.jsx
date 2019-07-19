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
  button {
    background: transparent;
    border: 0;
  }
  .fa-thumbs-up {
    color: green;
  }
  .fa-thumbs-down {
    color: red;
  }
`;

function Post(props) {
  function handleNewVote(event, voteType) {
    event.preventDefault();
    props.onNewVote({
      id: props.id,
      upVote: voteType === "up" ? true : false
    });
  }
  return (
    <div>
      <PostEl>
        <p>{props.post}</p>
        <div className="footer">
          <div className="info">
            {props.username} | {props.date}
          </div>
          <div className="votes">
            <br />
            <button
              onClick={e => {
                handleNewVote(e, "up");
              }}
              className="up-vote"
            >
              <i className="fa fa-thumbs-up" />
            </button>
            {props.upVotes} |{" "}
            <button
              onClick={e => {
                handleNewVote(e, "down");
              }}
              className="down-vote"
            >
              <i className="fa fa-thumbs-down" />
            </button>
            {props.downVotes}
          </div>
        </div>
      </PostEl>
    </div>
  );
}

export default Post;
