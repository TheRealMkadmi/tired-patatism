import { HttpException, Injectable, Logger } from "@nestjs/common";
import { OnEvent } from '@nestjs/event-emitter';
import { Request } from "express";

@Injectable()
export class ExceptionLoggerService {
  private readonly logger = new Logger(ExceptionLoggerService.name);

  @OnEvent('exception.throw')
  handleException(payload: { exception: unknown; request: Request }) {
    const { exception, request } = payload;

    if (exception instanceof HttpException) {
      this.logger.error(
        `HttpException caught: ${exception.message}`,
        exception.stack,
      );
    } else {
      this.logger.error(
        `Unknown exception caught: ${(exception as Error).message}`,
        (exception as Error).stack,
      );
    }

    this.logger.log(`Request details: ${JSON.stringify(request)}`);
  }
}
