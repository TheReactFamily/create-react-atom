import { cyan } from 'chalk';
import { Command } from 'commander';
import prompts from 'prompts';

import { createAtom } from './services/createAtom';

import { convertStringToComponent } from './utils/convertStringToComponent';

import type { IProgram } from './@types/Program';

const packageJSON = require('../package.json');

let atomName: string = '';
let isUsingTs: boolean | undefined = undefined;

export async function app() {
  const program: IProgram = new Command(packageJSON.name)
    .version(packageJSON.version)
    .argument('[component-name]', 'The name of the component to create')
    .usage(`${cyan('[component-name]')} [options]`)
    .description('Creates a react component')
    .option('--help', 'Display help menu')
    .option('-y, --yes', 'Use the default options to create the component')
    .option('-t, --typescript', 'Create a typescript component')
    .allowUnknownOption()
    .action(name => (atomName = name))
    .parse(process.argv);

  if (!atomName) {
    atomName = await chooseAtomName();
  }

  isUsingTs = await checkIsUsingTs();

  await createAtom(atomName, isUsingTs);
}

const checkIsUsingTs = async () => {
  const { value } = await prompts({ initial: true, message: 'Does your component requires typescript?', name: 'value', type: 'confirm' });

  return value;
};

const chooseAtomName = async () => {
  const { answer } = await prompts({ initial: 'Button', message: 'How would like to name your atom?', name: 'answer', type: 'text' });

  return convertStringToComponent(answer);
};
