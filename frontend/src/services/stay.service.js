// בס"ד

// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg,
    getLikedStays
}
window.cs = stayService

async function getLikedStays(stayNames){
   const filterBy={}
    filterBy.likedStays=stayNames

    const likedStays= await query(filterBy)
    return likedStays
    
}
async function query( filterBy = { txt: '', price: 0 }) {
    console.log('filterBy',filterBy);
    
    return httpService.get(STORAGE_KEY,filterBy)

    // var stays = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
    // }
    // if (filterBy.price) {
    //     stays = stays.filter(stay => stay.price <= filterBy.price)
    // }
    // return stays

}
function getById(stayId) {
    // return storageService.get(STORAGE_KEY, stayId)
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    // await storageService.remove(STORAGE_KEY, stayId)
    return httpService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        // savedStay = await storageService.put(STORAGE_KEY, stay)
        savedStay = await httpService.put(`stay/${stay._id}`, stay)

    } else {
        // Later, owner is set by the backend
        stay.owner = userService.getLoggedinUser()
        // savedStay = await storageService.post(STORAGE_KEY, stay)
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    const savedMsg = await httpService.post(`stay/${stayId}/msg`, {txt})
    return savedMsg
}


function getEmptyStay() {
    return {
        
            "name": "" ,
            "type": "",
            "imgUrls": [],
            "price": 0,
            "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
            "capacity": 0,
            "amenities": [
              "TV",
              "Cable TV",
              "Internet",
              "Wifi",
              "Air conditioning",
              "Wheelchair accessible",
              "Pool",
              "Kitchen",
              "Free parking on premises",
              "Doorman",
              "Gym",
              "Elevator",
              "Hot tub",
              "Heating",
              "Family/kid friendly",
              "Suitable for events",
              "Washer",
              "Dryer",
              "Smoke detector",
              "Carbon monoxide detector",
              "First aid kit",
              "Safety card",
              "Fire extinguisher",
              "Essentials",
              "Shampoo",
              "24-hour check-in",
              "Hangers",
              "Hair dryer",
              "Iron",
              "Laptop friendly workspace",
              "Self check-in",
              "Building staff",
              "Private entrance",
              "Room-darkening shades",
              "Hot water",
              "Bed linens",
              "Extra pillows and blankets",
              "Ethernet connection",
              "Luggage dropoff allowed",
              "Long term stays allowed",
              "Ground floor access",
              "Wide hallway clearance",
              "Step-free access",
              "Wide doorway",
              "Flat path to front door",
              "Well-lit path to entrance",
              "Disabled parking spot",
              "Step-free access",
              "Wide doorway",
              "Wide clearance to bed",
              "Step-free access",
              "Wide doorway",
              "Step-free access",
              "Wide entryway",
              "Waterfront",
              "Beachfront"
            ],
            "bathrooms": 0,
            "bedrooms": 0,
            "roomType": "Entire home/apt",
            "host": {
              "_id": "622f3401e36c59e6164fabab",
              "fullname": "Angel",
              "location": "Eureka, California, United States",
              "about": "Adventurous couple loves to travel :)",
              "responseTime": "within an hour",
              "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/2fab7bb4-82df-4b7d-b3e4-e0a20719f9b2.jpg?im_w=240",
              "pictureUrl": "https://a0.muscache.com/im/pictures/user/2fab7bb4-82df-4b7d-b3e4-e0a20719f9b2.jpg?im_w=240",
              "isSuperhost": true,
              "id": "36133410"
            },
            "loc": {
              "country": "",
              "countryCode": "US",
              "city": "",
              "address": "",
              "lat": 35.1856,
              "lan": 33.3823
            },
            "reviews": [
              {
                "at": "2014-04-06T04:00:00.000Z",
                "by": {
                  "_id": "622f3406e36c59e6164fbcc7",
                  "fullname": "Quentin",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkH38YoyiDUlUJmmhmBSymk69DXL2EpczEoJGpqdOT_g&s",
                  "id": "12424603"
                },
                "txt": "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n",
                "rate": 3
              },
              {
                "at": "2015-04-02T04:00:00.000Z",
                "by": {
                  "_id": "622f3405e36c59e6164fb7f6",
                  "fullname": "Steve",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31enZqP4HYqigWTeC1j9O4fW9PuPCelRYUDfQUxsVPA&s",
                  "id": "10300292"
                },
                "txt": "Nice room in a flat well located. Nihat is very nce and helpful. Good experience.",
                "rate": 5
              },
              {
                "at": "2015-05-19T04:00:00.000Z",
                "by": {
                  "_id": "622f3404e36c59e6164fb624",
                  "fullname": "Jess",
                  "imgUrl": "https://www.istockphoto.com/photo/woman-in-striped-shirt-gm1382525457-443173469?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Freal-person&utm_term=real%20person%3A%3A%3A",
                  "id": "8641944"
                },
                "txt": "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!",
                "rate": 4
              },
              {
                "at": "2015-08-25T04:00:00.000Z",
                "by": {
                  "_id": "622f3406e36c59e6164fbcb6",
                  "fullname": "Irina",
                  "imgUrl": "https://www.istockphoto.com/photo/happy-black-businesswoman-using-a-smartphone-in-a-creative-office-gm1408041355-459029954?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Freal-person&utm_term=real%20person%3A%3A%3A",
                  "id": "42110174"
                },
                "txt": "The flat is clean and and very good located, 3 minutes walk to Taksim Square. The bedroom is quiet at night, even though there is a crowded area next to the flat. Nihat was always extremely quick in answering our emails and let us feel comfortable. He is really kind and discrete, we met him few times cause he works in the evening. ",
                "rate": 4
              },
              {
                "at": "2015-09-21T04:00:00.000Z",
                "by": {
                  "_id": "622f3402e36c59e6164fae1a",
                  "fullname": "Matthew",
                  "imgUrl": "https://media.istockphoto.com/id/1421881686/photo/day-in-the-life-of-a-female-tradie.jpg?b=1&s=170667a&w=0&k=20&c=w8MQuMTJDp-N9sOrLYdAwf5Wmx9emQmhaOgCYY70-84=",
                  "id": "40562632"
                },
                "txt": "Nihat went out of his way to accommodate our very early arrival and some unforeseeable challenges.  A great host!",
                "rate": 4
              },
              {
                "at": "2015-11-09T05:00:00.000Z",
                "by": {
                  "_id": "622f3407e36c59e6164fc03f",
                  "fullname": "Valon",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "47981428"
                },
                "txt": "Nice place and host, very good location :)",
                "rate": 4
              },
              {
                "at": "2015-12-28T05:00:00.000Z",
                "by": {
                  "_id": "622f3405e36c59e6164fb7a0",
                  "fullname": "Amanda",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPAQ0D1r2tLq6zx1NnKpfyNS-IKjRmMqt6KIme_9MJw&s",
                  "id": "29625938"
                },
                "txt": "Everything was great about the room and the location.",
                "rate": 4
              },
              {
                "at": "2016-01-09T05:00:00.000Z",
                "by": {
                  "_id": "622f3404e36c59e6164fb3fe",
                  "fullname": "Mathieu & Hilal",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnST5BgyH1WdmhH_Mtp9UFTej5XTHSb_3ioMiFDM9O&s",
                  "id": "50390021"
                },
                "txt": "The stay at Nihat's place was really pleasant. The apartment is very clean and confortable, and located in a very vibrant and animated neighborhood with many restaurants, cafes, bars, shops just nearby. Just a 5 min walk to the Taksim Metro station makes it easy to access any other parts of the city pretty quickly. Nihat was also a great and welcoming host. We totally recommend this place for your stay in Istanbul, especially if you want to experience the local life to the fullest ! ",
                "rate": 5
              },
              {
                "at": "2016-03-20T04:00:00.000Z",
                "by": {
                  "_id": "622f3403e36c59e6164fb225",
                  "fullname": "Christie",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAx6LiiEMt7JZMpd4v4lAJ6zEMrWeg50et0_9Uryc_EQ&s",
                  "id": "48957037"
                },
                "txt": "The host canceled this reservation 30 days before arrival. This is an automated posting.",
                "rate": 4
              },
              {
                "at": "2017-05-11T04:00:00.000Z",
                "by": {
                  "_id": "622f3402e36c59e6164fad81",
                  "fullname": "Vanessa",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "551888"
                },
                "txt": "I stayed at Nihat's for a week. It was exactly as the pics, very nice room. A little bit cold but he offers heating and AC. The apt is cozy and central, close to nice restaurants and bars. Have in mind is on the 4th fl no elevator. Nihat is a very easygoing guy who's open to help with any question or tip about the city. Totally recommend! thanks Nihat! ",
                "rate": 3
              },
              {
                "at": "2017-05-21T04:00:00.000Z",
                "by": {
                  "_id": "622f3404e36c59e6164fb2d1",
                  "fullname": "Florentin",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "75066050"
                },
                "txt": "Nihat is a very nice host, he is very helpful and creates an agreeable atmosphere inside the flat. Thank you :)",
                "rate": 5
              },
              {
                "at": "2017-08-27T04:00:00.000Z",
                "by": {
                  "_id": "622f3402e36c59e6164fae29",
                  "fullname": "Harshak",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "19784722"
                },
                "txt": "Nice cozy place very close to Taksim Square. Nihat is helpful and informative.",
                "rate": 4
              },
              {
                "at": "2017-09-26T04:00:00.000Z",
                "by": {
                  "_id": "622f3406e36c59e6164fbc70",
                  "fullname": "Haytham",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "10741329"
                },
                "txt": "nice apartment with good location. the room was clean and neat. Nihat was helpful and supportive. totally recommend his accommodation",
                "rate": 3
              },
              {
                "at": "2017-10-03T04:00:00.000Z",
                "by": {
                  "_id": "622f3404e36c59e6164fb5fd",
                  "fullname": "Vural",
                  "imgUrl": "data:image/jpeg;base64,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",
                  "id": "14053758"
                },
                "txt": "Nihat is a very friendly host and makes you really feel comfortable. I have had a great stay and recommend it to anyone who wants to stay very central (Cihangir), the hip and modern part of the city with cozy venues and great cafes just a 3min walk. The place is very close to Taksim Square, etc...everything as described in the prior conments. I will definitely come again! Cheers vural",
                "rate": 3
              },
              {
                "at": "2017-12-03T05:00:00.000Z",
                "by": {
                  "_id": "622f3406e36c59e6164fba05",
                  "fullname": "Wasseem",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkOmFwdjK1Y7yxZ8pfs5HxNKtjgxc_I1gvw&usqp=CAU",
                  "id": "2072593"
                },
                "txt": "I totally recommend this place. Great experience staying at Nihat’s apartment. To start with, Nihat is a wonderful friendly person who I was happy to meet. He was very friendly at house, and we had the chance to spend time together outside. Staying with him reflects the true meaning of this website, which is living as a local with a local person. Thank you Nihat. \nRegarding the apartment, it is exactly as described. The room is nice and bed is comfortable. It was clean and well prepared for us. \nRegarding the neighborhood, it is very close to Taksim square and Istiklal Street with few minutes walk. As normal as it is in Istanbul, there is a short hill you need to walk to get to the square, which was totally fine with us. \n\nIn general, next time I visit Istanbul I would first check the availability with Nihat before searching others.",
                "rate": 5
              },
              {
                "at": "2018-02-23T05:00:00.000Z",
                "by": {
                  "_id": "622f3402e36c59e6164fac4c",
                  "fullname": "Mr Joseph",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMh4tpJlbnXZvp9iHacC5p9V-5RSCZNKhKw&usqp=CAU",
                  "id": "10668432"
                },
                "txt": "Nihat was an amazing host. He picked me up from the bus stop, gave me some great tips on what to do in Istanbul and just an all round great guy. If you're looking for somewhere close to Taksim then Nihat's place is great. Highly recommend him! Thanks Nihat.",
                "rate": 5
              },
              {
                "at": "2018-03-05T05:00:00.000Z",
                "by": {
                  "_id": "622f3405e36c59e6164fb8b8",
                  "fullname": "Gökçe",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdorORXUvTs3CnOjQSagf2eIgO9E8wE0klAA&usqp=CAU",
                  "id": "64172965"
                },
                "txt": "Nihat is so hospitable person. Me and My boyfriend stayed 6 days in Nihat's place and everything was perfect. Nihat is so tactful person despite he was working so hard, he all the time asked us 'do we need anything?' he was so clean and his house is exactly same with the pictures.\nI'm highly recommend his place! \nthank you Nihat!",
                "rate": 3
              },
              {
                "at": "2018-04-01T04:00:00.000Z",
                "by": {
                  "_id": "622f3405e36c59e6164fb952",
                  "fullname": "Bruno",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4ypJx6LmXfx41wo-Z_wgPPDtVLDnB_S6ww&usqp=CAU",
                  "id": "6316350"
                },
                "txt": "Very helping and welcoming host. Perfect location for a few days in Istanbul.",
                "rate": 3
              },
              {
                "at": "2018-04-04T04:00:00.000Z",
                "by": {
                  "_id": "622f3405e36c59e6164fb73d",
                  "fullname": "Vichapas",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&usqp=CAU",
                  "id": "68234834"
                },
                "txt": "Nihat was very nice, polite and very helpful to us. He let us drop our baggages off in the morning and left them for a little longer when we checked out. The location is great as it is near Taksim Square. There are local grocery shops nearby if you want to buy some food or snacks.",
                "rate": 5
              },
              {
                "at": "2018-04-23T04:00:00.000Z",
                "by": {
                  "_id": "622f3403e36c59e6164fb0fe",
                  "fullname": "Show",
                  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzAeNpxx5KvbfFreqbsNPN51NebtOqK-4tA&usqp=CAU",
                  "id": "107816748"
                },
                "txt": "Nihat is very nice host, and came to wait for me in the shuttle bus station near Taksim squre, His house is very convenient for travel. He is very experirenced and warm host, the room super clean and warm, and house has everything, next time i will choose his house again in istanbul. miss you nihat. see you next time.",
                "rate": 4
              }
            ],
            "likedByUsers": []
          }
        }






