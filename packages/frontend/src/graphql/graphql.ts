import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodoById?: Maybe<Todo>;
  getTodos: Array<Todo>;
  getUserById?: Maybe<User>;
  getUsers: Array<User>;
};


export type QueryGetTodoByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int']['output'];
  isCompleted: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type UpdateTodoInput = {
  id: Scalars['Int']['input'];
  isCompleted: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  todo: Array<Todo>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: number, title: string, isCompleted: boolean } };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: number, isCompleted: boolean } };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', id: number, title: string, isCompleted: boolean }> };


export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    title
    isCompleted
  }
}
    `;
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    isCompleted
  }
}
    `;
export const GetTodosDocument = gql`
    query getTodos {
  getTodos {
    id
    title
    isCompleted
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo', 'mutation', variables);
    },
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTodo', 'mutation', variables);
    },
    getTodos(variables?: GetTodosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodosQuery>(GetTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTodos', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;