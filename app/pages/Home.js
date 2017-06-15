const React = require('react');
const Navbar = require('../components/navigation/Navbar');
const Header = require('../components/header/Header');
const PopularDevices = require('../components/popular devices/PopularDevices');
const MainContent = require('../layouts/MainContent');
const GraphSection = require('../components/graph section/GraphSection');
const HomePlan = require('../components/home plan/HomePlan');

const data = [
            {name: '01', uv: 4000, pv: 2400, amt: 2400},
            {name: '02', uv: 3000, pv: 1398, amt: 2210},
            {name: '03', uv: 2000, pv: 9800, amt: 2290},
            {name: '04', uv: 2780, pv: 3908, amt: 2000},
            {name: '05', uv: 1890, pv: 4800, amt: 2181},
            {name: '06', uv: 2390, pv: 3800, amt: 2500},
            {name: '07', uv: 3490, pv: 4300, amt: 2100},
            {name: '08', uv: 500, pv: 140, amt: 140},
            {name: '09', uv: 3000, pv: 1398, amt: 2210},
            {name: '10', uv: 2000, pv: 9800, amt: 2290},
            {name: '11', uv: 2780, pv: 3908, amt: 2000},
            {name: '12', uv: 1890, pv: 4800, amt: 2181},
            {name: '13', uv: 2390, pv: 3800, amt: 2500},
            {name: '14', uv: 3490, pv: 4300, amt: 2100},
            {name: '15', uv: 180, pv: 580, amt: 580},
            {name: '16', uv: 3000, pv: 1398, amt: 2210},
            {name: '17', uv: 2000, pv: 9800, amt: 2290},
            {name: '18', uv: 2780, pv: 3908, amt: 2000},
            {name: '19', uv: 1890, pv: 4800, amt: 2181},
            {name: '20', uv: 2390, pv: 3800, amt: 2500},
            {name: '21', uv: 3490, pv: 4300, amt: 2100},
            {name: '22', uv: 5821, pv: 1200, amt: 1256},
            {name: '23', uv: 3000, pv: 1398, amt: 2210},
            {name: '24', uv: 2000, pv: 9800, amt: 2290},
            {name: '25', uv: 2780, pv: 3908, amt: 2000},
            {name: '26', uv: 1890, pv: 4800, amt: 2181},
            {name: '27', uv: 2390, pv: 3800, amt: 2500},
            {name: '28', uv: 3490, pv: 4300, amt: 2100},
];

class HomePage extends React.Component {
    render () {
        return (
            <MainContent>
                {console.log(this.props)}
                <PopularDevices />
                <GraphSection data={data}/>
                <HomePlan />
            </MainContent>
        )
    }
};

module.exports = HomePage;