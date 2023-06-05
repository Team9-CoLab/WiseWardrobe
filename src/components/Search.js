
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
const Search = () => {


        const [selectedOption, setSelectedOption] = useState('');
      
        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };

        const [category, setCategory] = useState('');
        const handleCategoryChange = (event) => {
            setCategory(event.target.value);
            };
            const [color, setColor] = useState('');
            const handleColorChange = (event) => {
                setColor(event.target.value);
                };
                const [brand, setbrand]= useState('');
                const handlebrandchange=(event)=>{
                    setbrand(event.target.value);
                };

                const [season, setseason]= useState('');
                const handleseasonchange=(event)=>{
                    setseason(event.target.value);
                };


  return (
    <div>
         {/* searchbox */}
    <section className='searchbox searchsection'> 
    <FontAwesomeIcon icon= {faSearch} />
    <input type="text" placeholder='search colset'  className="no-border"/>
        </section>
   <section>

   <select value={selectedOption} onChange={handleOptionChange} className='w-14'>
        <option value="" >Type</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {/* <p>Selected option: {selectedOption}</p> */}
      <select value={category} onChange={handleCategoryChange} className='w-18'>
        <option value="" >Category</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>


        <select value={brand} onChange={handlebrandchange} className='w-16'>
        <option value="" >Brand</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>


        <select value={season} onChange={handleseasonchange} className='w-20'>
        <option value="" >Season</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>

            <select value={color} onChange={handleColorChange} className='w-16'>
        <option value="" >Color</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>

   </section>
    </div>
  )
}

export default Search
