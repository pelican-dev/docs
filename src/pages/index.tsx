import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageWhy from '@site/src/components/HomepageFeatures/why';
import HomepageWhat from '@site/src/components/HomepageFeatures/what';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react/dist/iconify.js';

import styles from './index.module.css';
import HomepageLook from '../components/HomepageFeatures/look';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md disabled"
            to="/" style={{ fontSize: '26px' }}
          >Comming Soon!</Link>
          <Link
            style={{ paddingTop: '10px', margin: '15px' }}
            className="button button--secondary button--sm"
            to="https://github.com/pelican-dev/panel"
          ><Icon icon="logos:github-icon" height='36px' /></Link>
          <Link
            style={{paddingTop: '10px'}}
            className="button button--secondary button--sm"
            to="https://discord.gg/pelican-panel"
          ><Icon icon="logos:discord-icon" height='36px' /></Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Caww-Kaww">
      <HomepageHeader />
      <main>
        <HomepageWhat />
        <HomepageWhy />
        <HomepageLook />
      </main>
    </Layout>
  );
}
