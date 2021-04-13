import { mockCategories } from '../core/services/mockCategory';
import { getCategories } from "../core/reducers/masters.reducer"

// isolate test
const createCategoriesState = () => ({
    categories: mockCategories
})


describe("master selectors", () => {
    it("getCategories", () => {
        const state = createCategoriesState();
        expect(getCategories(state)).toBe(state.categories);
    })

    it("getCategories length", () => {
        const state = createCategoriesState();
        expect(getCategories(state).length).toBe(mockCategories.length);
    })
})
