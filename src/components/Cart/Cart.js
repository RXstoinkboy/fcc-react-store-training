import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { Consumer } from '../../Context';

class Cart extends Component {
    render() {
        return (
            <section>
                <Consumer>
                    {context =>{
                        const {cart} = context;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Title name='your' title='cart' />
                                    <CartColumns />                                    
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </Consumer>
            </section>
        );
    }
}

export default Cart;