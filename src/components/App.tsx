import * as React from 'react'

export interface Props {
  people: string
  noOfTeams: number
  teamNames: string
}

function App ({ people, noOfTeams = 2, teamNames }: Props) {
    console.log('App ', people, noOfTeams, teamNames)
    return (
        <div>
            <h1>GOOD MORNING</h1>
            <p>{noOfTeams}</p>
            <p>{people}</p>
            <div>
                <input />
                <button>Submit</button>
            </div>
        </div>

    )
}

export default App
