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
        out[schema.name].properties = [];
        return out;
      }, {});

      const schemasWithNodes = spec.nodes.reduce((out, node) => {
        if (out[node.schema]) {
          if (node.schema && !("nodes" in out[node.schema])) {
            out[node.schema].nodes = [];
          }

          const propsToCardinalities = {};
          node.allProperties.forEach((prop, i) =>
            propsToCardinalities[prop] = node.cardinalities[i]);
          node.propsToCardinalities = propsToCardinalities;
          out[node.schema].nodes.push(node);
        }
        return out;
      }, schemasDict);

      var schemasWithNodesAndEdges = schemasWithNodes;
      if (spec.edges) {
        schemasWithNodesAndEdges = spec.edges.reduce((out, edge) => {
          if (out[edge.schema]) {
            if (edge.schema && !("edges" in out[edge.schema])) {
              out[edge.schema].edges = [];
            }
            out[edge.schema].edges.push(edge);
          }
          return out;
        }, schemasWithNodes);
      }

      var schemasWithNodesEdgesAndProps = schemasWithNodesAndEdges;
      if (spec.properties) {
        schemasWithNodesEdgesAndProps = spec.properties.reduce((out, property) => {
          if (out[property.schema]) {
            if (property.schema && !("properties" in out[property.schema])) {
              out[property.schema].properties = [];
            }
            out[property.schema].properties.push(property);
          }
          return out;
        }, schemasWithNodesEdgesAndProps);
      }

      var schemasArray = [];
      Object.entries(schemasWithNodesEdgesAndProps).forEach(([schemaName, schema]) =>{
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
