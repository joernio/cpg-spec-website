const fs = require('fs');

module.exports = function (context, options) {
  return {
    name: 'staticcode',
    async loadContent() {
      const content = {};
      const specString = fs.readFileSync("static/json/schema.json", 'utf8').trim();
      const spec = JSON.parse(specString);
      const schemasDict = spec.schemas.reduce((out, schema) => {
        out[schema.name] = {...schema};
	out[schema.name].nodes = [];
	out[schema.name].edges = [];
        return out;
      }, {});
      const schemasWithNodes = spec.nodes.reduce((out, node) => {
        if (out[node.schema]) {
          if (node.schema && !("nodes" in out[node.schema])) {
            out[node.schema].nodes = [];
          }
          out[node.schema].nodes.push(node);
        }
        return out;
      }, schemasDict);

      var schemasArray = [];
      Object.entries(schemasWithNodes).forEach(([schemaName, schema]) =>{
        schemasArray.push(schema);
      });
      return schemasArray;
    },
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      setGlobalData({
        cpgSchema: content,
      });
    },
  };
};
