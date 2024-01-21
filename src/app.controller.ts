import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


// Controller => pode ter mais de 1, e quando você chama ele na URL "localhost:3000/nome_do_controller" o proximo "/" depois do nome é os services que pertence dentro.
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get => Busca um determinado valor, para chama ele na URl "localhost:3000/nome_do_controller/nome_do_service" onde o nome do service está dentro do '( )' entre ("").  
  @Get('new')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objeto')
  getObject(): any{
    return this.appService.getObject();
  }
}
