import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type FeatureItem = {
  title: string;
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Node Overview',
    img: 'img/homepage/1.png',  },
  {
    title: 'User Overview',
    img: 'img/homepage/2.png',  },
  {
    title: 'Create Node',
    img: 'img/homepage/3.png',  },
  {
    title: 'Editing an Egg',
    img: 'img/homepage/4.png',  },
  {
    title: 'Editing a Server',
    img: 'img/homepage/5.png',  },
  {
    title: 'Creating an API Key',
    img: 'img/homepage/6.png',  },
];

function Feature({title, img}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{paddingBottom: '20px'}}>
        <Zoom><img src={img}/></Zoom>
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
            Just like this website, these also have light mode which looks fantastic!
          </h5>
        </span>

      </div>
    </section>
  );
}
