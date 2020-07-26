import React from 'react';

class SateliteInfo extends React.Component {
        
    render() {
        return (
            <div>
                <h1>{this.props.sateliteInfo.sateliteSelected.name}</h1>
                <h2>{this.props.sateliteInfo.sateliteSelected.description}</h2>
            </div>
        );
    }
}

export default SateliteInfo;