import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 250px;
`;

export const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: grey;
  background-origin: 2px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px;
`;

export const InfoName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const InfoTagLocation = styled.p`
  color: grey;
  font-size: small;
`;

export const StatsList = styled.ul`
  display: flex;
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-color: darkgray;
  border-width: 1px;
  border-style: solid;
  background-color: lightgray;
  flex: 1;
  padding: 10px 10px;
`;
