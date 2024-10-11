import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useNotesListStore = defineStore('NoteList',{
  state: () => ({
    notes: [
      {
        id: 1,
        title: 'First Note',
        content: 'This is the first note',
      },
      {
        id: 2,
        title: 'Second Note',
        content: 'This is the second note',
      },
    ],
  }),
  getters: {
    getNotes: (state) => state.notes,
  },
  actions: {
    addNote(title, content) {
      this.notes.push({id:this.notes.length + 1, title, content})
    },
    removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    },
    getNote(id) {
      return this.notes.find(note => note.id === id)
    },
    updateNote(id, title, content) {
      const note = this.notes.find(note => note.id === id)
      if (note) {
        note.title = title
        note.content = content
      }
    },
  },
})

export default useNotesListStore