import React from 'react';
import Game from '../containers/game.container'
require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="App-header">
            <h2>Goblin Crew</h2>
        </div>
        <Game />
    </div>
);

export default App;
