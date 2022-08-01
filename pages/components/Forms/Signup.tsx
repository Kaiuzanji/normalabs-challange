import { ChangeEvent, FormEvent } from "react"
import FileInput from './../Inputs/FileInput'
import Input from './../Inputs/Input'
import { Trash, Envelope, Lock, User} from 'phosphor-react'

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

interface SignUpFormProps {
  signUpFormValues: SignUpFormValueType,
  setSignUpFormValues: (value: SignUpFormValueType) => void,
  handleSubmitSignUpForm: (event: FormEvent<HTMLFormElement>) => void
}

const SignUp = ({ signUpFormValues, setSignUpFormValues, handleSubmitSignUpForm }: SignUpFormProps) => {

  const handleChangeFormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeFormFile = (file:FormFileValue, identifier: string) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [identifier]: file
    })
  }

  return (
    <form className="space-y-4" autoComplete='off' onSubmit={handleSubmitSignUpForm}>
      <header className='flex justify-center flex-row sm:gap-2'>
        <span className='flex flex-row items-center'>
          <span className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#3B82F6]' translate='no'>Crie sua Conta</span>
        </span>
      </header>
      <div className="rounded-md -space-y-px flex flex-col">
      <div className='flex flex-col relative group outline-none'>
        <div className="flex flex-col">
          <div className='flex flex-row relative group outline-none'>
            <User size={28} className='absolute top-4 left-4 text-slate-600 outline-none'/>
            <Input onChange={handleChangeFormValue} id="name" name="name" type="text" value={signUpFormValues.name} placeholder="Digite seu nome" required />
          </div>
        </div>
        <div className='flex flex-row relative group outline-none'>
          <Envelope size={28} className='absolute top-4 left-4 text-slate-600 outline-none'/>
          <Input onChange={handleChangeFormValue} id="email" name="email" type="email" value={signUpFormValues.email} placeholder="Digite seu email" required />
        </div>
        <div className='flex flex-row relative group outline-none'>
          <Lock size={28} className='absolute top-4 left-4 text-slate-600 outline-none'/>
          <Input 
            onChange={handleChangeFormValue} 
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
            id="password" 
            name="password" 
            type="password" 
            value={signUpFormValues.password} 
            placeholder="Digite sua senha" 
            title="Pelo menos uma letra maiúscula, uma letra minúscula, um número e um símbolo, símbolos permitidos --> !@#$%^&*_=+-
            Mínimo 8 caracteres e Máximo 12 caracteres"
            required  
          />
        </div>
      </div>
        <div className="m-2">
          <label htmlFor="cpf" className="text-slate-600 dark:text-slate-400">Escolha sua imagem de perfil</label>
          <div className="mt-1 flex justify-center pt-2 pb-2 border-2 border-gray-500 border-dashed rounded-md">
            <div className="text-center flex flex-col justify-center items-center">
              { 
                signUpFormValues.image ? (
                  <div className='flex flex-col justify-center items-center relative group'>
                    <img src={signUpFormValues.image.preview} alt={signUpFormValues.image.filename} width={60} className="rounded-md group-hover:opacity-50 self-center"/>
                    <Trash size={28} className="absolute mb-4 text-zinc-800 opacity-0 group-hover:opacity-100" onClick={() => setSignUpFormValues({...signUpFormValues, image: null}) }/>
                    <p className="text-xs text-gray-500 p-1">{signUpFormValues.image.filename}</p>
                  </div>
                ) : (
                  <>
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <FileInput handleChangeFile={handleChangeFormFile} identifier="image" />
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="bg-gradient-to-r from-[#9333EA] to-[#3B82F6] relative w-full flex justify-center items-center py-2 text-md font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:ring-offset-2">Registrar-se</button>
    </form>
  )
}

export default SignUp