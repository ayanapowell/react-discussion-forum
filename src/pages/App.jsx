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

  handleAddingNewPosts(newPost) {
    const newMasterPostsList = this.state.masterPostsList.slice();
    newMasterPostsList.push(newPost);
    this.setState({
      masterPostsList: newMasterPostsList
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
      masterPostsList: newMasterPostsList
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
