import * as React from "react";
import { View } from "react-native";

interface IState {}

interface point {
  x: number;
  y: number;
}

enum dragBehavior { moveMin, moveMax, moveCenter }

interface Datum {
  time: any;
  speed: number;
  direction: number;
}

interface IProps {
  data: Datum[];
}

const ViewBox = {
  left: -50,
  bottom: -50,
  width: 100,
  height: 100
};

const polarToCart = (r: number, angle: number) => {
  const x = r * Math.cos(angle);
  const y = r * Math.sin(angle);
  return {x, y};
};

const randNormal = (min: number = 0, max: number = 1, skew: number = 1) => {
  let u = 0;
  let v = 0;
  // Converting [0,1) to (0,1)
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randNormal(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
};

export class CircularHisto extends React.Component<IProps, IState> {
  public state = {hovering: false};
  public render() {
    const { left, bottom, width, height} = ViewBox;
    const viewBoxString = [left, bottom, width, height].join(" ");
    const numPoints = 600;
    const { data } = this.props;

    const toPoint = (d: Datum) => {
      const {speed, direction} = d;
      const radPerDeg = 0.0174533;
      const {x, y} = polarToCart(speed, direction * radPerDeg);
      return <circle data-id="foo" cx={x} cy={y} r={0.6} fill="hsla(0, 0%, 0%, 0.1)"/>;
    };

    // for (let i = 0; i < numPoints; i++) {
    //   data.push([
    //     randNormal(25, 60, 3),
    //     randNormal(0, Math.PI * 2)
    //   ]);
    // }

    return(
      <svg viewBox={viewBoxString} width="300" height="300">
        <circle cx={0} cy={0} r={50} fill="none" stroke="black" stroke-width={0.01} />
        <circle cx={0} cy={0} r={25} fill="none" stroke="black" stroke-width={0.01} />
        { data.map(toPoint) }
      </svg>

    );
  }
};
