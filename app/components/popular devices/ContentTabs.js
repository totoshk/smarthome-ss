const React = require('react');

class ContenTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 0
        };
        this.updateSelectTab = this.updateSelectTab.bind(this)
    };

    updateSelectTab (tabItem){
        this.setState({selectedTab: tabItem}
        );
    };

    render() {
        const tabsLinks = ['Popular', 'Tab Name 2', 'Tab Name 3'];
        return(
            <ul className='popular-devices__tabs'>
                {tabsLinks.map((item, index) => <li className={'popular-devices__tabs-name ' + (index === this.state.selectedTab ? 'active-tab' : '')}
                        onClick={this.updateSelectTab.bind(null, index)}key={item}>{item}</li>)}
            </ul>
        )
    };
};

module.exports = ContenTabs;
// сравнение по индексу