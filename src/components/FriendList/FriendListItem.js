export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <span>Status</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};