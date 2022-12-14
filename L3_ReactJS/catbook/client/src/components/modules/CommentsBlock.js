import React, { Component } from "react";
// TODO (step9): import SingleComment and NewComment

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
class CommentsBlock extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // TODO (step9): implement render
  }
}

export default CommentsBlock;
