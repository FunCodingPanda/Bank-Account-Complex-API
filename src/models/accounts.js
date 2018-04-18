const helpers = require('../../bank-account/helpers')
const uuid = require('uuid/v4')

create = (body) => {
  const error = []
  
  let response
  if (!body.name || !body.bankName || !body.description) {
    error.push('Proper information is required')
    
    response = {
      status: 400,
      message: 'Insert the Correct Information Please',
      errors: error
    }
  } else {
    const array = helpers.readDatabase()
    
    const account = {
      id: uuid(),
      name: body.name,
      bankName: body.bankName,
      description: body.description,
      transactions: []
    }

    response = account 

    array.push(account)
    helpers.writeDatabase(array)
  }  

  return response
}

getAll = () => {
  return helpers.readDatabase();
}


getById = (id) => {
  const account = helpers.account(id)

  if(!account) {
    result = {
      status: 404,
      message: `Account Id is not found`
    }
    return result;
  } else {
    return account;
  }
}

updateAccount = (id, body) => {
  const account = helpers.account(id)
  const accounts = helpers.readDatabase()

  if (!account || !body) {
    return {
      status: 404, 
      message: `Account was not found, name, bankName or description is/are not there or updated properly`,
      errors: `Not found or required`
    }
  } else {
    const updatedAccount = {
      id, 
      name: body.name || account.name,
      bankName: body.bankName || account.bankName,
      description: body.description || account.description,
      transactions: account.transactions.concat(body.transactions || [])
    }
    const accountIndex = accounts.findIndex(a => a.id === account.id)
    accounts[accountIndex] = updatedAccount
    helpers.writeDatabase(accounts)
    return updatedAccount
  }
}

deleteAccount = (id) => {
  const accounts = helpers.readDatabase()
  const errors = []
  
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id == id) {
      const foundAccount = accounts[i];
      accounts.splice(i, 1);
      helpers.writeDatabase(accounts)
      return {message: `Account is now deleted`}
    }
  }
  errors.push('Could not delete account')
  return { errors }
}
  
module.exports = { create, getAll, getById, updateAccount, deleteAccount }
