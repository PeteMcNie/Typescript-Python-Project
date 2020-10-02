import * as React from 'react'
// import * as actions from '../actions'
import { StoreState } from '../types/index'
import { connect } from 'react-redux'

export interface Props {
  people: string
  noOfTeams: number
  teamNames: string
}

function App ({ people, noOfTeams, teamNames }: Props) {
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

function mapStateToProps (state: StoreState, ownProps: Props) {
    return {
        people: state.people,
        noOfTeams: state.noOfTeams,
        teamNames: state.teamNames
    }
}

export default connect(mapStateToProps)(App)
