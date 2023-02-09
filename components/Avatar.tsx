import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../utils/database.types'
type Profiles = Database['public']['Tables']['profiles']['Row']

export default function Avatar({
    uid,
    url,
    size,
    onUpload,
  }: {
    uid: string
    url: Profiles['avatar_url']
    size: number
    onUpload: (url: string) => void
  }) {
    const supabase = useSupabaseClient<Database>()
    const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>(null)
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (url) downloadImage(url)
      }, [url])
    
      async function downloadImage(path: string) {
        try {
          const { data, error } = await supabase.storage.from('avatars').download(path)
          if (error) {
            throw error
          }
          const url = URL.createObjectURL(data)
          setAvatarUrl(url)
        } catch (error) {
          console.log('Error downloading image: ', error)
        }
      }
      const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        try {
          setUploading(true)
    
          if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
          }
    
          const file = event.target.files[0]
          const fileExt = file.name.split('.').pop()
          const fileName = `${uid}.${fileExt}`
          const filePath = `${fileName}`
    
          let { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filePath, file, { upsert: true })
            if (uploadError) {
                throw uploadError
              }
        
              onUpload(filePath)
            } catch (error) {
              alert('Error uploading avatar!')
              console.log(error)
            } finally {
              setUploading(false)
            }
          }
          return (
            <div>
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="h-20 w-20 mb-5 object-cover rounded-full"
                  style={{ height: size, width: size }}
                />
              ) : (
                <div className="avatar no-image " style={{ height: size, width: size }} /> 
              )}
              <div style={{ width: size }}>  
                <label className="btn absolute avatar  text-xs text-slate-500
                ml-[113px] py-2 px-4 -mt-[70px] text-center
                   rounded-full border-0 lowercase
                   text-sm font-semibold
                    bg-pink-300 text-zinc-900
                   hover:bg-rose-300" htmlFor="single">
                  {uploading ? 'Uploading ...' : 'Upload'}
                </label>
                {/* {uploading ? 'Uploading ...' : 'Upload'} */}
                <input
                className="w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                    file:bg-pink-300 file:text-zinc-900
                   hover:file:bg-rose-300
                "
                  style={{
                    visibility: 'hidden',
                    position: 'absolute',
                  }}
                  type="file"
                  id="single"
                  accept="image/*"
                  onChange={uploadAvatar}
                  disabled={uploading}
                />
              </div>
            </div>
          )
        }

        // <img className="h-20 w-20 object-cover rounded-full" src="https://sahilnetic.xyz/sahilnetic.png" alt="Current profile photo" />
        // </div> 
        // <label className="block pt-2">
        //   <span className="sr-only t-2">Choose profile photo</span>
        //   <input 
          
        //   type="file" className="w-full text-sm text-slate-500
        //     file:mr-4 file:py-2 file:px-4
        //     file:rounded-full file:border-0
        //     file:text-sm file:font-semibold
        //     file:bg-pink-300 file:text-zinc-900
        //     hover:file:bg-rose-300
        //   "/>
        // </label>