import { existsSync, writeFileSync } from 'fs-extra';
import { join } from 'path';

const atomTemplateTS = '';
const atomTemplateJS = '';

export const createAtom = async (atomName: string, isUsingTs: boolean | undefined) => {
  const atomPath = join(process.cwd(), 'src', 'components', `${atomName}.tsx`);

  if (existsSync(atomPath)) {
    console.error(`Atom ${atomName} already exists.`);
    process.exit(1);
  }

  const atomTemplate = isUsingTs ? atomTemplateTS : atomTemplateJS;

  writeFileSync(atomPath, atomTemplate);

  console.log(`Atom ${atomName} created successfully.`);
};
