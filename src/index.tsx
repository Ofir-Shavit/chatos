import ReactDom from 'react-dom';
import React from 'react';

import './Assets/index.less';
import Login from './Components/Login/Login';

const App = () => {
    return (
        <div className="container">
            <Login/>
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('#root'));
