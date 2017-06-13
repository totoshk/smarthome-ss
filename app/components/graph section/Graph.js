const React = require('react');
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';



class Graph extends React.Component {
    render () {
        
        return (
            <section className='graphics clearfix'>
                <h3 className='graphics__title'>Расход электроэнергии</h3>
                <p>Расход электроэнергии за июнь</p>
                {console.log(this.props.data)}
                <AreaChart width={600} height={200} data={this.props.data} syncId="anyId"
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
                <p>Расход электроэнергии за май</p>
                <AreaChart width={600} height={200} data={this.props.data} syncId="anyId"
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                </AreaChart>
            </section>
        )
    }
};

module.exports = Graph;