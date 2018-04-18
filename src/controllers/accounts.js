const model = require('../models/accounts')

create = (req, res, next) => {
  const account = model.create(req.body)

  if (account.errors) {
    return next({
      status: 404,
      message: `Could not create new account`,
      errors: account.errors
    })
  }

  res.status(201).json({ account })
}

getAll = (req, res, next) => {
  const account = model.getAll(req.query.all)

  if (account.error) {
    return next({
      status: 404,
      message: `Get all accounts denied`,
      error: account.error
    })
  }

  res.status(200).json({ account })
}

getById = (req, res, next) => {
  const id = req.params.id
  const account = model.getById(id)

  if (account.error) {
    return next({
      status: 404,
      message: `Couldn't get account by id`,
      error: account.error
    })
  }

  res.status(200).json({ account })
}

updateAccount = (req, res, next) => {
  const id = req.params.id
  const updatedAccount = model.updateAccount(id, req.body)

  if (updatedAccount.errors) {
    return next({
      status: 404,
      message: ``,
      errors: updatedAccount.errors
    })
  } else if (updatedAccount.error) {
    return next({
      status: 404,
      message: ``,
      error: updatedAccount.error
    })
  }

  res.status(200).json({ account: updatedAccount })
}

deleteAccount = (req, res, next) => {
  const id = req.params.id
  const deletedAccount = model.deleteAccount(id)

  if (deletedAccount.errors) {
    return next({
      status: 404,
      message: `Was not able to delete account`,
      error: deletedAccount.errors
    })
  }

  res.status(204).json({ account: deletedAccount})
}

module.exports = { create, getAll, getById, updateAccount, deleteAccount }

