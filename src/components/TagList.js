import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags, setPerPage, setCurrentPage, toggleSortOrder, setLoading } from '../store/tagListSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TagListInput from './TagListInput';
import SortToggleButton from './SortToggleButton';
import TagListItems from './TagListItems';
import PaginationButtons from './PaginationButtons';
import classes from "./TagList.module.css";

const TagList = () => {
  const dispatch = useDispatch();
  const { tags, perPage, currentPage, totalPages, sortBy, loading } = useSelector(state => state.tagList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true)); 
        await dispatch(fetchTags());
        dispatch(setLoading(false)); 
      } catch (error) {
        console.error("Error fetching tags:", error);
        dispatch(setLoading(false)); 
      }
    };

    fetchData();
  }, [dispatch, perPage, currentPage, sortBy]);

  const handlePerPageChange = (value) => {
    dispatch(setPerPage(value));
    dispatch(setCurrentPage(1));
  };

  const handleToggleSortOrder = () => {
    dispatch(toggleSortOrder());
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (_, page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={classes.container}>
      <h2>Popular Tags:</h2>
      <TagListInput value={perPage} onChange={handlePerPageChange} />
      <SortToggleButton onClick={handleToggleSortOrder} />
      <ul className={classes.tagList}>
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <TagListItems tags={tags} />
        )}
      </ul>
      <PaginationButtons totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default TagList;