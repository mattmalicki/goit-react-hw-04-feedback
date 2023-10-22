import { StatisticsList } from 'components/molecules/StatisticsList/StatisticsList';
import { Notification } from 'components/atoms/Notification/Notification';
import styles from './Statistics.module.css';

export const Statistics = ({ ...stats }) => {
  return (
    <>
      <p className={styles['statistics-header']}>Statistics</p>
      {stats.total ? (
        <StatisticsList className={styles['stats-info']} stats={stats} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
