import "mapbox-gl/dist/mapbox-gl.css";
import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { SystemMap } from "./SystemMap";

ReactDOM.render(<SystemMap />, document.getElementById("content"));
