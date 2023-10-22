import { Button } from 'components/atoms/Button/Button';

export const FeedbackButtons = ({ options, classForButton }) => {
  return options.map((item, index) => (
    <Button key={index} type="button" className={classForButton}>
      {item}
    </Button>
  ));
};
