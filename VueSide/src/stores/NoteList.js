import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const useNotesListStore = defineStore('NoteList',{
  state: () => ({
    notes: []
  }),
  getters: {
    getNotes: (state) => state.notes,
  },
  actions: {
    async loadData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get')
        this.notes = response.data
      } catch (error) {
        this.notes = [
          {id:1, title:'First Note', content:'This is First Note.'},
          {id:2, title:'Second Note', content:'And this! This is second Note.'},
          {id:3, title:'Third Note', content:'And this is Third.'},
          {id:4, title:'Fourth Note', content:"Oh, it's Fourth note."},
        ]
      }
    },
    async addNote(title, content) {
      this.notes.push({id:this.notes.length + 1, title, content})
      await axios.post('http://127.0.0.1:8000/api/post', {title, content})
    },
    removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
      axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
    },
    getNote(id) {
      return this.notes.find(note => note.id === id)
    },
    updateNote(id, title, content) {
      const note = this.notes.find(note => note.id === id)
      if (note) {
        note.title = title
        note.content = content
        axios.put(`http://127.0.0.1:8000/api/put/${id}`, {title, content})
      }
    }
  },
})

export default useNotesListStore