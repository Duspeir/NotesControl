<script>
import { mapState } from 'pinia';
import useNotesListStore from '@/stores/NoteList';
import router from '@/router';
import Dialog from '@/components/Dialog.vue';
export default {
  components: {
    Dialog
  },
  data() {
    return {
      title: {}
    }
  },
  methods: {
    
  },
  computed: {
    ...mapState(useNotesListStore, ['getNotes']),
    ...mapState(useNotesListStore, ['notes']),
    ...mapState(useNotesListStore, ['getNote']),
  },
  created(){
    let id = Number(this.$route.params.id)
    this.title = this.getNote(id)
    // this.title = list.find(note => note.id === id)
  }
}
</script>

<template>
  <Dialog ref="dialog" :note="title">
    <h2>Редактирование заметки</h2>
  </Dialog>
  <div class="CardBody" :v-if="title != {}">
    <div class="CardContainer">
      <label class="cardHead">{{ title.title }}</label>
      <label class="cardText">{{ title.content }}</label>
      <div class="buttons">
        <button @click="$router.push('/')">Вернуться к списку</button>
        <button @click="this.$refs.dialog.show()">Редактировать</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .CardBody {
    width: 70%;
    padding-top: 1em;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
  .CardContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .cardHead, .cardText{  
    padding: 10px 30px;
    font-size: 1.5em;
  }
  .cardText{
    background-color: aliceblue;
    text-align: left;
    font-size: 1.1em;
    min-height: 10em;
    height: fit-content;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .buttons > button {
    font-size: 0.7em;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
  .buttons > button:hover {
    background-color: aquamarine;
    transition: 0.2s;
  }
</style>