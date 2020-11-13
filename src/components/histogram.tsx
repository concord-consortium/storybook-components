import * as React from "react";

const makeBinF = (numBins: number, _min: number, _max: number) => {
  const range = _max - _min;
  const binSize = Math.floor(range / numBins);
  return (d: number) => Math.round(d / binSize);
};

const min = (arr: number[]) =>
  arr.reduce((p: number, c: number) => c < p ? c : p, 0);

const max = (arr: number[]) =>
  arr.reduce((p: number, c: number) => c > p ? c : p, 0);

interface Datum {
  time: any;
  speed: number;
  direction: number;
}

interface IProps {
  data: Datum[];
}

interface IState {
  selectedDatum: Datum | null;
}

export class Histogram extends React.Component<IProps, IState> {

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    const { data } = props;
    state.selectedDatum = data[data.length - 1];
  }

  public state = {selectedDatum: null};
  public render() {
    const ViewBox = {left: 0, bottom: 0, width: 300, height: 100 };
    const { left, bottom, width, height} = ViewBox;
    const margin = 5;
    const viewBoxString = [left, bottom, width, height].join(" ");
    const { data } = this.props;
    const {selectedDatum} = this.state;
    const unSelectedFill = "hsla(0, 0%, 0%, 0.1)";
    const selectedFill = "hsla(50, 100%, 50%, 1.0)";
    const rectHeight = 4;
    const numBins = 10;
    const rectWidth = (width - margin * 2) / numBins;
    const speedBinF = makeBinF(numBins, 0, 50);
    const bins = Array(numBins);
    const toPoint = (d: Datum, index: number, color: string) => {

      const binNumber = speedBinF(d.speed);
      bins[binNumber] = (bins[binNumber] || 0) + 1;
      const x = margin + (binNumber * rectWidth + 2);
      return <rect
        x={x} y={150 - (bins[binNumber] * rectHeight)}
        width={rectWidth}
        height={rectHeight}
        fill={color}
        stroke="white"
      />;
    }
    return(
      <div>
        <svg viewBox={viewBoxString} width="300" height="200">
          <rect x={5} y={5} width={280} height={180} fill="none" stroke="black" strokeWidth={0.1} />
          { data.map( (d, i) => toPoint(d, i, "black")) }
          { selectedDatum && toPoint(selectedDatum!, data.length + 1, selectedFill ) }
        </svg>
      </div>
    );
  }
};