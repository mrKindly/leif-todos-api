import { Injectable } from '@nestjs/common';

export interface Task {
    id?: string;
    title: string;
    description?: string;
    done: boolean;
}

@Injectable()
export class TaskService {
    private tasks: Task[] = [{
        id: TaskService.generateId(),
        title: 'Test',
        done: false,
    }];

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task): void {
        this.tasks.push({ ...task, id: TaskService.generateId() });
    }

    public removeTask(id: string): void {
        this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    }

    static generateId() {
        return Math.random().toString(36);
    }
}
