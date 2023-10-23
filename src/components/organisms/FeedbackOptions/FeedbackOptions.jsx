import { ButtonsFeedback } from '../molecules/ButtonsFeedback/ButtonsFeedback.jsx';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className={styles.feedbackButtons} onClick={onClick}>
      <ButtonsFeedback
        options={options}
        classForButton={styles.feedbackButton}
      />
    </div>
  );
};
