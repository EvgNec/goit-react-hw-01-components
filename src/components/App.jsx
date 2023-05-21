import ProfileCard from './ProfileCard';
import profile from './ProfileCard/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList'
import friend from './FriendList/friends.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileCard
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats} />
      
      <Statistics
        title="Upload stats"
        stats={data} />
      
      <FriendList
        cards={friend}
      />
    </div>
  );
};
