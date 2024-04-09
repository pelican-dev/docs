import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className="text--center" style={{paddingBottom: '15px'}}>
        <a href={img} ><img src={img}/></a>
      </div>
    </div>
  );
}

export default function HomepageWhat(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center'}}>What is Pelican?</h1>
      <h5 style={{textAlign: 'center'}}>pre-release screenshots</h5>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
