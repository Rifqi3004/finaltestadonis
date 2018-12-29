'use strict'
const Order = use('App/Models/Order')
const Transaction = use('App/Model/Transaction')

class OrderTransactionController {
    async allOrders({requets, response}){
        try {
            
            const orders = await Order.all()
            response.status(200).json({
                orders
            })

        } catch (error) {
            response.status(500).json({
                messages : 'Internal Server Error'
            })
        }
    }

    
}

module.exports = OrderTransactionController
