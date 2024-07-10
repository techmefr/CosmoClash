import { useEffect, useState } from "react";
import axios from "axios";
import "../../components/ui/CustomCard/customCard.css";

export default function GamePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/users");
        setUserData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="cards">
      <div className="card black">
        <p className="tip">Nom d&apos;utilisateur</p>
        <p className="second-text">{userData.username}</p>
      </div>
      <div className="card black">
        <p className="tip">Alliance</p>
        <p className="second-text">{userData.alliance_name}</p>
      </div>
      <div className="card black">
        <p className="tip">Nombre de planètes</p>
        <p className="second-text">{userData.planets_count}</p>
      </div>
      <div className="card black">
        <p className="tip">Nombre de vaisseaux</p>
        <p className="second-text">{userData.ships_count}</p>
      </div>
      <div className="card black">
        <p className="tip">Énergie</p>
        <p className="second-text">{userData.energy}</p>
      </div>
      <div className="card black">
        <p className="tip">Monnaie</p>
        <p className="second-text">{userData.money}</p>
      </div>
      <div className="card black">
        <p className="tip">Matériel</p>
        <p className="second-text">{userData.material}</p>
      </div>
    </div>
  );
}
