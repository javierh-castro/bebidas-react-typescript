import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType>()(devtools( (...a) => ({//Toma argumentos de set, get, api.
    ...createRecipesSlice(...a)
})))