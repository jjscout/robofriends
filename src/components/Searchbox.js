import React from 'react'

const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div classname='pa2'>
      <input
        className='pa3 ba b--green bg lighteset-blue'
        type='search'
        placeholder='search robots' 
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;