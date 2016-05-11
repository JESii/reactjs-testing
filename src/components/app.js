import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <div className="add-comment">
          <span>Add a comment</span>
          <textfield ref="addCommenet">Add Comment</textfield>
        </div>
      </div>
    );
  }
}
