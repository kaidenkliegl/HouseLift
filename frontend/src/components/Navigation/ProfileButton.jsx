// src/components/ProfileButton.js
import { FaUserCircle } from 'react-icons/fa';

const ProfileButton = ({ user }) => {
  return (
    <div style={{ color: '#333', fontSize: '28px', cursor: 'pointer' }} title={user.username}>
      <FaUserCircle />
    </div>
  );
};

export default ProfileButton;
