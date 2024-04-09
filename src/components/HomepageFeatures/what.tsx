import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Updated Interface',
    img: 'img/1.png',},
  {
    title: 'Create Node',
    img: 'img/2.png',  },
  {
    title: 'Updated Interface',
    img: 'img/3.png',  },
  {
    title: 'Create Node',
    img: 'img/4.png',  },
];

function Feature({title, img}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={img} ><img src={img} width='800px' height='360px'/></a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageWhat(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center'}}>What is Pelican?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
