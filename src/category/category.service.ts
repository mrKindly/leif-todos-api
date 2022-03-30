import { Injectable } from '@nestjs/common';
import { Category } from './dto/category.dto';

@Injectable()
export class CategoryService {
    private categories: Category[] = [{
        id: '0.o9m8mugg00m',
        title: 'Сделать 2 задание'
    }];

    public getCategories(): Category[] {
        return this.categories;
    }

    public getCategory(id: string): Category {
        return this.categories.find(category => category.id === id);
    }

    public addCategory(category: Category): void {
        this.categories.push({ ...category, id: CategoryService.generateId() } as Category);
    }

    public updateCategory(id: string, updatedCategory: Category): void {
        this.categories = this.categories.map((category: Category): Category => {
            if (category.id === id) {
                return {
                    ...updatedCategory,
                    id: id
                } as Category;
            }
            return category;
        });
    }

    public removeCategory(id: string): void {
        this.categories = this.categories.filter((category: Category) => category.id !== id);
    }

    static generateId() {
        return Math.random().toString(36);
    }
}
