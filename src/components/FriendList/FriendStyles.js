import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;

  align-items: center;
  border: solid;
  border-width: 1px;
  padding: 5px 10px;
  margin-bottom: 20px;
  width: 300px;
  box-shadow: 5px 8px 5px 0px rgba(66, 68, 90, 1);
`;

export const Avatar = styled.img`
  border: solid;
  margin: 0 10px;
  width: 50px;
  padding: 0;
  border-radius: 20%;
  background-color: aqua;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: yellow;
  border-radius: 50%;
`;
