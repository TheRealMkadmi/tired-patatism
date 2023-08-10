import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Subject } from 'rxjs';
import { FormSubmissionEvent } from '@/form-builder/dto/form-event.dto';
import { FormSubmissionEventType } from '@/form-builder/constants/form-builder-enums.';

@Injectable()
export class FormEventsService {
  readonly subject$ = new Subject<{
    type: FormSubmissionEventType;
    data: FormSubmissionEvent;
  }>();
  constructor(private readonly eventEmitter: EventEmitter2) {
    eventEmitter.on(FormSubmissionEventType.CREATED, (data) => {
      this.subject$.next(data);
    });
    eventEmitter.on(FormSubmissionEventType.ANSWERED, (data) => {
      this.subject$.next(data);
    });
    eventEmitter.on(FormSubmissionEventType.DELETED, (data) => {
      this.subject$.next(data);
    });
    eventEmitter.on(FormSubmissionEventType.UPDATED, (data) => {
      this.subject$.next(data);
    });
  }

  emitFormEvent(data: FormSubmissionEvent, event: FormSubmissionEventType) {
    return this.eventEmitter.emit(event, { data, type: event });
  }

  source() {
    return this.subject$.asObservable();
  }
}
