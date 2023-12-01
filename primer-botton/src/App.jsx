import React from 'react'
import './App.css'
import { TwitterCardSeguir } from './TwitterCardSeguir'
export const App = () => {
  
    const format = (userName) => `@${userName}`

    return (
    <section className='sectionTwitterCards'>
        <TwitterCardSeguir formatUserName={format} userName="CruzElizorios" name="Cruz Elizondo Rios" />
        <TwitterCardSeguir formatUserName={format}   userName="JuanBau" name="Juan Bautista" />
        <TwitterCardSeguir formatUserName={format} userName="Pedro" name="Pedro Gatito Fernandez"/>
    </section>
  )
}
