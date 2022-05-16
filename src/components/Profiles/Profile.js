import PropTypes from 'prop-types';
import {
  ProfileContainer,
  AvatarImg,
  Info,
  InfoName,
  InfoTagLocation,
  StatsList,
  StatsListItem,
} from './ProfileStyles';

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
      <InfoTagLocation>{tag}</InfoTagLocation>
      <InfoTagLocation>{location}</InfoTagLocation>
    </Info>

    <StatsList>
      <StatsListItem>
        <span>Followers</span>
        <span>{followers}</span>
      </StatsListItem>
      <StatsListItem>
        <span>Views</span>
        <span>{views}</span>
      </StatsListItem>
      <StatsListItem>
        <span>Likes</span>
        <span>{likes}</span>
      </StatsListItem>
    </StatsList>
  </ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
