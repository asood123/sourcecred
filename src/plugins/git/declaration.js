// @flow

import type {PluginDeclaration} from "../../analysis/pluginDeclaration";
import * as N from "./nodes";
import * as E from "./edges";

const commitNodeType = Object.freeze({
  name: "Commit",
  pluralName: "Commits",
  prefix: N.Prefix.commit,
  defaultWeight: 2,
});

const hasParentEdgeType = Object.freeze({
  forwardName: "has parent",
  backwardName: "is parent of",
  prefix: E.Prefix.hasParent,
  defaultForwardWeight: 1,
  defaultBackwardWeight: 1,
});

const nodeTypes = Object.freeze([commitNodeType]);
const edgeTypes = Object.freeze([hasParentEdgeType]);

export const declaration: PluginDeclaration = Object.freeze({
  name: "Git",
  nodePrefix: N.Prefix.base,
  edgePrefix: E.Prefix.base,
  nodeTypes,
  edgeTypes,
});
