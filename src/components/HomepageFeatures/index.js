import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Game',
    imgSrc: require('@site/static/img/book.png').default,
    description: (
      <>
        Escape Simulator is a first-person multiplayer escape room game where
        you can play Pine's official rooms, rooms created by the community, or create your own with the
        Room Editor.
      </>
    ),
  },
  {
    title: 'Room Editor',
    imgSrc: require('@site/static/img/re.png').default,
    description: (
      <>
        The Room Editor is a powerful yet easy-to-use tool that allows anyone to create their own escape rooms and share them with the world.
      </>
    ),
  },
  {
    title: 'The Community',
    imgSrc: require('@site/static/img/discord.png').default,
    description: (
      <>
        Join our growing community of escape room enthusiasts on Discord, Reddit, and Twitter to share your creations, get feedback, and collaborate with others.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ color: 'white' }}>{title}</Heading>
        <p style={{ color: 'white' }}>{description}</p>
    </div>
  </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresWrapper}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}