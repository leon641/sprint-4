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
    "name": "Gelemis, Anatalya, Turkey",
    "type": "Villa ",
    "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/c06def22-bd48-4900-8e7c-ca46092f952a.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/22ad6a9b-3c38-4a8a-81a1-9b588872913c.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/e7d8a88e-89e2-4648-8c04-be05d3de1c78.jpeg?im_w=720",],
    "price": 549.00,
    "shortSummary" : "Entire villa hosted by Berkan",
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 6,
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
  await storageService.post(STORAGE_KEY,   {
    "_id": "10006546",
    "name": "Koutsouras, Greece",
    "type": "Villa ",
    "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-31170206/original/03762295-2ff7-4b9e-a824-f542d7a95c00.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31170206/original/690311e1-4f5a-450f-ba21-e6b5b1067929.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31170206/original/e3a991e6-ac64-47a5-b2dd-851a9add01f9.jpeg?im_w=720"],
    "price": 489.00,
    "shortSummary" : "Fantastic villa in amazing greece",
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 14,
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
  await storageService.post(STORAGE_KEY,   {
    "_id": "10006546",
    "name": "Mikonos, Greece",
    "type": "Container",
    "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-599018293718594460/original/2ea12839-e390-4c53-a429-58e34439a358.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-599018293718594460/original/0b7385cd-5dc8-47e2-8e43-61716e0c2e03.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-599018293718594460/original/6a40a4b4-9366-4888-9038-79e99230bead.jpeg?im_w=720"],
    "price": 849.00,
    "shortSummary" : "Entire villa hosted by Dionyssios",
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 16,
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
      "name": "Milbrook, United Kingdom",
      "type": "Villa ",
      "imgUrls": ["https://a0.muscache.com/im/pictures/bf43c691-a93b-4ab0-9d14-4fa0ec05018d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/b12472e4-bfa8-4983-ad06-93550c00300e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e5674196-2ed6-459d-97b8-8b3febdf2861.jpg?im_w=720"],
      "price": 319.00,
      "shortSummary" : "Entire chalet hosted by Lisett",
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
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Terrasini, Sicilia, Italy",
      "type": "Container",
      "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=720"],
      "price": 168.00,
      "shortSummary" : "Container suite hosted by Vittorio",
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 2,
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
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Gelemis, Anatalya, Turkey",
      "type": "Villa ",
      "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/c06def22-bd48-4900-8e7c-ca46092f952a.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/22ad6a9b-3c38-4a8a-81a1-9b588872913c.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/e7d8a88e-89e2-4648-8c04-be05d3de1c78.jpeg?im_w=720"],
      "price": 549.00,
      "shortSummary" : "Entire villa hosted by Berkan",
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 6,
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
    await storageService.post(STORAGE_KEY,   {
      "_id": "10006546",
      "name": "Milbrook, United Kingdom",
      "type": "Villa ",
      "imgUrls": ["https://a0.muscache.com/im/pictures/bf43c691-a93b-4ab0-9d14-4fa0ec05018d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/b12472e4-bfa8-4983-ad06-93550c00300e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e5674196-2ed6-459d-97b8-8b3febdf2861.jpg?im_w=720"],
      "price": 319.00,
      "shortSummary" : "Entire chalet hosted by Lisett",
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
