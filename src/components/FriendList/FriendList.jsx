import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
