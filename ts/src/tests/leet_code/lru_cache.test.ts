import {lRUCache} from '../../questions/leet_code/lru_cache';

test('lru_cache', () => {
  const lruCache = new lRUCache(2);

  const operations = [
    'put',
    'put',
    'get',
    'put',
    'get',
    'put',
    'get',
    'get',
    'get',
  ];
  const inputs = [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
  const output = [null, null, 1, null, -1, null, -1, 3, 4];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'put') {
      lruCache.put(inputs[i][0], inputs[i][1]);

      continue;
    }

    const res = lruCache.get(inputs[i][0]);

    if (res !== output[i]) {
      lruCache.logNodes();
    }
    expect(res).toEqual(output[i]);
  }
});

test('lru_cache', () => {
  const lruCache = new lRUCache(2);

  const operations = ['put', 'put', 'get', 'put', 'put', 'get'];

  const inputs = [[2, 1], [2, 2], [2], [1, 1], [4, 1], [2]];
  const output = [null, null, 2, null, null, -1];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'put') {
      lruCache.put(inputs[i][0], inputs[i][1]);
      continue;
    }

    expect(lruCache.get(inputs[i][0])).toEqual(output[i]);
  }
});

test('lru_cache', () => {
  const lruCache = new lRUCache(2);
  const operations = ['put', 'put', 'put', 'put', 'get', 'get'];

  const inputs = [[2, 1], [1, 1], [2, 3], [4, 1], [1], [2]];
  const output = [null, null, null, null, -1, 3];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'put') {
      lruCache.put(inputs[i][0], inputs[i][1]);
      continue;
    }

    expect(lruCache.get(inputs[i][0])).toEqual(output[i]);
  }
});

test('lru_cache', () => {
  const lruCache = new lRUCache(3);
  const operations = [
    'put',
    'put',
    'put',
    'put',
    'get',
    'get',
    'get',
    'get',
    'put',
    'get',
    'get',
    'get',
    'get',
    'get',
  ];

  const inputs = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [4],
    [3],
    [2],
    [1],
    [5, 5],
    [1],
    [2],
    [3],
    [4],
    [5],
  ];
  //
  const output = [null, null, null, null, 4, 3, 2, -1, null, -1, 2, 3, -1, 5];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'put') {
      lruCache.put(inputs[i][0], inputs[i][1]);
      continue;
    }

    expect(lruCache.get(inputs[i][0])).toEqual(output[i]);
  }
});
