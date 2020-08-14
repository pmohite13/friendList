import React, { Component } from "react";

class NewFriendComponent extends Component {
  friendNameChange = ({ target }) => {
    this.props.friend.name = target.value;
  };
  roleChange = ({ target }) => {
    this.props.friend.role = target.value;
  };

  techStackChange = ({ target }) => {
    this.props.friend.techStack.push(target.value);
  };

  render() {
    return (
      <form onSubmit={this.props.handleAddFriend} style={{ margin: 50 }}>
        Friend's Name:{" "}
        <input
          type="text"
          name="friendName"
          style={{ margin: 10 }}
          onChange={this.friendNameChange}
        />
        Role:{" "}
        <input
          type="text"
          name="role"
          style={{ margin: 10 }}
          onChange={this.roleChange}
        />
        Technology Stack:{" "}
        <select
          name="roles"
          id="rolesId"
          style={{ margin: 10 }}
          onChange={this.techStackChange}
        >
          <option value="" />
          <option value="developer">developer</option>
          <option value="designer">designer</option>
          <option value="lead">lead</option>
          <option value="tester">tester</option>
        </select>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default NewFriendComponent;
