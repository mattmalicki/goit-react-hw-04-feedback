import { FeedbackButtons } from 'components/molecules/FeedbackButtons/Feedbackbuttons';
import styles from './FeedbackOptions.css';

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
