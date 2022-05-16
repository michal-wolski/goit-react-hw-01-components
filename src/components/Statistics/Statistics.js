import PropTypes from 'prop-types';
import { StatListItem } from './StatisticsStyles';

export const Statistics = ({ label, percentage }) => {
  return (
    <StatListItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatListItem>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
