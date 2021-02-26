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
    { to: 'hadar@gmail.com', subject: 'purim' , body: 'According to the Hebrew calendar, Purim is celebrated annually on the 14th day of the Hebrew month of Adar (and it is celebrated on Adar II in Hebrew leap years which occur every two to three years), the day following the victory of the Jews over their enemies. In cities that were protected by a surrounding wall at the time of Joshua, Purim was celebrated on the 15th of the month of Adar on what is known as Shushan Purim, since fighting in the walled city of Shushan continued through the 14th day of Adar.[11] Today, only Jerusalem and a few other cities celebrate Purim on the 15th of Adar.', isRead: false, sentAt: 1551133930594, isOpen: false , id:utillService.makeId()},
    { to: 'aviv@gmail.com', subject: 'my football quote', body: 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby union or rugby league); and Gaelic football.[1][2] These various forms of football share to varying extent common origins and are known as football codes.    There are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world.[3][4][5]Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby union or rugby league); and Gaelic football.[1][2] These various forms of football share to varying extent common origins and are known as football codes.    There are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world.[3][4][5] Contemporary codes of football can be traced back to the codification of these games at English public schools during the 19th century.[6][7] The expansion and cultural influence of the British Empire allowed these rules of football to spread to areas of British influence outside the directly controlled Empire.[8] By the end of the 19th century, distinct regional codes were already developing: Gaelic football, for example, deliberately incorporated the rules of local traditional football games in order to maintain their heritage.[9] In 1888, The Football League was founded in England, becoming the first of many professional football competitions. During the 20th century, several of the various kinds of football grew to become some of the most popular team sports in the world.', isRead: false, sentAt: 1551133830594, isOpen: false , id:utillService.makeId()},
    { to: 'roni@gmail.com', subject: 'dr. seuss', body: 'Theodor Seuss "Ted" Geisel (/suːs ˈɡaɪzəl, zɔɪs -/ (About this soundlisten);[2][3][4] March 2, 1904 – September 24, 1991)[5] was an American childrens author, political cartoonist, illustrator, poet, animator, and filmmaker. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss (/suːs, zuːs/,[4][6]). His work includes many of the most popular childrens books of all time, selling over 600 million copies and being translated into more than 20 languages by the time of his death.[7]Geisel adopted the name "Dr. Seuss" as an undergraduate at Dartmouth College and as a graduate student at Lincoln College, Oxford. He left Oxford in 1927 to begin his career as an illustrator and cartoonist for Vanity Fair, Life, and various other publications. He also worked as an illustrator for advertising campaigns, most notably for FLIT and Standard Oil, and as a political cartoonist for the New York newspaper PM. He published his first children\'s book And to Think That I Saw It on Mulberry Street in 1937. During World War II, he took a brief hiatus from children\'s literature to illustrate political cartoons, and he also worked in the animation and film department of the United States Army where he wrote, produced or animated many productions – both live-action and animated – including Design for Death, which later won the 1947 Academy Award for Best Documentary Feature.[8]After the war, Geisel returned to writing children\'s books, writing classics like If I Ran the Zoo (1950), Horton Hears a Who! (1955), If I Ran the Circus (1956), The Cat in the Hat (1957), How the Grinch Stole Christmas! (1957), and Green Eggs and Ham (1960). He published over 60 books during his career, which have spawned numerous adaptations, including 11 television specials, five feature films, a Broadway musical, and four television series.Geisel won the Lewis Carroll Shelf Award in 1958 for Horton Hatches the Egg and again in 1961 for And to Think That I Saw It on Mulberry Street. Geisel\'s birthday, March 2, has been adopted as the annual date for National Read Across America Day, an initiative on reading created by the National Education Association.\', isRead: true, sentAt: 1551133930589, isOpen: false , id:utillService.makeId()}', isRead: true, sentAt: 1551133930589, isOpen: false , id:utillService.makeId()},
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