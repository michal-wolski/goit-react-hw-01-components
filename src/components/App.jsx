import data from './Statistics/data';
import user from './Profiles/user';
import friends from './FriendList/friends';
import transaction from './Transactions/transactions';
import { StaticticsList } from './Statistics/StatisticsList';
import { Profile } from './Profiles/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { Container } from './globalStyles';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StaticticsList title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
