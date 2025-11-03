import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
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
    link: '/docs/intro',
    external: false,
  },
  {
    title: 'Room Editor',
    imgSrc: require('@site/static/img/re.png').default,
    description: (
      <>
        The Room Editor is a powerful yet easy-to-use tool that allows anyone to create their own escape rooms and share them with the world.
      </>
    ),
    link: '/docs/room-editor/intro',
    external: false,
  },
  {
    title: 'The Community',
    imgSrc: require('@site/static/img/discord.png').default,
    description: (
      <>
        Join our growing community of escape room enthusiasts on Discord, Reddit, and Twitter to share your creations, get feedback, and collaborate with others.
      </>
    ),
    link: 'https://discord.gg/pinestudio',
    external: true,
  },
];

function Feature({ imgSrc, title, description, link, external }) {
  const CardContent = (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {external ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          {CardContent}
        </a>
      ) : (
        <Link to={link} className={styles.cardLink}>
          {CardContent}
        </Link>
      )}
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