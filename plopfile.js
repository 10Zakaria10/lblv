const configGeneratorComponent = {
  description: "Generation a new component ...",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: "components/{{camelCase name}}/{{pascalCase name}}.tsx",
      templateFile: "__plop__/ComponentReact.hbs",
    },
    {
      type: "add",
      path: "components/{{camelCase name}}/index.ts",
      templateFile: "__plop__/index.hbs",
    },
    {
      type: "add",
      path: "components/{{camelCase name}}/{{pascalCase name}}.style.ts",
      templateFile: "__plop__/style.hbs",
    }
  ],
};

const configGeneratorPage = {
  description: "Generating a new Page with container...",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: "pages/{{camelCase name}}.tsx",
      templateFile: "__plop__/Page.hbs",
    },
    {
      type: "add",
      path: "containers/{{camelCase name}}/{{pascalCase name}}.style.ts",
      templateFile: "__plop__/style.hbs",
    },
    {
      type: "add",
      path: "containers/{{camelCase name}}/index.ts",
      templateFile: "__plop__/index.hbs",
    },
    {
      type: "add",
      path: "containers/{{camelCase name}}/{{pascalCase name}}.tsx",
      templateFile: "__plop__/ContainerReact.hbs",
    },
    {
      type: "add",
      path: "containers/{{camelCase name}}/wording/index.ts",
      templateFile: "__plop__/Wording.hbs",
    },
    {
      type: "add",
      path: "containers/{{camelCase name}}/wording/types.ts",
      templateFile: "__plop__/WordingTypes.hbs",
    },
  ],
};

module.exports = function configure(plop) {
  plop.setGenerator("component", configGeneratorComponent);
  plop.setGenerator("page", configGeneratorPage);
};
