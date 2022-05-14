import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin-top: 50px;
`;
const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: grey;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoName = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileContainer>
    <Info>
      <AvatarImg src={avatar} alt="User avatar" />
      <InfoName>{username}</InfoName>
      <p>{tag}</p>
      <p>{location}</p>
    </Info>

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
  </ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
