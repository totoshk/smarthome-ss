const React = require('react');
const Navbar = require('./navigation/Navbar');
const Header = require('./header/Header');
const MainContent = require('../layouts/MainContent');
const CamerasPage = require('../pages/Cameras');
const HomePage = require('../pages/Home');
const DevicesPage = require('../pages/Devices');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;



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
            <Route path='/devices' component={DevicesPage} />
          </MainContent>
        </div>
      </Router>
        
    )
  }
}

module.exports = App;

// здесь хранить данніе и передавать их в компонент через пропс