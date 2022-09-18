/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class DataExtractFromTokenInterceptor implements NestInterceptor {
  constructor(private jwtService: JwtService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    context.switchToHttp().getRequest().headers["adminUserData"] =
      this.jwtService.decode(
        context
          .switchToHttp()
          .getRequest()
          .headers.authorization.replace("Bearer ", "")
      );
    return next.handle().pipe();
  }
}
