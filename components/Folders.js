import Link from "next/link";



export default function Folders(){
    return (
       <>
 
       <div className="flex flex-col gap-3 ml-1 pr-4 mt-3">

         {/* pinned folders */}
       <div className="card card-compact w-fit h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="">Manga Read List</h2>
            
                <div className=" justify-end mt-5">
             <button className="btn lowercase btn-xs btn-primary">open</button>
            </div>
         </div>
     </div>

     <div className="card card-compact w-fit h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="">Funny things my therapist will probably say</h2>
            
                <div className="mt-5 justify-end">
             <button className="btn lowercase btn-xs btn-primary">open</button>
            </div>
         </div>
     </div>

     <div className="card card-compact w-fit h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="">favorite restaurants</h2>
            
                <div className="mt-5 justify-end">
             <button className="btn lowercase btn-xs btn-primary">open</button>
            </div>
         </div>
     </div>

     


     


     </div>
       
       </>
    )}