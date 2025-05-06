export interface User{
<<<<<<< HEAD
  // id:string,
  name?: string,
=======
  id:string,
  username?: string,
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
  role :'admin' | 'student',
  email :string,
  password?:string
}