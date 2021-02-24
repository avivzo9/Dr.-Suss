// import { utilService } from '../../../services/util.service.js';
import {storageService} from '../../../services/async-storage-service.js'
const EMAILS_KEY = 'EMAILS';

export const emailsService = {
    getEmails,
    getNextEmailId,
    save,
    getById,
    remove,
};

var gEmails = [
    {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {subject: 'hey?', body: 'lollll!', isRead: true, sentAt : 1551133930589},
    {subject: 'Wassap?', body: 'im coollll', isRead: false, sentAt : 1551133830594},
    {subject: 'hfvh', body: 'thx for asking', isRead: false, sentAt : 1551133630594},
    {subject: 'sdve?', body: 'im coollll', isRead: true, sentAt : 1551131330594},
    {subject: 'dtyjuykf ty hd h', body: 'Pick up!', isRead: false, sentAt : 1551133230594},
    {subject: ' ggw regwrg gergw eg', body: 'im coollll', isRead: true, sentAt : 1551133930594},
    {subject: 'ad matai', body: 'Pick up!', isRead: true, sentAt : 1558332430594},
];

function getEmails() {
    return storageService.query(EMAILS_KEY).then((emails) => {
        if (!emails || !emails.length) {
            return storageService.postMany(EMAILS_KEY, gEmails);
        }
         return emails;
    });
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}
function getById(id) {
    return storageService.get(EMAILS_KEY, id);
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function getNextEmailId(emailId) {
    const emails = gEmails;
    var emailIdx = emails.findIndex((email) => {
        return email.id === emailId;
    });
    const nextEmailIdx = emailIdx + 1;
    return emails[nextEmailIdx].id;
}
