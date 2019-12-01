import  * as React from 'react';
import { Fixed } from '../src/Fixed';
import { Description } from './Description';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: 'Fixed',
  decorators: [withKnobs]
};

const actions = {
  onClick: action('onClick'),
};

export const standard = () => (
  <Fixed 
      height={number("height", 400)}
      width={number("width", 400)}
      {...actions}>
    <Description />
  </Fixed>
);

standard.story = { name: "With width and height" };

export const noWidth = () => (
  <Fixed 
      height={number("height", 400)}
      {...actions}>
    <Description />
  </Fixed>
);

noWidth.story = { name: "Height only" };
