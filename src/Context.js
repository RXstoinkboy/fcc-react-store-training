import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

// const ProductContext = React.createContext();
// always returns us:
// Provider
// Consumer
// or we can do it by object destruturing:
const {Provider, Consumer} = React.createContext();

class Context extends Component {
    constructor(props){
        super(props);
        this.state = {
            // products: storeProducts, - if we do it like that we create reference to original data
            // each manipulation on state will also change original data
            // so we have to clone data before using it
            // probably could also use _lodash for that
            products: [],
            detailProduct: detailProduct
        }
    }
    // clone products to be used in state

    componentDidMount(){
        this.setProducts();
    }

    setProducts =()=>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
            this.setState(()=>{
                return {products: tempProducts}
            })
        })
    }
    // if I use arrow function, I to not have to bind this
    // it is the same as using handleDetail(){}
    // and then this.handleDetail = this.handleDetail.bind(this)

    // method render details about a proper item
    getItem =(id)=>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail =()=>{
        console.log('hello from detail')
    }

    addToCart =(id)=>{
        console.log(`hello from add to cart. Id is ${id}`)
    }

        render() {
            return (
                <Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}>
                    {this.props.children}
                </Provider>
            );
        }
}

export { Context, Consumer }

//  CONTEXT API WORKS AS STATE MANAGEMENT SYSTEM / SIMILAR TO REDUX
// 1. get Provider and Consumer by React.createContext();
// 2. class component Context which returns Provider with data as 'value'
//      if I want to pass state from Context to its children, I pass it as object
//      so it should be: value={{state: this.state}}
//      in children you access exampleProp like: this.state.exampleProp
// 3. pass this.props.children in Provider
// 4. export Provider and Consumer
// 5. Provider should be used high enough so you can pass state 
//      wherever you need it
// 6. Provider should wrap all Components which should receive data 
//      (in this case, Provider is in index.js and it wraps App, 
//      so basically all possible components - global provider)
// 7. Consumer should be included in components which have to receive data
//      from our global (or smaller scope if you need it) provider