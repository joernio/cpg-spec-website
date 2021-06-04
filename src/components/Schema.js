const itemsjs = require('itemsjs');

import React, { useState }  from 'react';
import { Button, Card, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    width: '100%'
  },
}));

const nodeIdForName = (name) => { return "node-ref-" + name.toLowerCase(); }
const edgeIdForName = (name) => { return "edge-ref-" + name.toLowerCase(); }
const schemaIdForName = (name) => { return "schema-ref-" + name.toLowerCase(); }
const propertyIdForName = (name) => { return "prop-ref-" + name.toLowerCase(); }


const Node = ({ node }) => {
  const hasProperties = node.properties && node.properties.length > 0
  const hasInheritedProperties = node.inheritedProperties && node.inheritedProperties.length > 0
  const hasExtensions = node.extends && node.extends.length > 0

  return (
    <div className="node">
      <div className="node-name"><h4 className="node-name" id={nodeIdForName(node.name)}>{node.name}</h4></div>
      {node.comment &&
        <div className="node-comment">{node.comment}</div>}

      {hasProperties &&
        <div className="node-properties">
          <span className="ui-description">PROPERTIES: </span>
          {node.properties.sort().map((pp, i) =>  {
            return (
            <span className="node-property" key={i}>
              <a className="description-link definition-property-link" href={"#" + propertyIdForName(pp)}>{pp}</a>
            </span>)})}
        </div>}

      {hasInheritedProperties &&
        <div className="node-inherited-properties">
          <span className="ui-description">INHERITED PROPERTIES: </span>
          {node.inheritedProperties.sort((a, b) => a.name.localeCompare(b.name)).map((pp, i) => {
            return (
            <span className="node-property" key={i}>
              <a className="description-link definition-property-link" href={"#" + propertyIdForName(pp.name)}>{pp.name}</a>
            </span>)})}
        </div>}

      {hasExtensions &&
        <div className="node-extensions"><span className="ui-description">EXTENDS: </span>
          {node.extends.map((ext, i) => (
            <span className="node-extension" key={i}>
              <a className="description-link definition-node-link" href={"#" + nodeIdForName(ext)}>{ext}</a>
            </span>))}
        </div>}
    </div>
  )
}


const Edge = ({ edge }) => {
  return (
    <div className="edge">
      <div className="edge-name">
        <h4 className="edge-name" id={edgeIdForName(edge.name)}>{edge.name}</h4>
      </div>
      {edge.comment &&
        <div className="edge-comment">{edge.comment}</div>}
    </div>
  )
}

const Property = ({ property }) => {
  return (
    <div className="property">
      <div className="property-name">
        <h4 className="property-name" id={propertyIdForName(property.name)}>{property.name}</h4>
      </div>
      {property.comment &&
        <div className="property-comment">{property.comment}</div>}
      <div className="property-cardinality">
        <span className="ui-description">CARDINALITY</span> <span className="cardinality-value">{property.cardinality}</span>
      </div>
    </div>
  )
}

const Schema = ({ schema }) => {
  return (
    <div className="schema-wrapper">
      <div className="schema-sidebar">
        <div className="sidebar-title"><span className="sidebar-title">OVERVIEW</span></div>
        <ul className="schemas">
        {schema.map(schema => {
          return (<li>
            <div className="schema-sidebar-title">
              <a className="sidebar-link schema-sidebar-title" href={"#" + schemaIdForName(schema.name)}>{schema.name}</a>
            </div>
            <div className="schema-sidebar-content">
              <ul className="schema-nodes">
                {schema.nodes.map(node => (
                  <li><a className="sidebar-link sidebar-node-link" href={"#" + nodeIdForName(node.name)}>{node.name}</a></li>
                ))}
               </ul>
              <ul className="schema-edges">
                {schema.edges.map(edge => (
                  <li><a className="sidebar-link sidebar-edge-link" href={"#" + edgeIdForName(edge.name)}>{edge.name}</a></li>
                ))}
               </ul>
              <ul className="schema-properties">
                {schema.properties.map(property => (
                  <li><a className="sidebar-link sidebar-property-link" href={"#" + propertyIdForName(property.name)}>{property.name}</a></li>
                ))}
               </ul>
            </div>
          </li>)
        })}
        </ul>
      </div>
      <div className="content-separator"></div>
      <div className="schema-content">
        <div className="schema-intro">
      <h1>Code Property Graph Specification 1.1</h1>
      <h4>
        <span id="contributors"><i>Contributors: Fabian Yamaguchi, Markus Lottmann, Niko Schmidt, Michael Pollmeier, Suchakra Sharma, Claudiu-Vlad Ursache.</i></span>
      </h4>
      <br/>
          <div className="preambel">
      <p>This is the specification of the Code Property Graph, a
    language-agnostic intermediate graph representation of code
    designed for code querying.
      </p>
      <p>
    The code property graph is a directed, edge-labeled, attributed
    multigraph. This specification provides the graph schema, that is,
    the types of nodes and edges and their properties, as well as
    constraints that specify which source and destination nodes are
    permitted for each edge type.
      </p>
      <p>
      The graph schema is structured into multiple layers, each of
    which provide node, property, and edge type
    definitions. A layer may depend on multiple other layers and make
    use of the types it provides.
      </p>

      <p>
      In the following, we describe each layer in detail. Note that
    this specification faithfully represents the code property graph
    as implemented by the Joern static analysis framework, as it is
    generated from its code.
      </p>
          </div>
        </div>

        <div className="schemas">
          {schema.map(schema => {
            return (<div className="schema-section">
              <div class="schema-description">
                <h3 id={schemaIdForName(schema.name)}>{schema.name}</h3>
                <p>{schema.description}</p>
              </div>
              <div className="schema-nodes">
                {schema.nodes.map(node => (
                  <Node node={node} />
                ))}
               </div>
              <div className="schema-edges">
                {schema.edges && schema.edges.map(edge => (
                  <Edge edge={edge} />
                ))}
              </div>
              <div className="schema-properties">
                {schema.properties && schema.properties.map(property => (
                  <Property property={property} />
                ))}
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Schema;
