import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Injectable, OnApplicationShutdown } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();

// @Injectable()
// class AnnouncementService implements OnApplicationShutdown {
//   onApplicationShutdown(signal: string) {
//     console.log(signal); // e.g. "SIGINT"
//   }
// }
