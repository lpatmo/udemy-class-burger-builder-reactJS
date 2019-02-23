import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransformed:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })

  return (
    <Aux>
     <h3>Your Order </h3>
     <p>Delicious burger with following ingredients:</p>
     <ul>
      {ingredientSummary}
     </ul>
     <p>Continue to checkout?</p>
     <Button buttonType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
     <Button buttonType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
  );
};

export default orderSummary;
