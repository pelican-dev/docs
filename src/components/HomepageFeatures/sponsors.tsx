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
  {
    sponsor: 'Vultric Hosting',
    logo: '/img/homepage/sponsor/vultric.png',
    url: 'https://vultrichosting.com',
    desc: ''
  },
  {
    sponsor: 'Surf Hosting',
    logo: '/img/homepage/sponsor/surfhosting.png',
    url: 'https://billing.surfhosting.co/link.php?id=1',
    desc: '',
  },
  {
    sponsor: 'Aussie Server Hosts',
    logo: '/img/homepage/sponsor/ash.png',
    url: 'https://aussieserverhosts.com/',
    desc: '',
  },
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
        <div className="row">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

