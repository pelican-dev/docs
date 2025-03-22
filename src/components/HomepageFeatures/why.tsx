import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Updated Interface',
    icon: 'tabler:app-window',
    description: (
      <>
        Intuitive interface, one click installations, comprehensive documentation, active community support, automatic updates.
      </>
    ),
  },
  {
    title: 'Free to Use & Open Source',
    icon: 'tabler:currency-dollar-off',
    description: (
      <>
        Pelican is 100% free to use forever for your self, friends, family, and others. All of our code is completely open source on GitHub.
      </>
    )
  },
  {
    title: 'Eggs',
    icon: 'tabler:eggs',
    description: (
      <>
        <>We support </>
          <Link to={'https://minecraft.net'}>Minecraft</Link><>, </>
          <Link to={'https://terraria.org'}>Terraria</Link><>, </>
          <Link to={'https://www.pocketpair.jp/palworld'}>Palworld</Link><>, </>
          <Link to={'https://www.valheimgame.com'}>Valheim</Link><>, </>
          <Link to={'https://enshrouded.com'}>Enshrouded</Link><>, </>
          <Link to={'https://factorio.com'}>Factorio</Link><>, </>
          <Link to={'/eggs'} target={'_blank'}>and so much more</Link>.
        Check our eggs out, we like them scrambled!
      </>
    ),
  },
  {
    title: 'Powered by Docker',
    icon: 'tabler:brand-docker',
    description: (
      <>
        Each server is ran in its own container and completely isolated. 
        This allows you to use almost any of your machines with Pelican.
      </>
    ),
  },
  {
    title: 'Scaleable to the Sky',
    icon: 'tabler:server-2',
    description: (
      <>
        Whether you're some friends that want to play together, or a gaming community, we've got you covered.
      </>
    )
  },
  {
    title: 'Security',
    icon: 'tabler:lock-check',
    description: (
      <>
        Pelican takes security extremely seriously and natively supports SSL, 2FA, AES-256 encryption, and more.
      </>
    )
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon icon={icon} height="188px" width="188px"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageWhy(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center'}}>Why use Pelican?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
