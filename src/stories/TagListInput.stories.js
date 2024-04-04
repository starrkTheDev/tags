import React, { useState } from 'react';
import TagListInput from "../components/TagListInput";

export default {
    title: "TagListInput",
    component: TagListInput,
};

export const Default = () => {
    const [value, setValue] = useState("10");

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return <TagListInput value={value} onChange={handleChange} />;
};