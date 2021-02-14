import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Summary from '../views/Summary.vue'
import Project from '../views/Project.vue'
import Stack from '../views/Stack.vue'
import Education from '../views/Education.vue'
import History from '../views/History.vue'
import Salary from '../views/Salary.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter);

var routes = [
    {path : "/", component : Home},
    {path : "/Summary", component : Summary},
    {path : "/Project", component : Project},
    {path : "/Stack", component : Stack},
    {path : "/Education", component : Education},
    {path : "/History", component : History},
    {path : "/Salary", component : Salary},
    {path : "/Contact", component : Contact}
];

const router = new VueRouter({
    mode : "history",
    routes
});

export default router;