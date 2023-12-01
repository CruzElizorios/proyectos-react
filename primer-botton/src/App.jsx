import React from 'react'
import './App.css'
import { TwitterCardSeguir } from './TwitterCardSeguir'
export const App = () => {
  
    const format = (userName) => `@${userName}`

    //como si estuviera haciendo un fecth a una base de datos

    const users = [
      {
        userName: 'CruzElizorios',
        name: 'Cruz Elizondo Rios',
        isFollowing: true
      },
      {
        userName: 'JuanBau',
        name: 'Juan Bautista',
        isFollowing: false
      },
      {
        userName: 'Pedro',
        name: 'Pedro Gatito Fernandez',
        isFollowing: false
      }
    ]
    return (
    <section className='sectionTwitterCards'>
        {/* <TwitterCardSeguir formatUserName={format} userName="CruzElizorios" name="Cruz Elizondo Rios"
        initialIsFollowing={true} />
        <TwitterCardSeguir formatUserName={format}   userName="JuanBau" name="Juan Bautista" initialIsFollowing={false}/>
        <TwitterCardSeguir formatUserName={format} userName="Pedro" name="Pedro Gatito Fernandez" initialIsFollowing={false}/> */}
        {
          users.map( user => {
            const {userName, name, isFollowing} = user 
            return (
              <TwitterCardSeguir
              formatUserName={format}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
              key={userName}
              />
            )
          })
        }
    </section>
  )
}
