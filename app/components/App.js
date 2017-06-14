const React = require('react');
const Navbar = require('./navigation/Navbar');
const Header = require('./header/Header');
const PopularDevices = require('./popular devices/PopularDevices');
const MainContent = require('./MainContent');
const GraphSection = require('./graph section/GraphSection');
const HomePlan = require('./home plan/HomePlan');
const CamerasPage = require('../pages/Cameras');
const HomePage = require('../pages/Home');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
// import {Provider} from 'react-redux';
// import store, {history} from '../store';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container clearfix'>
          <Header username='Katerina'/>
          <Navbar />
          
          <MainContent>
            <Route path='/' exact component={HomePage} />
            <Route path='/cameras' component={CamerasPage} />
          </MainContent>
        </div>
      </Router>
        
    )
  }
}

module.exports = App;

// здесь хранить данніе и передавать их в компонент через пропс