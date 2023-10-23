import { Button } from 'components/atoms/Button/Button';

export const ButtonsFeedback = ({ options, classForButton }) => {
  return options.map(item => (
    <Button key={item} type="button" className={classForButton}>
      {item}
    </Button>
  ));
};
