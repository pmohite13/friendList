import React, { Component } from "react";
import MainContainerComponent from "./MainContainerComponent.js";

class SearchComponent extends Component {
  state = {
    friendName: "",
    isAddNewFriend: false,
    addNewFriendButtonName: "Add",
  };

  handleChange = (event) => {
    this.setState({ friendName: event.target.value });
  };

  addNewFriend = () => {
    this.setState((prevState) => {
      return {
        isAddNewFriend: !prevState.isAddNewFriend,
        addNewFriendButtonName:
          prevState.addNewFriendButtonName === "Add" ? "Hide" : "Add",
      };
    });
  };

  render() {
    return (
      <>
        <div>
          Search by name/role:{" "}
          <input type="text" onChange={this.handleChange} />
          <button id="btnAddFriend" onClick={this.addNewFriend}>
            {this.state.addNewFriendButtonName}
          </button>
        </div>
        <MainContainerComponent
          searchName={this.state.friendName}
          isAddNewFriend={this.state.isAddNewFriend}
        />
      </>
    );
  }
}

export default SearchComponent;
