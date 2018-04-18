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
updateTransaction = (accountId, transactionId, body) => {
  const transaction = helpers.transaction(accountId, transactionId)
  const account = helpers.account(accountId)
  const accounts = helpers.readDatabase()

  if (!account || !transaction || !body) {
    return {
      status: 404, 
      message: `Account and Transaction were not found, title, amount or pending is/are not there or updated properly`,
      errors: `Not found or required`
    }
  } else {
    const updatedTransaction = {
      id: transactionId, 
      title: body.title || transaction.title,
      amount: body.amount || transaction.amount, 
      pending: body.pending || transaction.pending,
    }
    const transactionIndex = account.transactions.findIndex(t => t.id == transactionId)
    const accountIndex = accounts.findIndex(a => a.id == accountId)
    accounts[accountIndex].transactions[transactionIndex] = updatedTransaction
    helpers.writeDatabase(accounts)
    return updatedTransaction
  }
  return response
}

deleteTransaction = (accountId, transactionId) => {
  const accounts = helpers.readDatabase()
  const errors = []
  
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id == accountId) {
      accounts[i].transactions = accounts[i].transactions.filter(t => t.id != transactionId)
      helpers.writeDatabase(accounts)
      return {message: `Account Transaction is now deleted`}
    }
  }
  errors.push('Could not delete account transaction')
  return { errors }
}
  
module.exports = { create, getAll, getById, updateTransaction, deleteTransaction}
