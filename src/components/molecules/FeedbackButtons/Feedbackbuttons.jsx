import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';

export const FeedbackButtons = ({ options, classForButton }) => {
  return options.map(item => (
    <Button key={item} type="button" className={classForButton}>
      {item}
    </Button>
  ));
};

FeedbackButtons.propTypes = {
  classForButton: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};
