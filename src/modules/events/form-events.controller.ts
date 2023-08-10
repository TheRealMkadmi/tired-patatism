import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { FormEventsService } from '@/modules/events/form-events.service';
import { FormSubmissionEventType } from '@/form-builder/constants/form-builder-enums.';

@Controller('events')
export class FormEventsController {
  constructor(private readonly formEventsService: FormEventsService) {}

  @Sse('/sse')
  sse(): Observable<MessageEvent> {
    setInterval(() => {
      this.formEventsService.emitFormEvent(
        {
          _form: '123',
        },
        FormSubmissionEventType.CREATED,
      );
      console.log('emitted');
    }, 10000);
    return this.formEventsService.subject$.pipe(
      map((event) => {
        console.log(event);
        return {
          data: event.data,
          type: event.type,
          id: event.data._form?.toString(),
        };
      }),
    );
  }
}
