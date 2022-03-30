import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    getAll(): Category[] {
        return this.categoryService.getCategories();
    }

    @Get('/:id')
    get(@Param('id') id: string): Category {
        return this.categoryService.getCategory(id);
    }

    @Post()
    add(@Body() task: Category): void {
        this.categoryService.addCategory(task);
    }

    @Put('/:id')
    update(@Param(',id') id: string, @Body() task: Category): void {
        this.categoryService.updateCategory(id, task);
    }

    @Delete('/:id')
    remove(@Param('id') id: string): void {
        this.categoryService.removeCategory(id);
    }
}
