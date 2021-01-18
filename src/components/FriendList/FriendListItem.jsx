import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultImage from '../images/default.jpg';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li className={s.item} key={id}>
    <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <span className={s.name}>{name}</span>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
