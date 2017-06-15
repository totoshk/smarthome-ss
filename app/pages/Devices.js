const React = require('react');
const Navbar = require('../components/navigation/Navbar');
const Header = require('../components/header/Header');
const MainContent = require('../layouts/MainContent');

class CamerasPage extends React.Component {
    render () {
        return(
            <div className = 'dev-item'>
                <h1>Hello from page with devices list</h1>
            </div>
        )
    }
};

module.exports = CamerasPage;