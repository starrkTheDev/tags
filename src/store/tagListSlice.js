import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
  perPage: 10,
  currentPage: 1,
  totalPages: 1,
  sortBy: 'desc',
  loading: false,
};

export const tagListSlice = createSlice({
  name: 'tagList',
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    toggleSortOrder: (state) => {
      state.sortBy = state.sortBy === 'desc' ? 'asc' : 'desc';
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setTags, setPerPage, setCurrentPage, setTotalPages, toggleSortOrder, setLoading } = tagListSlice.actions;

export const fetchTags = () => async (dispatch, getState) => {
  const { perPage, currentPage, sortBy } = getState().tagList;
  const API_URL = `https://api.stackexchange.com/2.3/tags?order=${sortBy}&sort=popular&site=stackoverflow&pagesize=${perPage}&page=${currentPage}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(setTags(data.items));
    dispatch(setTotalPages(Math.ceil(data.total / perPage)));
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};

export default tagListSlice.reducer;