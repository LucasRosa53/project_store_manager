const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const productsModels = require('../../../src/models/productsModels');
const { productsMock } = require('../services/mock/productsMock');

describe('Testa unidade de service', () => {
  afterEach(() => { sinon.restore() });
  it('testa se tem todos os produtos', async () => {
    sinon.stub(productsModels, 'getAll').resolves(productsMock);
    const products = await productsService.getAll();
    expect(products).to.be.equal(productsMock);
  });

  it('teste se busca produtos por id', async () => {
    const id = 1;
    sinon.stub(productsModels, 'getProductById').resolves(productsMock[1]);
    const productsId = await productsService.getProductById(999);
    expect(productsId).to.be.equal(productsMock[1]);
    console.log(productsId);
  });
});