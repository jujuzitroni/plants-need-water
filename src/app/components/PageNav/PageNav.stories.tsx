import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PageNav from './PageNav';

export default {
  title: 'Component/PageNav',
  component: PageNav,
};

export const Home = (): JSX.Element => (
  <MemoryRouter initialEntries={['/home']}>
    <PageNav />
  </MemoryRouter>
);
export const About = (): JSX.Element => (
  <MemoryRouter initialEntries={['/about']}>
    <PageNav />
  </MemoryRouter>
);
