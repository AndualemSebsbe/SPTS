import React from 'react'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ProjectProps } from '../../types/types'

interface ProjectState {
    projects: ProjectProps[]
}


const initialState: ProjectState = {
    projects: [],
}

export const projectSlice = createSlice({
    initialState,
    name: 'projectSlice',
    reducers: {
        setProjects: (state, { payload: projects }: PayloadAction<ProjectProps[]>) => {
            state.projects = projects
          },
    }
})


export default projectSlice.reducer
export const {setProjects} = projectSlice.actions