import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux'; 
import store from '../store/store';
import TagListItems from "../components/TagListItems";
import { fetchTags } from '../store/tagListSlice';

export default {
    title: "TagListItems",
    component: TagListItems,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

export const Default = (args) => {
    const dispatch = useDispatch();
    const { tags } = useSelector(state => state.tagList);

    useEffect(() => {
        dispatch(fetchTags()); 
    }, [dispatch]);

    return <TagListItems {...args} tags={tags} />;
};