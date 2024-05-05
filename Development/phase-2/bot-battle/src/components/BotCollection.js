import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setBots(data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading bots...</p>;
  if (hasError) return <p>Failed to load bots. Please try again later.</p>;

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <Link to={`/bots/${bot.id}`} className="bot-link">
            <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
            <h3 className="bot-name">{bot.name}</h3>
          </Link>
          <button onClick={() => enlistBot(bot)} className="enlist-button">
            Enlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
