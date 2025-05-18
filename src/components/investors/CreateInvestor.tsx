import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/consts'
import { useForm } from 'react-hook-form'

export default function CreateInvestor() {

  const { handleSubmit, register } = useForm()

  const onSubmit = async (formData: any) => {
    const { name, max_invest, min_invest } = formData
    const { data, error } = await supabase
    .from('Investors')
    .insert({ name, max_invest: Number(max_invest), min_invest: Number(min_invest), created_at: new Date() })
            
  }

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Max Invest
                </Label>
                <Input
                  id="max_invest"
                  {...register('max_invest')}
                  defaultValue="4000000"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Min Invest
                </Label>
                <Input
                  id="min_invest"
                  {...register('min_invest')}
                  defaultValue="3200000"
                  className="col-span-3"
                />
              </div>
            </div>
            <Button type="submit">Save changes</Button>
          </form>
      </DialogContent>
    </>
  )
}