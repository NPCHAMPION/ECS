import React, { Component } from "react";

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var styles = {
      bg: {
        paddingTop: "5em",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "4em"
      }
    };

    return (
      <div style={styles.bg} className="bg">
        <p>Under Construction</p>
      </div>
    );
  }
}

export default ContactPage;
