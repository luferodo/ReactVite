import { useState } from 'react'
//hooks
export function TwitterFollowCard ({ children, userName }){

    const [isFollowing, setFollowing] = useState(false)
    //console.log(isFollowing)
    //Evalu el estado del elemento 
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setFollowing(!isFollowing)
      }

    return (
  
   <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className="tw-followCard-avatar"
                alt="Esto en un avatar"         
                src={`https://unavatar.io/${userName}`}
            />

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <spam className="tw-followCard-infoUserName">@{userName}</spam>

                </div>             
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>

)
}