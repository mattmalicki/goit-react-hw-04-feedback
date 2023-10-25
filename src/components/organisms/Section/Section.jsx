import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

export const Section = ({ title }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {}, [good, neutral, bad]);

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
        default:
          console.log('Button without and id');
      }
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onClick={onLeaveFeedback}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
