import { UserRepository } from "../repositories/userRepository"

interface CreateUserUseCaseRequest {
  name: string
  email: string
  image: string
  password: string
}

export class CreateUserUseCase {
  constructor(
      private userRepository: UserRepository,
  ){}

  async execute(request: CreateUserUseCaseRequest){
      const { name, email, image, password } = request

      if( image && (!image.startsWith('data:image/png;base64')) && !image.startsWith('data:image/jpeg;base64') ){
        throw new Error('Invalid image format.')
      }

      await this.userRepository.create({
        name, 
        email, 
        image, 
        password
      })
  }   
}