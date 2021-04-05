import React, { Component } from "react";
import axios from "axios";

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then((res) => this.setState({ students: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const list = this.state.students.map((student,i) => (
      <h3 key={i}>{student.first_name} {student.last_name}</h3>
    ));
    
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {list}
      </div>
    );
  }
}
