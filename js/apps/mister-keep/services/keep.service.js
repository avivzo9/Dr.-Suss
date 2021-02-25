import { storageService } from '../../../services/async-storage-service.js'
import { utillService } from '../../../services/util.service.js'

const KEY = 'notes'

export const keepService = {
    addNote,
    query,
    getNoteById,
    deleteNote,
    colorChange,
}

var gNotes = [{
        id: storageService.makeId(),
        header: 'CSS',
        text: 'Do some work on CSS.',
        color: '#ffca7b',
        isPinned: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'JS',
        text: 'Make ToDo List.',
        color: '#ffca7b',
        isPinned: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'After CSS.',
        text: 'Be like:',
        color: '#ffca7b',
        isPinned: false,
        src: 'img/my-meme.jpeg',
        type: 'keepImg'
    },
    {
        id: storageService.makeId(),
        header: 'HTML',
        text: 'HTML is useless.',
        color: '#ffca7b',
        isPinned: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Samples',
        text: 'Send samples to the lab, and try it on others 😈.',
        color: '#ffca7b',
        isPinned: false,
        type: 'keepText'
    },
]

function query() {
    return storageService.query(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                utillService.saveToStorage(KEY, gNotes)
                return gNotes
            } else return notes;
        })
}

function addNote(note) {
    if (!note.type) note.type = 'text'
    if (!note.color) note.color = '#ffca7b'
    return query()
        .then(notes => {
            notes.push(note)
            utillService.saveToStorage(KEY, notes)
            return notes;
        })
}

function deleteNote(id) {
    return storageService.remove(KEY, id)
}

function getNoteById(id) {
    return storageService.get(KEY, id)
}

function colorChange(id, color) {
    return storageService.get(KEY, id)
        .then(note => {
            note.color = color
            storageService.put(KEY, note)
            return note
        })
}