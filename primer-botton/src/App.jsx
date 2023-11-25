import React from 'react'
import './App.css'
import { TwitterCardSeguir } from './TwitterCardSeguir'
export const App = () => {
  
    const format = (userName) => `@${userName}`

    return (
    <section className='sectionTwitterCards'>
        <TwitterCardSeguir formatUserName={format} isFollowing={true} userName="CruzElizorios" name="Cruz Elizondo Rios" />
        <TwitterCardSeguir formatUserName={format}  isFollowing={false}  userName="JuanBau" name="Juan Bautista" />
        <TwitterCardSeguir formatUserName={format} isFollowing userName="Pedro" name="Pedro Gatito Fernandez"/>
    </section>
  )
}
