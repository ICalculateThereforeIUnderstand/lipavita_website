import React from "react";
import ReactDOM from 'react-dom/client';
import "./obracun.scss";
import { ADRESA } from "./index.js";

const data = [["24.6.","18:25","19:14","skupljao sam uzorke web stranica i promatrao koje elemente mogu posuditi. Skidao sam graficke elemente sa vaseg facebook profila"],
              ["","22:29","23:45","shutterstock - 5 slika za 50eu (330 milijuna slika). u ovom sessinu sam istrazivao slike u public domainu. odabrao sam par slika ubera, bolta, logo od glova, wolt itd. Editirao sam slike takoder"], 
              ["","0:10","1:27","izradujem navbar zajedno sa rotirajucom pozadinom"], ["25.6.","10:10","11:28","u ovom sessinu zgotovio sam navbar i uveo sam routes. Sve funkcionira savrseno, klikom na link se otvaraju druge stranice, navbar funkcionira i za male i za velike ekrane"], 
              ["","11:42","13:23","implementirao sam footer"], ["","15:36","16:20","radim na kontakt stranici"], 
              ["","19:36","20:45","nastavljam rad na kontakt stranici. zavrsio sa lijevom stranom"], 
              ["","23:54","1:02",""], ["26.6.","12:37","14:04","doradio sam natpis na slici pocetne stranice i napravio sam rotirajuci element (gradovi)"], 
              ["","14:39","15:50","modal sa mapom lokacije u kontakt stranici"], ["","20:03","20:40","dovrsio sam modal sa lokacijom"], 
              ["","20:59","21:48","uveo animaciju na pocetku glavne stranice, uveo sam i partnerske logoe"], 
              ["","0:18","1:45","radim na otvarajucim karticama na glavnoj stranici"], ["27.6.","8:45","10:00","nastavljam sa otvarajucim karticama"], ["","10:25","11:54","zavrsio sam otvarajucim karticama, dodao sliku-link ubera/bolta. Popravljao responsive design glavne stranice"], 
              ["","12:51","14:17","dovrsio sam taksi stranicu"], ["","18:38","18:59","refaktorizacija koda"],
              ["","19:02","20:26","pisem obracunsku stranicu."],["","23:38","1:07","postavljam site na internet. pisem komentare za Vedrana"],
              ["","1:14","1:29","dovrsio postavljanje na internet"],["28.6.","10:52","11:30","uvodim dvojezicni mehanizam"],["","11:41","12:07","dovrsio uvodenje dvojezicnog mehanizma"],["","12:48","14:01","prevodim site dio po dio na engleski"],
              ["","17:34","18:36","dovrsavam prijevod, sitniji popravci, postavljam novu verziju sitea na internet"],
              ["30.6.","8:56","10:05","bug sa hover natpisom za touch screen uredaje je rijesen. uveo 404 stranicu za promaseni link. radim na loading page"],
              ["","10:33","11:25","dovrsio i ugradio loading page. Postavio novu verziju sitea na internet"],
              ["2.7.","11:14","12:55","krenuo sam sa testimonialom"],["","13:17","14:19","dovrsio testimonial"],["","0:41","1:40","stavljam poruke i slike u testimonial, stavljam novu verziju na internet, pisem Vedranu plan oko domene lipa-vita.hr"]]

export function Obracun() {
  const [rez, setRez] = React.useState([]);
  const [vrijeme, setVrijeme] = React.useState(0);
  
  React.useEffect(()=>{

    let rez1 = [];
    let ukupnoVrijeme = 0;
    for (let i = 0; i < data.length; i++) {
        let [vr1, vr2] = izracunajVrijeme(data[i][1], data[i][2]);
        ukupnoVrijeme += vr2;

        let rezultat = [<td className="polje1">{data[i][0]}</td>, <td className="polje1">{data[i][1]}</td>, <td className="polje1">{data[i][2]}</td>, <td className="polje1">{vr1}</td>, <td className="polje2">{data[i][3]}</td>];
        rez1.push(<tr>{rezultat}</tr>);
    }

    setRez(rez1);
    setVrijeme(ukupnoVrijeme);


  }, []);

  function izracunajVrijeme(poc, kraj) {
    let [sat1, min1] = poc.split(":");
    let [sat2, min2] = kraj.split(":");

    let vrijeme1 = parseInt(sat1) + parseInt(min1)/60;
    let vrijeme2 = parseInt(sat2) + parseInt(min2)/60;

    /*console.log(sat1 + ", " + min1 + ", " + vrijeme1);
    console.log(sat2 + ", " + min2 + ", " + vrijeme2);*/

    if (vrijeme2 < vrijeme1) {
        vrijeme2 += 24;
    }

    let sat3 = Math.floor(vrijeme2-vrijeme1);
    let min3 = Math.round((vrijeme2 - vrijeme1 - sat3)*60);

    if (isNaN(sat3) || isNaN(min3) || sat3 > 6) {
      /*console.log("greska");*/
      return ["Greska", 0];
    }

    /*console.log("Ukupno vrijeme je " + sat3 + ":" + min3);*/
    let vr2 = sat3 + min3/60;

    if (min3 < 10)  min3 = "0" + min3;
    return [sat3 + ":" + min3, vr2];
  }


  return (
    <div className="obracun">
      <h1 className="naslov">Obracunska stranica</h1>

      <table className="tablica">
        <tr>
          <th className="polje1">Datum</th>
          <th className="polje1">Pocetak sessiona</th>
          <th className="polje1">Kraj sessiona</th>
          <th className="polje1">Ukupno vrijeme</th>
          <th className="polje2">Komentar</th>
        </tr>
        
          {rez}
        
      </table>

      <p className="p-el">Ukupno vrijeme je {Math.floor(vrijeme)}:{Math.round((vrijeme-Math.floor(vrijeme))*60)}</p>
      <p className="p-el">Dosadasnja cijena projekta {vrijeme*6} eu</p>

      <h2>Pitanja i komentari</h2>
      <p className="p-el1">Bok Vedran. Evo pred tobom je kostur web stranice. Trenutno sadrzi dvije stranice, glavnu I kontakt stranicu. Dosta vremena sa ulozio na izgradnju navbara (gornje navigacijske trake), I footbara (skroz donjeg elementa), oni su zajednicki za sve stranice. Morat ces mi odgovoriti na sljedeca pitanja, tako da znam sto treba poboljsati.</p>
      <p className="p-el1">1.) U navbaru, stavio sam slikicu Lipa Vite, pronasao sam je na vasoj facebook strani. Da li je to logo? Ako ti se ne svida, posalji mi logo. Ako je dobra slika, ja cu dati nalog freelancerima da naprave logo u vektorskoj grafici po ovoj slici – na taj nacin za 5 dolara ili neku smjesnu cijenu cemo dobiti pravi logo sa prozirnom pozadinom, da to izgleda tip top I da se uklapa u navbar.</p>
      <p className="p-el1">2.) Ako zelis “o nama”, morat ces mi dati informacije koje zelis na toj stranici.  Znaci neki kratki tekst o firmi, firmina misija, povijest, broj vozaca, broj dostavljaca, itd</p>
      <p className="p-el1">3.) Reci mi zelis li jos neku stranicu. Moj prijedlog je mozda FAQ, cesta pitanja, sa cim ti sve dolaze novi radnici. Onda ce na toj stranici klikati na pitanja I otvarati odgovore, a mozda I videje.</p>
      <p className="p-el1">4.) Posudio sam par fotografija sa vaseg facebook profila. Moje pitanje je da li ste rijesili copy rightove? Ako ces imati posjecenu stranicu, moj savjet je da to mora biti rijeseno. Prosjecna cijena je 10$ po slici na shutterstocku, ako imas pretplatu I manja (ja je nemam). Ja sam trenutno ugradio u site besplatne verzije shutterstock slika sa vodenim zigovima. Za gotovu verziju sita trebaju prave placene slike. Moja procjena je da ce trebati 5 slika za 50$, dakle to ce biti dodatni trosak. Predlazem ti da pristanes, site ce mnogo ljepse izgledati.</p>
      <p className="p-el1">5.) Javi mi ako zelis neku dodatnu karticu na otvaranje sa glavne stranice, ili neke druge informacije</p>
      <p className="p-el1">6.) Predlazem ti da napravimo pokretni testimonial. Dakle da se u donjem dijelu stranice izmjenjuju svjedocenja radnika koja prikazuju firmu u dobrom svjetlu. Moj prijedlog je 6 radnika - 2 taksista, 3 nasa dostavljaca I jednog stranog dostavljaca. Neka nesto lijepo kazu ili cemo mi za njih to reci, zatim njihova imena I prezimena (bez prezimena nije uvjerljivo, svi znaju da su testimoniali lazni) plus fotografija lica, I tada ce se sve to izmjenjivati. Ja cu biti jedan od taksista, uzmi npr. Ivana da glumi dostavljaca, a za ove ostale pitaj ljude sa kojima si dobar kada ti dodu na obracun, da li bi posudili fotografiju I ime + prezime.</p>
      <p className="p-el1">7.) Bilo bi dobro da dobijem fotografije nekih vozila iz voznog parka, zatim jednu dobru elektricnog bicikla (nekog novijeg), takoder I fotografiju ureda (sa ulaza). Idealno bi bilo sa nasmjesenim zaposlenicima. OK, ovo zadnje ako vam se ne da, ne morate, samo kazem sto bi bilo idealno. Za fotografije koje napravite  ne brinite, ja ih mogu editirati, uklanjati rubne djelove I slicno.</p>
      <p className="p-el1">8.) OK, neke sitnice sam primjetio da ne valjaju. Npr. prvi put kada se ucitava site na kompjuteru, treba vremena da se ucita gornja fotografija I onda tih 1 sekundu se vidi ruzna linija. To cu sve doraditi, tako da se site odjednom prikaze sa svim ucitanim fotkama. Takoder sutra cu popraviti č, ć,  I ostale hrvatske znakove. Takoder cu uvesti I dvojezicnost – bit ce mali gumb na navbaru koji ce saltati izmedu engleskog I hrvatskog.</p>
      <p className="p-el1">9.) javi mi koje gradove zelis u rotacijskom elementu na glavnoj stranici</p>
      <p className="p-el1">10.) Javi mi I neke druge ideje, sve sto ti padne na pamet, sa cime bi mogli napuniti stranicu da ljepse izgleda.</p>
      <p className="p-el1">Pronasao sam I tri konkurentska sita. Check them out I ako nesto zanimljivo vidis, javi mi da implementiram.</p>
      <a className="link" href="https://cor-fortium.hr/" target="_blank">cor fortium</a><br/>
      <a className="link" href="https://metamatemm.com/" target="_blank">meta mate</a><br/>
      <a className="link" href="https://nnkd.hr/posao-dostavljaca/" target="_blank">N & N Karlic</a>
      <div className="buffer"></div>
      <h2>Novi server i registracija vase stare domene www.lipa-vita.hr</h2>
      <p className="p-el1">Bok Vedran.</p>
      <p className="p-el1">Za ovu drugu fazu razvoja baze podataka potreban ce mi biti server. Pronasao sam najjeftiniju varijantu, A2 hosting, najjeftiniji VPS (virtual private server), za godinu dana kosta 42eu (sa PDV-om). Taj nam najvise odgovara, Postoji shared hosting opcija, ali ona je dobra jedino za staticni site, ne I za baze podataka I back-end aplikacije. Ovog od 42eu I ja imam, taj je najjeftiniji na trzistu, I mislim da ce biti za vas adekvatan – moguce ga je kasnije I prosiriti sa skupljim I jacim, ali to sumnjam da ce biti potrebno. </p>
      <p className="e-el1">Pogledao sam na carnetu kakvo je stanje sa vasom domenom, www.lipa-vita.hr. Cini se da je jos registrirana na vasu firmu. Za pravne osobe je prva domena besplatna (zato je jos uvijek online, nije ju trebalo placati I zato je nitko nije iskljucio). Pokrenuo sam proceduru na Carnetu registracije te domene na novi email, lipa.vita@proton.de, a taj email sam jucer otvorio. Plan je da jednom kada je registriramo, imat cu potpunu kontrolu nad njom (preko emaila), I onda sam mislio je usmjeriti na nasu novu internet stranicu / web aplikaciju. Jednom kada zavrsim sa poslom, predat cu email tebi, I ti ces biti u posjedu njegove sifre (I sifre novog servera).</p>
      <p className="e-el1">OK, da bismo domenu registrirali na novi e-mail, trebate isprintati sljedeci obrazac I lupiti zig firme I potpis ovlastene osobe. </p>
      <a href={ADRESA+"/slike/Obrazac.pdf"}>obrazac</a>
      <p className="e-el1">Zatim ponovo dokument treba skenirati I meni poslati na mail  lipa-vita@proton.de, te cu ja poslati taj obrazac u carnet e-mailom. Ako se razumijes u digitalno potpisivanje, I to se moze, pise na obrascu. Takoder postoji opcija da slikate dokument umjesto skeniranja, I posaljite mi whatsupom (sto bolja fotografija).</p>
      <p className="e-el1">Ah da, jucer sam dodao I testimonial na glavnu stranicu. Imate na njemu dvije izmisljene recenzije I moju sa slikom. Recenzije se trivijalno mogu dodavati I oduzimati. Takoder bi pozeljne bile slike recezenata, ali nisu nuzne.</p>
      <p className="e-el1">E da, I mogli bi mi platiti za ovu fazu posla – ukupno 189.4eu + 50eu (slike copyright) + 42eu server = 281.4eu (mozete I na bankovni racun, kao placu ili tjednu isplatu uber/bolt).</p>
      <p className="e-el1">OK onda, posaljite mi obrazac.<br/>Pozdrav</p>
      <div className="buffer"></div>
    </div>
  )
}