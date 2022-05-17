import styled from 'styled-components';

export const TableStyle = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableTheadTr = styled.tr`
  background-color: #00bcd5;
  color: #ffffff;
  text-align: center;
  padding: 10px 20px;
  width: 500px;

  &:nth-child(even) {
    background-color: #f3f3f3;
  }
`;
export const Thead = styled.th`
  padding: 20px 50px;
  border-right: 1px solid #dddddd;
`;
export const TableTr = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const TableTd = styled.td`
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding: 20px 50px;
  text-align: center;
`;
