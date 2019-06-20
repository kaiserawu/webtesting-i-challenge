const enhancer = require('./enhancer.js');
// test away!
describe('The enhancer functions', () => {
  const item = { name: 'The Sword', durability: 40, enhancement: 0 };

  const repaired = enhancer.repair(item);

  const succeeded = enhancer.succeed(item);
  const maxed = { ...item, enhancement: 20 };
  const succeededMaxed = enhancer.succeed(maxed);

  
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

  it('should increase enhancement level if applicable', () => {
    expect(succeeded.enhancement).toEqual(item.enhancement + 1);
    expect(succeededMaxed.enhancement).toEqual(20);
  })
  it('should not do anything else wonky when successfully enhanced', () => {
    expect(typeof succeeded).toBe('object');
    expect(Object.keys(succeeded)).toContain('name');
    expect(succeeded.name).toEqual(item.name);
    expect(Object.keys(succeeded)).toContain('durability');
    expect(succeeded.durability).toEqual(item.durability);
    expect(Object.keys(succeeded)).toContain('enhancement');
    expect(typeof succeededMaxed).toBe('object');
    expect(Object.keys(succeededMaxed)).toContain('name');
    expect(succeededMaxed.name).toEqual(item.name);
    expect(Object.keys(succeededMaxed)).toContain('durability');
    expect(succeededMaxed.durability).toEqual(item.durability);
    expect(Object.keys(succeededMaxed)).toContain('enhancement');
  })
  
})