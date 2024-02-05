import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      // Check if the user exists (status 200)
      if (response.status === 200) {
        setUserData(response.data);
        setError(null);
      } else {
        // Handle other response statuses (e.g., user not found)
        setUserData(null);
        setError("User not found!");
      }
    } catch (error) {
      // Handle network or other errors
      setUserData(null);
      setError("Error fetching GitHub data");
    }
  };

  const handleGenerateCard = () => {
    // Only fetch data if the username is present
    if (username.trim() !== "") {
      fetchData();
    }
  };

  return (
    <>
      <div>
        <Navbar title="GitHub Card Generator" />
        <div className="container mx-auto max-w-[700px] mt-8">
          <div className="flex mx-auto justify-center">
            <input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <button
              onClick={handleGenerateCard}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Generate Card
            </button>
          </div>
          {error && (
            <div className="text-center mt-4">
              <p className="text-red-500 font-bold">{error}</p>
            </div>
          )}
          {userData && <UserCard userData={userData} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
