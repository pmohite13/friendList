import React, { Component } from "react";
import MainContentComponent from "./MainContentComponent.js";
import NewFriendComponent from "./NewFriendComponent.js";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    margin: 50,
  },
  card: {
    width: 100,
    height: 50,
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    margin: 10,
  },
};

class MainContainerComponent extends Component {
  state = {
    friend: {
      id: 0,
      name: "",
      role: "",
      techStack: [],
    },
    friends: [
      {
        id: 1,
        name: "pranay",
        role: "lead",
        techStack: ["c#", "javascript", "sql"],
      },
      {
        id: 2,
        name: "mohite",
        role: "developer",
        techStack: ["c#", "typescript", "mongodb"],
      },
      {
        id: 3,
        name: "helios",
        role: "designer",
        techStack: ["html", "css", "scss"],
      },
      {
        id: 4,
        name: "john",
        role: "tester",
        techStack: ["selenium", "moq"],
      },
    ],
  };

  handleAddFriend = (event) => {
    debugger;
    event.preventDefault();
    let nextId = this.state.friends.length + 1;
    this.setState({ friend: { ...this.state.friend, id: nextId } });
    let newFriend = this.state.friend;

    this.setState((prevState) => {
      return { friends: [...prevState.friends, newFriend] };
    });
  };
  render() {
    return (
      <>
        {this.props.isAddNewFriend && (
          <NewFriendComponent
            handleAddFriend={this.handleAddFriend}
            friend={this.state.friend}
          />
        )}
        <div style={styles.container}>
          <MainContentComponent
            cardStyle={styles.card}
            friends={this.filterResults()}
          />
        </div>
      </>
    );
  }

  filterResults() {
    let criteria = this.props.searchName;
    let allFriends = this.state.friends;

    return criteria
      ? allFriends.filter((fr) => fr.name === criteria || fr.role === criteria)
      : allFriends;
  }
}

export default MainContainerComponent;
