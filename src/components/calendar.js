import React, { Component } from "react";
import { Calendar as ReactCal } from "react-calendar";
import "../styles/components/calendar.scss";

const EventBox = ({ hidden, onClick, children }) => {
  return (
    <div className={`event-box ${hidden ? "hidden" : ""}`}>
      <div id="event" className={`event ${hidden ? "hidden" : ""}`}>
        <i className="material-icons x" onClick={onClick}>
          close
        </i>
        {children}
      </div>
    </div>
  );
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      chosenDate: new Date(),
      hideNewEvent: true,
      hideConfirm: false,
      businessIsClosed: false
    };
    this.checkDate = this.checkDate.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.downloadCalEvent = this.downloadCalEvent.bind(this);
    this.dayClick = this.dayClick.bind(this);
  }
  checkDate = date => {
    // date: Date() object
    var day = date.getDay();
    if (day === 6 || day === 0) {
      this.setState({ businessIsClosed: true });
    } else {
      this.setState({ businessIsClosed: false });
      this.setState({ chosenDate: date });
    }
  };

  toggleHidden = () => {
    this.setState({ hideNewEvent: !this.state.hideNewEvent });
  };

  toggleConfirm = () => {
    this.setState({ hideConfirm: !this.state.hideConfirm})
  }

  toggleBoth = () => {
    this.toggleHidden();
    this.toggleConfirm();
  }
  getCalEvent = () => {
    var ical = require("ical-generator");
    ical = ical({ domain: "www.mikectobias.com", name: "my calendar" });
    var event = ical.createEvent({
      start: this.state.chosenDate,
      allDay: true,
      summary: "Haircut Appointment",
      description: "Getting a cut at the coolest place in town!",
      location: "Executive Cut & Shave"
    });
    return ical;
  };

  downloadCalEvent = () => {
    window.open("data:text/calendar;charset=utf8," + escape(this.getCalEvent().toString()));
  }

  dayClick = date => {
    // <Calendar /> will return a date object for onClickDay
    if (this.state.hideNewEvent) {
      this.checkDate(date);
      this.toggleHidden();
    } else {
      this.toggleHidden();
    }
  };

  render() {
    return (
      <div>
        <EventBox hidden={this.state.hideConfirm} onClick={this.toggleConfirm}>
          <p style={{marginTop: '2em'}}>Excellent!</p>
          <p style={{marginBottom: '1em'}}>We will contact you to schedule an appointment on this day.</p>
          <button onClick={this.downloadCalEvent}>Add to Calendar</button>
        </EventBox>
        <EventBox hidden={this.state.hideNewEvent} onClick={this.toggleHidden}>
          {this.state.businessIsClosed ? (
            <div>
              <h2>Sorry! we are not open on the weekends.</h2>
              <h2>Please choose a different day.</h2>
            </div>
          ) : (
            <div>
              <h1>
                Your chosen date: 
              </h1>
              <p>{this.state.chosenDate.toLocaleDateString()}</p>
            </div>
          )}
          {this.state.businessIsClosed ? (
            <button onClick={this.toggleHidden}>Close</button>
          ) : (
            <div className="flex-center">
              <p>Would you like to request an appointment on this date?</p>
              <button onClick={this.toggleBoth}>Yes</button>
              <button onClick={this.toggleHidden}>No</button>
            </div>
          )}
        </EventBox>
        <div className="my-cal">
          <ReactCal value={this.state.today} onClickDay={this.dayClick} />
        </div>
      </div>
    );
  }
}

export default Calendar;
