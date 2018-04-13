import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="text-center">Secret Operatives List</h1>
        <ol>
            <li>Jim</li>
            <li>Kim</li>
            <li>Tim</li>
            <li>Lim</li>
            <li>Hank</li>
            <li>Sarah</li>
            <li>George</li>
            <li>Heather</li>
        </ol>
    </div>
);

export default auth(OpList);
