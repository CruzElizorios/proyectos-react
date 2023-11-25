import React from 'react'

export const TwitterCardSeguir = ({ formatUserName,userName, name, isFollowing}) => {
    console.log(isFollowing)
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>

    )
}
