import { Button } from 'components/atoms/Button/Button';

export const FeedbackButtons = ({ options }) => {
  return options.map((item, index) => (
    <Button key={index} type="button" className={css.feedbackButton}>
      {item}
    </Button>
  ));
};
