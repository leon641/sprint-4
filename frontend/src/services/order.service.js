// בס"ד

//import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg,
    setOrder
}
window.cs = orderService


async function query() {
    return httpService.get(STORAGE_KEY)

    // var orders = await storageService.query(STORAGE_KEY)

}
async function setOrder(order) {
//    await storageService.post(STORAGE_KEY, order)
   return httpService.post(STORAGE_KEY, order)

}
function getById(orderId) {
    // return storageService.get(STORAGE_KEY, orderId)
    return httpService.get(`order/${orderId}`)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
    // return httpService.delete(`order/${orderId}`)
}
async function save(order) {
    var savedStay
    if (order._id) {
        savedStay = await storageService.put(STORAGE_KEY, order)
        // savedStay = await httpService.put(`order/${order._id}`, order)

    } else {
        // Later, owner is set by the backend
        order.owner = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, order)
        // savedStay = await httpService.post('order', order)
    }
    return savedStay
}

async function addStayMsg(orderId, txt) {
    const savedMsg = await httpService.post(`order/${orderId}/msg`, {txt})
    return savedMsg
}


function getEmptyStay() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





