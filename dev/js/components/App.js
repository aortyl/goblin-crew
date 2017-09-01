import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Game from '../containers/game'
require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="App-header">
            <h2>Goblin Crew</h2>
        </div>
        <Game />
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
