import React, { Component } from "react";
import { Calendar as ReactCal } from "react-calendar";
import "../styles/components/calendar.scss";

const NewEvent = ({className='', onClick, hidden=true}) => {
  return (
    <div>
      <div className={`blur-box ${className} ${hidden ? 'blur-hidden' : ''}`} onClick={onClick}>
      </div>
      <div className={`event ${className} ${hidden ? 'hidden' : ''}`}>
        <p>OMG New event!</p>
      </div>
    </div>
  );
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hideNewEvent: false 
    };
  }

  dayClick = date => {
    console.log(date);
    this.setState({hideNewEvent: !this.state.hideNewEvent})
  };

  render() {
    return (
      <div className="my-cal">
        <NewEvent onClick={this.dayClick} hidden={this.state.hideNewEvent} />
        <ReactCal value={this.state.date} onClickDay={this.dayClick} />
      </div>
    );
  }
}

export default Calendar;
