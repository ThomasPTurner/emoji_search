import React, { Component } from "react";
import PropTypes from "prop-types";

const Results = ({ emojiResult, firstMount }) => {
  return (
    <div>
      <p>
        {emojiResult.length
          ? allEmojis(emojiResult)
          : firstMount
          ? ""
          : "no emojis"}
      </p>
    </div>
  );

  //   filterEmojis = props => {
  //     const emojiResults = this.state.emojis.filter(emoji => {
  //       return emoji.keywords.split(" ").includes(this.props.currentSearches);
  //     });
  //     this.setState({ emojiResults });
  //   };
};
const allEmojis = emojis => {
  return emojis
    .map(({ symbol }) => {
      return symbol;
    })
    .join(" ");
};
Results.propTypes = {};

export default Results;
