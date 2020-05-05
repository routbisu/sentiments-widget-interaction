import React from 'react';
import './FeedbackForm.scss';
import Smiley from '../../images/smiley.svg';

const choices = [1, 2, 3, 4, 5, 6];

const FeedbackForm = ({ onClose, onFeedbackSelect, thanks }) => {
  const [feedback, setFeedback] = React.useState(0);

  const setFeedbackResponse = (choice) => {
    setFeedback(choice);
    setTimeout(() => {
      onFeedbackSelect();
    }, 1200);
  };

  return (
    <div className="feedback-form-container">
      <div className="close-btn" onClick={onClose}>
        <i className="im im-x-mark"></i>
      </div>
      <div className="page-content">
        {feedback ? (
          <div className="thanks-section">
            <div className="image-holder">
              <img src={Smiley} alt="Smiley" />
            </div>
            <div className="text">Thank you, tell us more!</div>
          </div>
        ) : thanks ? (
          <div className="thanks-section">
            <div className="text">
              Thank you,
              <br />
              your feedback is valuable to us!
            </div>
          </div>
        ) : (
          <>
            <h2>Rate your experience</h2>
            <ul>
              {choices.map((choice) => (
                <li key={choice} onClick={() => setFeedbackResponse(choice)}>
                  {choice}
                </li>
              ))}
            </ul>
            <div className="footer">
              <div className="text">Not Satisfied</div>
              <div className="text">Very Satisfied</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
