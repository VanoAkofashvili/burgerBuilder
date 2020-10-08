import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, does not have to be class
    // componentWillUpdate() {
    //     console.log('[OrderSummary] willUpdate')
    // }

    render() {
        const ingredientSummary= Object.keys(this.props.ingredients).map(el => {
            return <li key={el}>
                    <span style={{textTransform: "capitalize"}}>{el}</span>: {this.props.ingredients[el]}
                   </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:</strong> {this.props.price.toFixed(2)} GEL</p>
                <h3>Continue to checkout?</h3>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
    
};

export default OrderSummary;