const express=require('express')
const router=express.Router()
const path=require('path')
const Sequelize=require('../utill/user')
const expense=require('../models/expense')
const cors=require('cors')
const expenseController=require('../controller/expense')
router.use(cors())
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())
 router.use(express.static(path.join(__dirname,'views')))


router.post('/expense',expenseController.createExpenseController)
router.get('/expense',expenseController.getExpenseController)
router.delete('/expense/:id',expenseController.deleteExpenseController)
module.exports=router