import TransactionLine from './TransactionLine';
import css from './Transactions.module.css';
import PropTypes from 'prop-types';

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
}

Transactions.propTypes = {
  // Перевірка, чи переданий параметр є масивом, і приймає PropTypes.shape в якості параметра.
  transactions: PropTypes.arrayOf(
    // shape - визначає форму об'єкта, який передається у властивість
    // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
