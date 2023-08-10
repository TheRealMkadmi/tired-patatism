import { getModels } from '../migrate';

export async function up(): Promise<void> {
    const { FormBuilder } = await getModels();

    // Add a title field to all FormBuilder documents
    await FormBuilder.updateMany({}, { $set: { title: 'Default Title' } });
}

export async function down(): Promise<void> {
    const { FormBuilder } = await getModels();

    // Remove the title field from all FormBuilder documents
    await FormBuilder.updateMany({}, { $unset: { title: 1 } });
}
