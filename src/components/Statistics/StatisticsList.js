import { Statistics } from './Statistics';

export const StaticticsList = ({ data, title }) => (
  <section>
    <h2>{title}</h2>
    <ul>
      {data.map((data, index) => {
        const { label, percentage } = data;
        return <Statistics key={index} label={label} percentage={percentage} />;
      })}
    </ul>
  </section>
);

export default StaticticsList;
