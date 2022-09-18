import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from './auth/auth.module';
import { CollectionModule } from './collection/collection.module';
import { ItemTypeModule } from './item-type/item-type.module';
import { ItemModule } from './item/item.module';
import { ProductModule } from './product/product.module';
import { VarientUnitModule } from './varient-unit/varient-unit.module';
import { VarientModule } from './varient/varient.module';

@Module({
  imports: [ProductModule, VarientModule, ItemModule, ItemTypeModule, VarientUnitModule, CollectionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
