import { utillService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage-service.js'
const EMAILS_KEY = 'EMAILS';

export const emailsService = {
    getEmails,
    getNextEmailId,
    addEmail,
    getById,
    removeEmail,
    query
};

var gEmails = [
    { to: 'hadar@gmail.com', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, isOpen: false , id:utillService.makeId()},
    { to: 'aviv@gmail.com', subject: 'Wassap?', body: 'im coollll', isRead: false, sentAt: 1551133830594, isOpen: false , id:utillService.makeId()},
    { to: 'roni@gmail.com', subject: 'hey?', body: 'lollll!', isRead: true, sentAt: 1551133930589, isOpen: false , id:utillService.makeId()},
    { to: 'ido@gmail.com', subject: 'hfvh', body: 'thx for asking', isRead: false, sentAt: 1551133630594, isOpen: false , id:utillService.makeId()},
    { to: 'oshri@gmail.com', subject: 'sdve?', body: 'im coollll', isRead: true, sentAt: 1551131330594, isOpen: false , id:utillService.makeId()},
    { to: 'avi@gmail.com', subject: 'dtyjuykf ty hd h', body: 'Pick up!', isRead: false, sentAt: 1551133230594, isOpen: false , id:utillService.makeId()},
    { to: 'avital@gmail.com', subject: ' ggw regwrg gergw eg', body: 'im coollll', isRead: true, sentAt: 1551133930594, isOpen: false , id:utillService.makeId()},
    { to: 'avivit@gmail.com', subject: 'ad matai', body: 'Pick up!', isRead: true, sentAt: 1558332430594, isOpen: false , id:utillService.makeId()},
];

function getEmails() {
    return storageService.query(EMAILS_KEY)
        .then((emails) => {
            if (!emails || !emails.length) {

                utillService.saveToStorage(EMAILS_KEY, gEmails);
                return gEmails
            }
            return emails;
        });
}

function removeEmail(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}
function getById(id) {
    return storageService.get(EMAILS_KEY, id);
}

function addEmail(email) {
    if (!email.id) email.id = storageService.makeId()
    return query()
        .then(emails => {
            emails.push(email)
            utillService.saveToStorage(EMAILS_KEY, emails);
            return emails;
        })
        
}

// function save(email) {
//     query()
//         .then(emails => {
//             if (email.id) {
//                 return storageService.put(EMAILS_KEY, email);
//             } else {
//                 return storageService.post(EMAILS_KEY, email);
//             }
//         })
// }

function getNextEmailId(emailId) {
    const emails = gEmails;
    var emailIdx = emails.findIndex((email) => {
        return email.id === emailId;
    });
    const nextEmailIdx = emailIdx + 1;
    return emails[nextEmailIdx].id;
}

function query() {
    return storageService.query('EMAILS')
        .then(emails => {
            if (!emails || !emails.length) {
                utillService.saveToStorage('EMAILS', gEmails)
                return gEmails
            } else return emails
        })
}