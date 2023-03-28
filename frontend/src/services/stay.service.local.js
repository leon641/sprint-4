// בס"ד

import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { includes } from 'lodash'
import stayDB from "../assets/data/stay.json" assert { type: "json" }
// console.log('stayDB', stayDB);

const STORAGE_KEY = 'stay'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyOrder,
  addStayMsg
}
window.cs = stayService


async function query(filterBy = { txt: '', label: '', price: 0 }) {
  var stays = await storageService.query(STORAGE_KEY)
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.summery) || regex.test(stay.country) || regex.test(stay.countryCode) || regex.test(stay.city) || regex.test(stay.address))
  }
  if (filterBy.label) {
    stays = stays.filter(stay => stay.type.includes(filterBy.label))
  }
  if (filterBy.price) {
    stays = stays.filter(stay => stay.price <= filterBy.price)
  }
  return stays
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  var savedStay
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay)
  } else {
    // Later, owner is set by the backend
    stay.owner = userService.getLoggedinUser()
    savedStay = await storageService.post(STORAGE_KEY, stay)
  }
  return savedStay
}

async function addStayMsg(stayId, txt) {
  // Later, this is all done by the backend
  const stay = await getById(stayId)
  if (!stay.msgs) stay.msgs = []

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt
  }
  stay.msgs.push(msg)
  await storageService.put(STORAGE_KEY, stay)

  return msg
}

function getEmptyOrder() {
  const order = {

    "_id": "o1225",
    "hostId": "u102",
    "buyer": {
      "_id": "u101",
      "fullname": "User 1"
    },
    "totalPrice": 160,
    "startDate": "2025/10/15",
    "endDate": "2025/10/17",
    "guests": {
      "adults": 2,
      "kids": 1
    },
    "stay": {
      "_id": "h102",
      "name": "House Of Uncle My",
      "price": 80.00
    },
    "msgs": [],
    "status": "pending" // pending, approved
  }
  return order
}


// TEST DATA

(() => {
  utilService.saveToStorage(STORAGE_KEY, stayDB
  )
})()
