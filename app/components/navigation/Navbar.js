const React = require('react');
const PropTypes = require('prop-types');
const NavLink = require('react-router-dom').NavLink;

const navLinks = [
            {name: 'Home', iconClass: 'main-nav-item__icon--home'},
            {name: 'Settings', iconClass: 'main-nav-item__icon--settings'},
            {name: 'Devices', iconClass: 'main-nav-item__icon--devices'},
            {name: 'Cameras', iconClass: 'main-nav-item__icon--cameras'},
            {name: 'Scenarious', iconClass: 'main-nav-item__icon--scenarious'},
            {name: 'Security', iconClass: 'main-nav-item__icon--security'}
];

function Navbar () {
    return (
        <nav className='main-nav'>
            <NavLink className='main-nav-item' exact activeClassName = 'active' to='/'>
                <span className='main-nav-item__icon main-nav-item__icon--home'></span>
                <span className='main-nav-item__name'>Home</span>
            </NavLink>
            <NavLink className='main-nav-item' activeClassName = 'active' to='/settings'>
                <span className='main-nav-item__icon main-nav-item__icon--settings'></span>
                <span className='main-nav-item__name'>Settings</span>
            </NavLink>
            <NavLink className='main-nav-item' activeClassName = 'active' to='/devices'>
                <span className='main-nav-item__icon main-nav-item__icon--devices'></span>
                <span className='main-nav-item__name'>Devices</span>
            </NavLink>
            <NavLink className='main-nav-item' activeClassName = 'active' to='/cameras'>
                <span className='main-nav-item__icon main-nav-item__icon--cameras'></span>
                <span className='main-nav-item__name'>Cameras</span>
            </NavLink>
            <NavLink className='main-nav-item' activeClassName = 'active' to='/scenarious'>
                <span className='main-nav-item__icon main-nav-item__icon--scenarious'></span>
                <span className='main-nav-item__name'>Scenarious</span>
            </NavLink>
            <NavLink className='main-nav-item' activeClassName = 'active' to='/security'>
                <span className='main-nav-item__icon main-nav-item__icon--security'></span>
                <span className='main-nav-item__name'>Security</span>
            </NavLink>
        </nav>
    )
};




// class Navbar1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedNavItem: 'Home'
//         };
//         this.updateNavItem = this.updateNavItem.bind(this);
//     };

//     updateNavItem (navItem) {
//         this.setState(function () {
//             return {
//                 selectedNavItem: navItem
//             }
//         });
//     };

//     render () {
//         const navLinks = [
//             {name: 'Home', iconClass: 'main-nav-item__icon--home', link:'/'}, 
//             {name: 'Settings', iconClass: 'main-nav-item__icon--settings', link:'/settings'},
//             {name: 'Devices', iconClass: 'main-nav-item__icon--devices', link:'/devices'},
//             {name: 'Cameras', iconClass: 'main-nav-item__icon--cameras', link:'/cameras'},
//             {name: 'Scenarious', iconClass: 'main-nav-item__icon--scenarious', link:'/scenarious'},
//             {name: 'Security', iconClass: 'main-nav-item__icon--security', link:'/security'}
//         ]
//         return (
//             <nav className='main-nav'>
//                 {
//                     navLinks.map((item) => {
//                         return (
//                             <NavLink className={'main-nav-item ' + (activeClassName = 'active')} key={item.name} to={item.link}>
//                                 <span className={'main-nav-item__icon '+item.iconClass}></span>
//                                 <span className='main-nav-item__name'>{item.name}</span>
//                             </NavLink>
//                         )
//                     })
//                 }
//             </nav>
//         )
//     };
// };

module.exports = Navbar;