import React from 'react';
import '../App.css';

const Profile = ({ firstName, lastName, imageURL }) => {
  return (
    <div className="profile">
      <div>
        <img src={ imageURL } alt="User" />
      </div>
      <p>Name: { firstName } { lastName }</p>
    </div>
  );
}

export default Profile;