import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendCard({ avatar, name, isOnline}) {
    return (
   <li
            className={css.item}
          >
             <span className={css.status} style={{ background: (isOnline? "green" : "red") }}></span>
            <img src={avatar} alt="User avatar" className={css.avatar} />
            <p className={css.name}>{name}</p>
          </li > );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};