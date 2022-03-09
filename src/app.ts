
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
