export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div>
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

// Profile.propTypes = {
//   username: propTypes.string,
//   tag: propTypes.string,
//   location: propTypes.string,
//   avatar: propTypes.img,
//   stats: propTypes.number,
// };
