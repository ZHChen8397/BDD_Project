@step=login 
@Pending
Feature: login action

Scenario: [User] login sucessfully

   Given [User] type email address [emailaddress] and password [pwd]
   When [User] click login button
   Then [User] should login sucessfully

Examples:
  User             | emailaddress              | pwd
  -----------------|---------------------------|-------------------------------
  jeff             | 123@gmail.com             | 123
  -----------------|---------------------------|-------------------------------
  bill             | 456@gmail.com             | 456