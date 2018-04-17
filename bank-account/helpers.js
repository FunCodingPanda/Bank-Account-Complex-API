const fs = require('fs')
const path = require('path')

readDatabase = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'accounts.json'), 'utf-8'))
}

writeDatabase = (accounts) => {
  return fs.writeFileSync(path.join(__dirname, 'accounts.json'), JSON.stringify(accounts)) 
  // insert each account into array(then parse it) afterwards write it back into data
}

account = (id) => {
  return readDatabase().find(account => account.id === id)
}

transaction = (accountId, id) => {
  const transactions = account(accountId).transactions;
  if (transactions) {
    return transactions.find(transaction => transaction.id === id)
  } else {
    return {error: 'Acount not found'}
  }
}

module.exports = { readDatabase, writeDatabase, account, transaction }
