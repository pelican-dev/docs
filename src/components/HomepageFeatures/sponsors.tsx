import React, {JSX} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import 'react-medium-image-zoom/dist/styles.css';
import {useColorMode} from "@docusaurus/theme-common";

type SponsorItem = {
  sponsor: string;
  logo: string;
  logoDM: string;
  url: string;
  desc: string;
};

const SponsorList: SponsorItem[] = [
  /* {
    sponsor: 'Name of Sponsor',
    logo: '/img/homepage/sponsor/image.png',
    url: 'https://example.com',
    desc: '',
  }, */
    {
  sponsor: 'DataForest',
  logo: '/img/homepage/sponsor/df-cloud-logo.svg',
  logoDM: '/img/homepage/sponsor/df-cloud-logo-darkmode.svg',
  url: 'https://cloud.dataforest.net/?mtm_campaign=pelican&mtm_kwd=main',
  desc: '',
},
];

function Sponsor({sponsor, logo, logoDM, url, desc}: SponsorItem) {

    const {colorMode} = useColorMode();
    let image: string;

    if (colorMode === 'dark') {
        image = logoDM;
    } else {
        image = logo;
    }

  return (
      <div className={clsx('col col--4')}>
        <div className="text--center" style={{paddingBottom: '20px'}}>
          <a href={url}><img src={image}/></a>
        </div>
        {desc}
      </div>
    );
  }

export default function HomepageSponsor(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center', fontSize: '250%'}}>Project Sponsors</h1>
        <div className="row items-center py-2">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

