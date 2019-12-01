import  * as React from 'react';
import { ViewPort } from '../src/ViewPort';
import { Fill, Left, Right, Top, Bottom } from '../src/Space';
import { Description, FillerStyle } from './Description';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, number, boolean } from "@storybook/addon-knobs";
import { AnchorType } from '../src/Globals/Types';

export default {
  title: 'Anchored',
  decorators: [withKnobs]
};

const anchoredProps = () => ({
  anchor: select('type', {
    'Left': AnchorType.Left,
    'Top': AnchorType.Top,
    'Right': AnchorType.Right,
    'Bottom': AnchorType.Bottom
  }, AnchorType.Left),
  onClick: action('onClick'),
  onResizeStart: action('onResizeStart'),
  onResizeEnd: action('onResizeEnd'),
  as: text("as", ''),
  minimumSize: number("minimumSize", 0),
  maximumSize: number("maximumSize", 99999999),
  size: number("size", 200),
  scrollable: boolean("scrollable", false),
  resizable: boolean("resizable", false),
  zIndex: number("zIndex", 0)
});

export const standard = () => {
  const { anchor, ...props } = anchoredProps();

  return (
  <ViewPort>
    {/* <Custom anchor={anchor} anchorSize={"25%"}><Description /></Custom> */}
    { anchor === AnchorType.Left && <Left id="left" {...props}><Description /></Left> }
    { anchor === AnchorType.Right && <Right id="right" {...props}><Description /></Right> }
    { anchor === AnchorType.Top && <Top id="top" {...props}><Description /></Top> }
    { anchor === AnchorType.Bottom && <Bottom id="bottom" {...props}><Description /></Bottom> }
    <Fill id="fill">
      <Description style={FillerStyle.Green}>

      </Description>
    </Fill>
  </ViewPort>
  )
};

standard.story = { name: "Default" };