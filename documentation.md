# Dokumentaatio - eKuittilompakko frontend
## Projektin struktuuri
Osa-alueet:
  - Komponentit
  - Helper-funktiot ja muut ei-komponentti-skriptit
  - Tyypitys
  - Sivut

### Komponentit
#### Yleistä
Yleisellä tasolla kaikki projektin komponentit on sijoitettu keskitetysti **components/** kansioon. Käytännössä siis esimerkiksi sivuilla ei saa olla määriteltynä omia komponentteja. Toisaalta taas komponenttikansiossa saa olla sivukohtaisia alakansioita **components/page/** .

Jokainen komponentti sijaitsee omassa alakansiossaan **components/component/** sijaitsevassa **index.tsx** tiedostossa. Komponentin tyypitykset sijaitsevat samassa kansiossa erillisessä **types.ts** tiedostossa. **Komponenttien nimeämisessä tulee noudattaa camel casingiä.** Poikeuksena on varsinainen React-komponentin nimi joka tulee olla Pascal casingillä (tämä vaatimus tosin tulee jo Reactista itsestään).
> Lisää tyypityksistä tyypitys-osiossa

Lähtökohtaisesti kannattaa pyrkiä siihen, että jokaisessa komponenttitiedostossa (index.tsx) on vain se yksi vietävä komponentti. Usein komponentti kuitenkin koostuu alemman tason komponenteista. Mikäli tällaista alikomponenttia ei ole olemassa, eikä sitä mikään muu ylemmän tason komponentti tarvitse, sen voi määritellä omaksi **component.tsx** tiedostoksi ko. komponentin kansioon.

```
Esimerkki yksittäisen komponentin tiedostorakenteesta

components/
├─ exampleComponent/
│  ├─ index.tsx
│  ├─ types.ts
│  ├─ exampleSubComponent.tsx
```
Katso myös [esimerkkikomponentti](components/exampleComponent).

#### Komponenttien rakenne
```tsx
import { Props } from "@typings/exampleComponent"

const ExampleComponent: React.FC<Props> = ({ example, children }) => {
    return (
        <div id={example}>
            {children}
        </div>
    )
}

export default ExampleComponent
```
Varsinaisten komponenttien rakenteessa on huomioitava muutama asia. Suositaan komponenteissa itsessään nuolisyntaksia. Aina kun mahdollista, käytetään varsinaisena komponentin tyypityksenä Reactin omaa FC (functional component) tyypitystä (React.FC<T>) jolle annetaan varsinaisen komponentin muutujien tyypitykset. Komponentin muuttujat kannattaa aina destrukturoida jottei jokaisen eteen tarvita props.-etuliitettä. 

Huom! Children-muuttuja on määritelty jo React.FC tyypityksessä itsessään eikä sitä tarvitse tällöin itse eksplisiittisesti määrittää. 
Huom2! React.FC tyypityksen käyttö ei vaadi Reactin tuomista komponenttiin.

#### Komponenttien tuominen
```tsx
import exampleComponent from "@components/exampleComponent"
```
Komponenttikansion relatiivinen polku on kaikkialla projektissa saatavilla **@components/**-määreellä eikä siitä tarvitse murehtia sen enempää.
  
### Helper-funktiot ja muut ei-komponentti-skriptit
#### Yleistä
```
utils/
├─ example/
│  ├─ index.ts
│  ├─ types.ts
```
Yleisellä tasolla kaikki apufunktiot tms. skriptit sijoitetaan **utils/** kansioon omiin alakansioihinsa. Alakansioiden nimeämisellä ei ole niin merkitystä, mutta sen kannattaa kuvata ko. kokonaisuuden käyttötarkoitusta. Samoin kuin komponenttien kanssa, alakansiossa on yksi päätiedosto **utils/example/index.ts** josta tarvittavia kokonaisuuksia viedään. Toisin kuin komponenteissa päätiedostoon on sopivaa sijoittaa useita funktioita tms. kokonaisuuksia.
  
##### Tuominen
```tsx
import { exampleHelperFunction, anotherExampleFunction } from "@utils/example"
```
Huom! Toisin kuin komponenteilla, utils kansion tyypityksille ei ole omaa relatiivisia polkuja hoitavaa lyhennettä ainakaan toistaiseksi.
  
### Tyypitys
  
#### Yleistä
Kun komponentit, utilityt ja muut osat on jaoteltu ohjeen mukaisesti, tulisi jokaista osaa tai palasta koskevat tyypitykset löytää ko. kansion sisältä **types.ts** tiedostosta. Tähän tiedostoon on sopivaa kaikki kansion tiedostojen vaatimat tyypitykset, eikä niitä siis tarvitse jakaa sen kummemmin.

##### Tuominen
```tsx
import type { exampleType, anotherType } from "@typings/exampleComponent"
// or
import type { exampleType, anotherType } from "./types"
```
Huom! @typings-oikopolku koskee vain komponentteja!
  
### Sivut
#### Yleistä
Kuten muissakin kategorioissa, sivut jaetaan sivun nimiseen kansioon **pages/page** jossa sijaitsee päätiedosto **pages/page/index.tsx**. Varsinaisia muita kokonaisuuksia ei tänne kuuluu sijoittaa, sillä jokainen tsx-tiedosto muuttuu automaattisesti alasivuksi **page/subpage**.
```
pages/
├─ page/
│  ├─ index.tsx
│  ├─ subpage.tsx
```
