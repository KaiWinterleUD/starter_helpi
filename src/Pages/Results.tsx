import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Pages.css';
import './questions.css';

interface ResultsProp {
    handlePage: (page: string) => void;
}

const Results: React.FC<ResultsProp> = ({ handlePage }) => { /* Handes page changes */
    return (
        <div></div>
    );
}

export default Results;