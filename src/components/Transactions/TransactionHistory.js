import { TransactionItem } from './TransactionItem';
import { TableStyle, TableTheadTr, Thead } from './TransactionStyles';

export const TransactionHistory = ({ items }) => (
  <TableStyle>
    <thead>
      <TableTheadTr>
        <Thead>Type</Thead>
        <Thead>Amount</Thead>
        <Thead>Currency</Thead>
      </TableTheadTr>
    </thead>

    <tbody>
      {items.map(items => {
        const { id, type, amount, currency } = items;
        return (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  </TableStyle>
);
