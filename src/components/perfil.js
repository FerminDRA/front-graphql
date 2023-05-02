import React from 'react';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-picture">
        <img src="https://firebasestorage.googleapis.com/v0/b/stars-116de.appspot.com/o/images%2FimgProf.jpg?alt=media&token=d9b2ad1d-92f2-4243-a23f-56e74b8c3950" alt="Profile" />
      </div>
      <div className="profile-details">
        <h1 className="profile-name">Fermin Del Rosario Antonio</h1>
        <h1 className="profile-bio">S19004879</h1>
        <p className="profile-bio">Ingenieria de Software</p>
        <ul className="profile-stats">
          <li>
            <span>zs19004879@estudiantes.uv.mx</span>
          </li>
          <li>
            <span>2729819812</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;