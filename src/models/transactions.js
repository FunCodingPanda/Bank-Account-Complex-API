const helpers = require('../../bank-account/helpers')
const accounts = require('./accounts')
const uuid = require('uuid/v4')

create = (accountId, body) => {
  const error = []
  
  let response
  if (!accountId || !body.title || !body.amount || !body.pending) { // TODO ----
    error.push('Proper information is required')
    
    return {
      status: 400,
      message: 'Insert the Correct Information Please',
      errors: error
    }
  } else {
    const account = accounts.getById(accountId)

    const transaction = {
      id: uuid(),
      title: body.title,
      amount: body.amount,
      pending: body.pending
    }

    account.transactions = [transaction]

    return accounts.updateAccount(accountId, account)
  }
}

getAll = (accountId) => {
  const account = helpers.account(accountId);
  if (account) {
    return account.transactions;
  } else {
    return {
      status: 404,
      message: `Account Id is not found`
    }
  }
}


getById = (accountId, id) => {
  const transaction = helpers.transaction(accountId, id)

  if(!transaction) {
    result = {
      status: 404,
      message: `Transaction Id is not found`,
      errors: error
    }
    return result;
  } else {
    return transaction;
  }
}
//-------------------------------------------------------------------- To do list
updatedTransaction = (id, body) => {
  const transaction = helpers.transaction()
  const account = helpers.account()
  const accounts = helpers.readDatabase()

  if (!account || !transaction || !body.transaction.title || !body.transaction.amount || !body.transaction.pending ) {
    let response = {
      status: 404, 
      message: `Account and Transaction were not found, title, amount or pending is/are not there or updated properly`,
      errors: `Not found or required`
    }
  } else {
    const updatedTransaction = {
      id, 
      title: body.transaction.title,
      amount: body.transaction.amount, 
      pending: body.description.pending,
    }
  response = updatedAccount
  const TransactionIndex = accounts.indexOf(transaction)
  accounts[TransactionIndex] = updatedTransaction
  helpers.writeDatabase()
  }
  return response
}

deleteTransaction = (id) => {
  const accounts = helpers.readDatabase()
  const transaction = helpers.transaction()
  const errors = []
  
  for (let i = 0; i < accounts.length; i++) {
    if (accounts.transaction[i].id == id) {
      const foundAccountTransaction = accounts.transaction[i];
      accounts.transaction.splice(i, 1);
      helpers.writeDatabase(transaction)
      return `Account Transaction is now deleted`
    }
  }
  errors.push('Could not delete account transaction')
  return { errors }
}
  
module.exports = { create, getAll, getById, updatedTransaction, deleteTransaction}
