import Link from "next/link";
import Avatar from "./Avatar";


export default function GlobalNav(){
    return (
       <>
       
      <div className="py-5 ml-3 flex flex-col gap-3 absolute"
   
       >

         {/* home/back button */}

        <Link href="/"> <button className="btn btn-xs w-fit lowercase bg-base-100 font-normal border-base-300 h-6 ml-3  mb-1">back to home </button></Link>

{/* avatar  */}
<img className="w-32 h-24 rounded" src="/cat-2-pic.jpg"/>

{/* folders container*/}













<div tabIndex={0} className="collapse w-32 collapse-arrow border border-base-300 bg-base-100 rounded-box">
<input type="checkbox" /> 
  <div className="collapse-title text-m font-medium">
    folders
  </div>
  <div className="collapse-content a flex flex-wrap gap-2"> 
 {/* sample entries */}

 <button className="btn lowercase btn-xs rounded btn-primary">Tarantulas</button>
 <button className="btn lowercase btn-xs rounded btn-primary">Horror Movies</button>
 <button className="btn lowercase btn-xs rounded btn-primary">Funny things my therapist will say</button>
 <button className="btn lowercase btn-xs rounded btn-primary">Ouch</button>
 <button className="btn lowercase btn-xs rounded btn-primary">Shopping</button>
 <button className="btn lowercase btn-xs rounded btn-primary">Favs</button>







  </div>
</div>

{/* notes container */}

<div tabIndex={0} className="collapse w-32  collapse-arrow border border-base-300 bg-base-100 rounded-box">
<input type="checkbox" /> 
  <div className="collapse-title text-m font-medium">
    notes
  </div>
  <div className="collapse-content"> 

 
  </div>
</div>


{/* buttons */}
<div className="toast flex flex-row  toast-end ">
  <div className="">
    <div>
    <button className="btn  btn-sm w-fit h-fit rounded-xl bg-black border border-base-300 lowercase hover:bg-base-100 hover:border-transparent hover:text-black text-white  shadow-2xl"> + note </button>
    </div>
  </div>
  <div className="">
    <div>

<button className="btn  btn-sm w-fit h-fit rounded-xl bg-black border-2 border-white lowercase hover:bg-base-100 hover:border-transparent hover:text-black  text-white shadow-2xl"> + folder </button>

   
    </div>
  </div>
</div>



       
       </div>
       
       </>
    )}