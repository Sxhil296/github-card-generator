import React from "react";

const UserCard = ({ userData }) => {
  return (
    <>
      <div
        id="user-card-container"
        className="mt-4 p-4 border border-gray-300 rounded bg-gray-200  shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          GitHub User Card
        </h2>
        <div className="flex items-center justify-center mb-4">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mr-8"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <h2 className="text-xl font-bold text-gray-700">
              {userData.login}
            </h2>
            <p className="text-gray-600">{userData.bio}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="text-center">
            <p className="text-gray-700">Followers</p>
            <p>{userData.followers}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700">Following</p>
            <p>{userData.following}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700">Repositories</p>
            <p>{userData.public_repos}</p>
          </div>
        </div>
        <div className="text-left ml-40 mt-4">
          <p className="text-gray-700">Location : {userData.location}</p>
        </div>
        <div className="text-left ml-40 mt-4">
          <p className="text-gray-700">Website : {userData.blog}</p>
        </div>
        <div className="text-left ml-40 mt-4">
          <p className="text-gray-700">Email : {userData.email}</p>
          <p>{userData.email}</p>
        </div>
        <div className="text-left ml-40 mt-4">
          <p className="text-gray-700">Twitter : {userData.twitter_username}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
