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
                        lasteExam: [16],
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
                        lasteExam: [11],
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
                        lasteExam: [15],
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
                        lasteExam: [10],
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
    for (let i = 0; i < number.length; i++) {
        // studentSum += number[i].students.length
        for (let j = 0; j < number[i].students.length; j++) {
            // studentSum += number[i].students[j]
            for (let k = 0; k < number[i].students[j].avrageScores.totAvrage.lasteExam.length; k++) {
                studentSum =  number[i].students[j].avrageScores.totAvrage.lasteExam[k]
                
            }
        }
    }
    console.log(studentSum);
    return studentSum
}
console.log(studensNumber(studentSum));
console.log(studensNumber(school));



// 2. َAvrage of students (class of school)...

function avrageStu(avrage = []) {
    sum = 0
    for (let i = 0; i < avrage.length; i++) {
        // console.log(avrage[i]);
        for (let j = 0; j < avrage[i].students.length; j++) {
            // console.log(avrage[i].students[j]);
            for (let k = 0; k < avrage[i].students[j].avrageScores.totAvrage.lasteExam.length; k++) {
                // console.log(avrage[i].students[j].avrageScores.totAvrage.lasteExam[k]);
                sum = sum + avrage[i].students[j].avrageScores.totAvrage.lasteExam[k] 
                sum1+=  avrage[i].students[j].avrageScores.totAvrage.lasteExam.length
                // avrageStudentsSum =sum/ avrage[i].students[j].avrageScores.totAvrage.lasteExam.length
            }

            // console.log(avrage[i].students[j].avrageScores.totAvrage.lasteExam);
        }

    }
    console.log(sum);
    console.log(sum1);
}
avrageStu(school)

// avrageStu(school)


// function x(score = []) {
//     numberSum = 0
//     for (let i = 0; i < score.length; i++) {
//         numberSum += score[i].students;
//         for (let j = 0; j < score[i].students.length; j++) {
//             numberSum += score[i].students[j].avrageScores.totAvrage.lastAvrage;
//             numberSum = numberSum / studensNumber(school)
//             console.log(numberSum);
//         }
//     }
// }
// x(school)