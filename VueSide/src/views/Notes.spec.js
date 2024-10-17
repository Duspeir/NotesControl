import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NotesList from './NotesList.vue'
import NoteCard from './NoteCard.vue'
import { createTestingPinia } from '@pinia/testing'

describe('NotesList.vue', () => {
    it('renders notes', () => {
        let wrapper = mount(NotesList, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        notes: [{id: 1, title: 'note 1', body: 'body 1'}, {id: 2, title: 'note 2', body: 'body 2'}]
                    }
                })]
            }
        })
        expect(wrapper).toBeDefined()
    })
})