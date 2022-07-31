import { Lock, Envelope, GithubLogo, GoogleLogo } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import Input from './Input'

type SignInFormValuesType = {
  email: string,
  password: string
}

interface SignInProps {
  signInFormValues: SignInFormValuesType,
  handleChangeFormValue: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmitSignInForm: (event: FormEvent<HTMLFormElement>) => void
}

const SignIn = ({ signInFormValues, handleChangeFormValue, handleSubmitSignInForm }: SignInProps) => {
  return (
    <form className="space-y-4" autoComplete='off' onSubmit={handleSubmitSignInForm}>
        <header className='flex justify-center flex-row sm:gap-2'>
          <span className='flex flex-row items-center'>
            <span className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#3B82F6]' translate='no'>Acesse sua conta</span>
          </span>
        </header>
        <div className="rounded-md -space-y-px flex flex-col">
        <div className='flex flex-row relative group outline-none'>
            <Envelope size={28} className='absolute top-4 left-4 text-slate-600 outline-none'/>
            <Input onChange={handleChangeFormValue} id="email" name="email" type="email" value={signInFormValues.email} placeholder="Senha" required />
          </div>
          <div className='flex flex-row relative group outline-none'>
            <Lock size={28} className='absolute top-4 left-4 text-slate-600 outline-none'/>
            <Input onChange={handleChangeFormValue} id="password" name="password" type="password" value={signInFormValues.password} placeholder="Senha" required  />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <button type="submit" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] relative w-full flex justify-center py-2 text-md font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2">Entrar</button>
          <button type="button" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] relative w-full flex justify-center py-2 text-md font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2">Registrar-se</button>
        </div>
        <div className='relative w-full text-center'>
          <span className='text-zinc-300 bg-zinc-100 dark:text-zinc-600 dark:bg-zinc-700 p-2 relative z-10'>Ou</span>
          <div className='w-100 mr-2 ml-2 h-[0.7px] bg-zinc-300 dark:bg-zinc-600 relative bottom-3 z-0' />
        </div>
        <div className='flex flex-row gap-2'>
          <button type="button" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] relative w-full flex justify-center items-center py-2 text-md font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2">
            Entrar com <GithubLogo size={25} style={{ marginLeft: 5}} />
          </button>
          <button type="button" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] relative w-full flex justify-center items-center py-2 text-md font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2">
            Entrar com <GoogleLogo size={25} style={{ marginLeft: 5}} />
          </button>
        </div>
    </form>
  )
}

export default SignIn