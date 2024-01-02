import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    return (

        <section className="App">

            <TwitterFollowCard  isFollowing userName="midudev">
                {/* LO QUE ESTA DENTRO SE CONVIERTE EN CHILDREN */}
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="luferodopro">
                Luis Rodriguez 
            </TwitterFollowCard>

        </section>

  
    )
}


