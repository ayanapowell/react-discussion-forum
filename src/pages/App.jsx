import React from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostsList: []
    };
    this.handleAddingNewPosts = this.handleAddingNewPosts.bind(this);
    this.handleVoting = this.handleVoting.bind(this);
  }
  componentDidUpdate() {}
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
      return comparison;
    };
  }
  handleAddingNewPosts(newPost) {
    const newMasterPostsList = this.state.masterPostsList.slice();
    newMasterPostsList.push(newPost);
    this.setState({
      masterPostsList: newMasterPostsList.sort(this.sortMasterPostList())
    });
  }

  handleVoting(votingInfo) {
    const postCopy = this.state.masterPostsList.find(
      post => post.id === votingInfo.id
    );
    if (votingInfo.upVote) {
      postCopy.upVotes = postCopy.upVotes + 1;
    } else {
      postCopy.downVotes = postCopy.downVotes + 1;
    }
    const newMasterPostsList = this.state.masterPostsList.filter(
      item => item.id !== votingInfo.id
    );
    newMasterPostsList.push(postCopy);

    this.setState({
      masterPostsList: newMasterPostsList.sort(this.sortMasterPostList())
    });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Dashboard
                postList={this.state.masterPostsList}
                onNewPostCreation={this.handleAddingNewPosts}
                onNewVote={this.handleVoting}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
