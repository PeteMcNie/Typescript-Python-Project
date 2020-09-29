import * as constants from '../constants'

// Define action interfaces
export interface AddPerson {
    type: constants.ADD_PERSON
    name: string
}

export interface RemovePerson {
    type: constants.REMOVE_PERSON
    name: string
}

export interface NumberOfTeams {
    type: constants.NUMBER_OF_TEAMS
}

export interface AddTeamName {
    type: constants.ADD_TEAM_NAME
    teamName: string
}

export interface RemoveTeamName {
    type: constants.REMOVE_TEAM_NAME
    teamName: string
}
