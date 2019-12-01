import  * as React from 'react';
import { ViewPort } from '../src/ViewPort';
import { Description } from './Description';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: 'ViewPort',
  decorators: [withKnobs]
};

const actions = {
  onClick: action('onClick'),
};

export const standard = () => (
  <ViewPort 
      left={number("left", 0)} 
      top={number("top", 0)} 
      right={number("right", 0)} 
      bottom={number("bottom", 0)} 
      {...actions}>
    <Description />
  </ViewPort>
)

standard.story = { name: "Default" };

export const offsetLeft = () => (
  <ViewPort left={number("left", 100)} {...actions}>
    <Description />
  </ViewPort>
)

offsetLeft.story = { name: "With left offset" };

export const offsetTop = () => (
  <ViewPort top={number("top", 100)} {...actions}>
    <Description />
  </ViewPort>
)

offsetTop.story = { name: "With top offset" };

export const offsetRight = () => (
  <ViewPort right={number("right", 100)} {...actions}>
    <Description />
  </ViewPort>
)

offsetRight.story = { name: "With righ offset" };

export const offsetBottom = () => (
  <ViewPort bottom={number("bottom", 100)} {...actions}>
    <Description />
  </ViewPort>
)

offsetBottom.story = { name: "With bottom offset" };
