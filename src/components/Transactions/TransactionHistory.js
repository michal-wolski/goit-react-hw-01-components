import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
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
  </table>
);
