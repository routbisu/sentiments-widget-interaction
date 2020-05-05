import React, { useState } from 'react';
import './App.scss';
import SentimentWidget from './components/SentimentWidget/SentimentWidget';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import TellUsMore from './components/TellUsMore/TellUsMore';

const widgets = {
  smiley: 'smiley',
  feedbackForm: 'feedbackForm',
  tellUsMoreForm: 'tellUsMoreForm',
  thankYou: 'thankYou',
};

const App = () => {
  const [currWidget, setCurrWidget] = useState(widgets.smiley);

  const clickHandler = (widgetType) => {
    setCurrWidget(widgetType);
  };

  const GetWidget = () => {
    switch (currWidget) {
      case widgets.smiley:
        return (
          <SentimentWidget onClick={() => clickHandler(widgets.feedbackForm)} />
        );

      case widgets.feedbackForm:
        return (
          <FeedbackForm
            onClose={() => clickHandler(widgets.smiley)}
            onFeedbackSelect={() => clickHandler(widgets.tellUsMoreForm)}
          />
        );

      case widgets.tellUsMoreForm:
        return (
          <TellUsMore
            onClose={() => clickHandler(widgets.smiley)}
            onSubmit={() => clickHandler(widgets.thankYou)}
          />
        );

      case widgets.thankYou:
        return (
          <FeedbackForm
            onClose={() => clickHandler(widgets.smiley)}
            thanks={true}
          />
        );
    }
  };

  return (
    <div className="app-container">
      <GetWidget />
    </div>
  );
};

export default App;
