import React from 'react';
import { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  // console.log("entering App");
  render() {
    return (
      <div>
        <h1>My comment application</h1>
        <div className="app">
          <CommentBox>
          </CommentBox>
          <hr />
          <CommentList>
          </CommentList>
        </div>
      </div>
    );
  }
}
