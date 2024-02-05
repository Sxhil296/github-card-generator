import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  const handleGenerateCard = () => {
    fetchData();
  };

  return (
    <>
      <div className={`app-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
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

          {userData && <UserCard userData={userData} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
