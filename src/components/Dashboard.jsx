import React from "react";
import styled from "@emotion/styled";
import PostForm from "./PostForm";
import Post from "./Post";

const DashboardEl = styled.div``;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.sortMasterPostList = this.sortMasterPostList;
  }
  sortMasterPostList() {
    let key = "upVotes";
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return comparison * -1;
    };
  }
  render() {
    const sortedPosts = this.props.postList.sort(this.sortMasterPostList());
    return (
      <div>
        <DashboardEl>
          <PostForm onNewPostCreation={this.props.onNewPostCreation} />
          <div className="posts">
            {sortedPosts.map(post => (
              <Post
                post={post.post}
                key={post.id}
                id={post.id}
                username={post.username}
                date={post.date}
                upVotes={post.upVotes}
                downVotes={post.downVotes}
                onNewVote={this.props.onNewVote}
              />
            ))}
          </div>
        </DashboardEl>
      </div>
    );
  }
}

export default Dashboard;
