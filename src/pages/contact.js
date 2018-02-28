import React, { Component } from "react";
import Calendar from '../components/calendar'

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var styles = {
      cal: {
        margin: '30vh auto',
        display: 'flex',
        justifyContent: 'center'
      }
    };

    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default ContactPage;
