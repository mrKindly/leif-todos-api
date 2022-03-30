import { Injectable } from '@nestjs/common';
import { Task } from './dto/task.dto';

@Injectable()
export class TaskService {
    private tasks: Map<string, Task[]> = new Map<string, Task[]>();
    constructor() {
        this.tasks.set('0.o9m8mugg00m', [
            {id: TaskService.generateId(), title: 'Реализовать запрос за категориями', done: false},
            {id: TaskService.generateId(), title: 'Реализовать запрос на создание категории', done: false},
            {id: TaskService.generateId(), title: 'Реализовать запрос за задачами', done: false},
            {id: TaskService.generateId(), title: 'Реализовать запрос на создание задачи', done: false},
        ]);
    }

    public getTasks(categoryId: string): Task[] {
        return this.tasks.get(categoryId) || [];
    }

    public getTask(categoryId: string, id: string): Task {
        return (this.tasks.get(categoryId) || []).find(task => task.id === id);
    }

    public addTask(categoryId: string, task: Task): void {
        if (this.tasks.has(categoryId)) {
            this.tasks.set(categoryId, [...this.tasks.get(categoryId), { ...task, id: TaskService.generateId() } as Task]);
        } else {
            this.tasks.set(categoryId, [{ ...task, id: TaskService.generateId() } as Task]);
        }
    }

    public updateTask(categoryId: string, id: string, updatedTask: Task): void {
        let tasks = this.tasks.get(categoryId) || [];
        tasks = tasks.map((task: Task): Task => {
            if (task.id === id) {
                return {
                    ...updatedTask,
                    id: id
                } as Task;
            }
            return task;
        });
        this.tasks.set(categoryId, tasks);
    }

    public removeTask(categoryId: string, id: string): void {
        let tasks = this.tasks.get(categoryId);
        tasks = tasks.filter((task: Task) => task.id !== id);
        this.tasks.set(categoryId, tasks);
    }

    static generateId() {
        return Math.random().toString(36);
    }
}
