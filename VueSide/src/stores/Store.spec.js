import { setActivePinia, createPinia } from 'pinia'
import useNotesListStore from '@/stores/NoteList';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import NotesList from '@/views/NotesList.vue';
import { createTestingPinia } from '@pinia/testing';

global.fetch = vi.fn()

function createFetchResponse(data) {
    return { json: () => new Promise((response) => response(data))}    
}

/*describe('useNotesListStore', async () => {
    beforeEach(() => {setActivePinia(createPinia())})
    it('loading data', () => {
        const notes = useNotesListStore()
        const list = [
            {
                id: 1,
                title: 'First',
                content: 'First Note'
            },
            {
                id: 2,
                title: 'Second',
                content: 'Second Note'
            }
        ]
        const mockResponse = {
            ok: true,
            status: 200,
            statusText: 'OK',
            headers: {
                get: () => 'application/json'
            },
            json: () => new Promise((response) => response(JSON.stringify(list))),  
        }

        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
        expect(notes.loadData()).toEqual(list);
        // fetch.mockResolvedValue(createFetchResponse(list))
        // const loading = notes.loadData()
        
        // expect(fetch).toHaveBeenCalledWith(
        //     'http://127.0.0.1:8000/api/get'
        // ) 
        // const fetchSpy = vi.spyOn(globalThis, "fetch");
        // behavior verification
        // expect(fetchSpy).toHaveBeenCalledWith(
        //   "http://127.0.0.1:8000/api/get",
        // );
        // state verification
        // expect(response.quote).toBeDefined();
    })
})*/

describe('useNotesListStore', () => {
    beforeEach(() => {setActivePinia(createPinia())})
    it('add note', () => {
        const store = useNotesListStore()
        expect(store.notes).toEqual([]);
        store.addNote('First', 'First Note')
        expect(store.notes).toEqual([{id:1, title: 'First', content: 'First Note'}]);
    })
    it('remove note', () => {
        const store = useNotesListStore()
        expect(store.notes).toEqual([]);
        store.addNote('First', 'First Note')
        expect(store.notes).toEqual([{id:1, title: 'First', content: 'First Note'}]);
        store.removeNote(1)
        expect(store.notes).toEqual([]);
    })
    it('update note', () => {
        const store = useNotesListStore()
        expect(store.notes).toEqual([]);
        store.addNote('First', 'First Note')
        expect(store.notes).toEqual([{id:1, title: 'First', content: 'First Note'}]);
        store.updateNote(1, 'Second', 'Second Note')
        expect(store.notes).toEqual([{id:1, title: 'Second', content: 'Second Note'}]);
    })
    it('getnote', () => {
        const store = useNotesListStore()
        expect(store.notes).toEqual([]);
        store.addNote('First', 'First Note')
        expect(store.notes).toEqual([{id:1, title: 'First', content: 'First Note'}]);
        expect(store.getNote(1)).toEqual({id:1, title: 'First', content: 'First Note'});
    })
})