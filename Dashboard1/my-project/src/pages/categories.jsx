import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem,Card,CardBody,Image,Button,CardFooter } from "@nextui-org/react";
import{MdShoppingCart} from "react-icons/md"
import {Link} from 'react-router-dom';
import Buttonn from "./button";
import {lists} from "../component/dummy"



const Categories = ({search}) => {
  const[items,setItems] = useState(lists)
  const menuItems =[...new Set(lists.map((val)=>val.title))]

  const filterItems= (cat)=>{
    const newItems=lists.filter((newval)=> newval.title===cat);
    setItems(newItems);
  }
  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
      <BreadcrumbItem key="home"><Link to="/menu">Home</Link></BreadcrumbItem>
        <BreadcrumbItem key="dashboard">Categories</BreadcrumbItem>
      </Breadcrumbs>

      <Buttonn menuItems={menuItems} filterItems={filterItems}
      setItems={setItems}/>

      <div className="gap-4 grid grid-cols-2 m-4  mt-6 sm:grid-cols-3">
      {items.map((item, id) => (
        <Card shadow="sm" key={id} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="dark:bg-white dark:text-black p-0 ">
            <Image
              shadow="sm"
              radius=""
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
              <p className="mx-2 font-semibold mt-2">{item.title}</p>
          </CardBody>
          <CardFooter className="text-small justify-between overflow-auto dark:text-black dark:bg-white">
            <b>{item.price}</b>
            <div className="flex items-center gap-2">
              <Button isPressable className="bg-white dark:bg-black hover:bg-slate-300">
            <MdShoppingCart className="text-xl " />Add To Card</Button>
            <Button  variant="shadow" className=" text-white bg-[#7D2FCA]"><a href={item.live} >Live preview </a></Button>
            </div>
          </CardFooter>
        </Card>
      ))}

    </div>
   
    </div>
  );
};

export default Categories;