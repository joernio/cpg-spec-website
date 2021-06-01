(self.webpackChunkjqdb_website=self.webpackChunkjqdb_website||[]).push([[195],{8740:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var n=t(7294),r=t(4314),c=(t(6742),t(2263)),s=t(8084),i=(t(4996),t(4727)),l=(t(2727),(0,i.Z)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3),width:"100%"}}})),function(e){return"node-ref-"+e.toLowerCase()}),m=function(e){return"edge-ref-"+e.toLowerCase()},o=function(e){return"schema-ref-"+e.toLowerCase()},d=function(e){var a=e.node;return n.createElement("div",{className:"node"},n.createElement("div",{className:"node-name"},n.createElement("h4",{className:"node-name",id:l(a.name)},a.name)),a.comment&&n.createElement("div",{className:"node-comment"},a.comment),a.properties&&a.properties.length>0&&n.createElement("div",null,n.createElement("span",{className:"ui-description"},"PROPERTIES: "),a.properties.map((function(e,a){return n.createElement("span",{className:"node-property",key:a},e)}))),a.extends&&a.extends.length>0&&n.createElement("div",null,n.createElement("span",{className:"ui-description"},"EXTENDS: "),a.extends.map((function(e,a){return n.createElement("span",{className:"node-extension",key:a},e)}))))},p=function(e){var a=e.edge;return n.createElement("div",{className:"edge"},n.createElement("div",{className:"edge-name"},n.createElement("h4",{className:"edge-name",id:m(a.name)},a.name)),a.comment&&n.createElement("div",{className:"edge-comment"},a.comment))},u=function(e){var a=e.schema;return n.createElement("div",{className:"schema-wrapper"},n.createElement("div",{className:"schema-sidebar"},n.createElement("ul",{className:"schemas"},a.map((function(e){return n.createElement("li",null,n.createElement("div",null,n.createElement("a",{className:"sidebar-link",href:"#"+o(e.name)},e.name)),n.createElement("ul",{className:"schema-edges"},e.nodes.map((function(e){return n.createElement("li",null,n.createElement("a",{className:"sidebar-link sidebar-node-link",href:"#"+l(e.name)},e.name))}))),n.createElement("ul",{className:"schema-edges"},e.edges.map((function(e){return n.createElement("li",null,n.createElement("a",{className:"sidebar-link sidebar-edge-link",href:"#"+m(e.name)},e.name))}))))})))),n.createElement("div",{className:"schema-content"},n.createElement("div",{className:"schema-intro"},n.createElement("h1",null,"Code Property Graph Specification 1.1"),n.createElement("h4",null,n.createElement("i",null,"Contributors: Fabian Yamaguchi, Markus Lottmann, Niko Schmidt, Michael Pollmeier, Suchakra Sharma, Claudiu-Vlad Ursache.")),n.createElement("br",null),n.createElement("div",{className:"preambel"},n.createElement("p",null,"This is the specification of the Code Property Graph, a language-agnostic intermediate graph representation of code designed for code querying."),n.createElement("p",null,"The code property graph is a directed, edge-labeled, attributed multigraph. This specification provides the graph schema, that is, the types of nodes and edges and their properties, as well as constraints that specify which source and destination nodes are permitted for each edge type."),n.createElement("p",null,"The graph schema is structured into multiple layers, each of which provide node, property, and edge type definitions. A layer may depend on multiple other layers and make use of the types it provides."),n.createElement("p",null,"In the following, we describe each layer in detail. Note that this specification faithfully represents the code property graph as implemented by the Joern static analysis framework, as it is generated from its code."))),n.createElement("div",{className:"schemas"},a.map((function(e){return n.createElement("div",{className:"schema-section"},n.createElement("div",{class:"schema-description"},n.createElement("h3",{id:o(e.name)},e.name),n.createElement("p",null,e.description)),n.createElement("div",{className:"schema-nodes"},e.nodes.map((function(e){return n.createElement(d,{node:e})}))),n.createElement("div",{className:"schema-edges"},e.edges&&e.edges.map((function(e){return n.createElement(p,{edge:e})}))))})))))},h=t(4315),E=t(3457),f=(0,h.Z)({palette:{type:"dark",primary:{main:"#4ec001"},secondary:{main:"#4ec001"}}});var g=function(){var e=(0,c.default)().siteConfig,a=void 0===e?{}:e,t=(0,s.usePluginData)("staticcode");return n.createElement(E.Z,{theme:f},n.createElement(r.Z,{title:""+a.title,description:"Code Property Graph Specification Website"},n.createElement("main",null,n.createElement("section",{className:"main-section"},n.createElement(u,{schema:t.cpgSchema})))))}}}]);