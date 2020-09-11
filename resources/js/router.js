import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import firstpage from './components/pages/firstpage'
import dashboard from './components/pages/dashboard'
import basicPage from './components/pages/aboutMe/basicpage.vue'
import clientPage from './components/pages/aboutMe/clientpage.vue'
import skillAreaPage from './components/pages/aboutMe/skillAreapage.vue'
import testimonialPage from './components/pages/aboutMe/testimonial.vue'
import certificatePage from './components/pages/resume/certificatepage.vue'
import codingSkillsPage from './components/pages/resume/codingSkilspage.vue'
import educationPage from './components/pages/resume/educationpage.vue'
import experiencePage from './components/pages/resume/experiencepage.vue'
import portfolioPage from './components/pages/portfoliopage'
import blogPage from './components/pages/blogpage'
import settingPage from './components/pages/settings'

const routes = [
    {
        path: '/first-page',
        component: firstpage
    },
    {
        path: '/dashboard',
        component: dashboard,
        meta: {title: 'Dashboard'}
    },
    {
        path: '/basic',
        component: basicPage,
        meta: {title: 'Basic Info'}
    },
    {
        path: '/client',
        component: clientPage
    },
    {
        path: '/skill-area',
        component: skillAreaPage
    },
    {
        path: '/testimonial',
        component: testimonialPage
    },
    {
        path: '/certificate',
        component: certificatePage
    },
    {
        path: '/codingSkills',
        component: codingSkillsPage
    },
    {
        path: '/education',
        component: educationPage
    },
    {
        path: '/experience',
        component: experiencePage
    },
    {
        path: '/portfolio',
        component: portfolioPage
    },
    {
        path: '/blog',
        component: blogPage
    },
    {
        path: '/settings',
        component: settingPage
    },

]
export default new VueRouter ({
    mode: 'history',
    routes
})
