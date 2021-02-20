import React, { Component } from 'react';
import {Form} from "reactstrap"

const RESET_VALUES = {id: '', name: '', category: '', price: ''}

class ProductForm extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
   

    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); 
   }
   
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
            })
    }

        render(){
        return (
            <div>
            <h2>Add New Product</h2>
            <div className="col-md-6">
                <form> 
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" id="productName" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input className="form-control" id="productCategory" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                    </div>
                    <div className="form-group">
                        <label>Price and address</label>
                        <input className="form-control" id="productPrice" type="text" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                    </div>
                
                    <button className="btn btn-primary" type="button" onClick={this.handleSave}>Save</button>
                </form>
            </div>
        </div>
        );  
    }
}



export default ProductForm