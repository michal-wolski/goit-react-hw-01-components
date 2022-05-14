import { Profile } from './Profiles/Profile';
import data from './Statistics/data';
import user from './Profiles/user';
import { StaticticsList } from './Statistics/StatisticsList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section>
        <StaticticsList title="Upload stats" data={data} />
      </section>
    </>
  );
};
