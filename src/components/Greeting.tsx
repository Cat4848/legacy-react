import React from "react";

export default class Greeting extends React.Component{
  messages = [
    "good morning",
    "you will smash it",
    "believe in you",
    "God is on your side"
  ];
  messagesIndex = 0;
  constructor(props){
    super(props);
  }
}