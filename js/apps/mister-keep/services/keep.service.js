import { storageService } from '../../../services/async-storage-service.js'
import { utillService } from '../../../services/util.service.js'
const KEY = 'notes'

export const keepService = {
    addBook,
    query
}

var gNotes = [{
        id: storageService.makeId(),
        header: 'CSS',
        text: 'Do some work on CSS',
        color: 'blue'
    },
    {
        id: storageService.makeId(),
        header: 'JS',
        text: 'Make ToDo List',
        color: 'green'
    },
    {
        id: storageService.makeId(),
        header: 'HTML',
        text: 'HTML is useless',
        color: 'red'
    },
]

function addBook(note) {}

function query() {
    return storageService.query(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                utillService.saveToStorage(KEY, gNotes)
                return gNotes
            } else return notes;
        })
}