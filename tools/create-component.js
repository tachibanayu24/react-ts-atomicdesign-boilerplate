const { program } = require("commander");
const fs = require("fs");

program.option(
  "-C, --component [dir/Component]",
  "The name of the component to be created (ex) atoms/Button"
);

program.parse(process.argv);

if (!program.component) {
  program.help();
}

const argument = program.component.split("/");
const dir = argument[0];
const component = argument[1];

if (!["atoms", "molecules", "organisms"].includes(dir)) {
  console.error(
    "ERROR: Only 'atoms', 'molecules', and 'organisms' can be specified."
  );
  return;
}

// If the directory is not yet created, create it.
if (!fs.existsSync(`./src/components/${dir}`)) {
  fs.mkdirSync(`./src/components/${dir}`);
}

const templates = [
  "./tools/componentTemplates/index.ts",
  "./tools/componentTemplates/Component.tsx",
  "./tools/componentTemplates/Story.tsx",
  "./tools/componentTemplates/Spec.tsx",
];

const dests = [
  `./src/components/${dir}/${component}/index.ts`,
  `./src/components/${dir}/${component}/${component}.tsx`,
  `./src/components/${dir}/${component}/${component}.stories.tsx`,
  `./src/components/${dir}/${component}/${component}.spec.tsx`,
];

fs.mkdirSync(`./src/components/${dir}/${component}`);

// Error when a component already exists
templates.forEach((template, index) => {
  fs.copyFileSync(
    template,
    dests[index],
    fs.constants.COPYFILE_EXCL,
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
  console.log(`✨ Create component ${dests[index]}`);
});
