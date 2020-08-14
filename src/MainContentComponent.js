import React, { Component } from "react";

class MainContentComponent extends Component {
  render() {
    return (
      <>
        {this.props.friends.map((fr) => (
          <div key={fr.id} style={this.props.cardStyle}>
            {fr.name}
          </div>
        ))}
      </>
    );
  }
}

export default MainContentComponent;
