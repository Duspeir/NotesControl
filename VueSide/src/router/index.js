import { createRouter, createWebHistory } from 'vue-router'
import NoteCard from '../views/NoteCard.vue'
import NoteList from '../views/NotesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: NoteList
    },
    {
      path: '/note/:id',
      name: 'note',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NoteCard
    }
  ]
})

export default router
