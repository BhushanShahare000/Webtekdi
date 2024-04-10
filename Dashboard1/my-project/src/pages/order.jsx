import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {Link} from 'react-router-dom';
function Order() {
  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home"><Link to='/menu'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem key="order">Order</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

export default Order;
