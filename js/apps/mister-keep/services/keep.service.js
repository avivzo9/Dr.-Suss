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
        header: 'Grocery list.',
        text: 'Untill 30/4.',
        color: '#ffca7b',
        isPinned: false,
        todos: [
            { id: storageService.makeId(), text: 'Pepper.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Soap.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Razors.', doneAt: Date.now(), isDone: true },
            { id: storageService.makeId(), text: 'Dog food.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Potatoes.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Garlic.', doneAt: Date.now(), isDone: true },
            { id: storageService.makeId(), text: 'Cheese.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Banana.', doneAt: Date.now(), isDone: true },
            { id: storageService.makeId(), text: 'Rice.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Melon.', doneAt: Date.now(), isDone: false },
            { id: storageService.makeId(), text: 'Shampoo.', doneAt: Date.now(), isDone: true },
            { id: storageService.makeId(), text: 'Tuna.', doneAt: Date.now(), isDone: true },
            { id: storageService.makeId(), text: 'Ice cream.', doneAt: Date.now(), isDone: true },
        ],
        isEdit: false,
        type: 'keepList'
    },
    {
        id: storageService.makeId(),
        header: 'CSS.',
        text: 'Do some work on CSS.',
        color: 'orange',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Vue JS.',
        text: 'Master it!',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        src: 'img/vue-picture.jpeg',
        type: 'keepImg'
    },
    {
        id: storageService.makeId(),
        header: 'HTML.',
        text: 'HTML with Vue is useless.',
        color: 'lightgreen',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Samples.',
        text: 'Send samples to the lab, and try it on others 😈.',
        color: 'lightblue',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Take medication 💉.',
        text: 'Every day, 10:00 AM.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'JS.',
        text: 'Make ToDo List.',
        color: '#ffca7b',
        isPinned: false,
        isEdit: false,
        type: 'keepText'
    },
    {
        id: storageService.makeId(),
        header: 'Dont forget!',
        color: 'gray',
        isPinned: false,
        isEdit: false,
        src: 'img/dream-big.jpeg',
        type: 'keepImg'
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