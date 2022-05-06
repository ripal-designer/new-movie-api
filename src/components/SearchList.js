import React from 'react';
import MovieDeail from './MovieDeail';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <MovieDeail key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;