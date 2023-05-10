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
    const products = await productsModels.getProductById();
    expect(products).to.be.equal(productsMock[0]);
  });

  it('testando delete', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const products = await productsModels.deleteProduct(1);
    expect(products).to.be.equal(1);
  });

  it('testando update', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const products = await productsModels.updateProduct(1);
    expect(products).to.be.equal(1);
  });

  it('testando cadastro de produto novo', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const products = await productsModels.productRegister({ "name": "ProdutoX" });
    expect(products).to.be.deep.equal({
      "id": 4,
      "name": "ProdutoX"
    });
  });
});