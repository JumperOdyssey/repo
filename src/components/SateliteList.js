import React from 'react';

class SateliteList extends React.Component {

    render() {
      return (
        <div>
          <h1>Lista de Satélites</h1>
          <ul>
            {this.props.satelites.map((value, index) => {
                return  <li key={value.id}>
                          <button onClick={() => this.props.showSateliteInfo(value)}>{value.name}</button>
                        </li>
            })}
          </ul>
        </div>
      );
    }
  }

export default SateliteList;