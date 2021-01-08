import Profile from './components/profiles/Profile';
import user from './components/profiles/user.json';

function App() {
  return (
    <div>
      <h1>Social-profile</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
