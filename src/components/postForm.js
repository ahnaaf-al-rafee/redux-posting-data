import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  render() {
    const submit = (event) => {
      event.preventDefault();

      const post = {
        title: this.state.title,
        body: this.state.body,
      };

      // post actions
      this.props.createPost(post);
    };

    return (
      <div>
        <h1>Add Posts</h1>
        <form>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            <br />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={(event) => this.setState({ body: event.target.value })}
            />
            <br />
            <button type="submit" onClick={submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);
