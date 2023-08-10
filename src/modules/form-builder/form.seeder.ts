import {  FormBuilder } from '@/form-builder/entities/form-builder.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { ComponentType } from '../../../src/modules/form-builder/constants/form-builder-enums.';

@Injectable()
export class FormBuilderSeeder {
    constructor(
        @InjectModel(FormBuilder.name)
        private readonly formBuilderModel: Model<FormBuilder>,
    ) {}

    async seed(): Promise<any> {
        // Generate components for the formBuilder
        const generateComponents = (): any[] => {
            const count = faker.number.int(10)
            const components: any[] = [];
            for (let i = 0; i < count; i++) {
                components.push({
                    label: faker.lorem.words(2),
                    key: faker.lorem.words(2),
                    // i think current version of faker-js doesn't have a way to get a random enum value so let's improvise
                    type: Object.values(ComponentType)[Math.floor(Math.random() * Object.keys(ComponentType).length / 2)],
                });
            }
            return components;
        };

        // Generate 10 formBuilders.
        const formBuilders = new Array(10).fill(null).map(() => ({
            components: generateComponents(),
        }));

        // Insert into the database.
        return this.formBuilderModel.insertMany(formBuilders);
    }

    async drop(): Promise<any> {
        return this.formBuilderModel.deleteMany({});
    }
}
