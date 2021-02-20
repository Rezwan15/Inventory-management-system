import React, { Component } from 'react';
import Filters from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let PRODUCTS = {
    '1': {id: 1, category: '100', price: '$80,Thanapara', name: 'Noodles'},
    '2': {id: 2, category: '200', price: '$50,Thanapara', name: 'Maggi Soup'},
    '3': {id: 3, category: '50', price: '$50,Thanapara', name: 'Jonson Face Wash'},
    '4': {id: 4, category: '40', price: '$99,Dhaka', name: 'Garnier Face Wash'},
    '5': {id: 5, category: '250', price: '$30,Dhaka', name: 'Nutty Biscuits'},
    '6': {id: 6, category: '500', price: '$10,Dhaka', name: 'Pran Chips'}
 };

 class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : "" ,
            products : PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }
    handleFilter(filterInput) {
        this.setState(filterInput)
   }

   handleSave(product){
    if (!product.id){
        product.id = new Date().getTime()
    }
    this.setState((prevState)=>{
        let products = prevState.products
        products[product.id] = product
        return {products}
    });
}

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }
   

    render(){
        return(
            <div>
                <h1>My Inventory</h1>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={this.state.products}
                   filterText={this.state.filterText}
                   onDestroy={this.handleDestroy}> </ProductTable>
                <ProductForm onSave={this.handleSave} ></ProductForm>
            </div>
            );
        }
 }

 export default Product;
