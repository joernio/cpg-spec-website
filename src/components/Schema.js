const itemsjs = require('itemsjs');

import React, { useState }  from 'react';
import Code from '@site/src/components/Code';
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
const schemaIdForName = (name) => { return "schema-ref-" + name.toLowerCase(); }

const Node = ({ node }) => {
  return (
    <div className="node">
      <div className="node-name"><h4 id={nodeIdForName(node.name)}>{node.name}</h4></div>
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
                <li><a className="sidebar-link" href={"#" + nodeIdForName(node.name)}>{node.name}</a></li>
              ))}
             </ul>
          </li>)
        })}
        </ul>
      </div>
      <div className="schema-content">
        <div className="schema-intro">
          <h1>Code Property Graph Specification 1.0</h1>
          <div className="preambel">
            <p>This document describes the first major version of the Code Property Graph data structure.
            </p>
          </div>
        </div>

        <div className="schemas">
          {schema.map(schema => {
            return (<div className="schema-section">
              <div class="schema-description">
                <h3 id={schemaIdForName(schema.name)}>{schema.name}</h3>
                <p>{schema.description}</p>
                {schema.providedByFrontend &&
                  <p className="schema-frontend-descr">This schema is provided by the frontend</p>}
                {!schema.providedByFrontend &&
                  <p className="schema-frontend-descr">This schema should not be written by the language frontend</p>}
              </div>
              <div className="schema-nodes">
                {schema.nodes.map(node => (
                  <Node node={node} />
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
