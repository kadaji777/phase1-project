import React from 'react';

const BotCard = ({ bot, onClick, onEnlist, isEnlisted }) => {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        {!isEnlisted && (
          <button onClick={(e) => {
            e.stopPropagation();
            onEnlist();
          }}>
            Enlist
          </button>
        )}
      </div>
    </div>
  );
};

export default BotCard;
