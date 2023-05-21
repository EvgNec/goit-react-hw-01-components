import css from './FriendList.module.css';

export default function FriendList({ cards }) {
    return (
        <ul className={css.friendList} >
      {cards.map(card => {
          return (            
          <li
            // ключом для кожного елементу списку є id
            key={card.id}
            className={css.item}
          >
             <span className={css.status} style={{ background: (card.isOnline? "green" : "red") }}></span>
            <img src={card.avatar} alt="User avatar" className={css.avatar} />
            <p className={css.name}>{card.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
