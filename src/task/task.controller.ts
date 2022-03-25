import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task, TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get()
    getAll(): Task[] {
        return this.taskService.getTasks();
    }

    @Post()
    add(@Body() task: Task): void {
        console.log("Task: ", task);
        this.taskService.addTask(task);
        console.log('TASKS: ', this.taskService.getTasks());
    }

    @Delete('/:id')
    remove(@Param('id') id: string): void {
        this.taskService.removeTask(id);
    }
}
