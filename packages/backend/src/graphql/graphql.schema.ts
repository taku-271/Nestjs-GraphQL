
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTodoInput {
    title: string;
    user_id: number;
}

export abstract class IQuery {
    abstract getTodos(): Todo[] | Promise<Todo[]>;

    abstract getTodoById(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract getUserById(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createTodo(input: CreateTodoInput): Todo | Promise<Todo>;
}

export class Todo {
    id: number;
    title: string;
    is_completed: boolean;
}

export class User {
    id: number;
    name: string;
    todo: Todo[];
}

type Nullable<T> = T | null;
