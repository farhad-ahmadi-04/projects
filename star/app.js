// n=5
// 1....practice1
// *
// **
// ***
// ****
// *****
document.write("practice1=========")
document.write("<br />")

function practiceOne(n) {

    for (row = 1; row <= n; row++) {
        // for which row=cols
        for (col = 1; col <= row; col++) {
            document.write(col + "😎 ");
        }
        document.write('<br />');
    }
}
practiceOne(5)

document.write("practice2===========")
document.write("<br />")
// ============
// practiceTwo
// *****
// ****
// ***
// **
// *

function practiceTwo(n) {
    for (let row = 1; row <= n; row++) {
        // peymayesh col in row
        for (let col = 1; col <= n - row + 1; col++) {
            document.write(col + "😎 ")
        }
        document.write('<br />')

    }
}
practiceTwo(5)

// practice3...........
document.write("practice3=========")
document.write("<br />")
// *
// **
// ***
// ****
// ***
// **
// *

function prac6ticeThree(n) {
    for (let row = 1; row <= n; row++) {
        // peymayesh col in row
        for (let col = 1; col <= row; col++) {
            document.write(col + "🎈 ");
        }
        document.write('<br />')
    }
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n - row; col++) {
            document.write(col + "🎈 ")
        }
        document.write('<br />')
    }
}
prac6ticeThree(5)


document.write("practice4=========")
document.write("<br />")
// practiceFour
//     *
//    **
//   ***
//  ****
// *****   

function practiceFour(row, col) {

    for (let i = 0; i < row; i++) {
        // peymayesh col in row
        for (let j = 1; j <= col; j++) {
            if (i + j >= col) {
                 document.write(j + '🐱‍👤 ')
            } else {
                 document.write(' ')
            }
        }
        document.write('<br />')
    }
}
practiceFour(5, 5)