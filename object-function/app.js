// object..........
// school>class*2>students>{student*2>personal+avrageScore>(lessen+totavrage)+number}+teacher>{personal+addres}+information
let school = [{
        students: [{
                personal: {
                    firstName: 'Akbar',
                    lastName: 'Akbari',
                    age: 17
                },
                avrageScores: {
                    lesson: {
                        math: 14,
                        physics: 12,
                        chemistry: 16,
                    },
                    totAvrage: {
                        lasteExam: 16,
                        lastAvrage: [14],
                    },
                },
                number: {
                    ownNumber: 09013455645,
                    parentNumber: 091773664576,

                },
            },
            {
                personal: {
                    firstName: 'mammad',
                    lastName: 'mammadian',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 14,
                        physics: 11,
                        chemistry: 10,
                    },
                    totAvrage: {
                        lasteExam: 11,
                        lastAvrage: [11.66],
                    },
                },
                number: {
                    ownNumber: 09013459485,
                    parentNumber: 091773675576,

                },
            }
        ],
        teacher: {
            personal: {
                firstName: 'radmehr',
                lastName: 'radmehri',
                age: 38
            },
            addres: {
                country: 'iran',
                city: 'bushehr',
                street: 'sangy',
                phone: 09173457788
            }
        },
        infomation: {
            lastSession: [14020110, 14020113, 14020116]
        }
    },
    {
        students: [{
                personal: {
                    firstName: 'farzad',
                    lastName: 'farzadi',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 17,
                        physics: 15,
                        chemistry: 18,
                    },
                    totAvrage: {
                        lasteExam: 15,
                        lastAvrage: [16.66],
                    },
                },
                number: {
                    ownNumber: 09013948645,
                    parentNumber: 091724564576,

                },
            },
            {
                personal: {
                    firstName: 'faramarz',
                    lastName: 'ahmadnia',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 13.75,
                        physics: 10,
                        chemistry: 10,
                    },
                    totAvrage: {
                        lasteExam: 10,
                        lastAvrage: [11.25],
                    },
                },
                number: {
                    ownNumber: 09013459535,
                    parentNumber: 09177987456,

                },
            }
        ],
        teacher: {
            personal: {
                firstName: 'kian',
                lastName: 'kiany',
                age: 40
            },
            addres: {
                country: 'iran',
                city: 'bushehr',
                street: 'ashori',
                phone: 09171230101
            }
        },
        infomation: {
            lastSession: [14020110, 14020113, 14020116]
        }
    },
];
// .........qustions................


// 1. number of students

function studensNumber(number = []) {
    studentSum = 0
    // 
    for (let i = 0; i < number.length; i++) {
        studentSum += number[i].students.length
    }
    return studentSum
}

console.log(studensNumber(school));



// 2. َAvrage of students (class of school)...

function avrageStu(avrage = []) {
    sum = 0
    // for find class
    for (let i = 0; i < avrage.length; i++) {
        // for find scores
        for (let j = 0; j < avrage[i].students.length; j++) {
            sum = sum + avrage[i].students[j].avrageScores.totAvrage.lasteExam
        }

    }
    console.log(sum/studensNumber(school));
}
avrageStu(school)

// 3.find max & min scores in school

// function maxAndMin(score= []) {
//     let maxScore= score[0]; let minScore= score[0]
//     for (let i = 0; i < score.length; i++) {
//         for (let j = 0; j < score[i].students.length; j++) {
//            let value= score[i].students[j].avrageScores.totAvrage.lasteExam
//         if (minScore > score[i].students[j].avrageScores.totAvrage.lasteExam) {
//             minScore= value
          
//         }  else if (minScore < score[i].students[j].avrageScores.totAvrage.lasteExam) {
//             maxScore= value
//         }else{
//             maxScore=maxScore
//             minScore=minScore
//         }
        
//        }
//         console.log(minScore);
//         console.log(maxScore);
//     }
// }
// maxAndMin(school)


