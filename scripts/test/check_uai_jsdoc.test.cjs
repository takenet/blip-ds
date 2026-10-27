const test = require('node:test');
const assert = require('node:assert/strict');
const { checkSource } = require('../check_uai_jsdoc.cjs');

const component = body => `
/**
 * Demo.
 * @slot - Label.
 * @part box - Container.
 */
@Component({ tag: 'uai-demo' })
export class UaiDemo {
${body}
  render() { return <div part="box"><slot></slot></div>; }
}`;

test('accepts documented props, events and methods', () => {
  const source = component(`
  /** Size of the demo. */
  @Prop() size = 'medium';
  /** Emitted on click. */
  @Event() uaiClick!: EventEmitter;
  /** Opens the demo. */
  @Method() async open() {}
`);
  assert.deepEqual(checkSource(source, 'uai-demo.tsx'), []);
});

test('reports public members without JSDoc', () => {
  const source = component(`
  @Prop() size = 'medium';
  @Event() uaiClick!: EventEmitter;
  @Method() async open() {}
  @State() internal = 1;
`);
  const errors = checkSource(source, 'uai-demo.tsx');
  assert.equal(errors.length, 3);
  assert.match(errors.join('\n'), /@Prop "size"/);
  assert.match(errors.join('\n'), /@Event "uaiClick"/);
  assert.match(errors.join('\n'), /@Method "open"/);
});

test('reports slots and parts missing from the class JSDoc', () => {
  const source = `
/** Demo. */
@Component({ tag: 'uai-demo' })
export class UaiDemo {
  render() { return <div part="box"><slot name="icon"></slot><slot></slot></div>; }
}`;
  const errors = checkSource(source, 'uai-demo.tsx');
  assert.equal(errors.length, 3);
  assert.match(errors.join('\n'), /slot "icon"/);
  assert.match(errors.join('\n'), /default slot/);
  assert.match(errors.join('\n'), /part "box"/);
});
