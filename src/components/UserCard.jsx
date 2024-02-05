import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaTwitter } from "react-icons/fa";

const UserCard = ({ userData }) => {
  const renderNotNull = (value) => (value ? value : "Not provided");

  return (
    <>
      <div
        id="user-card-container"
        className="mt-4 p-4 border border-gray-300 rounded bg-white shadow-md max-w-lg mx-auto"
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mr-4 border-4 border-white shadow-lg"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {renderNotNull(userData.name)}
            </h2>
            <h2 className="text-xl font-bold text-gray-600">
              @{renderNotNull(userData.login)}
            </h2>
            <p className="text-gray-700">{renderNotNull(userData.bio)}</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <p className="text-gray-600">Followers</p>
            <p className="text-lg font-bold">{userData.followers}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Following</p>
            <p className="text-lg font-bold">{userData.following}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Repositories</p>
            <p className="text-lg font-bold">{userData.public_repos}</p>
          </div>
        </div>
        <div className="text-left">
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            Location: {renderNotNull(userData.location)}
          </p>
          <p className="flex items-center text-gray-600">
            <FaGlobe className="mr-2" />
            Website: {renderNotNull(userData.blog)}
          </p>
          <p className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            Email: {renderNotNull(userData.email)}
          </p>
          <p className="flex items-center text-gray-600">
            <FaTwitter className="mr-2" />
            Twitter: {renderNotNull(userData.twitter_username)}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
