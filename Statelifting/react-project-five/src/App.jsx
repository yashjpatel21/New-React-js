import React, { useState } from 'react';
import './App.css'

import Card from './component/Card'

const App = () => {
    const [name, setName] = useState('');

    return (
        <div>
           
            <Card name={name} setName={setName} />
        </div>
    );
};

export default App
