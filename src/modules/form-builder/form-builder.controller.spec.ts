import { Test, TestingModule } from '@nestjs/testing';
import { FormBuilderController } from './form-builder.controller';
import { FormBuilderService } from './form-builder.service';

describe('FormBuilderController', () => {
  let controller: FormBuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormBuilderController],
      providers: [FormBuilderService],
    }).compile();

    controller = module.get<FormBuilderController>(FormBuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
