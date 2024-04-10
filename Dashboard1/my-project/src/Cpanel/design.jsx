import React from "react";
import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from '../component/dummy'

function Design() {
  return (
    <div className="ml-72 mt-24">
      <h1 className="text-3xl font-semibold">
        Check Website Name <span className="text-violet-600">Availability</span>
      </h1>
      <p className="text-xl">Search for a website name</p>
<div className="flex">


      <Input color="secondary" className='p-4 w-72 mt-8 ' placeholder="search" startContent={<BsSearch className="text-default-400 "  size={20} /> }></Input>
      <Autocomplete
  
    
      defaultItems={animals}
      labelPlacement="outside"
      className="max-w-xs"
      disableSelectorIconRotation
   
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
      </div>
    </div>
  );
}

export default Design;
