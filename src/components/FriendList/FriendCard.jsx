import css from './FriendList.module.css';

export default function FriendCard({ avatar, name, isOnline}) {
    return (
   <li
            className={css.item}
          >
             <span className={css.status} style={{ background: (isOnline? "green" : "red") }}></span>
            <img src={avatar} alt="User avatar" className={css.avatar} />
            <p className={css.name}>{name}</p>
          </li > );
}