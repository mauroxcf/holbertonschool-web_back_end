import getNeighborhoodsList from '../2-arrow.js';


test('2-arrow', () => {
    const neighborhoodsList = new getNeighborhoodsList();
    expect(neighborhoodsList.addNeighborhood('Noe Valley')).toStrictEqual([ 'SOMA', 'Union Square', 'Noe Valley' ]);
});