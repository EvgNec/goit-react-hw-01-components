import css from './FriendList.module.css';
import FriendCard from './FriendCard';
import PropTypes from 'prop-types'; 

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
};

FriendList.propTypes = {

  // Перевірка, чи переданий параметр є масивом,
  // і приймає PropTypes.shape в якості параметра.
  cards: PropTypes.arrayOf(

  // shape - визначає форму об'єкта, який передається у властивість
  // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)

  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
  ).isRequired,
};
