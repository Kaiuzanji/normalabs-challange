export interface UserCreateData {
  name: string,
  image: string,
  email: string,
  password: string
}

export interface UserRepository {
  create: (data: UserCreateData) => Promise<void>
}