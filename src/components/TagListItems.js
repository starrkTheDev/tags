
import React from 'react';
import classes from "./TagList.module.css"; 

const TagListItems = ({ tags }) => {
  return (
    <div className={classes.container}>
      <ul className={classes.tagList}>
        {tags.map(tag => (
          <li className={classes.tagListItem} key={tag.name}>{tag.name} - {tag.count} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TagListItems;