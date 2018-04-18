const express = require('express')
const router = express.Router()
const accountsCtrl = require('../controllers/accounts')
const transactionsCtrl = require('../controllers/transactions')

router.post('/', accountsCtrl.create) // works
router.get('/', accountsCtrl.getAll) // works
router.get('/:id', accountsCtrl.getById) // works
router.put('/:id', accountsCtrl.updateAccount) // works
router.delete('/:id', accountsCtrl.deleteAccount) // works

router.post('/:id/transactions', transactionsCtrl.create) // works
router.get('/:id/transactions', transactionsCtrl.getAll) // works
router.get('/:id/transactions/:transactionId', transactionsCtrl.getById) // works
router.put('/:id/transactions/:transactionId', transactionsCtrl.updateTransaction) // works
router.delete('/:id/transactions/:transactionId', transactionsCtrl.deleteTransaction) // works

module.exports = router
