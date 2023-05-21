import css from './FriendList.module.css';
import FriendCard from './FriendCard';

export default function FriendList({ cards }) {
    return (
        <ul className={css.friendList} >
      {cards.map(card => {
          return (            
              <FriendCard
                  key={card.id}
                  avatar={card.avatar}
                  name={card.name}
                  isOnline={card.isOnline}
              />
        );
      })}
    </ul>
  );
}
