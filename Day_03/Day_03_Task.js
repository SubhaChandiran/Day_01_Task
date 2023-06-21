let myResume = {
    name : 'Subha Chandiran P',
    designation : 'Data Management',
    age : 25,
    phone : 9626171058,
    email : 'jerrysubash@gmail.com',
    languages : ['Tamil', 'kannada', 'English', 'Hindi'],
    behanceURL : 'https://www.behance.net/subhachandiran_1058',
    dribbleURL : 'https://dribble.com/Subha_Chandiran',
    profileSummary : '4.4 years experience in (MIS) Management Information Systems',
    skills : {
        graphicDesignSoftware : ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe xd', 'Adobe InDesign', 'Figma', 'CorelDRAW Graphics Suite'],
        markupLanguages : ['html', 'css'],
        programmingLanguage : ['javascript', 'python'],
        dataBase : 'mongodb' 
    },
    education : {
        SSLC : {
            year : 2012,
            schoolName : 'St.Joseph Hr.Sec.School state board'
        },
        HSC : {
            year : 2014,
            schoolName : 'St.Joseph Hr.Sec.School state board'
        },
        UG : {
            year : 2017,
            collegeName : 'Don Bosco College of arts and science',
            University : 'Periyar University'
        }
    }
};
    
// JSONstringify
let JSONstringify = (JSON.stringify(myResume));

// JSONparse
let JSONparse = (JSON.parse(JSONstringify));


// Using for...in loop:
for ( let key in JSONparse){
    console.log(key, JSONparse[key]);
}

// Using for...of loop:
for (let value of Object.values(JSONparse)){
    console.log(value);
}

// Using for...of loop with nested arrays
for (let languages of JSONparse.languages){
    console.log(languages);
}

// Using forEach for iterating over the languages array
JSONparse.languages.forEach((languages) =>{
    console.log(languages);
});