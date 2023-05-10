const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
chai.use(sinonChai);
const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');
const { productsMock } = require('./mock/productsMock');

describe('Testando o Controller', () => {
  afterEach(() => sinon.restore());
  it('testando função getAll(todos os produtos)', async () => {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves(productsMock);
    await productsController.getAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock);
  });

  it('testando função getProductById(produtos por Id)', async () => {
    const res = {};
    const req = {
      params: {
      id: 1,
    }};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProductById').resolves([productsMock]);
    await productsController.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([productsMock]);
  });
  it('testando função em caso de error getProductById(produtos por Id)', async () => {
    const res = {};
    const req = {
      params: {
        id: 999,
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProductById').resolves();
    await productsController.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('testando função delete', async () => {
    const res = {};
    const req = {
      params: {
        id: 1,
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'deleteProduct').resolves(1);
    await productsController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });

  it('testando error do delete', async () => {
    const res = {};
    const req = {
      params: {
        id: 999,
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'deleteProduct').resolves(0);
    await productsController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('testando função update', async () => {
    const res = {};
    const req = {
      params: {
        id: 1,
      },
      body: {
        "name": "Martelo do Batman"
      },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'updateProduct').resolves(1);
    await productsController.updateProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith();
  });

  it('testando error do update', async () => {
    const res = {};
    const req = {
      params: {
        id: 999,
      },
      body: {
        "name": "Martelo do Batman"
      },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'updateProduct').resolves(0);
    await productsController.updateProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('testando função update', async () => {
    const obj = {
      "id": 4,
      "name": "ProdutoX"
    };
    const res = {};
    const req = {
      body: {
        "name": "ProdutoX"
      },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'productRegister').resolves(obj);
    await productsController.productRegister(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(obj);
  });
});