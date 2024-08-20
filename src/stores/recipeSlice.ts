import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../Services/RecipeService"
import type { Categories, Drinks, searchFilter } from "../types"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: searchFilter) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({//No entiendo por que utilizamos set
    categories: {
        drinks: []
    },
    drinks: { 
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    }
})