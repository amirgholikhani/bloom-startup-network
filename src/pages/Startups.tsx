import { supabase, supabaseKey, supabaseURL } from '@/lib/consts'
import React from 'react'

function Startups() {
  const [startups, setStartups] = React.useState([])
  
  React.useEffect(() => {
    const getStartups = async () => {
      let { data: StartupsData, error } = await supabase.from('Startups').select()
  
      console.log('StartupsData ', StartupsData, error)
      setStartups(StartupsData)
    }

    getStartups()
  }, [])
          

  return (
    <div>
      <h1>Startups: </h1>
      <ul>
        {startups.map(startup => {
          const { id, name } = startup

          return <li key={id}>
            {name}
          </li>
        })}
      </ul>
    </div>
  )
}

export default Startups