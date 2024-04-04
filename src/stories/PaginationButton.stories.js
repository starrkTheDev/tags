// import PaginationButtons from "../components/PaginationButtons";

// export default {
//     title: "PaginationButtons",
//     component: PaginationButtons,
// };

// export const Default = () => {
//     return <PaginationButtons/>;
// };

import React, { useState } from 'react';
import PaginationButtons from "../components/PaginationButtons";

export default {
    title: "PaginationButtons",
    component: PaginationButtons,
};

export const Default = () => {
    const [currentPage, setCurrentPage] = useState(1); 

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage); 
    };

    const totalPages = 10; 

    return (
        <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
    );
};