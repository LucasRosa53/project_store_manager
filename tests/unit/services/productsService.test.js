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
    sinon.stub(productsModels, 'getProductById').resolves(productsMock[0]);
    const productsId = await productsService.getProductById(id);
    expect(productsId).to.be.equal(productsMock[0]);
  });

  it('testando delete', async () => {
    const id = 1;
    sinon.stub(productsModels, 'deleteProduct').resolves(1);
    const productsId = await productsService.deleteProduct(1);
    expect(productsId).to.be.equal(1);
  });

  it('testando delete', async () => {
    const id = 1;
    sinon.stub(productsModels, 'updateProduct').resolves(1);
    const productsId = await productsService.updateProduct(1);
    expect(productsId).to.be.equal(1);
  });

  it('testando delete', async () => {
    const obj = {
      "id": 4,
      "name": "ProdutoX"
    };
    sinon.stub(productsModels, 'productRegister').resolves(obj);
    const productsId = await productsService.productRegister({ "name": "ProdutoX" });
    expect(productsId).to.be.equal(obj);
  });
});