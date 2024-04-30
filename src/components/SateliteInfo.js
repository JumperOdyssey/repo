import React from 'react';
import Tabs from '../functions/Tabs.js';

class SateliteInfo extends React.Component {

    render() {
        return (
            <div>
                <Tabs satelite={this.props.sateliteInfo.sateliteSelected}/>
            </div>
        );
    }
}

export default SateliteInfo;