import React, { useState } from 'react'
import * as actions from '../actions'
import { StoreState } from '../types/index'
import { connect, Dispatch } from 'react-redux'

export interface Props {
  people: string[]
  noOfTeams: number
  teamNames: string
  submitPerson(person: string | undefined): () => void
}

function App ({ people, noOfTeams = 4, teamNames, submitPerson }: Props) {
    // const [statePerson, setPersonState] = useState('')
    const [statePerson, setPersonState] = useState<string | undefined>(undefined)

    function handleChange (evt) {
        console.log(evt.target.value)
        const { value }: { value: string } = evt.target
        setPersonState(value)
    }

    console.log('App ', people, noOfTeams, teamNames)
    return (
        <div>
            <h1>GOOD MORNING</h1>
            <p>{noOfTeams}</p>
            {people.map(el => {
              return (
                <div key={el}>
                  <p>{el}</p>
                </div>
                    )
                }
            )}
            <p>{teamNames}</p>
            <div>
                <input onChange={handleChange} value={statePerson}/>
                <button onClick={() => submitPerson(statePerson)}>Submit</button>
            </div>
        </div>

    )
}

function mapStateToProps (state: StoreState) {
    return {
        people: state.people,
        noOfTeams: state.noOfTeams,
        teamNames: state.teamNames
    }
}

function mapDispatchToProps (dispatch: Dispatch<actions.UpdatePerson>) {
    return {
        submitPerson: (person) => dispatch(actions.addPerson(person))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
