import React, { Component}  from 'react';
import { connect } from 'react-redux';

// class CommentList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { comments: [] };
//   };
const CommentList =(props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

    return (
      <div className="comment-list">
        <h2>Comment List</h2>
        <ul className="comment-list-header list-group">
          {list}
        </ul>
      </div>
    )

};

function mapStateToProps(state) {
  return( { comments: state.comments })
}

export default connect (mapStateToProps)(CommentList);
