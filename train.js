//  D-Task: 
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, 
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 
// 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return 
// hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require('moment')
const time = moment().format('HH:mm');
class Shop {
    constructor(non, lagmon, cola){
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq(){
        console.log(`Hozir ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola bor!`);
    };
    sotish(product, amount){
        switch(product){
            case 'non' :
                if(amount <= this.non){
                    console.log(`Hozir ${time} da ${amount} ta non sotildi`);
                     this.non -= amount;
                }else{
                    console.log(`Hozir ${time} da bu miqdorda sotish uchun yetarli non yo'q`);
                }
                break;
            case 'lagmon' :
                if(amount <= this.lagmon){
                    console.log(`Hozir ${time} da ${amount} ta lagmon sotildi`);
                    this.lagmon -= amount;
                }else{
                    console.log(`Hozir ${time} da bu miqdorda sotish uchun yetarli lagmon yo'q`);
                }
                break;
            default:
                if(amount <= this.cola){
                    console.log(`Hozir ${time} da ${amount} ta cola sotildi`);
                    this.cola -= amount;
                }else{
                    console.log(`Hozir ${time} da bu miqdorda sotish uchun yetarli cola yo'q`);
                }
                break;       
        }
    };
    qabul(product, amount){
        switch(product){
            case 'non' :
                this.non += amount;
                console.log(`Hozir ${time} da bu ${amount}ta non qo'shildi.`);
                break;
            case 'lagmon' :
                this.lagmon += amount;
                console.log(`Hozir ${time} da bu ${amount}ta lagmon qo'shildi.`);
                break;
            default :
                this.cola += amount;
                console.log(`Hozir ${time} da bu ${amount}ta cola qo'shildi.`);
                break;
        };
    }
}

const shop = new Shop(2, 4, 5);
shop.sotish('non', 2);
shop.sotish('lagmon', 3);
shop.sotish('cola', 2);
shop.qoldiq();
shop.qabul('lagmon', 100);
shop.qoldiq();