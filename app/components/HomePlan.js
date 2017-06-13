const React = require('react');

class HomePlan extends React.Component {
    render () {
        const homePlanImg = require('../images/svg/home-plan.svg');
        return (
            <section className='home-plan'>
                <h3 className='home-plan__title'>My Home</h3>
                <img src={homePlanImg} alt="home plan"/>
            </section>
        )
    }
};

module.exports = HomePlan;