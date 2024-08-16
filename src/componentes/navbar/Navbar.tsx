import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar

function handleLogout() {
  throw new Error('Function not implemented.')
}
