// בס"ד

import { orderService } from '../services/order.service'
import { userService } from '../services/user.service'
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'

// var localLoggedinUser = null
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null)

export const userStore = {
    state: {
        loggedinUser: null,
        users: [],
        watchedUser: null
    },
    getters: {
        users({ users }) { return users },
        loggedinUser({ loggedinUser }) { return loggedinUser },
        watchedUser({ watchedUser }) { return watchedUser }
    },
    mutations: {
        updatedLoggedin(state, { user }) {
            state.loggedinUser = user
        },
        setLoggedinUser(state, { user }) {
            // console.log('user in user store', user);

            // Yaron: needed this workaround as for score not reactive from birth
            state.loggedinUser = user
            // console.log('on set logedin', state.user);
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user
        },
        setUsers(state, { users }) {
            state.users = users
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
        setUserScore(state, { score }) {
            state.loggedinUser.score = score
        },
    },
    actions: {
        async login({ commit }, { userCred }) {

            const user = await userService.login(userCred)
            commit({ type: 'setLoggedinUser', user })
            return user
            // catch (err) {
            //     console.log('userStore: Error in login', err)
            //     throw err
            // }
        },
        signup({ commit }, { userCred }) {
            const user = userService.signup(userCred)
            commit({ type: 'setLoggedinUser', user })
            return user
            // } catch (err) {
            //     console.log('userStore: Error in signup', err)
            //     throw err
            // }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            // TODO: loading
            try {
                const users = await userService.getUsers()

                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async getMyOrders({ commit }, { userId }) {
            try {
                const orders = await orderService.query()
                console.log('orders in store', orders);
                
                const myOrders = orders.filter(order => order.hostId === userId)
                console.log('myOrders', myOrders);
                return myOrders
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async loadAndWatchUser({ commit }, { userId }) {
            try {
                const user = await userService.getById(userId)
                commit({ type: 'setWatchedUser', user })

            } catch (err) {
                console.log('userStore: Error in loadAndWatchUser', err)
                throw err
            }
        },
        loadLoggedinUser({ commit }) {
            const user = userService.getLoggedinUser()
            // console.log('loggedinUser in action', user);

            commit({ type: 'setLoggedinUser', user })
        },
        async removeUser({ commit }, { userId }) {
            try {
                await userService.remove(userId)
                commit({ type: 'removeUser', userId })
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        },
        async updateUser(context, { user }) {
            try {
                user = await userService.update(user)

                context.commit({ type: 'updatedLoggedin', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }

        },
        async increaseScore({ commit }) {
            try {
                const score = await userService.changeScore(100)
                commit({ type: 'setUserScore', score })
            } catch (err) {
                console.log('userStore: Error in increaseScore', err)
                throw err
            }
        },
        // Keep this action for compatability with a common user.service ReactJS/VueJS
        setWatchedUser({ commit }, payload) {
            commit(payload)
        },

    }
}