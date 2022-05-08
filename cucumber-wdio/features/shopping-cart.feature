Feature: Shopping-cart
  As a user I want to be able to add products to
  the shopping cart, change the quantity of added products
  and remove products, so that I can decide what to buy.

  Scenario: Clicking a buy button
    Given that I can see the product list
    When I click on the buy button for "Cookies Oatmeal Sugary"
    Then 1 item of "Cookies Oatmeal Sugary" should be added to the cart