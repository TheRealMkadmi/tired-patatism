import { getModels } from '../migrate';

export async function up(): Promise<void> {
  const { User } = await getModels();

  await User.create([
    {
      firstName: 'Migration',
      lastName: 'Test',
    },
  ]);
}

export async function down(): Promise<void> {
  const { User } = await getModels();
  await User.deleteMany({ firstName: { $in: ['Migration'] } }).exec();
}
