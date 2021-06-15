import React from 'react';
import PlusIcon from '../Icons/PlusIcon';
import PageLink from './PageLink';

export default {
  title: 'Component/PageLink',
  component: PageLink,
};

export const AddNewLink = (): JSX.Element => (
  <PageLink variant="addNew" link="#">
    <span>Add new habit</span>
  </PageLink>
);

export const AboutLink = (): JSX.Element => (
  <PageLink variant="about" link="#">
    <span>About plants need water</span>
  </PageLink>
);

export const PlusLink = (): JSX.Element => (
  <PageLink variant="plus" link="#">
    <PlusIcon />
  </PageLink>
);
