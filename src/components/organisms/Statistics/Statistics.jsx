import { StatisticsList } from 'components/molecules/StatisticsList/StatisticsList';
import { Notification } from 'components/atoms/Notification/Notification';
import styles from './Statistics.module.css';

export const Statistics = ({ ...stats }) => {
  const total = stats.good + stats.neutral + stats.bad;
  return (
    <>
      <p className={styles['statistics-header']}>Statistics</p>
      {total ? (
        <StatisticsList
          className={styles['stats-info']}
          stats={{ total, ...stats }}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
