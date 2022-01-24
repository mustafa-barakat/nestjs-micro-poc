import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  KafkaContext,
  Payload,
  RpcException,
} from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('addOrUpdateIPP')
  addUser(@Ctx() context: KafkaContext, @Payload() message): any {
    console.log('Logging');
    throw new RpcException('not found');
  }
}
