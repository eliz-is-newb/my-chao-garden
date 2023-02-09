import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { Database } from '../utils/database.types'
import Avatar from './Avatar'
type Profiles = Database['public']['Tables']['profiles']['Row']
import Link from "next/link";



export default function Account({ session }: { session: Session }) {
    const supabase = useSupabaseClient<Database>()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState<Profiles['username']>(null)
    const [website, setWebsite] = useState<Profiles['website']>(null)
    const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null)
  
    useEffect(() => {
        getProfile()
      }, [session])

     async function getProfile() {
        try {
         setLoading(true)
         if (!user) throw new Error('No user')

         let { data, error, status } = await supabase
         .from('profiles')
         .select(`username, website, avatar_url`)
         .eq('id', user.id)
         .single()

         if(error && status !== 406) {
            throw error
         }

         if (data) {
            setUsername(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
        
          }
         } catch (error) { 
            alert('Error loading user data!') 
            console.log(error)
         } finally {
            setLoading(false)
         }
    } 
    

    async function updateProfile({ 
        username, 
        website,
        avatar_url, 
    }: { 
        username: Profiles['username'] 
        website: Profiles['website'] 
        avatar_url: Profiles['avatar_url']
    }) { 
        try { 
            setLoading(true) 
            if (!user) throw new Error('No user')
            const updates = {
                id: user.id, 
                username, 
                website, 
                avatar_url, 
                updated_at: new Date().toISOString(), 
            }

            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error 
            alert('Profile updated!')
        } catch (error) { 
            alert('Error updating the data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
        }
    

    return (
      <div className='text-black flex flex-col md:flex-row'>
      {/* experimenting */}

      {/* The button to open modal */}
<label htmlFor="my-modal" className="btn btn-xs h-[30px] w-full text-xs  


 mt-5 text-white
  rounded-xl border-2 border-base-100 
  text-sm font-semibold lowercase
   bg-blue-200  hover:text-white hover:bg-blue-300 hover:border-transparent
  hover:bg-white">user settings</label>


{/* welcome button */}

<Link href="/Welcome"><button className="btn w-56 h-56 ml-5 mt-6 rounded-xl bg-white border-2 border-base-100 lowercase hover:bg-white hover:border-transparent text-black  shadow-2xl"> Welcome </button></Link>


<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box bg-white">
    
  <div className=" sm:mx-10 lg:mx-32 xl:mx-72 ">
        <div className="flex justify-between container mx-auto">
        <div className="w-full">
        <div className="-mt-2 px-4 mx-2">
        <h1 className="text-3xl font-semibold py-7 px-5">mychaogarden</h1>




<div className="modal-action -mt-[36px] mr-[150px]">
  {/* button to close the menu */}
      <label htmlFor="my-modal" className="btn text-center text-slate-500
 py-2 px-1  w-32
 
  rounded-full
  text-xs hover:bg-transparent hover:border-transparent border-transparent
   text-zinc-900 hover:scale-125 bg-transparent lowercase
  ">click to close menu</label>
    </div>


        <h1 className="font-thinner flex text-3xl pt-10 px-5 -mt-6">edit ur details
        </h1>

        <div className="shrink-0 mt-5">
          <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ username, website, avatar_url: url })
          }}
           />
          
          </div> 
       
        
        <form className="mx-5 my-5">
        <label className="relative block p-3 border-2 mt-5 border-black rounded">
          <span className="text-md font-semibold text-zinc-900">
            Username:
          </span>
          <input className="w-full bg-transparent text-sm  text-gray-500  focus:outline-none" id="username" type="text"  
          value={username ||''} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <div className="mt-5">
        <label className="input-field inline-flex items-baseline border-2 border-zinc-300  text-sm rounded  p-4">
        <span className="flex-none text-dusty-blue-darker select-none leading-none">

           {/*email icon here  */}
        </span>


        <div className="flex-1 leading-none">
        <input id="email" type="text" className="w-full pl-1 bg-transparent  focus:outline-none" name="email"  value={session.user.email} disabled />
        </div>
        </label>
        </div>
        
       
        
        
    
        
        
        <label className="relative block p-3 border-2  mt-5 border-black rounded">
          <span className="text-md font-semibold  text-zinc-900">
            Bio:
          </span>
          <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="website" type="text" 
          value={website ||''}
          onChange={(e) => setWebsite(e.target.value)} />
       
          </label>
          
         
      
        
        <button className="btn mt-5 border-2 px-5 py-2  btn-sm h-10 ml-32 -mt-4 w-24 border-black text-white  lowercase border-b-4  rounded-full translate-y-2 border-l-4"  onClick={() => updateProfile({ username, website, avatar_url })}
        disabled={loading}
      >
        {loading ? 'Loading ...' : 'Update'}

        </button>

        </form>
          </div>
            </div>
        
        
        </div>

        <div className='mx-80 -mt-[52px] ml-16'>

<button className="btn self-center w-36 text-sm text-slate-500
 py-2 px-1  w-24 btn-sm h-10
 
  rounded-full border-0
  text-sm font-semibold lowercase
   bg-pink-300 text-zinc-900
  hover:bg-rose-300" onClick={() => supabase.auth.signOut()}>
    Sign Out
 </button>
</div>
        </div>









  </div>
</div>

      {/* end of experiment  */}

       
        
        
     
        </div>

)
}
