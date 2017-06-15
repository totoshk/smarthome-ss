const React = require('react');
const ContenTabs = require('./ContentTabs');

const defaultStatus = "it's OK";



class PopularDevices extends React.Component {
    render () {
        const devicesData = [
            {name: 'Cameras', imageSrc: require('../../images/dev-camera.png'), status: "it's OK"},
            {name: 'Cleaner', imageSrc: require('../../images/dev-cleaner.png'), status: "it's OK"},
            {name: 'Wi-Fi', imageSrc: require('../../images/dev-wifi.png'), status: "it's OK"},
            {name: 'Water', imageSrc: require('../../images/dev-water.png'), status: "it's OK"},
            {name: 'Water1', imageSrc: require('../../images/dev-water.png'), status: "it's OK"},
            {name: 'Water2', imageSrc: require('../../images/dev-water.png'), status: "Ахтунг! Горим!"},
        ];
        return (
            <section className='popular-devices clearfix'>
                <ContenTabs />
                {devicesData.map(item => {
                    return(
                        <div className={'popular-devices__item ' +'popular-devices__item-' + item.name.toLowerCase()} key={item.name}>
                            <div className='popular-devices__item-img'>
                                <img src={item.imageSrc} alt={item.name + " device"}/>
                            </div>
                            <div className='popular-devices__item-descr'>
                                <p className='popular-devices__item-name'>{item.name}</p>
                                <p className={'popular-devices__item-status ' + (item.status !== defaultStatus ? 'popular-devices__item-status--warn' : '')}>{item.status}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
};

module.exports = PopularDevices;

//  "it's OK" -- вынести в const