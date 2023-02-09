import Link from "next/link";



export default function Folders(){
    return (
       <>
 
       <div className="flex flex-col gap-3 ml-4 mt-4">

         {/* pinned folders */}
       <div className="card card-compact w-32 h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="card-title">Manga Read List</h2>
            
                <div className=" justify-end">
             <button className="btn lowercase btn-xs btn-primary">view</button>
            </div>
         </div>
     </div>

     <div className="card card-compact w-32 h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="card-title">Funny things my therapist will probably say</h2>
            
                <div className=" justify-end">
             <button className="btn lowercase btn-xs btn-primary">view</button>
            </div>
         </div>
     </div>

     <div className="card card-compact w-32 h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="card-title">favorite restaurants</h2>
            
                <div className=" justify-end">
             <button className="btn lowercase btn-xs btn-primary">view</button>
            </div>
         </div>
     </div>

     


     


     </div>
       
       </>
    )}