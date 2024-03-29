import classes from './CartItem.module.css';


export const CartItem = (props) => {

  return(
    <li className={classes['cart-item']}>
        <div>
          <h2>
            {props.name}
          </h2>
          <div className={classes.summary}>
            <span className={classes.price}>{props.price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.action}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  )
}