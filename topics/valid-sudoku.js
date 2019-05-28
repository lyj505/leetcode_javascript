// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

const sudoku = [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]

const getTransposeMatrix = function (sudoku) {
    const newArr = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            row.push(sudoku[j][i]);
        }
        newArr.push(row);
    }
    return newArr
}


const get3x3Matrix = function (sudoku) {
    const newArr = [];
    let x = 0; y = 0, distance = 3;
    let distanceX = x + distance;
    let distanceY = y + distance;
    while (distanceX <= 9 && distanceY <= 9) {
        const row = [];
        for (; y < distanceY; y++) {
            for (; x < distanceX; x++) {
                if (!sudoku[y] || !sudoku[y][x]) {
                    break;
                }
                row.push(sudoku[y][x]);
            }
            x = distanceX - distance;
        }
        x += distance;
        y = distanceY - distance;
        distanceX += distance;
        newArr.push(row);
        if (x == 9) {
            distanceX = distance;
            distanceY += distance;
            y += distance;
            x = 0;
        }
    }
    return newArr
}

const isRepeat = function (sudoku) {
    let flag = false;
    for (let i = 0; i < 9; i++) {
        const row = sudoku[i];
        if (!Array.isArray(row)) {
            return;
        }
        const numberArr = row.filter((el) => !isNaN(parseFloat(Number(el))) && isFinite(Number(el)));
        const repepeatArr = (Array.from(new Set(numberArr)))
        const isRepeat = numberArr.length != repepeatArr.length;
        if (isRepeat) {
            flag = true;
            break;
        }
        const str = row.join('');
        if (!/[1-9\.]+/g.test(str)) {
            flag = true;
            break;
        }
    }
    return flag;
}

const isValidSudoku = function (sudoku) {
    //每一行 //每一列 9个独立的3*3  是否是由.和1-9的数字组成
    let rowFlag = isRepeat(sudoku);
    if (rowFlag) {
        console.log(rowFlag)
        return false;
    }
    const transposeMatrix = getTransposeMatrix(sudoku);
    let colFlag = isRepeat(transposeMatrix);
    if (colFlag) {
        return false;
    }
    const MatrixSpec = get3x3Matrix(sudoku);
    let MatrixSpecFlag = isRepeat(MatrixSpec);
    if (MatrixSpecFlag) {
        return false;
    }
    return true;
}

const t = isValidSudoku(sudoku);

console.log('返回值---是否是矩阵', t);