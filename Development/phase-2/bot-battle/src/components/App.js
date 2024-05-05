import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Bot Battlr</h1>
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/army" element={<YourBotArmy />} />
          <Route path="/bots/:botId" element={<BotSpecs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
