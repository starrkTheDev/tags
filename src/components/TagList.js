import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags, setPerPage, setCurrentPage, toggleSortOrder } from '../store/tagListSlice';

import classes from "./TagList.module.css";

const TagList = () => {
  const dispatch = useDispatch();
  const { tags, perPage, currentPage, totalPages, sortBy } = useSelector(state => state.tagList);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch, perPage, currentPage, sortBy]);

  const handlePerPageChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      dispatch(setPerPage(value));
      dispatch(setCurrentPage(1));
    }
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleToggleSortOrder = () => {
    dispatch(toggleSortOrder());
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={classes.container}>
      <h2>Popular Tags:</h2>
      <div className={classes.inputContainer}>
        <label className={classes.inputLabel} htmlFor="perPage">Items per page:</label>
        <input 
          className={classes.inputField}
          type="number" 
          id="perPage" 
          name="perPage" 
          value={perPage} 
          onChange={handlePerPageChange} 
          min="1"
        />
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={handleToggleSortOrder}>Toggle Sort Order</button>
      </div>
      <ul className={classes.tagList}>
        {tags.map(tag => (
          <li className={classes.tagListItem} key={tag.name}>{tag.name} - {tag.count} posts</li>
        ))}
      </ul>
      <div className={classes.paginationContainer}>
        <button className={classes.paginationButton} onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
        <button className={classes.paginationButton} onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
      </div>
    </div>
  );
};

export default TagList;
