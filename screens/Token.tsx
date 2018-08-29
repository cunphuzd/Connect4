import * as React from 'react';
import { View } from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text as SVGText,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class RedToken extends React.Component {
    render() {
        return (
            <View>
                <Svg
                    height="32"
                    width="32"
                >
                    <Circle
                        cx="16"
                        cy="16"
                        r="15"
                        stroke="red"
                        strokeWidth="2"
                        fill="red"
                        fillOpacity=".3"
                    />
                </Svg>
            </View>
        )
    }
}

class BlueToken extends React.Component {
    render() {
        return (
            <View>
                <Svg
                    height="32"
                    width="32"
                >
                    <Circle
                        cx="16"
                        cy="16"
                        r="15"
                        stroke="blue"
                        strokeWidth="2"
                        fill="blue"
                        fillOpacity=".3"
                    />
                </Svg>
            </View>
        )
    }
}


class NullToken extends React.Component {
    render() {
        return (
            <View>
                <Svg
                    height="32"
                    width="32"
                >
                    <Circle
                        cx="16"
                        cy="16"
                        r="15"
                        stroke="black"
                        strokeWidth="2"
                        fill="white"
                    />
                </Svg>
            </View>
        )
    }
}

export { RedToken, BlueToken, NullToken }