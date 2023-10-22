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
