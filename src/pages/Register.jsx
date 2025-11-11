import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>Register</h1>
        <form>
              <h1 class="text-gray-500 dark:text-gray-400">
    Hello world!
  </h1>
    <div className="flex items-center justify-center h-screen bg-blue-500 text-white text-3xl font-bold">
      Tailwind is Working! 🎉
    </div>
            <input type='text' placeholder='enter your name'/>
            <input type='text' placeholder='enter email'/>
            <input type="password" placeholder='enter password' />
            <button>Login/Sign in</button>

        </form>
    </div>
  )
}

export default Register