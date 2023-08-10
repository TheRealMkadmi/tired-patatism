import {Injectable} from '@nestjs/common';
import {EventEmitter2} from "@nestjs/event-emitter";
import {Subject} from "rxjs";
import {FormSubmissionEvent} from "@/form-builder/dto/form-event.dto";
import {FormSubmissionEventType} from "@/form-builder/constants/form-builder-enums.";

@Injectable()
export class FormEventsService {
    readonly subject$ = new Subject<{type: FormSubmissionEventType, data: FormSubmissionEvent}>();
    constructor(
        private readonly eventEmitter: EventEmitter2,
    ) {
        eventEmitter.on(Object.keys(FormSubmissionEventType), (data) => {
           this.subject$.next(data);
        });
    }

    async emitFormEvent(data: FormSubmissionEvent, event: FormSubmissionEventType) {
        return await this.eventEmitter.emitAsync(event, { data, type: event });
    }

    source() {
        return this.subject$.asObservable();
    }
}
