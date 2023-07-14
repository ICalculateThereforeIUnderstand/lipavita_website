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
              ["2.7.","11:14","12:55","krenuo sam sa testimonialom"],["","13:17","14:19","dovrsio testimonial"],["","0:41","1:40","stavljam poruke i slike u testimonial, stavljam novu verziju na internet, pisem Vedranu plan oko domene lipa-vita.hr"],
              ["3.7.","9:11","10:23","istrazivao cijene servera, trenutno je favorit hostinger za 75eu godisnje"],["","9:30","10:50",""],
              ["","10:56","11:25","rijeseni bugovi"],["","17:54","18:43","KRENUO SA PROJEKTOM WEB APLIKACIJE. Instalirao pocetnu stranicu, uveo typescript"],
              ["","18:59","20:04","preveo sam pomocne elemente u typescript iz dosadasnjeg projekta. Krenuo sam sa postavljanjem backend ruby on rails servera."],["","23:40","0:51",""],
              ["5.7.","22:51","0:33",""],["","0:51","2:01","ugradio sam signin stranicu zajedno sa flashom"],["7.7.","14:53","15:45","sredio sam flash, uveo sam loading i signin stranicu"],
              ["","15:54","17:06",""],["","17:15","17:58",""],["","18:06","18:43","zavrsio sam sa signout procedurom"],
              ["8.7.","17:54","19:14","sada krecem sa implementacijom signup forme"],["","19:28","20:33",""],["","21:59","0:04",""],
              ["","0:14","0:35","zavrsio sam sa verifikacijom mobitela. Sve je u najboljem redu"],
              ["9.7.","10:17","11:04","krenuo sam sa radom na administratovoj stranici, glavnoj. Na njoj ce biti pretrazivac za vozace i lista vozaca"],["","11:30","12:11",""],["","12:26","13:10",""],
              ["","18:46","20:36","refaktorirao sam bazu podataka, uveo sam mehanizme koji upravljaju phone verifikacijom, active status. Sada cijeli mehanizam radi za vozaca"],
              ["10.7.","10:45","11:55","sredio sam login i logout za admina. Sada aplikacija pravi razliku izmedu admina i vozaca na vozackim i admin stranicama."],["","12:19","13:16","odlucio u sign-up proceduri uzeti i dodatnu informaciju o imenu i prezimenu, ne samo o usernameu"],
              ["","13:27","13:58",""],["","17:06","17:51","ugradujem novi popup prozor sa brisanje i aktivaciju vozaca."],["","18:05","19:20","ugradio sam mehanizam za brisanje i aktivaciju vozaca"],
              ["","19:44","21:07","dovrsio sam filtriranje vozaca, uceo sam checkbox selekciju"],["","23:43","0:16","ispitujem hostinger, moram im napisati mail o https certifikatima. Pokusat cu i logo ikonu pretvoriti u png grafiku sa prozirnom podlogom"],
              ["","0:25","1:24","istjerao napokon kak spada bugove iz ucitavanja slika. "],
              ["11.7.","9:42","10:33","ispunjavam obracunsku tablicu za zadnjih tjedan dana"],
              ["","12:15","13:37","OK, u ovom sessinu krecemo sa pisanjem input interaktivne tablice. Ideja je imati na jednom mjestu sve podatke o vozacu, i onda klikovima po pojedinim retcima je moguce mjenjati podatke u tablici."],
              ["","13:48","14:43","sada sredujem mehanizme za klikanje po tablici i onmouse enter i leave "],
              ["12.7.","18:23","18:50",""],["","18:53","19:15",""],["","19:28","20:00",""],
              ["","20:06","20:55",""],["","23:47","0:35","dovrsavam interaktivnu tablicu"],
              ["13.7.","4:16","6:03","proucavao problem crtice u domeni u vezi google search optimizacije proucio sam problem ssl certifikacije na hostingeru. Skenirao i poslao zahtjev za promjenu emaila na domeni lipa-vita.hr"],
              ["","6:52","7:48","u ovom sessinu cu adresirati primjedbe sa naseg sastanka u uredu.Rijesio sam logo.Krenuo sam sa izradom stranice onama"],
              ["","8:12","9:03",""],["","11:52","13:04",""],["","13:20","14:11",""],["","18:04","18:33",""],
              ["","18:38","19:05",""],["","19:26","19:41","dovrsavam onama stranicu. Skinuo sam free slike sa wikimedije. Odlucio sam jos napraviti modal sa vozilima, znaci kada korisnik klikne na sliku auta, otvorit ce se modal preko cijelog ekrana sa slikom auta."],
              ["","22:21","23:03","u ovom sessinu se odmaram od samog programiranja. Odlucio sam krenuti sa kupovinom servera i njegovom instalacijom."],
              ["","23:09","0:19","jeee, instalirao sam server, radi"],
              ["14.7.","7:56","8:53","ok u ovom sessinu sam odlucio zavrsiti onama stranicu. Moram implementirati modal za vozila"],
              ["","9:33","10:51","potpuno sam dovrsio onama stranicu. Sve je tip-top, jedino zelim onemoguciti scroll kada se otvori modal."],
              ["","11:18","12:12","onemogucio scroll na otvoreni modal, padajuci naslov u kontakt stranici, sve je tip-top"]]

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

      <p className="p-el">Ukupno vrijeme za izradu web stranice je stalo na 31:34, za cijenu 189.4eu. Ovaj sljedeci obracun je za cijeli rad do sada, znaci plus web aplikacija. Ukupna velicina tekstualnih fileova je 92.8kB</p>

      <p className="p-el">Ukupno vrijeme je {Math.floor(vrijeme)}:{Math.round((vrijeme-Math.floor(vrijeme))*60)}</p>
      <p className="p-el">Dosadasnja cijena projekta {vrijeme*6} eu</p>
      <p className="p-el">Velicina tekstualnih fileova za web aplikaciju je trenutno 82.7kb za front-end i 15.2kB</p>

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
      <h2>Izvjestaj o obavljenim radovima na stranici poslje naseg sastanka 11.7.</h2>
      <p className="p-el1">Bok Vedran.</p>
      <p className="p-el1">Evo vrijeme je za izvjestaj sta sam radio zadnja tri dana. Uglavnom mjesao sam poslove, dovrsio sam 'o Nama' stranicu, uklonio sam sve zamjerke sa zadnjeg sastanka, paralelno sam radio i na web aplikaciji i jos sam instalirao novi server. Volim multitaskati zato sto na taj nacin se borim protiv zamora i dosade i moguce je povecati osobnu produktivnost u vidu veceg broja radnih sati odradenih (kombiniras lakse i teze zadace, i na taj nacin vise napravis u jednom danu). Dakle htio bih da obratis pozornost da novu stranicu i na sve tocke koje smo dotakli na sastanku. one su redom sljedece:</p>
      <p className="p-el1">1.) Pogledaj novi logo na navbaru i reci mi da li si zadovoljan. Ja sam ga sam napravio, da je to radio graficki editor, sigurno bi bilo bolje (ali onda ga moramo platiti). Uklonio sam iz sredista kruga auto (iako se meni vise svidao autic unutra da budem iskren). Reci mi da li je dovoljno dobar.</p>
      <p className="p-el1">2.) Problem crtice u lipa-vita.hr apsolutno nema veze sa googleom - za to se ne trebas uopce brinuti. Svi strucnjaci kazu da crtica u domeni nema apsolutno nikakvog utjecaja, jedino je kod nje problem za pamcenje ljudima, ili ako se reklamiras na radiju, teze je reci 'lipa crtica vita tocka hr' nego 'lipa vita tocka hr'. U prvom slucaju slusatelj moze biti zbunjen o kojoj se crtici radi (ima minus ali ima i underscore). To je jedini problem, sve drugo je super, imas kratku domenu sto je izvrsno za pamcenje (samo 8 slova). by the way, mozes imati i dvije domene koje usmjeravaju na isti server (znaci i lipavita.hr i lipa-vita.hr). Samo stvar je u tome da pravna osoba ima jednu domenu besplatnu, a druga se placa.</p>
      <p className="p-el1">3.) Uveo sam novu stranicu 'O nama'. Pogledaj je i javi mi sto mislis o njoj. Uveo sam sve elemente spomenute na prethodnom sastanku. Imas kratki sazetak, brojke o firmi, dolje se nalazi galerija vozila. Uveo sam modal koji se otvara sa vecom slikom vozila kada kliknes na manju pocetnu sliku. Sto se tice slika vozila, sve su besplatne, pronasao sam ih sve sa licencama Creative Commons (uglavno na wikimediji). Jedino nisam pronasao sliku za MS Energy e-bike (nisam mogao naci ni uz placanje na shutterstocku) te za bicikl Spring bike. Ako se zelis pohvaliti sa ovim elektricnim biciklom, najbolje bi bilo da ga slikate i posaljete mi fotku, i onda je to rijeseno.</p>
      <p className="p-el1">4.) Ukupno sam potrosio nekih 8:10 sati na radu na web-stranici, ostalo je na web aplikaciji. Na dan 14.7. trenutno ulozeno vrijeme je 39:44</p>
      <div className="buffer"></div>
    </div>
  )
}