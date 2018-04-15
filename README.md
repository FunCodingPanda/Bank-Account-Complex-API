# Bank-Account-Complex-API

Build an API from scratch. 


## Accounts 

ID: (You Choose) A unique id that represents the account.
- Name: (String) Name of the account. 
- Bank Name: (String) Name of the bank the account is associated with. 
- Description: (String) A description of the account.
- Transactions: (Array) An array of transactions.

## Transactions

- ID: A unique id that represents the transaction. 
- Title: A title for the transaction. Cannot be more than 8 characters. 
- Amount: A positive or negative number depending on the type of transaction. 
- Pending: A true/false value for whether or not the transaction is pending. 

Build RESTful routes so that you can:

• Create, Read, Update and Delete accounts.
• Create, Read, Update and Delete tags through accounts.
