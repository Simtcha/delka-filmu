/*Jeden lístek do divadla :i[Pěst na oko] stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, 
přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
Hodnotu proměnné prijem vypište do stránky.
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
Vypište do stránky i příjem divadla se započítanou slevou pro studenty.*/


let listekCena = 12
let pocetNavstevnikuJednohoPredstaveni = 174
let pocetPredstaveniMesicne = 15
let studentSleva = 0.65
let prijemNormal = (listekCena * pocetNavstevnikuJednohoPredstaveni) *pocetPredstaveniMesicne
let zmenenyPrijem = prijemNormal - (prijemNormal * 0.4) + ((prijemNormal * 0.4)*studentSleva)
console.log(zmenenyPrijem) //print

//nebo

let listekCenaNormal = 12
let listekCenaStudent = listekCenaNormal * 0.65
let pocetNavstevnikuJednohoPredstaveni2 = 174
let pocetPredstaveniMesicne2 = 15
let zmenenyPrijem2 = (((listekCenaNormal * (pocetNavstevnikuJednohoPredstaveni2 * 0.6)) +(listekCenaStudent * (pocetNavstevnikuJednohoPredstaveni2 * 0.4))) *pocetPredstaveniMesicne2)
document.body.innerHTML = zmenenyPrijem2 //print
console.log(zmenenyPrijem2) //print

//muj manual check
let kalkulaceCheck = (((12*(174*0.6))+((12*0.65)*(174*0.4)))*15)
console.log(kalkulaceCheck) //print


