import React,{Component} from 'react';
import {lists} from "./component/dummy";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        products :lists,
        detailsproduct : prodInDetails,
        Cart :[],
        cartSubTotal: 0
    }
addToCart=(id)=>{
let tempProduct =[...this.state.products];
const index = tempProduct.indexOf(this.getItem(id));
const product = tempProduct[index];
product.count =1;
product.price =product.price;
product.total =price;
this.setState(()=>{
    return {products :tempProduct, Cart : [...this.state.Cart , product]}
})
}
    render(){
return(
    <ProductContext.Provider value={{...this.state, addToCart: this.addToCart}}> 
    {this.props.children}
     </ProductContext.Provider>
)
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

