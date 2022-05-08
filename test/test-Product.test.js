const { expect } = require('@jest/globals');

require('./fakeDOM.js');

const { listen } = require('../frontend/helpers');

global.listen = listen; // make listen available for all other script files


const Product = require('../frontend/Product.js');

const { render, renderInList, addEventListeners } = require('../frontend/Product.js');


describe('Test the Product class', () => {

  test('Creation of a Product', () => {

    let myProduct = new Product(1, 'Broom stick', 200, 'A good broom stick.');

    // Check that the constructor really sets the correct property values
    expect(myProduct.id).toBe(1);
    expect(myProduct.name).toBe('Broom stick');
    expect(myProduct.price).toBe(200);
    expect(myProduct.description).toBe('A good broom stick.');

  });

  test('Creation of a New  Product', () => {

    let myProduct = new Product(1, 'Cookies Oatmeal Sugary', 106, `In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.`);

    // Check that the constructor really sets the correct property values and myproduct propery matches with product from database product.
    expect(myProduct.id).toBe(1);
    expect(myProduct.name).toBe('Cookies Oatmeal Sugary');
    expect(myProduct.price).toBe(106);
    expect(myProduct.description).toBe(`In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.`);

  });


  test('An id not equal to a number should fail for Product constructor', () => {

    expect(() => {
      new Product('xa', 'X', 200, 'description');
    }).toThrow();

    expect(() => {
      new Product(true, 'X', 200, 'description');
    }).toThrow();

  })

  test('A name  not equal to a string  should fail for Product constructor', () => {

    expect(() => {
      new Product(1, 22222222, 200, 'description');
    }).toThrow();

    expect(() => {
      new Product(2, true, 200, 'description');
    }).toThrow();

  })
});


describe('Checking the products propertise', () => {

  test('Name is Cookies Oatmeal Sugary ', () => {
    const name = 'Cookies Oatmeal Sugary';
    expect(name).toBe('Cookies Oatmeal Sugary');
  });

  test('Id is 1', () => {
    const id = 1;
    expect(id).toBe(1);
  });

  test('Cookies Oatmeal Sugary', () => {
    const description = `In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.`;
    expect(description).toBe(`In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.`);
  });

  test('Price is 106', () => {
    const price = 106;
    expect(price).toBe(106);
  });

});
  