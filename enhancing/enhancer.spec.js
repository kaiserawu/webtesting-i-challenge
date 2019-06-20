const enhancer = require('./enhancer.js');
// test away!
describe('The enhancer functions', () => {
  const item = { name: 'The Sword', durability: 40, enhancement: 0 };

  const repaired = enhancer.repair(item);

  const succeeded = enhancer.succeed(item);
  const succeededMaxed = enhancer.succeed({ ...item, enhancement: 20 });

  const failedLow = enhancer.fail(item);
  const midEnhanced = { ...item, enhancement: 16 };
  const failedMid = enhancer.fail(midEnhanced);
  const highEnhanced = { ...item, enhancement: 17 };
  const failedHigh = enhancer.fail(highEnhanced);


  
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

  it('should change correct values when enhancement fails based on enhancement level', () => {
    expect(failedLow.durability).toEqual(item.durability - 5);
    expect(failedMid.durability).toEqual(midEnhanced.durability - 10);
    expect(failedHigh.durability).toEqual(highEnhanced.durability - 10);
    expect(failedHigh.enhancement).toEqual(highEnhanced.enhancement - 1);
  })

  it('should not do anything else wonky when failed to enhance', () => {
    expect(typeof failedLow).toBe('object');
    expect(Object.keys(failedLow)).toContain('name');
    expect(failedLow.name).toEqual(item.name);
    expect(Object.keys(failedLow)).toContain('durability');
    expect(Object.keys(failedLow)).toContain('enhancement');
    expect(failedLow.enhancement).toEqual(item.enhancement);
    expect(typeof failedMid).toBe('object');
    expect(Object.keys(failedMid)).toContain('name');
    expect(failedMid.name).toEqual(midEnhanced.name);
    expect(Object.keys(failedMid)).toContain('durability');
    expect(Object.keys(failedMid)).toContain('enhancement');
    expect(failedMid.enhancement).toEqual(midEnhanced.enhancement);
    expect(typeof failedHigh).toBe('object');
    expect(Object.keys(failedHigh)).toContain('name');
    expect(failedHigh.name).toEqual(highEnhanced.name);
    expect(Object.keys(failedHigh)).toContain('durability');
    expect(Object.keys(failedHigh)).toContain('enhancement');
    expect(failedHigh.enhancement).toEqual(highEnhanced.enhancement - 1);
  })
  
})