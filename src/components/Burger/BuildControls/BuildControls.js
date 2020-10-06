import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)} GEL</strong></p>
        {controls.map(el => {
            return <BuildControl
                disabled={props.disabled[el.type]}
                key={el.label} 
                label={el.label}
                added={() => props.ingredientAdded(el.type)}
                removed={()=>props.ingredientRemoved(el.type )}
                />
        })}
    </div>
);

export default buildControls;