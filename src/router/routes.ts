import HomeView from '../components/views/Home.vue'
import AboutView from '../components/views/AboutView.vue'
import ServicesView from '../components/views/ServicesView.vue'
import ProjectsView from '../components/views/ProjetView.vue'

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
]