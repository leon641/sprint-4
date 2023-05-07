// בס"ד

//FRONTEND
//In the filter: selecting a region.
function onSetRegion(title) {
    this.$emit("setRegion", title)
}

//After all the selections are done,by pressing the search button, explore the data base.
function toExplore() {
    this.$router.push({
        path: "/explore",
        query: { txt: this.filterBy.txt, region: this.filterBy.region /* etc. */ }
    })
}

//Sending the search data to the store. 
function inExplore() {
    const filterBy = {
        txt: this.$route.query.txt,
        region: this.$route.query.region
        /* etc. */
    }
    this.$store.dispatch({ type: "loadStays", filterBy })
}

//In store sends search data to the backend for filtration.
async function loadStays(context, { filterBy }) {
    try {
        const stays = await stayService.query(filterBy)
        context.commit({ type: 'setStays', stays })
    } catch (err) {
        console.log('stayStore: Error in loadStays', err)
        throw err
    }
}

//Axios request
async function query(filterBy = { txt: '', region: '' /* etc. */ }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

//BACKEND:
//Data gets to backend and being used it the necessary function
async function getStays(req, res) {
    try {
        const {txt,region,label,likedStays} = req.query
        const filterBy = {
            txt: txt || '',
            region: region || '',
            label: label || '',
            likedStays: likedStays || [],
        }
        const stays = await stayService.query(filterBy)
        res.json(stays)
    } catch (err) {
        logger.error('Failed to get stays', err)
        res.status(500).send({ err: 'Failed to get stays' })
    }
}

//Filtration is made
const gRegions = {
    'I\'m flexible': true,
    'Middle East': ['GR', 'BH', 'CY', 'EG', 'AE', 'TR', 'SY', 'SA', 'QA', 'OM', 'LB', 'KW', 'JO', 'IL', 'IQ', 'IR', 'YE'],
    'Italy': ['IT'],
    'South America': ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE',],
    'United States': ['US'],
    'United Kingdom': ['GB']
}

async function query(filterBy = { txt: '', region: '', label: '', likedStays: [] }) {
    try {
        const collection = await dbService.getCollection('stay')
        var stays = await collection.find({}).toArray()
        if (filterBy.txt) {
            if (!gRegions[filterBy.txt]) {
                gRegions[filterBy.txt] = []
            }
            const regex = new RegExp(filterBy.txt, 'i')
            stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.summery) || regex.test(stay.loc.country) || regex.test(stay.loc.countryCode) || gRegions[filterBy.txt].includes(stay.loc.countryCode) || regex.test(stay.loc.city) || regex.test(stay.loc.address))
        }
        if (filterBy.region) {
            stays = stays.filter(stay => gRegions[filterBy.region].includes(stay.loc.countryCode) || gRegions[filterBy.region] === true)
        }
        if (filterBy.likedStays.length) {
            if (!filterBy.likedStays.length) stays=[]
            stays = stays.filter(stay => filterBy.likedStays.includes(stay.name))
        }
        if (filterBy.label) {
            stays = stays.filter(stay => stay.type.includes(filterBy.label))
        }
        return stays
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }
}