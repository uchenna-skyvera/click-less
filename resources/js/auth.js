import bearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import axios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import router from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
// Auth base configuration some of this options
// can be override in method calls
const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: 'click-less',
  tokenStore: ['localStorage'],
  rolesVar: 'role',
  registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
  loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
  logoutData: {url: 'auth/logout', method: 'POST', redirect: '/login', makeRequest: true},
  fetchData: {url: 'auth/user', method: 'GET', enabled: true},
  refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
}
export default config