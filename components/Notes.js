import Link from "next/link";
import Avatar from "./Avatar";


export default function Notes(){
    return (
       <>
       <div className="flex flex-wrap gap-4 ml-40 mt-2">

         {/* pinned notes */}
       <div className="card card-compact  w-40 h-fit bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="text-xl">This is my first pinned note.</h2>
             <p>Duh</p>
                <div className=" justify-end flex flex-row gap-4 mt-5">
             <button className="btn btn-xs w-fit lowercase bg-base-100 border-none ">edit</button>
             <button className="btn btn-xs w-fit lowercase bg-blue-100 hover:text-pink-100 text-black border-none">delete</button>
            </div>
         </div>
     </div>


     <div className="card card-compact  w-fit h-fit bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="text-xl">This morning's stream of consciousness</h2>
             <p>"AHHHHHHH"</p>
                <div className=" justify-end flex flex-row gap-4 mt-5">
             <button className="btn btn-xs w-fit lowercase bg-base-100 border-none ">edit</button>
             <button className="btn btn-xs w-fit lowercase bg-blue-100 hover:text-pink-100 text-black border-none">delete</button>
            </div>
         </div>
     </div>

     <div className="card card-compact  w-fit h-fit bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="text-xl">Third demo note</h2>
             <p>rawr</p>
                <div className=" justify-end flex flex-row gap-4 mt-5">
             <button className="btn btn-xs w-fit lowercase bg-base-100 border-none ">edit</button>
             <button className="btn btn-xs w-fit lowercase bg-blue-100 hover:text-pink-100 text-black border-none">delete</button>
            </div>
         </div>
     </div>


     </div>
       
       
       </>
    )}