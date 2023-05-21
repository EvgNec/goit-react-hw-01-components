import css from './Transactions.module.css';
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
    )
}