import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionLine({ id, type, amount, currency }) {
  return (
    <tr className={css.tr} key={id}>
      <td
        className={css.td}
        style={{
          textTransform: 'capitalize',
          color: '#818181',
        }}
      >
        {type}
      </td>
      <td
        className={css.td}
        style={{
          color: '#818181',
        }}
      >
        {amount}
      </td>
      <td
        className={css.td}
        style={{
          color: '#818181',
        }}
      >
        {currency}
      </td>
    </tr>
  );
};

TransactionLine.propTypes = {
id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
};
