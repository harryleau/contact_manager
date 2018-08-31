import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // deprecated
  // componentWillMount() {
  //   console.log("will mount before component renders");
  // }

  // componentDidUpdate() {
  //   console.log("fire off when component finishes updating its state.");
  // }

  // deprecated
  // componentWillUpdate() {
  //   console.log("fire off when component start updating its state.");
  // }

  // deprecated
  // componentWillReceiveProps(nextProps, state) {
  //   console.log('Run when component has new props, usually used in redux when store changes.')
  // }

  // using this new lifecycle method, must return either a state obj or null
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // // another new method
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("get snapshot before update");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
