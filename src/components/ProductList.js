import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { Consumer } from '../Context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name='our' title='products' />
                        <div className="row">
                            {/* put here the Consumer which will pass data 
                            from Context as props*/}
                            <Consumer>
                                {context=>{
                                    return context.products.map(product => {
                                        return <Product 
                                            key={product.id} 
                                            product={product} />
                                    })
                                }}                               
                            </Consumer>
                        </div>                        
                    </div>
                </div>
            </React.Fragment>
        // <ProductList />
        );
    }
}

export default ProductList;