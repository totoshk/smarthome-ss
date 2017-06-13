import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';



class MainContent extends React.Component {
    render () {
        return (
            <main className='main-content'>
                
                {this.props.children}
            </main>
        )
    };
};

module.exports = MainContent;