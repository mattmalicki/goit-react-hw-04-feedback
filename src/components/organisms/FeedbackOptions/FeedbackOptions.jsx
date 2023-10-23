import { FeedbackButtons } from '../../molecules/FeedbackButtons/FeedbackButtons';
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
