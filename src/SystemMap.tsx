import * as React from "react";
import ReactMapGL, { ViewState, LinearInterpolator } from "react-map-gl";
import { AutoSizer } from "react-virtualized";
import { easeCubicOut } from "d3-ease";
import { System } from "./System";

declare const MAPBOX_KEY: string;

export const SystemMap = () => {
  const [viewport, setViewport] = React.useState<ViewState>({
    longitude: -75.6294,
    latitude: 45.3745,
    zoom: 11,
    bearing: -30
  });

  console.log(MAPBOX_KEY);

  return (
    <AutoSizer>
      {({ width, height }) => (
        <ReactMapGL
          {...viewport}
          width={width}
          height={height}
          mapboxApiAccessToken={MAPBOX_KEY}
          onViewportChange={setViewport}
          mapOptions={{
            hash: true,
            customAttribution: ["Data: City of Ottawa"]
          }}
          transitionDuration={0}
          transitionInterpolator={new LinearInterpolator()}
          transitionEasing={easeCubicOut}
        >
          <System />
        </ReactMapGL>
      )}
    </AutoSizer>
  );
};
