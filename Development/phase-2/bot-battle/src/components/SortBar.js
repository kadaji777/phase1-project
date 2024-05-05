import React from 'react';

const SortBar = ({ setSortBy, setFilterClasses }) => {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilterClasses((prev) => [...prev, value]);
    } else {
      setFilterClasses((prev) => prev.filter((c) => c !== value));
    }
  };

  return (
    <div className="sort-bar">
      <button onClick={() => setSortBy('health')}>Sort by Health</button>
      <button onClick={() => setSortBy('damage')}>Sort by Damage</button>
      <button onClick={() => setSortBy('armor')}>Sort by Armor</button>
      <div className="filter-classes">
        {classes.map((cls) => (
          <label key={cls}>
            <input
              type="checkbox"
              value={cls}
              onChange={handleFilterChange}
            />
            {cls}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortBar;
