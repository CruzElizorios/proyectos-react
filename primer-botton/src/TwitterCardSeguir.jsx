import React, { useState } from 'react'

export const TwitterCardSeguir = ({ formatUserName,userName, name}) => {
    const [isFollowing, setIsFollowing]  = useState(false)
    
    
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
                    {text}
                </button>
            </aside>
        </article>

    )
}
