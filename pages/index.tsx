import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import Icon from '../public/icons8-services.svg'
import { Sun, Moon, SignIn } from 'phosphor-react'

type SignInFormValuesType = {
  email: string,
  password: string
}

const Index: NextPage = () => {

  const [signInFormValues, setSignInFormValues] = useState<SignInFormValuesType>({
    email: '',
    password: ''
  })

  const handleChangeFormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSignInFormValues( currentValues => ({
      ...currentValues,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmitSignInForm = () => {
    console.log(signInFormValues)
  }

  return (
    <>
      <header>
        <button className='p-2 rounded-full shadow-md flex items-center justify-center dark:bg-zinc-600 absolute top-4 right-4'>
          <Sun size={28}/>
        </button>
      </header>
      <div className='h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
        <div className='font-medium max-w-lg w-full space-y-1 rounded-md bg-zinc-100 dark:bg-zinc-700 shadow-lg p-4 z-10'>
          <header className='flex justify-between flex-row sm:gap-2'>
            {/* <button onClick={() => setIsDarkMode(!isDarkMode)} className='p-2 rounded-full w-12 h-12 shadow-md flex justify-center items-center'>
              { isDarkMode ? <Sun size={28} className='text-[#20bead]' /> : <Moon size={28} className='text-[#20bead]' />}
            </button> */}
          </header>
          <form className="space-y-4" autoComplete='off' onSubmit={handleSubmitSignInForm}>
            <header className='flex justify-between flex-row sm:gap-2'>
              <span className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="43RbhJKYusvovOdtfDO2Ja" x1="42" x2="42" y1="18.375" y2="28.25" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Ja)" d="M42 19A4 4 0 1 0 42 27A4 4 0 1 0 42 19Z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jb" x1="32" x2="32" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jb)" d="M55,20h-1.393c-0.286-1.061-0.749-2.078-1.336-3.029l1.042-1.043 c1.17-1.17,1.17-3.072,0-4.242s-3.072-1.17-4.242,0l-1.056,1.056c-0.943-0.577-1.956-1.036-3.015-1.336V10c0-1.654-1.346-3-3-3 s-3,1.346-3,3v1.406c-1.059,0.3-2.072,0.759-3.015,1.336l-1.056-1.056c-1.17-1.17-3.072-1.17-4.242,0 c-0.634,0.634-0.912,1.482-0.859,2.313H9c-1.654,0-3,1.346-3,3v34c0,1.302,0.838,2.402,2,2.816V55c0,1.103,0.897,2,2,2h29 c1.103,0,2-0.897,2-2v-1.184c1.162-0.414,2-1.514,2-2.816V38.816c1.162-0.414,2-1.514,2-2.816v-1.406 c1.059-0.3,2.072-0.759,3.015-1.336l1.056,1.056c0.585,0.585,1.353,0.877,2.121,0.877s1.536-0.292,2.121-0.877 c1.17-1.17,1.17-3.072,0-4.242l-1.042-1.043c0.588-0.951,1.051-1.968,1.336-3.029H55c1.654,0,3-1.346,3-3S56.654,20,55,20z M50.485,13.101c0.379-0.377,1.035-0.377,1.414,0c0.188,0.189,0.293,0.44,0.293,0.707s-0.104,0.518-0.293,0.707l-0.836,0.836 c-0.436-0.504-0.909-0.975-1.419-1.409L50.485,13.101z M32.101,13.101c0.379-0.377,1.035-0.377,1.414,0l0.842,0.841 c-0.51,0.434-0.983,0.905-1.419,1.409l-0.836-0.836c-0.188-0.189-0.293-0.44-0.293-0.707S31.912,13.29,32.101,13.101z M10,55v-1h29 v1H10z M40,52H9c-0.552,0-1-0.448-1-1V17c0-0.552,0.448-1,1-1h21.758l0.971,0.971c-0.588,0.951-1.051,1.967-1.337,3.029H29 c-1.654,0-3,1.346-3,3s1.346,3,3,3h1.393c0.286,1.061,0.749,2.078,1.337,3.029l-1.043,1.043c-1.17,1.17-1.17,3.072,0,4.242 c0.585,0.585,1.353,0.877,2.121,0.877s1.536-0.292,2.121-0.877l1.056-1.056c0.943,0.577,1.956,1.036,3.015,1.336V36 c0,1.302,0.838,2.402,2,2.816V51C41,51.552,40.552,52,40,52z M32.101,31.485l0.836-0.836c0.436,0.504,0.909,0.975,1.419,1.409 l-0.842,0.841c-0.379,0.377-1.035,0.377-1.414,0c-0.188-0.189-0.293-0.44-0.293-0.707S31.912,31.675,32.101,31.485z M51.899,31.485 c0.188,0.189,0.293,0.44,0.293,0.707s-0.104,0.518-0.293,0.707c-0.379,0.377-1.035,0.377-1.414,0l-0.842-0.841 c0.51-0.434,0.983-0.905,1.419-1.409L51.899,31.485z M55,24h-3.023l-0.15,0.819c-0.693,3.769-4.145,7.213-8.027,8.011L43,32.994V36 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3.006l-0.799-0.164c-3.883-0.798-7.334-4.242-8.027-8.011L32.023,24H29c-0.552,0-1-0.448-1-1 s0.448-1,1-1h3.023l0.15-0.819c0.693-3.769,4.145-7.213,8.027-8.011L41,13.006V10c0-0.552,0.448-1,1-1s1,0.448,1,1v3.006 l0.799,0.164c3.883,0.798,7.334,4.242,8.027,8.011L51.977,22H55c0.552,0,1,0.448,1,1S55.552,24,55,24z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jc" x1="42" x2="42" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#0d81ff"/><stop offset="1" stopColor="#9610ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jc)" d="M42,15c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S46.411,15,42,15z M42,29 c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S45.309,29,42,29z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jd" x1="15" x2="15" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jd)" d="M15,31c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S16.654,31,15,31z M15,35 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S15.552,35,15,35z"/><linearGradient id="43RbhJKYusvovOdtfDO2Je" x1="15" x2="15" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Je)" d="M15,23c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S16.654,23,15,23z M15,27 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S15.552,27,15,27z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jf" x1="15" x2="15" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jf)" d="M15,39c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S16.654,39,15,39z M15,43 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S15.552,43,15,43z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jg" x1="22.5" x2="22.5" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jg)" d="M20 27H25V29H20z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jh" x1="24" x2="24" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jh)" d="M20 35H28V37H20z"/><linearGradient id="43RbhJKYusvovOdtfDO2Ji" x1="28.5" x2="28.5" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Ji)" d="M20 43H37V45H20z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jj" x1="28.5" x2="28.5" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jj)" d="M20 39H37V41H20z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jk" x1="24" x2="24" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jk)" d="M20 31H28V33H20z"/><linearGradient id="43RbhJKYusvovOdtfDO2Jl" x1="22.5" x2="22.5" y1="6.375" y2="57.869" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#43RbhJKYusvovOdtfDO2Jl)" d="M20 24H25V26H20z"/></svg>
                <span className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#3B82F6]' translate='no'>Realizar Acesso</span>
              </span>
            </header>
            <div className="rounded-md -space-y-px flex flex-col gap-2">
              <div>
                <label htmlFor="email-address" className="dark:text-zinc-300">E-mail</label>
                <input onChange={handleChangeFormValue} id="email-adsress" name="email" type="email" value={signInFormValues.email} className="mt-1 rounded-md p-2 bg-transparent form-input relative block w-full border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-md" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="password" className="dark:text-zinc-300">Senha</label>
                <input onChange={handleChangeFormValue} id="password" name="password" type="password" value={signInFormValues.password} className="mt-1 rounded-md p-2 bg-transparent form-input relative block w-full placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-md" placeholder="Senha" required  />
              </div>
            </div>
            <button type="submit" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-md text-white focus:outline-none">Entrar</button>
          </form>
        </div>
      </div>
      <footer className='w-full absolute bottom-0'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="z-0 transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#9900efff"></stop><stop offset="95%" stopColor="#0693e3ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 86.14354066985646,293.03349282296654 172.28708133971293,286.066985645933 271,309 C 369.7129186602871,331.933014354067 480.9952153110047,384.76555023923447 578,362 C 675.0047846889953,339.23444976076553 757.732057416268,240.87081339712918 863,228 C 968.267942583732,215.12918660287082 1096.0765550239232,287.75119617224885 1196,314 C 1295.9234449760768,340.24880382775115 1367.9617224880385,320.12440191387554 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </footer>
    </>
  )
}

export default Index
