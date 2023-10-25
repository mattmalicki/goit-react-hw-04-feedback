import PropTypes from 'prop-types';
import { FeedbackButtons } from '../FeedbackButtons/FeedbackButtons';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className={styles.feedbackButtons} onClick={onClick}>
      <FeedbackButtons
        options={options}
        classForButton={styles.feedbackButton}
      />
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
