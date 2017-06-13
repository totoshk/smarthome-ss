const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavItem: 'Home'
        };
        this.updateNavItem = this.updateNavItem.bind(this);
    };

    updateNavItem (navItem) {
        this.setState(function () {
            return {
                selectedNavItem: navItem
            }
        });
    };

    render () {
        const navLinks = [
            {name: 'Home', iconClass: 'main-nav-item__icon--home'}, 
            {name: 'Settings', iconClass: 'main-nav-item__icon--settings'},
            {name: 'Devices', iconClass: 'main-nav-item__icon--devices'},
            {name: 'Cameras', iconClass: 'main-nav-item__icon--cameras'},
            {name: 'Scenarious', iconClass: 'main-nav-item__icon--scenarious'},
            {name: 'Security', iconClass: 'main-nav-item__icon--security'}
        ]
        return (
            <nav className='main-nav'>
                {
                    navLinks.map((item) => {
                        return (
                            <a href="#" className={'main-nav-item ' + (item.name === this.state.selectedNavItem ? 'active' : null)} key={item.name} onClick={this.updateNavItem.bind(null, item.name)}>
                                <span className={'main-nav-item__icon '+item.iconClass}></span>
                                <span className='main-nav-item__name'>{item.name}</span>
                            </a>
                        )
                    })
                }
            </nav>
        )
    };
};

module.exports = Navbar;