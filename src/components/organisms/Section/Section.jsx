import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

import { useState } from 'react';

export const Section = ({ title }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = 0;
  let positivePercentage = 0;

  const countTotalFeedback = () => {
    total = good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    positivePercentage = Math.round((state.good * 100) / state.total);
  };

  const onLeaveFeedback = event => {
    if (event.target.nodeName === 'BUTTON') {
      const id = event.target.id;
      switch (id) {
        case 'good':
          setGood(good + 1);
          break;
        case 'neutral':
          setNeutral(neutral + 1);
          break;
        case 'bad':
          setBad(bad + 1);
          break;
      }
      countTotalFeedback();
      countPositiveFeedbackPercentage();
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onClick={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
};
