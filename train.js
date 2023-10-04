// F-Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib,
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi

const findDoublers = (txt) => {
 return txt.split('').map((ele, index, arr)=>(arr.includes(ele, index + 1))).includes(true)
}

console.log(findDoublers('hello'));
