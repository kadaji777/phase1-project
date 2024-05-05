import React from 'react';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map((bot) => (
        <div className="bot-army-card" key={bot.id}>
          <div className="bot-army-info">
            <h3>{bot.name}</h3>
            <button onClick={() => onRelease(bot.id)}>Release</button>
            <button onClick={() => onDischarge(bot.id)}>Discharge</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
