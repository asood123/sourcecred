// @flow

import {type NodeAddressT, type EdgeAddressT} from "../core/graph";

/**
 * Represents a "Type" of node in the graph.
 *
 * An node is considered a member of this type if
 * its address has this type's prefix as an address prefix,
 * according to the semantics of `Address.hasPrefix`.
 *
 * When an edge matches multiple types, we will usually only
 * consider the most specific matching type (i.e. the match
 * with the longest prefix).
 *
 * Node types are used for organization in the UI, and for
 * applying type-level weights.
 */
export type NodeType = {|
  // The name for an individual node of this type.
  // For example, for the GitHub PULL_REQUEST node type, the name is "Pull
  // request". The first letter of the name should be capitalized.
  +name: string,
  // The name for multiple nodes of this type.
  // For example, for the GitHub PULL_REQUEST node type, the pluralName is
  // "Pull requests". The first letter of this name should be capitalized.
  +pluralName: string,
  // The address prefix that will be used to test whether a node is a member
  // of this NodeType.
  +prefix: NodeAddressT,
  // The default weight to assign to nodes of this type. We use `1` to mean "of
  // normal importance", and the weights scale linearly from there (i.e. 2
  // means twice as important).
  +defaultWeight: number,
|};

/**
 * Represents a "Type" of edge in the graph.
 *
 * An edge is considered a member of this type if
 * its address has this type's prefix as an address prefix,
 * according to the semantics of `Address.hasPrefix`.
 *
 * When an edge matches multiple types, we will usually only
 * consider the most specific matching type (i.e. the match
 * with the longest prefix).
 *
 * Edge types are used for organization in the UI, and for
 * applying type-level weights.
 */
export type EdgeType = {|
  // A brief descriptive name of what the "forward" direction of the edge
  // means. For example, for the GitHub REFERENCES edge type, the forwardName
  // is "references"
  +forwardName: string,
  // A brief descriptive name of what the "backward" direction of the edge
  // means. For example, for the GitHub REFERENCES edge type, the backwardName
  // is "referenced by"
  +backwardName: string,
  // The default weight for the forward direction of this edge.
  // We use `1` as a default value ("of normal importance").
  // The weights have linear importance, i.e. 2 is twice as important as 1.
  +defaultForwardWeight: number,
  // The default weight for the backward direction of this edge.
  // We use `1` as a default value ("of normal importance").
  // The weights have linear importance, i.e. 2 is twice as important as 1.
  +defaultBackwardWeight: number,
  // The address prefix that will be used to test whether an edge is a member
  // of this EdgeType
  +prefix: EdgeAddressT,
|};
