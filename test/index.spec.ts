import { Atomic } from "../src";

describe('Atomic', () => {
  it('equal', () => {
    const a = new Atomic('a');
    const b = new Atomic('a');
    expect(a).toEqual(b);
  });

  it('notEqual', () => {
    const a = new Atomic('a');
    const b = new Atomic('b');
    expect(a).not.toEqual(b);
  });

  it('toString', () => {
    expect(`${new Atomic('a')}`).toEqual('a');
  });
});
