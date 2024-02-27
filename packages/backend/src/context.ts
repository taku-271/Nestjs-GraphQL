import { User } from './graphql/graphql';

const context = (user: User) => {
  return {
    user,
  };
};

export type Context = ReturnType<typeof context>;

export default context;
