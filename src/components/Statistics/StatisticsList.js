import { Statistics } from './Statistics';

export const StaticticsList = ({ data, title }) => (
  <section>
    <h2>{title}</h2>
    <ul>
      {data.map(data => {
        const { label, percentage, id } = data;
        return <Statistics key={id} label={label} percentage={percentage} />;
      })}
    </ul>
  </section>
);
