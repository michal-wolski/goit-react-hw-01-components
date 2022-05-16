import { Statistics } from './Statistics';
import { Container, StatList } from './StatisticsStyles';

export const StaticticsList = ({ data, title }) => (
  <Container>
    <h2>{title}</h2>
    <StatList>
      {data.map(data => {
        const { label, percentage, id } = data;
        return <Statistics key={id} label={label} percentage={percentage} />;
      })}
    </StatList>
  </Container>
);
