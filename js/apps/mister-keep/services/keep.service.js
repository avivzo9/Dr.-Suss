import { storageService } from '../../../services/async-storage-service.js'
import { utillService } from '../../../services/util.service.js'

const KEY = 'notes'

export const keepService = {
    addNote,
    query,
    getNoteById,
    deleteNote,
    colorChange,
    switchLineCheck,
    updateEditNote,
    updateNewEditNote
}

var gNotes = [{
        id: storageService.makeId(),
        header: 'CSS',
        text: 'Do some work on CSS.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'JS',
        text: 'Make ToDo List.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'After CSS.',
        text: 'Be like:',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        src: 'img/my-meme.jpeg',
        type: 'keepImg'
    },
    {
        id: storageService.makeId(),
        header: 'HTML',
        text: 'HTML is useless.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Samples',
        text: 'Send samples to the lab, and try it on others 😈.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
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
    if (!note.type) note.type = 'keepText'
    if (!note.color) note.color = '#ffca7b'
    if (!note.id) note.id = utillService.makeId()
    if (!note.header) note.header = 'Keep in mind.'
    return query()
        .then(notes => {
            notes.push(note)
            utillService.saveToStorage(KEY, notes)
            console.log('notes:', notes)
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

function switchLineCheck(list) {
    console.log('list:', list)
    return storageService.get(KEY, todo.id)
        .then(todo => {
            console.log('todo:', todo)
                // storageService.put(KEY, )
            return todo;
        })
}

function updateEditNote(id) {
    return storageService.get(KEY, id)
        .then(note => {
            note.isEdit = (note.isEdit) ? false : true
            storageService.put(KEY, note)
            return note
        })
}

function updateNewEditNote(newNote, note) {
    return storageService.get(KEY, note.id)
        .then(note => {
            note = newNote
            note.isEdit = false
            storageService.put(KEY, note)
            console.log('note:', note)
            return note
        })
}