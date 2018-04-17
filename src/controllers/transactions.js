const model = require('../models/transactions')


create = (req, res, next) => {
  const accountId = req.params.id
  const transaction = model.create(accountId, req.body)

  if (transaction.errors) {
    return next({
      status: 404,
      message: `Not Found`,
      errors: transaction.errors
    })
  }

  res.status(201).json({ transaction })
}


getAll = (req, res, next) => {
  const transactions = model.getAll(req.params.id)

  if (transactions.errors) {
    return next({
      status: 404,
      message: `Get all transactions denied`,
      error: transactions.error
    })
  }

  res.status(200).json({ transactions })
}


getById = (req, res, next) => {
  const transactions = model.getById(req.params.id, req.params.transactionId)

  if (transactions.errors) {
    return next({
      status: 404,
      message: `Not Found`,
      errors: error
    })
  }
  res.status(200).json({ transactions })
}


updateTransaction = (req, res, next) => {
  const transactions = model.updateTransaction(req.params.id, req.body, req.params.transactionId)

  if (transactions.errors) {
    return next({
      status: 404,
      message: `Not Found`,
      errors: error
    })
  }
  res.status(200).json({ transactions })
}


deleteTransaction = (req, res, next) => {
  const transactions = model.deleteTransaction(req.params.id, req.params.transactionssId)

  if (transactions.errors) {
    return next({
      status: 404,
      message: `Not Found`,
      errors: error
    })
  }
  res.status(200).json({ transactions })
}


module.exports = { create, getAll, getById, updateTransaction, deleteTransaction }
