import { Atomic, Not, And, Or, If, Iff, Connective } from './types';

interface Node {
  value: string;
  children: Node[];
}

function getTypes(node: Node): Connective | Atomic {
  if (node.children.length === 0) {
    return new Atomic(node.value);
  }

  const value = node.value.toLowerCase();

  if (value === 'not') {
    if (node.children.length !== 1) {
      throw new Error(`invalid number of children, expected 1, got ${node.children.length}.`);
    }
    return new Not(node.children[0]);
  }

  if (node.children.length !== 2) {
    throw new Error(`invalid number of children. expected 2, got ${node.children.length}.`);
  }

  let klass;
  if (value === 'and') {
    klass = And;
    return new And(node.children[0], node.children[1]);
  }
  else if (value === 'or') {
    klass = Or;
    return new Or(node.children[0], node.children[1]);
  }
  else if (value === 'if') {
    klass = If;
  }
  else if (value === 'iff') {
    klass = Iff;
  }
  else {
    throw new Error(`invalid connective. got ${value}.`);
  }

  return new klass(node.children[0], node.children[1]);
}

export = getTypes;
