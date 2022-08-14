import React from "react";

/**
 * Component to render a single comment
 *
 * Proptypes
 * @param {string} _id of comment
 * @param {string} creator_name
 * @param {string} content of the comment
 */
const SingleComment = (props) => {
  return (
    <div className="Card-commentBody">
      <b>{props.creator_name}</b> | {props.content}
    </div>
  );
};

export default SingleComment;
