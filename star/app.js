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
    for (let row = 0; row < 2 * n; row++) {
        // agar shart dorost bashad moadeleh ro hesab kon agar ham n c=row gharar bedeh.
        // ?====shart....amalgar sharti
        let c = row > n ? 2 * n - row : row;
        // peymayesh col in row
        for (let col = 1; col <= c; col++) {
            document.write(col + "🎈 ");
        }
        document.write('<br />')
    }
    // for (let row = 1; row <= n; row++) {
    //     for (let col = 1; col <= n - row; col++) {
    //         document.write(col + "🎈 ")
    //     }
    //     document.write('<br />')
    // }
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


document.write("practiceFive" + "=======")
document.write('<br />')
// practice5
//     *
//    * *
//   * * *
//  * * * *
//   * * *
//    * *
//     *

function practiceFive(n) {
    for (let row = 0; row < 2 * n; row++) {
        let c = row > n ? 2 * n - row : row;

        let space = n - c
        for (let s = 0; s < space; s++) {
            document.write("....")
        }
        for (let col = 1; col <= c; col++) {
            document.write(" " + col + "🤷‍♂️")

        }
        document.write('<br />')
    }
}

practiceFive(5)


document.write("practiceSix" + "=======")
document.write('<br />')
// practice6
//     *
//    * *
//   * * *
//  * * * *

function practiceSix(n) {
    for (let row = 1; row <= n; row++) {
        let freeSpace = n-row
        for (let s = 0; s < freeSpace; s++) {
            document.write("...")
            // console.log("   ");
        }

        for (let col = 1; col <= row; col++) {
            document.write(col + "💋")
            // console.log(col+" ");
        }
        document.write("<br />")
        // console.log("\n");
    }
}

practiceSix(5)