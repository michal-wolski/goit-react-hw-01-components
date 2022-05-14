import data from './Statistics/data';
import user from './Profiles/user';
import friends from './FriendList/friends';
import { StaticticsList } from './Statistics/StatisticsList';
import { Profile } from './Profiles/Profile';
import { FriendList } from './FriendList/FriendList';

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

      <StaticticsList title="Upload stats" data={data} />

      <FriendList friends={friends} />
    </>
  );
};
