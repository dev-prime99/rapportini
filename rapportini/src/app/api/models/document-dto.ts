/* tslint:disable */
import { ATaskDto } from './a-task-dto';
import { DocumentATaskDto } from './document-a-task-dto';
import { DocumentAttachmentDto } from './document-attachment-dto';
import { DocumentStakeholderDto } from './document-stakeholder-dto';
import { DocumentTypeDto } from './document-type-dto';
import { NoteDto } from './note-dto';
export interface DocumentDto {
  attachments?: null | Array<DocumentAttachmentDto>;
  code?: null | string;
  description?: null | string;
  expiration?: null | ATaskDto;
  identity?: null | string;
  notes?: null | Array<NoteDto>;
  stakeholders?: null | Array<DocumentStakeholderDto>;
  tasks?: null | Array<DocumentATaskDto>;
  type?: null | DocumentTypeDto;
}
