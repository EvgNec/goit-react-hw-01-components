import TransactionLine from './TransactionLine';
import css from './Transactions.module.css';

export default function Transactions({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
              <TransactionLine
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
};
