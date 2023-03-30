// בס"ד

import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { httpService } from './http.service'
import { store } from '../store/store'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USER = 'user'


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore,
    saveWishListToUser,
 
}

window.userService = userService


function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch({ type: 'setWatchedUser', user })
}

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    console.log(user);
    // const user = await storageService.get('user', _id)
    // let user = getById(_id)
   
    // await storageService.put('user', user)

    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}


async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    // console.log('user in user service',user);
    
    const user = await httpService.post('auth/login', userCred)
    console.log('user in service after back',user);
    
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    // if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}


async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {    
    user = {
         _id: user._id,
         fullname: user.fullname,
          imgUrl: user.imgUrl,
          likedByUsers : user.likedByUsers,
           orders : user.orders
        }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
function saveWishListToUser(stay) {
    console.log('in user service stay',stay);
    let user = getLoggedinUser()
    console.log('in user service user',user);
    user.likedByUsers.push(stay)
    console.log('user before local', user);
    saveLocalUser(user)
}


// ;(async ()=>{

//     utilService.saveToStorage(STORAGE_KEY_USER,[
//         { 
//         _id : utilService.makeId(),
//         fullname: "koki",
//         imgUrl: "/img/img1.jpg",
//         username: "koki",
//         password: "000",
//         orders: [],
//         trips: [],
//         stays: [],
//         likedByUsers: [],
//         reviews : []
//     }])

//     await storageService.post(STORAGE_KEY_USER,{ 
//         _id:utilService.makeId(),
//     fullname: "nadav dori",
//     imgUrl: "/img/img1.jpg",
//     username: "nadav",
//     password: "111",
//     orders: [],
//     trips: [],
//     stays: [],
//     likedByUsers: [],
//     reviews : []})
//     await storageService.post(STORAGE_KEY_USER, { 
//         _id:'622f3401e36c59e6164fabab',
//         fullname: "Angel",
//         imgUrl: "/img/img1.jpg",
//         username: "angel",
//         password: "555",
//         orders: [],
//         trips: [],
//         stays: [],
//         likedByUsers: [],
//         reviews : [] })
//     // await utilService.saveToStorage(STORAGE_KEY_USER,{_id:utilService.makeId(),fullname: 'Muki G', username: 'muki', password:'123' })
//     login({ 
//         _id:'622f3401e36c59e6164fabab',
//         fullname: "Angel",
//         imgUrl: "/img/img1.jpg",
//         username: "angel",
//         password: "555",
//         orders: [],
//         trips: [],
//         stays: [],
//         likedByUsers: [],
//         reviews : [] })
// })()


    // await utilService.saveToStorage(STORAGE_KEY_USER,{_id:utilService.makeId(),fullname: 'Muki G', username: 'muki', password:'123' })




