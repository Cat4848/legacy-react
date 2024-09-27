import React from "react";

export default class Clock extends React.Component {
  state = { date: new Date() };
  timerID: NodeJS.Timer = setInterval(() => {}, 1000);

  componentDidMount(): void {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}
