import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/atoms/StatisticsItem/StatisticsItem';

export const StatisticsList = ({ className, stats }) => {
  return (
    <div className={className}>
      <StatisticsItem>Good: {stats.good}</StatisticsItem>
      <StatisticsItem>Neutral: {stats.neutral}</StatisticsItem>
      <StatisticsItem>Bad: {stats.bad}</StatisticsItem>
      <StatisticsItem>Total: {stats.total}</StatisticsItem>
      <StatisticsItem>
        Positive percentage: {Math.round((stats.good * 100) / stats.total)}%
      </StatisticsItem>
    </div>
  );
};

StatisticsList.propTypes = {
  className: PropTypes.string,
  stats: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
  }),
};
