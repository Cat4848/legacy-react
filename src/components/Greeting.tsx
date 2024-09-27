import React from "react";

interface GreetingProps {
  message: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<GreetingProps> {
  messages = ["God", "Mira", "James", "God is on your side"];
  messagesIndex = 0;

  state: GreetingState = { message: "" };

  constructor(props: GreetingProps) {
    super(props);
    this.state = { message: this.props.message };
  }

  changeGreeting() {
    this.setState(() => ({ message: this.messages[this.messagesIndex] }));
  }

  render(): React.ReactNode {
    return (
      <div>
        Greetings from
        <span>
          <h1>{this.state.message}</h1>
        </span>
        <button
          onClick={() => {
            this.messagesIndex++;
            if (this.messagesIndex >= this.messages.length)
              this.messagesIndex = 0;

            this.changeGreeting();
          }}
        >
          Change Greeting
        </button>
      </div>
    );
  }
}
