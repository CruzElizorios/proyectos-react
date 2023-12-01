import React, { useState } from 'react'

export const TwitterCardSeguir = ({ formatUserName,userName, name, initialIsFollowing}) => {
    const [isFollowing, setIsFollowing]  = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?'tw-followCard-button is-following' : 'tw-followCard-button'

    const cambioSeguir = () => {
        setIsFollowing (!isFollowing)
    } 
    const imgSrc = `https://unavatar.io/github/${userName}` 
    // CruzElizorios
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside >
                <button className={buttonClassName} onClick={cambioSeguir}>
                   <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>

    )
}
