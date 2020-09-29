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

//Define the actions
export function addPerson(person: string): AddPerson {
    return {
    type: constants.ADD_PERSON,
    name: person
    }
}

export function removerPerson(person: string): RemovePerson {
    return {
        type: constants.REMOVE_PERSON,
        name: person
    }
}

//Create union type for where an actions are opposites
export type UpdatePerson = AddPerson | RemovePerson

export function numberOfTeams(): NumberOfTeams {
    return {
        type: constants.NUMBER_OF_TEAMS
    }
}

export function addTeamName(teamName: string): AddTeamName {
    return {
        type: constants.ADD_TEAM_NAME,
        teamName: teamName
    }
}

export function removeTeamName(teamName: string): RemoveTeamName {
    return {
        type: constants.REMOVE_TEAM_NAME,
        teamName: teamName
    }
}

export type UpdateTeamName = AddTeamName | RemoveTeamName
