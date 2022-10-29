import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  static getDerivedStateFromErorr(error) {
    return { error };
  }

  render() {
    if (this.state.error)
      return <p style={{ color: "red" }}>Something went wrong!!!</p>;

    return this.props.children;
  }
}

export default ErrorBoundary;
