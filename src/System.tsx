import * as React from "react";
import * as GeoJSON from "geojson";
import { Source, Layer } from "react-map-gl";
import * as systemData from "../data/shapes.json";
import * as MapboxGL from "mapbox-gl";

export const System = () => {
  return (
    <Source
      id="system"
      type="geojson"
      data={systemData as GeoJSON.FeatureCollection<GeoJSON.Geometry>}
    >
      <Layer
        id="system-lines"
        type="line"
        layout={{
          "line-join": "miter",
          "line-cap": "round"
        }}
        paint={{
          "line-color": [
            "case",
            ["==", ["get", "type"], "confederation"],
            "#D62937",
            ["==", ["get", "type"], "trillium"],
            "#76BE43",
            ["==", ["get", "type"], "frequent"],
            "#F68E1D",
            ["==", ["get", "type"], "rapid"],
            "#0074BF",
            ["==", ["get", "type"], "connexion"],
            "#9B5BA4",
            "#212121"
          ],
          "line-offset": [
            "interpolate",
            ["linear"],
            ["zoom"],
            10,
            [
              "case",
              ["==", ["get", "type"], "local"],
              0.5,
              ["==", ["get", "type"], "frequent"],
              1,
              ["==", ["get", "type"], "connexion"],
              1.5,
              0
            ],
            17,
            [
              "case",
              ["==", ["get", "type"], "local"],
              4,
              ["==", ["get", "type"], "frequent"],
              8,
              ["==", ["get", "type"], "connexion"],
              12,
              0
            ]
          ],
          "line-width": ["interpolate", ["linear"], ["zoom"], 10, 2, 17, 4]
        }}
      />
      <Layer
        id="system-stops"
        type="circle"
        filter={["==", ["geometry-type"], "Point"]}
        layout={{}}
        paint={{
          "circle-radius": [
            "interpolate",
            ["exponential", 3],
            ["zoom"],
            10,
            1,
            15,
            5
          ],
          "circle-stroke-color": "#F44336",
          "circle-stroke-width": [
            "interpolate",
            ["exponential", 2],
            ["zoom"],
            10,
            1,
            15,
            5
          ],
          "circle-color": "#FFFFFF"
        }}
        minzoom={13}
      />

      <Layer
        id="system-stop-symbols"
        type="symbol"
        filter={["==", ["geometry-type"], "Point"]}
        layout={
          {
            "text-field": "{name}\n{code}",
            "text-font": ["Roboto Mono Bold"],
            "text-anchor": "left",
            "text-justify": "left",
            "text-padding": 5,
            "text-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              10,
              14,
              15,
              16,
              18,
              24
            ],
            "text-rotation-alignment": "viewport",
            "text-radial-offset": 1
          } as MapboxGL.AnyLayout
        }
        paint={{
          "text-color": "#F44336",
          "text-halo-width": 30,
          "text-halo-blur": 10,
          "text-halo-color": "#FFFFFF"
        }}
        minzoom={15}
      />
      <Layer
        id="system-numbers"
        type="symbol"
        layout={
          {
            "text-field": "{route}",
            "symbol-placement": "line-center",
            "text-font": ["Roboto Mono Bold"],
            "text-padding": 5,
            "text-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              10,
              13,
              15,
              15,
              18,
              24
            ],
            "text-rotation-alignment": "viewport"
          } as MapboxGL.AnyLayout
        }
        paint={{
          "text-halo-width": 30,
          "text-halo-blur": 10,
          "text-color": "#FFFFFF",
          "text-halo-color": [
            "case",
            ["==", ["get", "type"], "confederation"],
            "#D62937",
            ["==", ["get", "type"], "trillium"],
            "#76BE43",
            ["==", ["get", "type"], "frequent"],
            "#F68E1D",
            ["==", ["get", "type"], "rapid"],
            "#0074BF",
            ["==", ["get", "type"], "connexion"],
            "#9B5BA4",
            "#212121"
          ]
        }}
      />
    </Source>
  );
};
