import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import styles from './About.module.css';

function About(): JSX.Element {
  return (
    <div className={styles.aboutPage}>
      <header>
        <BackButton />
      </header>
      <main className={styles.aboutHeadline}>
        <h1>about plants need water</h1>
        <p>
          When I first started my coding journey, in the very first JavaScript
          tutorial I did, there was an assignment to write an if statement. The
          goal was to write a function that would check the current weekday and
          return if it was time to water the plants. So on a certain day the
          function would return ‘plants need water’. This expression became the
          catchphrase for my coding journey: should I go outside or should I do
          the next chapter of the tutorial? Well, plants need water, so coding
          it is.
        </p>

        <p>
          The metaphor is simple. And so is the concept it represents. If you
          want to grow or evolve in any area, you need to tend to it. water it,
          so it can grow.
        </p>
        <p>
          In a society that worships busyness, we measure everything we do in
          terms of how productive it makes us. Even selfcare gets turned into
          #selfcare, a means to an end. Taking care of yourself so you can keep
          on hustling.
        </p>
        <p>
          Plants need water strives to support you in your growth without adding
          pressure. It shifts the focus from performance at any cost to
          nurturing the inner plant.
        </p>
      </main>
    </div>
  );
}

export default About;
