const Cryptr = require('cryptr')
const bcrypt = require('bcrypt')
const orderService = require('../order/order.service')
const logger = require('../../services/logger.service')
const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

module.exports = {
    query,
    addOrder,
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('order')
        var orders = await collection.find({}).toArray()
        
            return orders
        }
   
     catch (err) {
        logger.error('cannot find orders', err)
        throw err
    }
}
async function addOrder(order) {
    try {
        // peek only updatable fields!
        const orderToAdd = {
            hostId: order.hostId,
            buyer: {
              _id: order.buyer._id,
              fullname: order.buyer.fullname,
            },
            totalGuests: order.totalGuests,
            totalPrice: order.totalPrice,
            startDate: order.startDate,
            endDate: order.endDate,
            nigths: order.nigths,
            
            guests: {
              adults: order.guests.adults,
              kids: order.guests.kids,
              infants: order.guests.infants,
              pets: order.guests.pets,
            },
            stay: {
              _id: order.stay._id,
              name: order.stay.name,
              price: order.stay.price,
              img:order.stay.img,
            }
        }
        console.log('orderToAdd before',orderToAdd);
        
        const collection = await dbService.getCollection('order')
        await collection.insertOne(orderToAdd)
        console.log('orderToAdd before',orderToAdd);
        return orderToAdd
    } catch (err) {
        logger.error('cannot add order', err)
        throw err
    }
}
