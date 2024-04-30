import React from 'react';
import { useState } from 'react';

function Tabs({satelite}){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='container'>
            <div className='block-tabs'>
                <div className={toggleState === 1 ? 'tabs active-tabs':'tabs'} onClick={() => toggleTab(1)}>
                    <h1>Descripción</h1>
                </div>
                <div className={toggleState === 2 ? 'tabs active-tabs':'tabs'} onClick={() => toggleTab(2)}> 
                    <h1>Ficha técnica</h1>
                </div>
            </div>
            <div className='content-tabs'>
                <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                    <h1>{satelite.name}</h1>
                    <h2>{satelite.description}</h2>
                </div>
                <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                    <h2>DETALLE FICHA TECNICA</h2>
                </div>
            </div>
        </div>
    )
}

export default Tabs;