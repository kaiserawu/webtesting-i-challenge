const enhancer = require('./enhancer.js');
// test away!
describe('The enhancer functions', () => {
  const item = { name: 'The Sword', durability: 40, enhancement: 0 };
  const repaired = enhancer.repair(item);
  
  it('should repair an item to 100 durability', () => {
    expect(repaired.durability).toEqual(100);
  })

  it('should not do anything else wonky when repaired', () => {
    expect(typeof repaired).toBe('object');
    expect(Object.keys(repaired)).toContain('name');
    expect(repaired.name).toEqual(item.name);
    expect(Object.keys(repaired)).toContain('durability');
    expect(Object.keys(repaired)).toContain('enhancement');
    expect(repaired.enhancement).toEqual(item.enhancement);
  })
  
})