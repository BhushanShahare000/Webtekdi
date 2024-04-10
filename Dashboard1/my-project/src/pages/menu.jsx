import React from "react";
import { Breadcrumbs, BreadcrumbItem,Card,CardBody,Image,Button,CardFooter } from "@nextui-org/react";
import { lists } from "../component/dummy";
import{MdShoppingCart} from "react-icons/md"
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductConsumer } from "../Context";

function Menu({search}) {

  const [restro, setrestro] = useState(lists);
  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="menu">All Templates</BreadcrumbItem>
      </Breadcrumbs>



 
      <div className="gap-4 grid grid-cols-2 m-4  mt-6 sm:grid-cols-3">
      { restro.filter((restro) => restro.title.toLowerCase().includes(search.toLowerCase())).map((item, id) => (
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
              <Button  isPressable className="bg-white dark:bg-black hover:bg-slate-300" onClick={()=>{value.addToCart(id)}}>
            <MdShoppingCart className="text-xl " />Add To Cart</Button>
            <Button  variant="shadow" className=" text-white bg-[#7D2FCA]"><a href={item.live} >Live preview </a></Button>
            </div>
          </CardFooter>
        </Card>
      ))}

    </div>

    </div>
  );
}

export default Menu;
