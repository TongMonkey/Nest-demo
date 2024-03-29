import { Body, Controller, Get, Param, Post, NotFoundException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // DON'T DO THIS ON REAL APP. USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService(); 
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll()
  }

  @Post()
  // createMessage(@Body() body: any) {
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body); // Appear in terminal log.
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log(id); // Appear in terminal log.
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message.
  }
}
