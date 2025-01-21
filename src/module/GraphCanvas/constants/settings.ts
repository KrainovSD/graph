import { dragPlaceCoefficientGetter } from "../lib";
import type {
  GraphCanvasForceSettings,
  GraphCanvasLinkOptions,
  GraphCanvasNodeOptions,
  GraphCanvasSettingInterface,
} from "../types";

export const FORCE_SETTINGS: Required<
  GraphCanvasForceSettings<Record<string, unknown>, Record<string, unknown>>
> = {
  centerPosition: {},
  centerStrength: 1,
  collideStrength: 0.1,
  collideAdditionalRadius: 2,
  collideIterations: 2,
  collideOffMax: { links: 0, nodes: 0 },
  collideOn: true,
  chargeStrength: -40,
  chargeDistanceMax: Infinity,
  chargeDistanceMin: 1,
  xForce: 0,
  xStrength: 0.1,
  yForce: 0,
  yStrength: 0.1,
  linkDistance: 30,
  linkIterations: 1,
  linkStrength: 1,
  collideRadius: null,
};

export const GRAPH_SETTINGS: Required<GraphCanvasSettingInterface<Record<string, unknown>>> = {
  zoomExtent: [0.1, 20] as [number, number],
  stickAfterDrag: false,
  highlightByHover: false,
  minFading: 0.2,
  dragPlaceCoefficient: dragPlaceCoefficientGetter,
};

export const NODE_SETTINGS: Omit<
  Required<GraphCanvasNodeOptions>,
  "radius" | "color" | "text" | "textVisible" | "textSize" | "textShiftY"
> = {
  alpha: 1,
  textWidth: 20,
  textShiftX: 0,
  textFont: "Arial",
  textAlign: "center" as CanvasTextAlign,
  textColor: "#333",
  width: 1,
  radiusInitial: 4,
  radiusCoefficient: 5,
  radiusFactor: 1,
  radiusFlexible: true,
  textStyle: "normal",
  textWeight: "500",
  textGap: 1,
};

export const LINK_SETTINGS: Omit<Required<GraphCanvasLinkOptions>, "color" | "width"> = {
  alpha: 1,
};

export const COMMON_SETTINGS = {
  linkColorZoomFar: "#999",
  linkColorZoomNear: "#000000FF",
  linkWidthZoomFar: 1,
  linkWidthZoomNear: 0.1,
  linkWidthZoomBorder: 1,
  linkColorZoomBorder: 1,
  nodeTextScaleMin: 2,
  nodeTextScaleMax: 20,
  nodeTextSizeMin: 1.5,
  nodeTextSizeMax: 3.5,
  nodeTextShiftYMin: 2.5,
  nodeTextShiftYMax: 4,
  nodeTextChangeStepCount: 200,
};
