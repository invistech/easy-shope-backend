import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AppHttpLoggerInterceptor } from "./@domain/extensions/app-http-logger.interceptor";
import { DataExtractFromTokenInterceptor } from "./@domain/extensions/data-extract-from-token.interceptor";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CollectionModule } from "./collection/collection.module";
import { ItemTypeModule } from "./item-type/item-type.module";
import { ItemModule } from "./item/item.module";
import { ProductModule } from "./product/product.module";
import { VarientUnitModule } from "./varient-unit/varient-unit.module";
import { VarientModule } from "./varient/varient.module";

@Module({
  imports: [
    ProductModule,
    VarientModule,
    ItemModule,
    ItemTypeModule,
    VarientUnitModule,
    CollectionModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppHttpLoggerInterceptor,
    },
    // JwtService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: DataExtractFromTokenInterceptor,
    // }
  ]
})
export class AppModule {}
