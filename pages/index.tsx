import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import GlobalNav from '../components/GlobalNav'
import GlobalFooter from '../components/GlobalFooter'
const Home = () => {
  
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className='bg-pink-200 py-10'>
    <div className="bg-white h-[600px] border-4 border-pink-200 shadow-2xl rounded-3xl mx-14" style={{ padding: '50px 20px 200px 20px' }}>
      
        {/* app logo */}
<img className="w-[400px] mt-2" src="skate-pic.PNG"/>
<h1 className='text-3xl ml-16 font-semibold -mt-4'> my chao journal</h1>


      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (



        <Account session={session} />
      
      )}

       

     
    </div>
    <GlobalFooter />
    </div>
    
  )
}

export default Home