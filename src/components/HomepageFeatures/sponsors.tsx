import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import 'react-medium-image-zoom/dist/styles.css';

type SponsorItem = {
  sponsor: string;
  logo: string;
  url: string;
  desc: string
};

const SponsorList: SponsorItem[] = [
  /* {
    sponsor: 'Name of Sponsor',
    logo: '/img/homepage/sponsor/image.png',
    url: 'https://example.com',
    desc: '',
  }, */
];

function Sponsor({sponsor, logo, url, desc}: SponsorItem) {

  return (
      <div className={clsx('col col--4')}>
        <div className="text--center" style={{paddingBottom: '20px'}}>
          <a href={url}><img src={logo}/></a>
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

