import React from "react";

// TODO (step2): import Card.css

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      <div className="u-bold">{props.creator_name}</div>
      <div className="Card-storyContent">{props.content}</div>
    </div>
  );
};

export default SingleStory;
