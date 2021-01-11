import Profile from './components/profiles/Profile';
import user from './components/profiles/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import Transactions from './components/Transactions/Transactions.jsx';
import transactions from './components/Transactions/transactions.json';

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
      <div>
        <h1>Statistics</h1>
        <Statistics statistics={statisticalData} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
