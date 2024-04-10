import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../Context";

function Cart() {
  
  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home"><Link to="/menu">Home</Link></BreadcrumbItem>
        <BreadcrumbItem key="cart">Cart</BreadcrumbItem>
      </Breadcrumbs>
<div>
<section>
  <ProductConsumer>
    {value =>{
      if(value.Cart.length>0){
        return (
          <div>
            <h1>your cart</h1>
            <div className="">
              <strong>Name </strong>
            </div>
            {value.Cart.map(cartData =>{
              return(
                <div>{cartData.img}{cartData.title}
                <button>Remove</button>
                </div>
                
              )
            })}
          </div>
        )
      }else{
        return(
          <div>Empty</div>
        )
      }
    }}
  </ProductConsumer>
</section>
 
</div>

    </div>
  );
}

export default Cart;
