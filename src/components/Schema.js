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

const Node = ({ node }) => {
  return (
    <div className="node">
      <div className="node-name"><h4 className="node-name" id={nodeIdForName(node.name)}>{node.name}</h4></div>
      {node.comment &&
      <div className="node-comment">{node.comment}</div>}

      {node.properties && node.properties.length > 0 &&
        <div><span className="ui-description">PROPERTIES: </span>{node.properties.map((pp, i) => (
          <span className="node-property" key={i}>{pp}</span>
        ))}</div>}

      {node.extends && node.extends.length > 0 &&
        <div><span className="ui-description">EXTENDS: </span>{node.extends.map((ext, i) => (
          <span className="node-extension" key={i}>{ext}</span>
        ))}</div>}
    </div>
  )
}


const Edge = ({ edge }) => {
  return (
    <div className="edge">
      <div className="edge-name"><h4 className="edge-name" id={edgeIdForName(edge.name)}>{edge.name}</h4></div>
      {edge.comment &&
      <div className="edge-comment">{edge.comment}</div>}
    </div>
  )
}

const Schema = ({ schema }) => {
  return (
    <div className="schema-wrapper">
      <div className="schema-sidebar">
        <ul className="schemas">
        {schema.map(schema => {
          return (<li>
            <div>
              <a className="sidebar-link" href={"#" + schemaIdForName(schema.name)}>{schema.name}</a>
            </div>
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
          </li>)
        })}
        </ul>
      </div>
      <div className="schema-content">
        <div className="schema-intro">
      <h1>Code Property Graph Specification 1.1</h1>
      <h4>
      <i>Contributors: Fabian Yamaguchi, Markus Lottmann, Niko Schmidt, Michael Pollmeier, Suchakra Sharma, Claudiu-Vlad Ursache.</i>
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
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Schema;
