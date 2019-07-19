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
  }
  handleAddingNewPosts(newPost) {
    const newMasterPostsList = this.state.masterPostsList.slice();
    newMasterPostsList.push(newPost);
    this.setState({ masterPostsList: newMasterPostsList });
    console.log(this.state.masterPostsList);
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
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
