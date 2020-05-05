import React from 'react';
import './SentimentWidget.scss';
import Smiley from '../../images/smiley.svg';

const SentimentWidget = ({ onClick }) => {
  return (
    <div className="sentiment-widget-component" onClick={onClick}>
      <div className="smiley-holder">
        <img src={Smiley} />
        <div className="content">Help us improve</div>
      </div>
    </div>
  );
};

export default SentimentWidget;
