// בס"ד

import { stayService } from '../services/stay.service.local'
import { userService } from '../services/user.service'
// import { stayService } from '../services/stay.service'

export function getActionRemoveStay(stayId) {
    return {
        type: 'removeStay',
        stayId
    }
}
export function getActionAddStay(stay) {
    return {
        type: 'addStay',
        stay
    }
}

export function getActionUpdateStay(stay) {
    return {
        type: 'updateStay',
        stay
    }
}
export function getActionAddStayMsg(stayId) {
    return {
        type: 'addStayMsg',
        stayId,
        txt: 'Stam txt'
    }
}

export const stayStore = {
    state: {
        stays: [],
        wishList: [],
        filterBy: {
            txt: '',
            region: '',
            label: '',
            price: 0,
        },
        currStay: {},
    },
    getters: {
        stays({ stays }) { return stays },

        wishList({ wishList }) { return wishList },

        currStay({ currStay }) { return currStay }
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        setCurrStay(state, { stay }) {
            state.currStay = stay
        },
        addStay(state, { stay }) {
            state.stays.push(stay)
        },
        updateStay(state, { stay }) {
            const idx = state.stays.findIndex(c => c._id === stay._id)
            state.stays.splice(idx, 1, stay)
        },
        removeStay(state, { stayId }) {
            state.stays = state.stays.filter(stay => stay._id !== stayId)
        },
        setFilterBy(state, { label }) {
            state.filterBy.label = label

        },
        addStayMsg(state, { stayId, msg }) {
            const stay = state.stays.find(stay => stay._id === stayId)
            if (!stay.msgs) stay.msgs = []
            stay.msgs.push(msg)
        },
        addToWishList(state, { stay }) {
            state.wishList.push(stay)
        },
        setFilter(state, { filterBy }) {
            console.log('filterBy',filterBy)
            state.filterBy.txt = filterBy.txt
            state.filterBy.region = filterBy.region
            // state.filterBy.region = filterBy.region
        },
    },
    actions: {
        async getStayById({ commit }, { stayId }) {

            const stay = await stayService.getById(stayId)
            commit({ type: 'setCurrStay', stay })
            return Promise.resolve()
        },
        setWishlist({ commit }, { stay }) {
            console.log('in set wishList', stay._id)
            userService.saveWishListToUser(stay)
            commit({ type: 'addToWishList', stay })
        },
        setFilterBy(context, { label }) {
            context.commit({ type: 'setFilterBy', label })
            context.dispatch({ type: 'loadStays', filterBy: context.state.filterBy })
        },
        async addStay(context, { stay }) {
            try {
                stay = await stayService.save(stay)
                context.commit(getActionAddStay(stay))
                return stay
            } catch (err) {
                console.log('stayStore: Error in addStay', err)
                throw err
            }
        },
        async updateStay(context, { stay }) {
            try {
                stay = await stayService.save(stay)
                context.commit(getActionUpdateStay(stay))
                return stay
            } catch (err) {
                console.log('stayStore: Error in updateStay', err)
                throw err
            }
        },
        async loadStays(context, { filterBy }) {
            try {
                const stays = await stayService.query(filterBy)

                context.commit({ type: 'setStays', stays })
            } catch (err) {
                console.log('stayStore: Error in loadStays', err)
                throw err
            }
        },
        async removeStay(context, { stayId }) {
            try {
                await stayService.remove(stayId)
                context.commit(getActionRemoveStay(stayId))
            } catch (err) {
                console.log('stayStore: Error in removeStay', err)
                throw err
            }
        },
        async addStayMsg(context, { stayId, txt }) {
            try {
                const msg = await stayService.addStayMsg(stayId, txt)
                context.commit({ type: 'addStayMsg', stayId, msg })
            } catch (err) {
                console.log('stayStore: Error in addStayMsg', err)
                throw err
            }
        },
        setFilter(context, { filterBy }) {
            context.commit({ type: 'setFilter', filterBy })
        }
    }
}