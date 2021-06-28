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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          dolores beatae? Culpa ratione sapiente voluptatum explicabo
          praesentium tempora expedita, obcaecati voluptate. Ut, libero?
          Repudiandae explicabo voluptas in. Recusandae, doloribus perferendis!
          Labore minima ea rem non aspernatur sequi natus expedita cupiditate
          ipsam dicta eveniet placeat, numquam harum excepturi vitae. Id sit
          facere deleniti, dolores sed eos aperiam. Esse numquam est fuga? Ipsam
          eum excepturi suscipit sit amet magni voluptatibus voluptas possimus
          soluta ipsa, molestias corporis impedit neque recusandae esse aliquam
          laborum! Consectetur labore est doloribus ex nulla eum, harum facilis
          ipsa. Iusto alias praesentium tenetur nesciunt ea earum vero
          temporibus, facilis eveniet error corporis pariatur saepe quasi qui
          enim quo aliquid sed nulla? Aliquid eum ab quia excepturi corporis
          perspiciatis consequatur. Reprehenderit, nihil! Iure maiores culpa
          doloribus rerum quam. Laudantium fugiat ullam ab hic, odio illum!
          Dolorum, magni eos ratione amet impedit sapiente natus veritatis
          voluptatum! Fuga neque accusantium quo laudantium.
        </p>
      </main>
    </div>
  );
}

export default About;
