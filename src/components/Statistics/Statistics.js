export const Statistics = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

// Statistics.propTypes = {
//   label: label.string,
//   percentage: percentage.number,
// };
