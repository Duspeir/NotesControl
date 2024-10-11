<script>
import { mapState } from 'pinia';
import useNotesListStore from '@/stores/NoteList';
import Dialog from '@/components/Dialog.vue';
export default {
  data() {
    return {
      
    }
  },
  components: {
    Dialog
  },
  methods: {
    addNote() {
       
    }
  },
  computed: {
    ...mapState(useNotesListStore, ['loadData']),
    ...mapState(useNotesListStore, ['getNotes']),
    ...mapState(useNotesListStore, ['removeNote']),
    ...mapState(useNotesListStore, ['notes']),
  },
  created() {
    this.loadData();
  },
  mounted(){
    
  },
}
</script>

<template>
  <Dialog ref="dialog">
    <h2>Добавление заметки</h2>
  </Dialog>
  <div class="list">
    <button class="list-btn" @click="this.$refs.dialog.show()">Добавить заметку</button>
    <div v-for="tab in notes" class="noteCard">
      <RouterLink :to="{ name: 'note', params: {id:tab.id} }">Открыть</RouterLink>
      <button class="deleteNote" @click="this.removeNote(tab.id)">Удалить</button>
      <p>{{ tab.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin: 0 auto;
  /* width: 80%; */
  max-width: 80%;
  text-wrap: wrap;
  position: relative;
  top: 1em; 
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.noteCard {
  min-width: 50%;
  text-wrap: wrap;
  border-bottom: solid 1px black;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1em;
  padding: 4px 10px;
  background-color: #a0d6b4;
}
.noteCard > p {
  /* padding-left: 1em; */
}
.noteCard > .deleteNote, a {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  text-decoration: none;
  color: rgb(149, 12, 149);
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  font-size: 0.7em;
  /* text-align: center; */
  /* align-content: center; */
}
.noteCard> .deleteNote:hover, a:hover {
  /* background-color: #ffbb99; */
  background-color: #dcdcdc;
  color: crimson;
  transform: scale(1.05);
  transition: 0.3s;
}
.list-btn {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
  width: fit-content;
  border: 1px black solid;
  border-radius: 0.3em;
  padding: 5px;
  cursor: pointer;
}
.list-btn:hover {
  /* background-color: #ffbb99; */
  background-color: #dcdcdc;
  color: crimson;
  transform: scale(1.05);
  transition: 0.3s;
}
</style>
