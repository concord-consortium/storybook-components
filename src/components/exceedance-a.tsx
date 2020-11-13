import * as React from "react";

interface IProps {
  total: number;
  count: number;
  exceedanceCount: number;
  color: string;
  bgColor: string;
}

interface IState { }

export class Exceedance extends React.Component<IProps, IState> {

  public state = {selectedDatum: null};
  public render() {
    const height = 100;
    const ViewBox = {left: 0, bottom: 0, width: height, height };
    const {count, exceedanceCount, color, bgColor} = this.props;
    const {left, bottom, width} = ViewBox;
    const viewBoxString = [left, bottom, width, height].join(" ");
    const ratio = exceedanceCount / count;
    const bottomHeight =  Math.round(ratio * height);
    const topHeight = height - bottomHeight;
    return(
      <div>
        <svg viewBox={viewBoxString} width={ViewBox.width} height={ViewBox.height}>
          <rect className="Bottom" x={0} y={0} width={width} height={bottomHeight} fill={color}/>
          <rect className="Top" x={0} y={bottomHeight} width={width} height={topHeight} fill={bgColor}/>
        </svg>
      </div>
    );
  }
};