// בס"ד

import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { includes } from 'lodash'

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


async function query(filterBy = { label: '', price: 0 }) {
    var stays = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
      }
      if (filterBy.label) {
        stays = stays.filter(stay => stay.labels.includes(filterBy.label))
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
  const order={
    
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
;(async ()=>{
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
    
      
    ],
      "price": 80.00,
      "shortSummary" : "Duplex apartment with three bedrooms",
      "summary":` Villa Aura is located in the Kabak district of Fethiye Faralya
      neighborhood. It is a villa with private swimming pool overlooking
      the sea from Kabak Bay and its balcony. The villa is surrounded by
      semi-protected things. Right in front of the villa is the Lycian way
      to Kabak Bay and Kabak waterfall. If you wish, it is 10 minutes to
      Kabak beach with your vehicle. Right next to the villa is a 50m
      restaurant and 60m grocery store. My guidebook includes nearby
      places to visit`,
      "capacity": 5,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Tropical",
        "Top of the world",
        "Trending",
        "Play",
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/user/74d822d1-8a2d-47b1-99cf-52ea0f248b67.jpg?im_w=240",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4.5,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    })
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Murter, croatia",
      "type": "House",
      "imgUrls": ["https://avatars.mds.yandex.net/i?id=b7a0845296a732326fe5c3927e50de6f34ec0b30-3654623-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=d95e8cb51e081d883fbc82fa20f5a7e878a9a1cd-9229366-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=e5ce18b894033de6ba3b5eee075e3e00ed1be2d5-7097242-images-thumbs&n=13"],
      "price": 280.00,
      "shortSummary" : "Located in the historic area",
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "Iconic",
        "Trending",
        "Minsus",
        "Private"
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }, {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 5,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    })
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Los Angeles, California",
      "type": "House",
      "imgUrls": ["https://avatars.mds.yandex.net/i?id=9cb7fdd80c897cd629e41208ff081f6b28b90485-8192006-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=27085786c1a015236f97982a309864bc-5219731-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=b5a00c685749835d0e9adf1b0ab9e1a8604e2f8f-8487401-images-thumbs&n=13"],
      "price": 321.00,
      "shortSummary" : "Amazing 4 bedrooms apartment",
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "labels": [
        "OMG!",
        "Trending",
        "Tropical",
        "Play",
      ],
      "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    })
})()
