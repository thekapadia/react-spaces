import  * as React from 'react';
import { ViewPort } from '../src/ViewPort';
import { Fill, LeftResizable, RightResizable, TopResizable, BottomResizable } from '../src/Space';
import { Description, FillerStyle } from './Description';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Examples',
  decorators: [withKnobs]
};

export const nested = () => {

	const [ spaceSize, setSpaceSize ] = React.useState(20);
	const [ resizingSpaces, setResizingSpaces ] = React.useState(false);

	const intervalId = React.useRef<number | undefined>(undefined);
	const direction = React.useRef<boolean>(true);
	
	React.useEffect(() => {
		return () => {
			if (intervalId.current) {
				window.clearInterval(intervalId.current);
			}
		}
	}, [])

	React.useEffect(() => {
		if (resizingSpaces) {
			intervalId.current = window.setInterval(() => {
				setSpaceSize(prev => {
					const newSize = prev + (direction.current ? 0.1 : -0.1);
					
					if (newSize < 20 || newSize > 30) {
						direction.current = !direction.current;
					}

					return newSize;
				});
			}, 10)
		} else {
			if (intervalId.current) {
				window.clearInterval(intervalId.current);
			}
		}
	}, [ resizingSpaces ]);

  return (
  <ViewPort>
    <LeftResizable size={`${spaceSize}%`}><Description /></LeftResizable>
    <Fill>
      <TopResizable size={`${spaceSize}%`}><Description style={FillerStyle.Green} /></TopResizable>
      <Fill>
        <Description style={FillerStyle.Red}>
          <button style={{ margin: 20 }} onClick={() => setResizingSpaces(!resizingSpaces)}>
            Dynamically resize spaces
          </button>
        </Description>
      </Fill>
      <BottomResizable size={`${spaceSize}%`}><Description style={FillerStyle.Green} /></BottomResizable>
    </Fill>
    <RightResizable size={`${spaceSize}%`}><Description /></RightResizable>
  </ViewPort>
  )
};
nested.story = { name: "Nested" };