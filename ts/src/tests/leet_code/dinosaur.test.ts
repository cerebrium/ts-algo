import {dino} from '../../questions/leet_code/dinosaur';

test('dinosaur', async () => {
  const res = await dino();

  expect(res.length).toEqual(3);

  const order = ['Struthiomimus', 'Hadrosaurus', 'Tyrannosaurus Rex'];
  for (let i = 0; i < order.length; i++) {
    expect(res[i]).toEqual(order[i]);
  }
});
