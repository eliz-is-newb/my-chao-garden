import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import GlobalNav from '../components/GlobalNav'
const Home = () => {
  
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container">
      <GlobalNav />
      {!session ? (
        <Auth supabaseClient={supabase}  />
      ) : (
        <Account session={session} />

      )}

      
    </div>

    
  )
}

export default Home