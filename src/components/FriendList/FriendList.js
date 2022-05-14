import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <div>
    <ul>
      {friends.map(friends => {
        const { avatar, name, isOnline, id } = friends;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  </div>
);
