import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const User = createParamDecorator((data, context) => {
  const ctx = GqlExecutionContext.create(context);
  const request = ctx.getContext().req;

  return request;
});
