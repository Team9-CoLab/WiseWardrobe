import React, { useState } from 'react';

function New() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="option1"
          checked={selectedOptions.includes('option1')}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          value="option2"
          checked={selectedOptions.includes('option2')}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="checkbox"
          value="option3"
          checked={selectedOptions.includes('option3')}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
      <p>Selected options: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default New;