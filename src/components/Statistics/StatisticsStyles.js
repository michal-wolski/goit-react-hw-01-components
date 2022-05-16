import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  flex: 1;
  margin: 0;
  padding: 0;
`;

export const StatListItem = styled.li`
  background-color: blue;
`;
