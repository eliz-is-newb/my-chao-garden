import Link from "next/link";



export default function Folders(){
    return (
       <>
       <div className="flex flex-wrap gap-3">
         
         {/* pinned folders */}
       <div className="card card-compact w-fit h-fit bg-black text-white shadow-xl">
         <div className="card-body">
            <h2 className="card-title">Manga Read List</h2>
            
                <div className=" justify-end">
             <button className="btn lowercase btn-xs btn-primary">view</button>
            </div>
         </div>
     </div>
     </div>
       
       </>
    )}