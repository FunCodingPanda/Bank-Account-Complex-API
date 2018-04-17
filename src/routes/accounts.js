const express = require('express')
const router = express.Router()
const accountsCtrl = require('../controllers/accounts')
const transactionsCtrl = require('../controllers/transactions')

router.post('/', accountsCtrl.create) // works
router.get('/', accountsCtrl.getAll) // works
router.get('/:id', accountsCtrl.getById) // works
router.put('/:id', accountsCtrl.updateAccount)
router.delete('/:id', accountsCtrl.deleteAccount)

router.post('/:id/transactions', transactionsCtrl.create) // works
router.get('/:id/transactions', transactionsCtrl.getAll) // works
router.get('/:id/transactions/:transactionId', transactionsCtrl.getById) // works
router.put('/:id/transactions/:transactionId', transactionsCtrl.updateTransaction)
router.delete('/:id/transactions/:transactionId', transactionsCtrl.deleteTransaction)

module.exports = router
