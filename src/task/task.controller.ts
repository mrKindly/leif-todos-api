import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get('/:categoryId')
    getAll(@Param('categoryId') categoryId: string): Task[] {
        return this.taskService.getTasks(categoryId);
    }

    @Get('/:categoryId/:id')
    get(@Param('categoryId') categoryId: string, @Param('id') id: string): Task {
        return this.taskService.getTask(categoryId, id);
    }

    @Post('/:categoryId')
    add(@Param('categoryId') categoryId: string, @Body() task: Task): void {
        this.taskService.addTask(categoryId, task);
    }

    @Put('/:categoryId/:id')
    update(@Param('categoryId') categoryId: string, @Param(',id') id: string, @Body() task: Task): void {
        this.taskService.updateTask(categoryId, id, task);
    }

    @Delete('/:categoryId/:id')
    remove(@Param('categoryId') categoryId: string, @Param('id') id: string): void {
        this.taskService.removeTask(categoryId, id);
    }
}
