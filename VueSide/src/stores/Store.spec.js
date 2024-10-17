import { setActivePinia, createPinia } from 'pinia'
import useNotesListStore from '@/stores/NoteList';
import { beforeEach, describe, expect, it, vi } from 'vitest';

global.fetch = vi.fn()

function createFetchResponse(data) {
    return { json: () => new Promise((response) => response(data))}    
}

describe('useNotesListStore', async () => {
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
        fetch.mockResolvedValue(createFetchResponse(list))
        const loading = notes.loadData()
        
        // expect(fetch).toHaveBeenCalledWith(
        //     'http://127.0.0.1:8000/api/get'
        // )
    })
})