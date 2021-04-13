import { Category } from '../models/category.model';

export const mockCategories: Category[] = [
    {
        categoryId: 1,
        name: "Technology",
        subcategories: [
            { subCategoryId: 1,name: "Ofimatic" }
        ]
    },
    {
        categoryId: 2,
        name: "Education",
        subcategories: [
            { subCategoryId: 1, name: "Maths" },
            { subCategoryId: 2, name: "Physics" }
        ]
    }
]
