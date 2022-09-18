

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
interface IJwtPayload {
  username: string;
  email: string;
  userId: number;
}
export const GetCurrentAdminUser = createParamDecorator(
  (data: IJwtPayload, ctx: ExecutionContext) => {
    console.log(data, ctx)
    const request = ctx.switchToHttp().getRequest();
    console.log(data, request)
    return request.user;
  },
);