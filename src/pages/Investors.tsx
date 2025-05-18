import CreateInvestor from '@/components/investors/CreateInvestor'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase, supabaseKey, supabaseURL } from '@/lib/consts'
import { DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'

function Investors() {
  const [investors, setInvestors] = React.useState([])

  const openCreateModal = () => {
    
  }
  
  React.useEffect(() => {
    const getInvestors = async () => {
      let { data: InvestorsData, error } = await supabase.from('Investors').select()
  
      console.log('InvestorsData ', InvestorsData, error)
      setInvestors(InvestorsData)
    }

    getInvestors()
  }, [])
          

  return (
    <div className='m-5'>
      <div className='flex justify-between'>
        <h1>Investors: </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Investor</Button>
          </DialogTrigger>
          <CreateInvestor />
        </Dialog>
      </div>
      <ul>
        {investors.map(investor => {
          const { id, name } = investor

          return <li key={id}>
            {name}
          </li>
        })}
      </ul>
    </div>
  )
}

export default Investors