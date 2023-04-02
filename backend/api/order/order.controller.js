const orderService = require('./order.service')
const logger = require('../../services/logger.service')
async function getOrders(req, res) {
    try {
        const orders = await orderService.query(req.params)
        console.log('req.params',req.params);
        console.log('req.params',req.params.id);
        
        res.send(orders)
    } catch (err) {
        logger.error('Failed to get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }
}
async function addOrder(req, res) {
    try {
        const order = req.body
        // order.owner = loggedinUser        
        const addedOrder = await orderService.addOrder(order)
        res.json(addedOrder)
      } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({ err: 'Failed to add order' })
      }
}
async function updateOrder(req, res) {
    try {
        const order = req.body
        const updatedOrder = await orderService.update(order)    
        console.log('updatedOrder in conttroller',updatedOrder);
        
        res.json(updatedOrder)
      } catch (err) {
        logger.error('Failed to update order', err)
        res.status(500).send({ err: 'Failed to update order' })
    
      }
       
}


module.exports = {
    addOrder,
    getOrders,
    updateOrder
}