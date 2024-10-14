<script>
import { mapState } from 'pinia';
import useNotesListStore from '@/stores/NoteList';
export default {
    props: {
        note: {
            id: Number,
            title: String,
            content: String
        }
    },
    data() {
        return {
            visible: false,
            title: '',
            content: '' 
        }
    },
    computed: {
    ...mapState(useNotesListStore, ['addNote']),
    ...mapState(useNotesListStore, ['updateNote']),
    ...mapState(useNotesListStore, ['notes']),
    },
    methods:{
        show(){
            this.visible = true
        },
        close(){
            this.visible = false
        },
        changeNote(){
            this.updateNote(this.note.id, title, content)
        }
    },
    expose: ['show', 'close'],
    created(){
        if(this.note != undefined){
            this.title = this.note.title,
            this.content = this.note.content
        }
    }
}
</script>

<template>
<div v-show="visible" class="overlay">
    <div class="dialog">
        <slot />
        <textarea placeholder="Загаловок заметки..." v-model="title" id="title"/>
        <textarea rows="15" resize="none" placeholder="Текст заметки..." v-model="content" id="content"/>
        <div class="add-btn">
            <button @click="close()">Отмена</button>
            <button v-if="this.note != undefined" @click="this.updateNote(this.note.id, title, content);close()">Изменить</button>
            <button v-else @click="addNote(this.title, this.content);close()">Добавить</button>
        </div>
    </div>
</div>
</template>

<style>
.overlay{
    z-index: 100;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}
.dialog {
    padding: 1em;
    position: relative;
    width: 90%;
    height: 80%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}
.dialog > textarea {
    font-size: large;
    padding: 0.5em;
    min-height: 3em;
    width:80%;
    resize: none;
}
.add-btn {
    width: 80%;
    display: flex;
    justify-content: space-between;
}
.add-btn > button {
    font-size: large;
    border: 1px black solid;
    border-radius: 0.3em;
    padding: 5px;
    cursor: pointer;
}
.add-btn > button:hover{
    background-color: bisque;
    transform: scale(1.05);
    transition: 0.3s;
}
</style>