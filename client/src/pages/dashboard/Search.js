import React from 'react';
import { useSearch, usePagination } from './../../redux/hooks';

import Dropdown from "./../../atoms/Dropdown"
import Input from './../../atoms/Input';

const Search = () => {
  const { setSearchTerm, searchTerm, isActive } = useSearch();
  const { setPageReset } = usePagination();
  const handleChange = (e) => {
    setPageReset(true);
    setSearchTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <Input
        style={{ marginLeft: "30px ", marginTop: "20px" }}
        as="select"
        label="Due Date"
        id={'search-todo-tag-input'}
        type="text"
        value={isActive ? searchTerm : ''}
        onChange={handleChange}
        autoComplete="off"
        pClassName="ml-4"
      >
        <option>{""}</option>
        <option>Overdue</option>
        <option>Upcoming</option>
        <option>Todays</option>
      </Input>
    </React.Fragment>

  );
};

export default Search;
