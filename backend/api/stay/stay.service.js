//1בסד

const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId
const gRegions = {
    'I\'m flexible': true,
    'Middle East': ['GR', 'BH', 'CY', 'EG', 'AE', 'TR', 'SY', 'SA', 'QA', 'OM', 'LB', 'KW', 'JO', 'IL', 'IQ', 'IR', 'YE'],
    'Italy': ['IT','Italy'],
    'South America': ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE',],
    'France': ['FR'],
    'United States': ['US'] /* ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',] */,
    'United Kingdom': ['GB'],
}

async function query(filterBy = { txt: '', region: '', label: '', likedStays: [] }) {
    try {
        // console.log('filterBy in likedby ', filterBy);
        // const criteria = {
        // console.log('filterBy',filterBy); 

        //     vendor: { $regex: filterBy.txt, $options: 'i' }
        // }
        const collection = await dbService.getCollection('stay')
        var stays = await collection.find({}).toArray()
        if (filterBy.txt) {
            if (!gRegions[filterBy.txt]) {
                gRegions[filterBy.txt] = []
            }
            const regex = new RegExp(filterBy.txt, 'i')
            stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.summery) || regex.test(stay.loc.country) || regex.test(stay.loc.countryCode) || gRegions[filterBy.txt].includes(stay.loc.countryCode) || regex.test(stay.loc.country) || regex.test(stay.loc.address))
        }
        if (filterBy.region) {
            stays = stays.filter(stay => filterBy.region.includes(stay.loc.country) || gRegions[filterBy.region] === true)
        }
        if (filterBy.likedStays.length) {
            if (!filterBy.likedStays.length) stays = []
            stays = stays.filter(stay => filterBy.likedStays.includes(stay.name))
        }
        if (filterBy.label) {
            stays = stays.filter(stay => stay.type.includes(filterBy.label))
        }
        if (filterBy.price) {
            stays = stays.filter(stay => stay.price <= filterBy.price)
        }

        return stays

    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }
}

async function getById(stayId) {
    try {

        const collection = await dbService.getCollection('stay')
        const stay = collection.findOne({ _id: ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding stay ${stayId}`, err)
        throw err
    }
}

async function remove(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.deleteOne({ _id: ObjectId(stayId) })
        return stayId
    } catch (err) {
        logger.error(`cannot remove stay ${stayId}`, err)
        throw err
    }
}

async function add(stay) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.insertOne(stay)

        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
}

async function update(stay) {
    try {
        const stayToSave = {
            name: stay.name,
            price: stay.price
        }
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: ObjectId(stay._id) }, { $set: stayToSave })
        return stay
    } catch (err) {
        logger.error(`cannot update stay ${stayId}`, err)
        throw err
    }
}

async function addStayMsg(stayId, msg) {
    try {
        msg.id = utilService.makeId()
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: ObjectId(stayId) }, { $push: { msgs: msg } })
        return msg
    } catch (err) {
        logger.error(`cannot add stay msg ${stayId}`, err)
        throw err
    }
}

async function removeStayMsg(stayId, msgId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: ObjectId(stayId) }, { $pull: { msgs: { id: msgId } } })
        return msgId
    } catch (err) {
        logger.error(`cannot add stay msg ${stayId}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
    addStayMsg,
    removeStayMsg
}
