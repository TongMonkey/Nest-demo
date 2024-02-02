import { MesagesRepository } from './messages.repository';
export declare class MessagesService {
    messagesRepo: MesagesRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: any): Promise<void>;
}
