const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

class Header extends React.Component {
    render () {
        return (
            <header className='main-header clearfix'>
                <div className='header-login'>
                    <p className='header-ligin__greeting'> Welcome home, <span className='header-login__username'>{this.props.username}</span></p>
                </div>
            </header>
        )
    };
};

Header.propTypes = {
    username: PropTypes.string.isRequired
}

module.exports = Header;