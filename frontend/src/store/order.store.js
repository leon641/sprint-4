// בס"ד

import { orderService } from '../services/order.service'
import { userService } from '../services/user.service'
// import { orderService } from '../services/order.service'

export function getActionRemoveOrder(orderId) {
    return {
        type: 'removeOrder',
        orderId
    }
}
export function getActionAddOrder(order) {
    return {
        type: 'addOrder',
        order
    }
}

export function getActionUpdateOrder(order) {
    return {
        type: 'updateOrder',
        order
    }
}
export function getActionAddOrderMsg(orderId) {
    return {
        type: 'addOrderMsg',
        orderId,
        txt: 'Stam txt'
    }
}

export const orderStore = {
    state: {
        orders: [],
        currOrder: {},
    },
    getters: {
        orders({ orders }) { return orders },
        currOrder({ currOrder }) { return currOrder }
    },

    mutations: {
        setOrders(state, { order }) {
            console.log('order in mutations',order);
            
            state.orders.push(order)
        },
        setCurrOrder(state, { order }) {
            state.currOrder = order
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(c => c._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
        changeOrderStatus(state, { updatedOrder }) {
            console.log('updatedOrder',updatedOrder);
            state.currOrder = updatedOrder
            const idx=state.orders.findIndex(order=>order._id===updatedOrder._id)
            state.orders.splice(idx,1,orderToUpdate)
    },
},
actions: {
    async setOrder({ commit }, { order }) {

        await orderService.setOrder(order)
        commit({ type: 'setOrders', order })
      
    },
    async setCurrOrder({ commit }, { order }) {

        commit({ type: 'setCurrOrder', order })
    },

    async getOrderById({ commit }, { orderId }) {

        const order = await orderService.getById(orderId)
        commit({ type: 'setCurrOrder', order })
        return Promise.resolve()
    },
    setWishlist({ commit }, { order }) {
        userService.saveWishListToUser(order)
        commit({ type: 'addToWishList', order })
    },
    setFilterBy(context, { label }) {
        context.commit({ type: 'setFilterBy', label })
        context.dispatch({ type: 'loadOrders', filterBy: context.state.filterBy })
    },
    async changeOrderStatus({ commit }, { orderToUpdate }){
                  const updatedOrder = await orderService.updateOrder(orderToUpdate)   
                 console.log('updatedOrder',updatedOrder);
                  commit({ type: 'changeOrderStatus', updatedOrder })
              
    },
    async addOrder(context, { order }) {
        try {
            order = await orderService.save(order)
            context.commit(getActionAddOrder(order))
            return order
        } catch (err) {
            console.log('orderStore: Error in addOrder', err)
            throw err
        }
    },
    async updateOrder(context, { order }) {
        try {
            order = await orderService.save(order)
            context.commit(getActionUpdateOrder(order))
            return order
        } catch (err) {
            console.log('orderStore: Error in updateOrder', err)
            throw err
        }
    },
    async loadOrders(context) {
        try {
            const orders = await orderService.query()
            console.log('orders',orders)

            context.commit({ type: 'setOrders', orders })
        } catch (err) {
            console.log('orderStore: Error in loadOrders', err)
            throw err
        }
    },
    async removeOrder(context, { orderId }) {
        try {
            await orderService.remove(orderId)
            context.commit(getActionRemoveOrder(orderId))
        } catch (err) {
            console.log('orderStore: Error in removeOrder', err)
            throw err
        }
    },
    async addOrderMsg(context, { orderId, txt }) {
        try {
            const msg = await orderService.addOrderMsg(orderId, txt)
            context.commit({ type: 'addOrderMsg', orderId, msg })
        } catch (err) {
            console.log('orderStore: Error in addOrderMsg', err)
            throw err
        }
    },
    setFilter(context, { filterBy }) {
        context.commit({ type: 'setFilter', filterBy })
    }
}
}