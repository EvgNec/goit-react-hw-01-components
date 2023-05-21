import ProfileCard from './ProfileCard';
import profile from './ProfileCard/user.json';
import Statistik from './Statistik';
import stat from './Statistik/stat.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
      <Statistik
        title={stat.title}
        stats={stat.stats} />
    </div>
  );
};
