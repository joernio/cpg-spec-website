import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Schema from '@site/src/components/Schema';


import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const joernTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#4ec001"
    },
    secondary: {
      main: "#4ec001"
    }
  }
});

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const pluginData = usePluginData('staticcode');

  return (
    <ThemeProvider theme={joernTheme}>
    <Layout
      title={`${siteConfig.title}`}
      description="Code Property Graph Specification Website">
      <main>
        <section className="main-section">
          <Schema schema={pluginData.cpgSchema} />
        </section>
      </main>
    </Layout>
    </ThemeProvider>
  );
}

export default Home;
