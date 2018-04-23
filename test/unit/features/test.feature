@step=test
Feature: add

Scenario: 1+2+3

   Given I have 1
   When I add 2
   And I add another 3
   Then I got 6
