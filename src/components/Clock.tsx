import React from "react";

interface ClockProps {
  date: Date;
}

interface ClockState {
  date: Date;
}

export default class Clock extends React.Component {
  state = { date: new Date() };

  render(): React.ReactNode {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}
