import * as React from 'react';
import { Info } from '../src/SpaceInfo';
import { Centered } from '../src/Centered';
import { Fill } from '../src/Space';

export enum FillerStyle {
    Blue,
    Green,
    Red
}

export const Description : React.FC<{ style?: FillerStyle }> = (props) => {
    let style = BlueStyle;
    switch (props.style) {
        case FillerStyle.Blue:
            style = BlueStyle;
            break;
        case FillerStyle.Green:
            style = GreenStyle;
            break;
        case FillerStyle.Red:
            style = RedStyle;
            break;
    }

    return (
        <Fill trackSize={true} style={style}>
            <Info>
                {
                    (info) => (
                        <Centered>
                            <div>{info.width}px x {info.height}px</div>
                            { props.children }
                        </Centered>
                    )
                }
            </Info>
        </Fill>
    )
};

export const BlueStyle : React.CSSProperties = { backgroundColor: 'lightblue' };
export const GreenStyle : React.CSSProperties = { backgroundColor: '#ddffdd' };
export const RedStyle : React.CSSProperties = { backgroundColor: '#ffdddd' };
