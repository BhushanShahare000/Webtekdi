import React from "react";
import {
  Tooltip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import Logo from "../assets/webtekdi2.png";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import {signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase"
import {toast} from 'react-toastify';
const LoginPage = () => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = async (e)=>{
e.preventDefault();
try{
const userCredential = await signInWithEmailAndPassword(auth,email,password);
console.log(userCredential);
const user = userCredential.user;
localStorage.setItem('token' , user.accessToken);
localStorage.setItem('user',JSON.stringify(user));
navigate('/')
}catch(error){
console.error(error);
alert("please create your account ");
}
}



  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center  bg-[#3F2F5D] h-[100vh] ">
      <Card className="w-[450px] bg-[#796ecc] p-2 m-2 shadow-lg shadow-slate-600">
        <CardHeader className="flex flex-col  font-bold ">
          <Image src={Logo} alt="" className="h-28 w-48" />
        </CardHeader>
        <form onSubmit={handleSubmit}>
        <div className="flex items-center flex-col gap-2 mb-4 justify-center ">
          <Input
            type="email"
            label="Email"
            className="m-2 w-72 text-4xl sm:w-96"
            required
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />

          <Input
            className="m-2 w-72 text-4xl sm:w-96"
            label="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            required value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
            color=""
            type="submit"
            className="m-2 w-m-2 w-72  sm:w-96 bg-[#3F2F5D] text-white font-semibold"
          >
            Log In
          </Button>
    
          <p className="text-white">
              Create your Account ? 
            <a href="/register-in" className=" ml-2 underline">
               Click here
            </a> 
          </p>
        </div>
        </form>

        <Divider />

        <CardFooter className="flex justify-center items-center ">
    
          <Button
            startContent={<FaGoogle />}
            className="m-2 w-m-2 w-72  sm:w-96  font-semibold bg-slate-50 text-black"
        
          >
            Log In With Google
          </Button>
        </CardFooter>
      </Card>
    
    </div>
  );
};
export default LoginPage;
