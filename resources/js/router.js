import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import firstpage from './components/admin-panel/pages/firstpage'
import dashboard from './components/admin-panel/pages/dashboard'
import basicPage from './components/admin-panel/pages/aboutMe/basicpage.vue'
import clientPage from './components/admin-panel/pages/aboutMe/clientpage.vue'
import skillAreaPage from './components/admin-panel/pages/aboutMe/skillAreapage.vue'
import testimonialPage from './components/admin-panel/pages/aboutMe/testimonial.vue'
import certificatePage from './components/admin-panel/pages/resume/certificatepage.vue'
import codingSkillsPage from './components/admin-panel/pages/resume/codingSkilspage.vue'
import educationPage from './components/admin-panel/pages/resume/educationpage.vue'
import experiencePage from './components/admin-panel/pages/resume/experiencepage.vue'
import portfolioPage from './components/admin-panel/pages/portfoliopage'
import blogPage from './components/admin-panel/pages/blogpage'
import settingPage from './components/admin-panel/pages/settings'

const routes = [
    {
        path: '/admin-panel/first-page',
        component: firstpage
    },
    {
        path: '/admin-panel/dashboard',
        component: dashboard,
        meta: {title: 'Dashboard'}
    },
    {
        path: '/admin-panel/basic',
        component: basicPage,
        meta: {title: 'Basic Info'}
    },
    {
        path: '/admin-panel/client',
        component: clientPage
    },
    {
        path: '/admin-panel/skill-area',
        component: skillAreaPage
    },
    {
        path: '/admin-panel/testimonial',
        component: testimonialPage
    },
    {
        path: '/admin-panel/certificate',
        component: certificatePage
    },
    {
        path: '/admin-panel/codingSkills',
        component: codingSkillsPage
    },
    {
        path: '/admin-panel/education',
        component: educationPage
    },
    {
        path: '/admin-panel/experience',
        component: experiencePage
    },
    {
        path: '/admin-panel/portfolio',
        component: portfolioPage
    },
    {
        path: '/admin-panel/blog',
        component: blogPage
    },
    {
        path: '/admin-panel/settings',
        component: settingPage
    },

]
export default new VueRouter ({
    mode: 'history',
    routes
})
