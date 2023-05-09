const connection = require('../../../../src/models/connection');
const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../../src/models/productsModels');
const { productsMock } = require('../mock/productsMock');

describe('Testar unidade productsModel', () => {
  afterEach(() => { sinon.restore() });
  it('testando getAll', async () => {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const products = await productsModels.getAll();
    expect(products).to.be.deep.equal(productsMock);
  });

  it('testando getProductById', async () => {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    // console.log([productsMock]);
    const products = await productsModels.getProductById();
    // console.log(products);
    expect(products).to.be.equal(productsMock[0]);
  });
});