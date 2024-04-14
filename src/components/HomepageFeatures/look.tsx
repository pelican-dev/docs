import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  light: string;
  dark: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Node Overview',
    light: 'img/homepage/1l.png',
    dark: 'img/homepage/1d.png'  },
  {
    title: 'User Overview',
    light: 'img/homepage/2l.png',
    dark: 'img/homepage/2d.png'  },
  {
    title: 'Create Node',
    light: 'img/homepage/3l.png',
    dark: 'img/homepage/3d.png'  },
  {
    title: 'Editing an Egg',
    light: 'img/homepage/4l.png',
    dark: 'img/homepage/4d.png'  },
  {
    title: 'Editing a Server',
    light: 'img/homepage/5l.png',
    dark: 'img/homepage/5d.png'  },
  {
    title: 'Creating an API Key',
    light: 'img/homepage/6l.png',
    dark: 'img/homepage/6d.png'  },
];

function Feature({title, light, dark}: FeatureItem) {
  const {colorMode} = useColorMode();
  
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center" style={{paddingBottom: '20px'}}>
          <Zoom><img src={colorMode == 'dark' ? dark : light}/></Zoom>
          <Heading as="h3">{title}</Heading>
        </div>
      </div>
    );
  }

export default function HomepageLook(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center'}}>Shots of the Screen</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <span style={{textAlign: 'center', fontStyle: 'italic', fontWeight: 'normal'}}>
          <h5 style={{fontWeight: 'normal'}}>
            These are the current prerelease screenshots.
            <br /><br />
          </h5>
        </span>

      </div>
    </section>
  );
}

