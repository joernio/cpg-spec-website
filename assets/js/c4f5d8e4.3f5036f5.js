(self.webpackChunkjqdb_website=self.webpackChunkjqdb_website||[]).push([[195],{8740:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(4314),s=(a(6742),a(2263)),i=a(8084),c=(a(4996),a(4727)),m=(a(2727),(0,c.Z)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3),width:"100%"}}})),function(e){return"node-ref-"+e.toLowerCase()}),l=function(e){return"edge-ref-"+e.toLowerCase()},o=function(e){return"schema-ref-"+e.toLowerCase()},d=function(e){return"prop-ref-"+e.toLowerCase()},p=function(e){var t=e.node;return n.createElement("div",{className:"node"},n.createElement("div",{className:"node-name"},n.createElement("h4",{className:"node-name",id:m(t.name)},t.name)),t.comment&&n.createElement("div",{className:"node-comment"},t.comment),t.properties&&t.properties.length>0&&n.createElement("div",{className:"node-properties"},n.createElement("span",{className:"ui-description"},"PROPERTIES: "),t.properties.map((function(e,t){return n.createElement("span",{className:"node-property",key:t},n.createElement("a",{className:"description-link definition-property-link",href:"#"+d(e)},e))}))),t.inheritedProperties&&t.inheritedProperties.length>0&&n.createElement("div",{className:"node-inherited-properties"},n.createElement("span",{className:"ui-description"},"INHERITED PROPERTIES: "),t.inheritedProperties.map((function(e,t){return n.createElement("span",{className:"node-property",key:t},n.createElement("a",{className:"description-link definition-property-link",href:"#"+d(e.name)},e.name))}))),t.extends&&t.extends.length>0&&n.createElement("div",{className:"node-extensions"},n.createElement("span",{className:"ui-description"},"EXTENDS: "),t.extends.map((function(e,t){return n.createElement("span",{className:"node-extension",key:t},n.createElement("a",{className:"description-link definition-node-link",href:"#"+m(e)},e))}))))},u=function(e){var t=e.edge;return n.createElement("div",{className:"edge"},n.createElement("div",{className:"edge-name"},n.createElement("h4",{className:"edge-name",id:l(t.name)},t.name)),t.comment&&n.createElement("div",{className:"edge-comment"},t.comment))},h=function(e){var t=e.property;return n.createElement("div",{className:"property"},n.createElement("div",{className:"property-name"},n.createElement("h4",{className:"property-name",id:d(t.name)},t.name)),t.comment&&n.createElement("div",{className:"property-comment"},t.comment))},E=function(e){var t=e.schema;return n.createElement("div",{className:"schema-wrapper"},n.createElement("div",{className:"schema-sidebar"},n.createElement("ul",{className:"schemas"},t.map((function(e){return n.createElement("li",null,n.createElement("div",{className:"schema-sidebar-title"},n.createElement("a",{className:"sidebar-link schema-sidebar-title",href:"#"+o(e.name)},e.name)),n.createElement("div",{className:"schema-sidebar-content"},n.createElement("ul",{className:"schema-nodes"},e.nodes.map((function(e){return n.createElement("li",null,n.createElement("a",{className:"sidebar-link sidebar-node-link",href:"#"+m(e.name)},e.name))}))),n.createElement("ul",{className:"schema-edges"},e.edges.map((function(e){return n.createElement("li",null,n.createElement("a",{className:"sidebar-link sidebar-edge-link",href:"#"+l(e.name)},e.name))}))),n.createElement("ul",{className:"schema-properties"},e.properties.map((function(e){return n.createElement("li",null,n.createElement("a",{className:"sidebar-link sidebar-property-link",href:"#"+d(e.name)},e.name))})))))})))),n.createElement("div",{className:"schema-content"},n.createElement("div",{className:"schema-intro"},n.createElement("h1",null,"Code Property Graph Specification 1.1"),n.createElement("h4",null,n.createElement("span",{id:"contributors"},n.createElement("i",null,"Contributors: Fabian Yamaguchi, Markus Lottmann, Niko Schmidt, Michael Pollmeier, Suchakra Sharma, Claudiu-Vlad Ursache."))),n.createElement("br",null),n.createElement("div",{className:"preambel"},n.createElement("p",null,"This is the specification of the Code Property Graph, a language-agnostic intermediate graph representation of code designed for code querying."),n.createElement("p",null,"The code property graph is a directed, edge-labeled, attributed multigraph. This specification provides the graph schema, that is, the types of nodes and edges and their properties, as well as constraints that specify which source and destination nodes are permitted for each edge type."),n.createElement("p",null,"The graph schema is structured into multiple layers, each of which provide node, property, and edge type definitions. A layer may depend on multiple other layers and make use of the types it provides."),n.createElement("p",null,"In the following, we describe each layer in detail. Note that this specification faithfully represents the code property graph as implemented by the Joern static analysis framework, as it is generated from its code."))),n.createElement("div",{className:"schemas"},t.map((function(e){return n.createElement("div",{className:"schema-section"},n.createElement("div",{class:"schema-description"},n.createElement("h3",{id:o(e.name)},e.name),n.createElement("p",null,e.description)),n.createElement("div",{className:"schema-nodes"},e.nodes.map((function(e){return n.createElement(p,{node:e})}))),n.createElement("div",{className:"schema-edges"},e.edges&&e.edges.map((function(e){return n.createElement(u,{edge:e})}))),n.createElement("div",{className:"schema-properties"},e.properties&&e.properties.map((function(e){return n.createElement(h,{property:e})}))))})))))},f=a(4315),N=a(3457),g=(0,f.Z)({palette:{type:"dark",primary:{main:"#4ec001"},secondary:{main:"#4ec001"}}});var y=function(){var e=(0,s.default)().siteConfig,t=void 0===e?{}:e,a=(0,i.usePluginData)("staticcode");return n.createElement(N.Z,{theme:g},n.createElement(r.Z,{title:""+t.title,description:"Code Property Graph Specification Website"},n.createElement("main",null,n.createElement("section",{className:"main-section"},n.createElement(E,{schema:a.cpgSchema})))))}}}]);