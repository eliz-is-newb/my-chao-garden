import Link from "next/link";
import GlobalNav from "../components/GlobalNav"
import Folders from "../components/Folders";
import Notes from "../components/Notes";

export default function Welcome(){
    return (
       <>
       <div className=" flex flex-row gap-2 -ml-5 mt-2 ">
         
      <GlobalNav />

      <Notes /> 
      <Folders />
      
      </div>
       </>
    )}