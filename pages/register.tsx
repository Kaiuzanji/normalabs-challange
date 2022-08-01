import type { NextPage } from 'next'
import { FormEvent, useState, useContext } from 'react'
import { Sun, Moon } from 'phosphor-react'
import DarkModeContext from './../contexts/darkTheme/context'
import SignUp from './components/Forms/Signup'
import axios from 'axios'
import { PrismaUserRepository } from './../repositories/prisma/prismaUserRepository'
import { CreateUserUseCase } from './../use-cases/createUserUseCase'

type FormFileValue = {
  filename: string,
  type: string,
  size: number
  dataUrl: string | null
  preview: string
}

type SignUpFormValueType = {
  name: string,
  image: FormFileValue | null,
  email: string,
  password: string
}

const Register: NextPage = () => {
  const { isDarkMode, setIsDarkMode} = useContext(DarkModeContext)

  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormValueType>({
    name: "",
    image: null,
    email: "",
    password: ""
  })

  const handleSubmitSignUpForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await axios.post('/api/user/create', {
      name: signUpFormValues.name,
      email: signUpFormValues.email,
      image: signUpFormValues.image.dataUrl,
      password: signUpFormValues.password,
    })
  }

  return (
    <>
      <header>
        <button className='p-3 rounded-full shadow-lg flex items-center justify-center dark:bg-zinc-600 absolute top-4 right-4' onClick={() => setIsDarkMode(!isDarkMode)}>
          { isDarkMode ? <Sun size={28} className='text-zinc-800' /> : <Moon size={28} className='text-zinc-800' weight='fill' />}
        </button>
      </header>
      <div className='h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
        <div className='font-medium max-w-md w-full space-y-1 rounded-md bg-zinc-100 dark:bg-zinc-700 shadow-2xl p-4 z-10'>
          <SignUp signUpFormValues={signUpFormValues} setSignUpFormValues={setSignUpFormValues} handleSubmitSignUpForm={handleSubmitSignUpForm} />
        </div>
      </div>
      <footer className='w-full absolute bottom-0'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="z-0 transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#9900efff"></stop><stop offset="95%" stopColor="#0693e3ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 86.14354066985646,293.03349282296654 172.28708133971293,286.066985645933 271,309 C 369.7129186602871,331.933014354067 480.9952153110047,384.76555023923447 578,362 C 675.0047846889953,339.23444976076553 757.732057416268,240.87081339712918 863,228 C 968.267942583732,215.12918660287082 1096.0765550239232,287.75119617224885 1196,314 C 1295.9234449760768,340.24880382775115 1367.9617224880385,320.12440191387554 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </footer>
    </>
  )
}

export default Register
