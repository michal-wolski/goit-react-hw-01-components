import { TableTd, TableTr } from './TransactionStyles';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableTr>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
  );
};
