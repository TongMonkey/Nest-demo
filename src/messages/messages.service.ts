import { MesagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MesagesRepository;
    constructor() {
      // DON'T DO THIS ON REAL APP. USE DEPENDENCY INJECTION
      this.messagesRepo = new MesagesRepository();
    }
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(content) {
    return this.messagesRepo.create(content);
  }
}
