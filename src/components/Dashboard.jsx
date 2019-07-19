import React from "react";
import styled from "@emotion/styled";
import PostForm from "./PostForm";
import Post from "./Post";

const DashboardEl = styled.div``;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DashboardEl>
          <PostForm onNewPostCreation={this.props.onNewPostCreation} />
          <div className="posts">
            {this.props.postList.map(post => (
              <Post
                post={post.post}
                key={post.id}
                username={post.username}
                date={post.date}
              />
            ))}
          </div>
        </DashboardEl>
      </div>
    );
  }
}

export default Dashboard;
