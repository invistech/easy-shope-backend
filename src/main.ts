import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix("api/v1");
  await app.enableCors();
  const config = new DocumentBuilder()
    .setTitle("EasyShop")
    .setDescription("API description of EasyShop app")
    .setVersion("1.0")
    .addTag("EasyShop")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(3001);
}
bootstrap();
