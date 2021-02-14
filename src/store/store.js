import Vue from 'vue';
import Vuex from 'vuex';
import CONSTANTS from "./constants";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        server_url : CONSTANTS.SERVER_URL
    },
    getters: {
        getServerUrl: (state) => {
            return state.server_url;
        }
    },
    mutations: {
        // state 상태값을 변경
    },
    action: {
        // mutations 메서드를 호출하여 state 값을 변경
        // 시간이 정해지지 않은 비동기 로직들을 이곳에 선언하여 사용한다.
    }
})

export default store;