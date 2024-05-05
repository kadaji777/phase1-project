import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BotSpecs = ({ bots, enlistBot }) => {
  const navigate = useNavigate();
  const { botId } = useParams();
  const bot = bots.find((b) => b.id === parseInt(botId));

  if (!bot) {
    return <div>Bot not found!</div>;
  }

  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default BotSpecs;
