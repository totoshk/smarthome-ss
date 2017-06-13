const React = require('react');
const Navbar = require('./Navbar');
const Header = require('./Header');
const PopularDevices = require('./PopularDevices');
const MainContent = require('./MainContent');
const GraphSection = require('./GraphSection');
const HomePlan = require('./HomePlan');


class App extends React.Component {
  render() {
    return (
        <div className='container clearfix'>
          <Header username='Katerina'/>
          <Navbar />
          <MainContent>
              <PopularDevices />
              <GraphSection />
              <HomePlan />
          </MainContent>
        </div>
    )
  }
}

module.exports = App;

// здесь хранить данніе и передавать их в компонент через пропс