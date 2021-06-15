import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageLink.module.css';

type PageLinkProps = {
  link: string;
  children: ReactNode;
  variant: 'addNew' | 'about' | 'plus';
};

function PageLink({ link, children, variant }: PageLinkProps): JSX.Element {
  return (
    <Link to={link} className={styles[variant]}>
      {children}
    </Link>
  );
}

export default PageLink;
