// E-TASK: E-Task: Shunday function tuzing, u bitta string argumentni
// qabul qilib osh stringni teskari qilib return qilsin
// masalan: getReverse("hello") return qilsin "olleh"

const getReverse = (txt) => {
    return txt.split('').reverse().join('');
}

console.log(getReverse('hello'));