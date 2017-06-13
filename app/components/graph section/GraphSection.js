const React = require('react');
const Graph = require('./Graph');



class GraphSection extends React.Component {
    render () {
        return (
            <Graph  data={this.props.data}/>
        )
    }
};

module.exports = GraphSection;