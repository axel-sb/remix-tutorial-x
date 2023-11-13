////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from 'match-sorter'
// @ts-ignore - no types, but it's a tiny function
import sortBy from 'sort-by'
import invariant from 'tiny-invariant'

type ArticleMutation = {
  id?: string
  index?: string
  edition?: string
  page?: string
  author?: string
  authorInfo?: string
  title?: string
  articleImage?: string
  articleContent?: string
  notes?: string
  favorite?: boolean
}

export type ArticleRecord = ArticleMutation & {
  id: string
  createdAt: string
}

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table. In a real app you'd be talking to a real db or
// fetching from an existing API.
const fakeArticles = {
  records: {} as Record<string, ArticleRecord>,

  async getAll(): Promise<ArticleRecord[]> {
    return Object.keys(fakeArticles.records)
      .map((key) => fakeArticles.records[key])
      .sort(sortBy('page'))
  },

  async get(id: string): Promise<ArticleRecord | null> {
    return fakeArticles.records[id] || null
  },

  async create(values: ArticleMutation): Promise<ArticleRecord> {
    const id = values.id || Math.random().toString(36).substring(2, 9)
    const createdAt = new Date().toISOString()
    const newArticle = { id, createdAt, ...values } 
    fakeArticles.records[id] = newArticle
    return newArticle
  },

  async set(id: string, values: ArticleMutation): Promise<ArticleRecord> {
    const article = await fakeArticles.get(id)
    invariant(article, `No article found for ${id}`)
    const updatedArticle = { ...article, ...values }
    fakeArticles.records[id] = updatedArticle
    return updatedArticle
  },

  destroy(id: string): null {
    delete fakeArticles.records[id]
    return null
  },
}

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getArticles(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  let articles = await fakeArticles.getAll()
  if (query) {
    articles = matchSorter(articles, query, {
      keys: ['page'],
    })
  }
  return articles.sort(sortBy('page'))
}

export async function createEmptyArticle() {
  const article = await fakeArticles.create({})
  return article
}

export async function getArticle(id: string) {
  return fakeArticles.get(id)
}

export async function updateArticle(id: string, updates: ArticleMutation) {
  const article = await fakeArticles.get(id)
  if (!article) {
    throw new Error(`No article found for ${id}`)
  }
  await fakeArticles.set(id, { ...article, ...updates })
  return article
}

export async function deleteArticle(id: string) {
  fakeArticles.destroy(id)
}

export async function getImages() {
  aricleArray.map((element) => element.articleImage)
}
// #region data for articles
const aricleArray = [
  {
    edition: '202306',
    page: '202306page01',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/01.webp',
    author: 'Juni 2023',
    title: 'queer und obdachlos',
    articleContent: '',
  },
  {
    edition: '202306',
    page: '202306page02',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/02.webp',
    author: 'Von Patrick Weiß',
    title: 'Liebe Leserinnen und Leser,',
    articleContent: `es ist über zwei Jahre her, dass einige Privatleute, darunter ich, drei private Wohnungen für drei zuvor obdachlose Menschen zur Verfügung gestellt haben. Dauerhaft und an keine Bedingungen geknüpft. Es fühlte sich damals richtig an und heute immer noch. Wir konnten helfen: in Düsseldorf, in unserer Heimat, Menschen aus unserer Heimat. Mit Übergabe der drei Wohnungen begann eine neue Erfahrung - für die drei Menschen und für uns.
Dankbarkeit ist in diesem Zusammenhang der zentrale Begriff. Dankbarkeit dafür, ein Zuhause zu haben und endlich im Leben wieder Fuß zu fassen. Einen Ansprechpartner zu haben: an guten und an weniger guten Tagen. Unterstützung zu erhalten, wenn man sie braucht. Eine solide Basis zu haben. Das eigene Leben aktiv in die Hand zu nehmen und etwas aus sich selbst zu machen. Wir lernten erst über den Selbstversuch das Konzept „Housing First“ richtig kennen. „Housing First Düsseldorf e.V“ heißt der anschließend von fiftyfiftyund anderen aus Überzeugung gegründete Verein.
Dieser Verein kämpft in Düsseldorf dafür, dass unsere Stadt die erste in Deutschland wird, in der keine Menschen mehr auf der Straße leben müssen. Dafür benötigt es zwingend die Unterstützung von Privatpersonen, da sich der Großteil der Wohnungen in Düsseldorf und anderswo in Privatbesitz bendet. Der Anreiz für eine Vermietung an obdachlose Menschen besteht zum einen in der Sicherheit der Mietzahlung durch das zuständige Jobcenter, in der engmaschigen Betreuung der Mieter*innen durch unseren Verein und vor allem in dem Bewusstsein, einen Menschen gerettet zu haben. Die optimale Wohnung ist dabei zwischen 25 und 30 Quadratmeter groß, also für Einzelpersonen geeignet - die meisten Obdachlosen sind ja allein.
Wir, die wir private Wohnungen für Obdachlose zur Verfügung stellen, sind Botschafter für Housing First und wollen so mit Hilfe anderer Investoren und Wohnungsbaugesellschaften laufend neuen Wohnraum akquirieren und eine Art Schneeballeffekt auslösen. Ich kann mir gut vorstellen, dass wir in unserer Stadt Düsseldorf noch weitere Verbündete für unser Unterfangen finden. Denn der gesellschaftliche Zusammenhalt lebt vom Geben und Nehmen, von Solidarität; das gilt auch und insbesondere für eine Stadt wie Düsseldorf. Wir sind daher sehr stolz, unseren Oberbürgermeister, Dr. Stephan Keller, als Schirmherrn für Housing First an unserer Seite zu wissen.
Es lohnt sich für die Überwindung der Obdachlosigkeit zu kämpfen - mit vereinten Kräften. Jeden Tag!`,
  },
  {
    edition: '202306',
    page: '202306page03',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/03.webp',
    author: 'Christian Ehring',
    title: 'Onkel Willi sitzt bei Markus Lanz',
    articleContent: `Sie lesen diesen Text. Das ist erfreulich. Womöglich hören Sie sogar zu, wenn andere etwas sagen? Dann sind Sie in der Minderheit. Die meisten Menschen teilen sich lieber mit, reden, schreiben, podcasten, kuratieren ihr großartiges Leben auf Instagram. Und sie geben ungefragt Tipps. Man erhält immerzu Tipps. Ohne darum gebeten zu haben. Ich meine mich zu erinnern, dass man früher bespielsweise krank sein konnte, ohne dass augenblicklich jemand Tipps gegeben hat. Früher bekam man zu hören: „Gute Besserung!“ Oder auch: „Wie geht es Dir?“. Heute: „Also, was mir ja sehr geholfen hat … Salbei! Empfehle ich Dir auch!“ - „Bei Bandscheibenvorfall?“ - „Unbedingt!“ „Ich kann Dir einen sehr guten Osteopathen empfehlen!“ - „Nein danke, kein Interesse.“ - „Ich empfehle ihn Dir trotzdem.“ Früher musste man sich auch noch jahrelang in ein Fachgebiet vertiefen, um als Experte oder Expertin zu gelten. Heute wissen alle alles und fachsimpeln beissen über Pandemien, Militärstrategien und globale Zusammenhänge. Mich erinnert das an Onkel Willi. Mein Onkel Willi hat früher bei Familienfeiern immer bei den Mahlzeiten ungefragt die Weltpolitik analysiert. Und ich dachte schon als kleiner Junge: „Hm, so richtig Ahnung hat er glaube ich nicht, der Onkel Willi.“ Heute habe ich ganz oft das Gefühl, Onkel Willi sitzt bei Markus Lanz.Für Partygespräche reichen tatsächlich einzelne Sätze, um als Fachmann oder Fachfrau zu gelten. Beispiel gefällig? Kein Problem. Wenn Sie als Amerikaexperte gelten wollen, reicht der Satz: „New York ist nicht die USA, und die USA sind nicht New York.“ Testen Sie das ruhig mal. Wenn Sie den Wein am Tisch probieren müssen und haben keine Ahnung von Wein, sagen Sie einfach: „Das Terroir wurde hier sehr differenziert herausgearbeitet.“ Wichtig: Den Satz nur bei Wein sagen. Niemals bei Bier. Auch beim Sport gibt es ExpertenSätze. Was mir bei der letzten FußballWM aufgefallen ist, ist der Satz: „Mir gefällt, wie die Mannschaft gegen den Ball spielt.“ Fußballmannschaften spielten früher gegen Bremen oder gegen Schalke. Heute spielen alle gegen den Ball. Das heißt, der Ball ist der Gegner. Und ich nde, bei der deutschen Nationalmannschaft hat man das auch gemerkt. Auch gut: „Es gibt Probleme ein effizientes Pressing aufzuziehen.“ Dieser Satz macht sie automatisch zum Experten beim Thema Fußball. Oder auch bei Darmproblemen. Sie wollen lieber RusslandExperte sein? Nichts leichter als das. Um Russland-Experte zu sein, muss man rein gar nichts wissen. Da reicht es, wenn man einmal im Leben einen Wodka Lemon getrunken hat.

CHRISTIAN EHRING ist Kabarettist, Moderator, Autor und Musiker. Er stammt aus Duisburg, wuchs in Krefeld auf und lebt in Düsseldorf. Langjährige Tätigkeit beim Kom(m)ödchen, seit 2009 gehört er zum Team der ZDF-heute-show, seit 2011 moderiert er mit großem Erfolg die Sendung extra3. Sein neuestes Programm Stand jetzt ist hochaktuelle Satire nach der Zeitenwende. Ehring analysiert in gewohnt bissiger Weise die aktuelle Großwetterlage. Stand jetzt wird’s lustig.`,
  },
  {
    edition: '202306',
    page: '202306page04',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/04.webp',
    author: 'Oliver Ongaro',
    title: 'Friede den Hütten 1',
    articleContent: `Zorro steht vor mir und er ist mindestens so zornig wie die gleichnamige Figur, die wir aus Büchern und Filmen kennen. Sein Infinitivdeutsch ist schwer zu verstehen, allemal jetzt, da er so wütend ist - fast unverständlich. Ich höre immer wieder „Ordnungsamt“ raus und „Zelt ist weg“. Mit Zorro sind sechs weitere Menschen in die Beratungsstelle von gekommen, vier Männer und zwei Frauen. Es ist immer noch kalt draußen, der Frühling in diesem Jahr ließ ja lange auf sich warten. Da stehen sie nun mit mehreren blauen Müllsäcken und einigen abgeranzten Reisetaschen, ihr ganzes Hab und Gut. In ihren Gesichter spiegelt sich viel Hoffnungslosigkeit, Angst und Unverständnis. Als wäre das Leben auf der Straße nicht schon schwer genug. Zorro und die anderen sind Armutsmigrant*innen aus Rumänien und gehören der Minderheit der Roma an. Erst mit Übersetzung durch andere rumänische Obdachlose bekommen wir schließlich ein Bild von dem zustande, was sich am Morgen abgespielt hat. Zorro und seine Familienangehörigen, in diesem Falle auch Onkel und Cousinen, ein junger Mann ist erst 17 Jahre alt, haben in einem Zelt im Nordpark geschlafen, viele Woche schon. Dann ist am Morgen das Ordnungsamt gekommen und hat das Zelt abgerissen, die Müllabfuhr hat es dann kaltherzig entsorgt - Zelt und Schlafsäcke, von fiftyfifty-Spendengeldern finanziert. Vorher konnten Zorro und seine Leute noch schnell ihre Sachen rausholen. Jetzt weiß die Gruppe nicht wohin. Sie wollen gerne zusammen bleiben, weil sie kaum Deutsch können und sich ohne Zorro noch schwerer zurecht fnden als ohnehin schon. Da stehen sie also nun bei uns mitten im Raum. In solchen Momenten packt mich immer richtiger Zorn. Ich empfinde es als eine willkürliche behördliche Maßnahme gegenüber armen Menschen. Fragen drängen sich auf. War ein Dolmetscher bei der Räumung vor Ort? Gab es ein Auto, das die Sachen und Menschen zur Notschlafstelle gefahren hätte? Sicherlich, der Park ist zur Erholung der Stadtbevölkerung gedacht und nicht zum Campen. Die Stadtverwaltung handelt nur im Ausgleich der Interessen, spazieren gehen zu können, ohne den Anblick von Obdachlosen „ertragen“ zu müssen gegenüber der Notwendigkeit, einen Schutzraum für die Nacht zu beanspruchen. Die können doch in eine Notschlafstelle gehen, heißt es dann. Aber, darf man das in einem demokratischen Land, Menschen das Dach über dem Kopf einfach wegnehmen? Ist es nicht streng genommen Diebstahl, Zelt und Schlafsäcke von Obdachlosen einfach zu „entsorgen“? Hätten die Stadtbediensteten nicht alles daran setzen müssen, eine Lösung für diese obdachlosen Menschen zu fnden - etwa eine Wohnung in einer städtischen Unterkunft? Und: Was bringt es, Menschen zu vertreiben, ihnen das Zelt wegzunehmen, wenn sie anschließend zu uns kommen und wir quasi gezwungen sind, ihnen ein neues Zelt zu geben, mit dem sie dann an einer anderen Stelle draußen kampieren? Begegnungen auf der Straße, der Ort scheint mittlerweile verlassen zu sein. Nur ein Müllhaufen. Trotzdem haben hier Menschen ein Zuhause gehabt - in einer selbst gebauten „Unterkunft“ in Düsseldorf.`,
  },
  {
    edition: '202306',
    page: '202306page05',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/05.webp',
    author: 'Oliver Ongaro',
    title: 'Friede den Hütten 2',
    articleContent: `Darf man das, Menschen das Dach über dem Kopf einfach wegnehmen? Ist es nicht streng genommen Diebstahl, Zelt und Schlafsäcke von Obdachlosen einfach zu „entsorgen“?
Weltweit, in den Favelas von Brasilien bis zu den Slums von Indien, sind es immer die besitzlosen Armen, deren Hütten weggebaggert und zerstört werden. Jetzt auch hier in Düsseldorf, nicht zum ersten Mal. Darf man das vergleichen? Nach mehreren Telefonaten mit der Stadtverwaltung ergibt sich spontan leider keine Unterbringungsmöglichkeit für Zorro und seine Gruppe, einzeln oder zu zweit könnten sie in einer Notunterkunft schlafen. Sie wollen aber zusammen bleiben und dann packen sie ihre wenigen Sachen auf der Suche nach einem neuen Ort für die Nacht. Zwei Tage später entschuldigt sich die Stadtverwaltung bei den Trägern der Wohnungslosenhilfe, die Räumung wäre unzureichend abgestimmt worden. Immerhin. Schließlich gibt es zwischen fiftyfifty und der Stadt eine Absprache, dass die Räumung von „Platten“, wie es im Obdachlosen-jargon heißt, also von Schlafstellen der Obdachlosen, vorher angekündigt wird, damit wir als Streetworkerinnen und Streetworker eine andere Übernachtungsmöglichkeit fnden oder zumindest die Menschen darauf vorbereiten können. Ortswechsel. Es ist morgens kurz nach acht Uhr. Ich stehe vor einem imposanten Büroneubau im Stadtteil Flingern. Ein Mitarbeiter der Deutschen Bahn hat uns angeschrieben. Es gäbe Beschwerden über ein Zelt von Obdachlosen, das sich in der Nähe der Gleise befindet. Ob wir von fiftyfifty einmal nachschauen könnten? Fotos des Zeltes sind der Mail angehängt. Die Fotos sind von oben gemacht worden, in dem Gebäude ist eine staatliche Behörde untergebracht. Mich schockiert der Anblick von Armut. Ich fnde sie sogar unerträglich. Ich glaube aber nicht, dass es den Beschwerdeführern darum ging, sich Sorgen um verelendete Menschen zu machen. Ob sie sich die Mühe gemacht haben, einmal aus der Komfortzone des Büros runter zu gehen und nachzuschauen, wer ihre Nachbarn sind? Ich glaube nicht. Das Zelt ist vollgestopft mit Kleidung, überall liegen Beutel mit - wahrscheinlich vom Sperrmüll - gesammelten Dingen herum. Kuscheltiere neben alten Töpfen, dazwischen immer wieder nasse Kleidung. Eine alte Decke liegt über dem Zelt. Der Ort scheint mittlerweile verlassen zu sein. Nur ein Müllhaufen - könnte man sagen. Trotzdem hat hier ein Mensch sein Zuhause gehabt. Ich schaue an der Fassade des neuen Bürogebäude gegenüber hinauf und wieder runter auf das Zelt neben mir. Mir kommt der Schriftsteller Georg Büchner in den Sinn, sein Zitat im Hessischen Landboten. Eine drastische Äußerung, getroffen vor knapp 200 Jahren angesichts der ungerechten gesellschaftlichen Verhältnisse. „Friede den Hütten, Krieg den Palästen.“ Damals wie heute. Nachtrag: Mit Hilfe von fiftyfifty haben Zorro und seine Leute mittlerweile doch noch gemeinsam einen Platz in einer städtischen Notwohnung bekommen. Geht doch. Oliver Ongaro, fiftyfifty-Streetworker`,
  },
  {
    edition: '202306',
    page: '202306page06',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/06.webp',
    author: ' ',
    title: '',
    articleContent: '',
  },
  {
    edition: '202306',
    page: '202306page07',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/07.webp',
    author: 'Daniel Bache',
    title: 'Queer und obdachlos',
    articleContent: `Queere Menschen sind besonders von Obdachlosigkeit betroffen. Die Einrichtungen der Wohnungslosenhilfe sind darauf aber kaum oder gar nicht eingestellt. Und die Bundesregierung verliert sich in Symbol-Politik, obwohl sie bei Amtsantritt einen „queerpolitischen Aufbruch“ versprochen hat.
Im Juni finden in vielen Städten Deutschlands und der Welt wieder die Paraden zum Christo-pher Street Day (CSD) statt. Und damit kehrt auch die alljährliche Debatte über den politischen Gehalt der CSD-Events zurück. Immer wieder wird innerhalb queerer Communities über den Charakter vor allem der großen CSD-Paraden gestritten. Die einen sehen darin überkommerzialisierte Sauforgien, andere betonen, wie wichtig es ist, dass die Communities Gelegenheit bekommen, sich selbst und das Erreichte zu feiern. Der Christopher Street Day oder die Pride, wie sie international genannt wird, erinnert an die Unruhen 1969 in der New Yorker Christopher Street. Damals wehrte sich eine Gruppe von trans und homosexuellen Menschen vor der Szene-Bar Stone wall Inn gegen willkürliche Razzien durch die New Yorker Polizei. Solche staatlichen Übergriffe gegen queere Communities waren damals keine Seltenheit, nicht nur in den USA. Viele der queeren Held*innen von Stonewall kamen aus prekären Lebensverhältnissen und waren von Mehrfachdiskriminierung betroffen, etwa als People of Colour, Sexarbeitende oder Wohnungslose. Schon allein deshalb braucht queere Emanzipation den Blick für das gesamtgesellschaftliche Ganze. Wer das Erbe der Pride-Bewegung ernstnimmt, muss dort hinschauen, wo die Not am größten ist - global genauso wie zu Hause. Zu den wesentlichen Dingen im Leben eines Menschen gehört das Grundrecht auf Wohnen. Kaum jemand begreift Wohnungslosigkeit aber als besonderes Problem queerer Menschen. Dabei ist es wichtig, sich dem Thema auch aus einer queeren Perspektive zu nähern. Und es wird Zeit, dass die Auseinandersetzung`,
  },
  {
    edition: '202306',
    page: '202306page08',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/08.webp',
    author: 'Daniel Bache',
    title: 'Queer und obdachlos 2',
    articleContent: `mit prekären Lebenslagen innerhalb queerer Communities auf der Pride und darüber hinaus an Sichtbarkeit gewinnt.

Queer
… ist ein Sammelbegriff für Personen, deren geschlechtliche Identität (wer sie in Bezug auf ihr Geschlecht sind) und/oder sexuelle Orientierung (wen sie begehren oder wie sie lieben) nicht einer zweigeschlechtlichen Norm entspricht. Queer wird auch verwendet, um Bewegungen und Dinge zu bezeichnen, die mit queeren Menschen in Verbindung stehen, wie zum Beispiel die queere Szene, Queer Studies oder queere Filmfestivals. Häufig wird auch das Kürzel LSBTIQ* für lesbische, schwule, bisexuelle, trans- und intergeschlechtliche sowie queere Menschen verwendet.
Es geht um die spezifischen Ursachen für prekäre Lebenslagen bei queeren Menschen und um gruppenbezogenen Lösungsstrategien für soziale Probleme. Dabei spielen gesundheitliche Bedarfe eine Rolle, Armut, Berufliches oder aber eben auch die Miete, Wohnen und Wohnungslosigkeit. Die Auseinandersetzung mit Wohnungslosigkeit bei lesbischen, schwulen, bisexuellen, trans- und intergeschlechtlichen sowie queeren Menschen, abgekürzt LSBTIQ*, ist schon deshalb eine Herausforderung, weil wir wenig darüber wissen. Es fehlt an verlässlichen Zahlen und Betrachtungen in der Fläche. Die Organisation FEANTSA, ein europaweiter Zusammenschluss nationaler Organisationen der Wohnungslosenhilfe, hat 2021 einen Bericht veröffentlicht, nach dem 60 Prozent der Teilnehmenden einer Umfrage unter Wohnungslosen-Organisationen angaben, schon einmal mit Wohnungslosigkeit bei jungen Queers konfrontiert gewesen zu sein. Über 70 Prozent gaben gleichzeitig an, dass es keine Maßnahmen seitens ihrer jeweiligen nationalen Regierung gäbe, die das Thema direkt adressieren. In Deutschland warnt u.a. das Jugendnetzwerk Lambda e. V. seit Jahren davor, dass Wohnungslosigkeit - neben einer erhöhten Suizidrate oder einem größeren Risiko für psychische Erkrankungen - zu den größten Gefahren in der Lebenswelt queerer Jugendlicher gehört. Wohnungslosigkeit bei LSBTIQ* beschränkt sich aber keineswegs nur auf die jüngere Generation. In Berlin ist im vergangenen Jahr mit QUEERHOME* die deutschlandweit erste queere Anlaufstelle für wohnungslose queere Menschen gestartet. Kathrin* Schultz, eine der zwei Hauptamtlichen bei QUEERHOME*, arbeitet bereits seit sieben Jahren mit queeren Wohnungslosen und bestätigt, dass der Bedarf enorm ist. „Wir befinden uns gerade noch im Aufbau. Uns gibt es erst seit gut vier Monaten und uns haben schon rund 230 Anfragen erreicht“, so Schultz. Die Ursachen von Wohnungslosigkeit bei queeren Menschen sind weitläufig. So werden etwa nicht wenige nach ihrem Coming-out von der eigenen Familie vor die Tür gesetzt. Andere sind aus queerfeindlichen Staaten geflohen, darunter nicht zuletzt auch EU-Staaten wie Ungarn oder Polen. Besonders problematisch: Wer aus einem EU-Staat in Deutschland auf der Straße landet, erhält keinen Geflüchteten-Status und damit kaum Schutz oder Anspruch auf soziale Leistungen. Auch Krankheit und Schulden führen oft dazu, dass queere Menschen und andere obdachlos werden. An die Anlaufstelle QUEERHOME* wenden sich aber nicht nur Queers, die bereits auf der Straße leben, sondern auch solche, die sich in unzumutbaren Wohnverhältnissen befinden. Hier geht es etwa um häusliche Gewalt oder Wohnen ohne vertragliche Grundlage. Dabei ist eine eigene Wohnung oder ein eigenes Zimmer besonders wichtig für die Privatsphäre und als Schutzraum. Bei trans Menschen`,
  },
  {
    edition: '202306',
    page: '202306page09',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/09.webp',
    author: 'Daniel Bache',
    title: 'Queer und obdachlos 3',
    articleContent: `geht es oft zudem um den Zugang zu sanitären Anlagen oder zu einer guten gesundheitlichen Versorgung, etwa bei der Angleichung an die bereits existierende geschlechtliche Identität, der sogenannten Transition. Auch eine medizinische Versorgung bei HIV oder anderen Erkrankungen spielt eine große Rolle, psychosoziale Bedarfe, der Aufbau neuer familiärer Strukturen oder schlicht der Umstand, dass queere Menschen bei Projekten wie QUEERHOME* auf andere Queers treffen, die ein Gefühl für ihre Lebenswirklichkeit haben und vor denen sie sich nicht outen müssen. „Wir wollen die Scham abbauen, denn das Problem betrifft viele Ratsuchende“, sagt Schultz.In der Bundespolitik ist es derweil verdächtig still um dieses Thema. Der Aktionsplan „Queer leben“, den die Bundesregierung dieses Jahr an den Start gebracht hat, sieht bisher lediglich eine allgemeine Studie zur sozialen Situation von LSBTIQ* in Deutschland vor. Zu den wenigen Politiker*innen, die sich in der Vergangenheit mit dem Thema Wohnungslosigkeit bei LSBTIQ* befasst haben, gehört Kathrin Vogler, Bundestagsabgeordnete aus Nordrhein-Westfalen und queerpolitische Sprecherin der Fraktion DIE LINKE. Sie kritisiert die Bundesregierung dafür, dass sie soziale Fragen in der Queerpolitik weiträumig ausklammert. Im Gespräch mit fiftyfifty erklärte sie: „NRW ist das ärmste westdeutsche Flächenland. Gerade im Ruhrgebiet haben wir einen Armut-Hotspot. Die massiv steigenden Mieten, inzwischen nicht nur in den großen Städten, erzeugen eine Konkurrenzsituation auf dem Wohnungsmarkt, die es allen marginalisierten Gruppen schwermacht, überhaupt noch angemessenen Wohnraum zu finden. Wir brauchen auch deshalb mehr sozialen und bezahlbaren Wohnungsbestand in öffentlicher Hand, um Diskriminierungen auszuschließen.“ Derweil hat sich der Sonntagsclub e.V., Träger von QUEERHOME* und eine der ältesten Initiativen für LSBTIQ* der ehemaligen DDR mit 50-jähriger Vereinsgeschichte, für die Mitwirkung an dem Aktionsplan der Bundesregierung beworben und dafür ein Konzept mit Fokus auf Wohnungs- und Obdachlosigkeit bei Queers vorgelegt. Die Bewerbung ist mit der irrsinnigen Begründung abgelehnt worden, es seien insgesamt zu viele eingegangen. Und das, obwohl QUEERHOME* als Mitorganisation der Bundesarbeitsgemeinschaft Wohnungslosenhilfe (BAGW) auch bundesweit arbeitet und bisher das einzige queere Projekt dieser Art ist. Deshalb ist es wichtig, dass die Bundesregierung explizit diejenigen einbindet, die zu LSBTIQ* und Wohnberatung oder Wohnungslosenhilfe arbeiten. Das wäre ein Signal von enormer Tragweite! Stattdessen verfestigt sich der Eindruck, dass soziale Themen in der Queerpolitik der Ampel eine untergeordnete Rolle spielen. Dabei hat die Bundesregierung zu ihrem Amtsantritt ausdrücklich einen „queerpolitischen Aufbruch“ versprochen, verliert sich aber nun an vielen Stellen in Symbolpolitik.`,
  },
  {
    edition: '202306',
    page: '202306page10',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/10.webp',
    author: 'Daniel Bache',
    title: 'Queer und obdachlos 4',
    articleContent: `Queerpolitik soll wohl möglichst wenig Geld kosten, dafür aber möglichst viele Wahlstimmen abgreifen. Das wirft grundsätzlich die Frage auf, inwieweit es ausreicht, Aspekte queerer Emanzipation an irgendeine Regierung zu delegieren - auch wenn sie sich selbst als gesellschaftspolitisch progressiv versteht. Damit queere Infrastruktur als ein Teil öffentlicher Daseinsfürsorge anerkannt wird und die sozialen Nöte queerer Communities ernstgenommen werden, bedarf es eines deutlich kämpferischeren und gesellschaftskritischeren Auftretens in der Öffentlichkeit. Das bedeutet, dass queeres Engagement ein Gefühl für breitere gesellschaftliche Auseinandersetzungen gewinnen und stärker auf Konfrontation mit dem Staat gehen muss. Das gilt auch für Verbände, selbst wenn sie riskieren, Fördermittel staatlicherseits zu verlieren. Die ritualartige Debatte um die Re-Politisierung von CSDs darf sich also nicht in bloßer Stonewall-Nostalgie oder radikalen Posen erschöpfen. Entscheidend ist, wo die Nöte am größten sind und wie einander geholfen werden kann. Politisch, aber auch im alltäglichen Umgang. Es geht um Solidarität, um das Wesentliche. Dafür braucht es breite gesellschaftliche Bündnisse. „Zu Beginn der Homosexuellenbewegung in Westdeutschland bestand ein enger Zusammenhang zwischen sozialen und rechtlichen Gleichheitsthemen, der sich leider in der Ära des Neoliberalismus deutlich in Richtung einer eher rechtlich verstandenen Gleichstellungspolitik verschoben hat. Umgekehrt hat dies dazu geführt, dass soziale Bewegungen Emanzipationsfragen nicht mehr ganz selbstverständlich mit bearbeiten. Damit verschenken beide wichtiges Potenzial, das sie gemeinsam entfalten könnten“, so die LINKEN-Politikerin Kathrin Vogler. Kathrin Schultz äußert daher den Wunsch, dass sich bundesweit verschiedene Akteur*innen zusammenschließen, um soziale Forderungen queerer Communities als Protest auf die Straße zu tragen. Es wäre wünschenswert, dass das funktioniert - und zwar schnellstmöglich.`,
  },
  {
    edition: '202306',
    page: '202306page11',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/11.webp',
    author: 'Thomas Hirsch',
    title: 'Aufrufe gegen Gleichgültigkeit',
    articleContent: `Wie aktuell und brisant, mitunter auch direkt die Werke von Jenny Holzer sind, zeigt sich in ihrer Ausstellung in Düsseldorf in der losen Anhäufung menschlicher Knochen. Einige sind von Silberbändern - wie Identifikationsmarken - mit einem eingravierten Text umfangen, der die verschiedenen Perspektiven der Verbrechen zu Wort kommen lässt: Holzer hat dieses Mahnmal ursprünglich als Reaktion auf die sexuelle Gewalt gegen Frauen und Mädchen als Waffe im Jugoslawien-Krieg geschaffen; hier nun ist es eine Anklage gegen alle Grausamkeiten vom Zweiten Weltkrieg bis hin zum Ukrainekrieg. Es ist eine dramatische Verdeutlichung im Werk der New Yorker Künstlerin (*1950), das sich ansonsten eher diskret in die Gesellschaft einschleicht und ihr den Spiegel vor Augen hält. Jenny Holzers zentrales Verfahren ist von Anfang an die textliche Mitteilung, die sie multimedial, ästhetisch arrangiert mitten im Alltag platziert. Sie begann in den 1970er Jahren mit der Verteilung der „Truisms“: In Schreibmaschinenschrift auf Papier waren Alltagsweisheiten zu lesen, die, teils philosophischen Ursprungs, durch inflationären Gebrauch abgeschliffen sind und kaum in ihrer Bedeutung und Tiefe hinterfragt werden. Darauf folgten die „Inflammatory Essays“, die mit je 100 Worten in 20 Zeilen auf farbigem Papier als Plakate radikale Vorschläge, Befehle oder Prophezeiungen im kulturellen aber auch politischen Bereich bündeln. Berühmt wurde Jenny Holzer vor allem mit ihren LED-Laufschriften in leuchtenden Buchstaben in einer schwarzen Konstruktion im Innenraum ebenso wie in der Stadt. In ihrer kontinuierlichen Fließgeschwindigkeit nie auf einmal zu sehen, erschließen sie sich erst im wiederholten Lesen. Holzer bedient sich hier der Überfutung mit Informationen parallel zu den am unteren Bildschirmrand eingeblendeten aktuellen Nachrichten. Ihre Leuchtschriften und Laufbänder - hoch über den Köpfen der Passanten oder wie aus dem Boden perlend - wirken ganz ohne vordergründigen Kontext bedrohlich drängend und entlarven die Hohlheit von Floskeln und regen zum Nachdenken an. In Düsseldorf sind aber auch die Steinbänke ausgestellt, deren gemeißelte Texte genauso wenig aus dem Kopf gehen. Und dann zeigt sich, was für eine Macht Sprache und Text besitzen, wie sie vom Denken Besitz ergreifen, aber auch was für Chancen des Begreifens und der Durchdringung sie bieten. Wie sie zu Formen der Mitteilung und der Kommunikation verbotener Gedanken werden. Im Fortschreiten ihres Werkes ist Jenny Holzer zunehmend politisch geworden und arbeitet dazu mittlerweile auch mit Malerei. Ihre Gemälde in der Bel Etage von K21 vergrößern interne, partiell geschwärzte Untersuchungsberichte u.a. zu Misshandlungen irakischer Gefangener durch die US-Armee. Die Sprache deckt hier auf, auch wenn sie selbst verborgen bleibt. Man muss die Betroffenen zu Wort kommen lassen, mit allem Nachdruck und aller Aufmerksamkeit.`,
  },
  {
    edition: '202306',
    page: '202306page12',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/12.webp',
    author: 'Werbung',
    title: '-',
    articleContent: `Hier sieht Sie jeder. Hauswirtschaftliche Dienstleistungen Rufen Sie uns an. Unsere Mitarbeiterinnen helfen Ihnen gern. 0211 1719342 oder info@casa-blanka.de kanzlei für arbeitsrecht – düsseldorf gewerkschaftlich orientiert – fachlich kompetent – engagiert wir beraten und vertreten beschäftigte, betriebs-, personal-, gesamtbetriebs-, konzernbetriebs- und eurobetriebsräte, gewerkschaften und arbeitnehmervertreter im aufsichtsrat kooperationspartner: münchen: seebacher.ﬂeischmann.müller – www.sfm-arbeitsrecht.de hamburg: gaidies heggemann & partner – www.gsp.de köln: towaRA:Arbeitsrecht GbR – www.towara.com grabenstraße 17 • 40213 düsseldorf • fon 0211 550 200 kanzlei@sl-arbeitsrecht.de • www.sl-arbeitsrecht.de Dr. Uwe Silberberger | Dr. Frank Lorenz | Anne Quante Juni 2023 Die zakk-Kneipe ist geöffnet: Mittwoch bis Samstag ab 16 Uhr frischer Kuchen, hausgemachte Pizza und vieles mehr! Jeden Sonntag Frühstück ab 9.30 Uhr! Do 1.6. Lesung mit Farah Bouamar & Talk Im Rahmen des Projekts „nichts anders“ / Düsseldorfer Literaturtage So 4.6. attac politisches Frühstück Thema: Soziale Ungleichheit schwächt die Menschen und zerstört das Klima So 4.6. Jazzslam Im Rahmen der D´dorfer Literaturtage. Moderation Jean-Philippe Kindler Mo 5.6. Düsseldorfer Tauschring: Frühstück Infos und Austausch für alle Interessierten So 11.6. Echt oder Fake In Echt-Zeit Fake-Facts identifizieren! Mo 12.6. WDR 5 Radioshow Aktuelles Kabarett, erstaunliche Talks, ausgesuchte Live-Musik! Fr 16.6. HitQuiz - den Song kenn ich! Das große Quiz mit zooey, Niekohle und DJ Ingwart. So 18.6. Schumann goes Hip-Hop Das Crossover Hip-Hop Projekt performt in der Tonhalle! Mo 19.6. Curtis Harding „If Words Were Flowers“Tour 2023 Do 22.6. Von wegen Sokrates Das Philosophische Café I know this much is true? Was können wir wirklich wissen? Fr 23.6. Anjas Singabend Zusammen singt man weniger allein Sa 24.6. Flingern Nord: Vom Flinger Broich bis zum Uhrenturm Ein historischer Stadtteilrundgang mit Kaspar Michels Sa 24.6. Wladimir Kaminer liest gute Texte und legt anschließend Platten auf! Di 27.6. Lesebühne live im zakk: Abend mit Goldrand Mit Alex Burkhard, Bernard Hoffmeister & Frank Klötgen sowie Aylin Celik. zakk.de • Fichtenstr. 40 • Düsseldorf Putzen, waschen, bügeln, einkaufen, Arztbesuche. Ich helfe Ihnen im Haushalt. Professionell und preiswert. Bin sehr nett, spreche sehr gut deutsch, kümmere mich fürsorglich und schnell um Ihre Wünsche. Nur 25 Euro die Stunde inklusive Anfahrt. Probieren Sie es aus. Sie werden zufrieden sein. Ihre Giorgiana Giorgiana Pruteanu +49 176 66993209 Deshalb fördern wir die verschiedensten sozialen Projekte in Düsseldorf. Damit die Herzen wirklich aller Düsseldorfer höherschlagen. Unser Herz schlägt für Düsseldorf. Und für alle Menschen in unserer Stadt. Foto: Robert Eikelpoth marktplatz_13 Rudi Becker erhält eine hohe Auszeichnung für seinen unermüdlichen Einsatz für nierenkranke Menschen. Foto: Bundesverband • Kfz-Schadengutachten • Kfz-Wertgutachten • Gebrauchtwagenbewertungen • Oldtimerbewertungen Kfz-Sachverständigenund Ing. -Büro Renken Mobil: 0178 – 163 68 82 Hauptuntersuchungen | Änderungsabnahmen | Gas-System-Einbauprüfungen AMTLICHE FAHRZEUGPRÜFUNGEN WIR HELFEN TIEREN IN DER NOT! Geschäftsstelle Tel.: (02 11) 13 19 28 Clara-Vahrenholz-Tierheim Rüdigerstraße 1 40472 Düsseldorf Tel.: (02 11) 65 18 50 Spendenkonten: (Spenden an uns sind steuerlich absetzbar) Kreissparkasse Düsseldorf Stadtsparkasse Düsseldorf IBAN: DE 11 3015 0200 0001 0409 30 IBAN: DE 92 3005 0110 0019 0687 58 Rüdigerstraße 1 40472 Düsseldorf Anwaltskanzlei ROTH · AYDIN Arbeitsrecht & Sozialrecht Te l: 0211 / 626 044 Fax: 0211 / 626 047 email: info@roth-aydin.de Kühlwetter Straße 49 40239 Düsseldorf r o t h - a y d i n . d e Jewei Jeweil ls um s um 1 18:00 Uhr. 03. Januar, Di. 2023 07. März, Di. 2023 02. Mai, Di. 2023 07. November, Di. 2023 07. Februar, Di. 2023 04. April, Di. 2023 06. Juni, Di. 2023 01. August, Di. 2023 10. Oktober, Di. 2023 05. Dezember, Di. 2023 2023 IBAN: DE23 3702 0500 0008 0901 00 Achtung: Alle Termine finden im AMMNESTY BÜRO statt. Achtung: Alle Termine finden im AMMNESTY BÜRO statt. AMMNESTY BÜRO, Grafenberger Allee 56, 40237 Düsseldorf 04. Juli, Di. 2023 05. September, Di. 2023 INFOABENDE www.amnesty-duesseldorf.de Informieren & Engagieren. 2023 – sei dabei! Achtung: Alle Termine ﬁnden im AMMNESTY BÜRO statt. AMMNESTY BÜRO, Grafenberger Allee 56, 40237 Düsseldorf Jeweils um 18:00 Uhr. SPENDENKONTO Bank für Sozialwirtschaft IBAN: DE23 3702 0500 0008 0901 00 06. Juni, Di. 2023 04. Juli, Di. 2023 01. August, Di. 2023 05. September, Di. 2023 10. Oktober, Di. 2023 07. November, Di. 2023 Gemeinsam gegen Wohnungslosigkeit Housing First Düsseldorf e.V. sucht Mietwohungen. Housing First möchte Obdachlose dauerhaft in Wohnungen bringen. Sie möchten uns unterstützen? Wir suchen private Wohnungseigentümer:innen, Investor:innen sowie Wohnungsbaugesellschaften, die bereit sind Wohnraum zurVerfügung zu stellen. Melden Sie sich bei uns! info@housingauthorduesseldorf.de 0211 976 323 48 www.housingauthorduesseldorf.de`,
  },
  {
    edition: '202306',
    page: '202306page13',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/13.webp',
    author: 'Scott',
    title: 'Smerchek',  
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. <em> Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.</em>`,
  },
  {
    edition: '202306',
    page: '202306page14',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/14.webp',
    author: 'Giovanni',
    title: 'Benussi',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page15',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/15.webp',
    author: 'Igor',
    title: 'Minar',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page16',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/16.webp',
    author: 'Brandon',
    title: 'Kish',
  },
  {
    edition: '202306',
    page: '202306page17',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/17.webp',
    author: 'Arisa',
    title: 'Fukuzaki',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page18',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/18.webp',
    author: 'Alexandra',
    title: 'Spalato',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page19',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/19.webp',
    author: 'Cat',
    title: 'Johnson',
  },
  {
    edition: '202306',
    page: '202306page20',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/20.webp',
    author: 'Ashley',
    title: 'Narcisse',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page21',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/21.webp',
    author: 'Edmund',
    title: 'Hung',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page22',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/22.webp',
    author: 'Clifford',
    title: 'Fajardo',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page23',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/23.webp',
    author: 'Erick',
    title: 'Tamayo',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page24',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/24.webp',
    author: 'Paul',
    title: 'Bratslavsky',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page25',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/25.webp',
    author: 'Pedro',
    title: 'Cattori',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page26',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/26.webp',
    author: 'Andre',
    title: 'Landgraf',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page27',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/27.webp',
    author: 'Monica',
    title: 'Powell',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page28',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/28.webp',
    author: 'Brian',
    title: 'Lee',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page29',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/29.webp',
    author: 'Sean',
    title: 'McQuaid',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page30',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/30.webp',
    author: 'Shane',
    title: 'Walker',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page31',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/31.webp',
    author: 'Jon',
    title: 'Jensen',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page32',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/32.webp',
    author: 'Clifford',
    title: 'Fajardo',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page33',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/33.webp',
    author: 'Erick',
    title: 'Tamayo',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page34',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/34.webp',
    author: 'Paul',
    title: 'Bratslavsky',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page35',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/35.webp',
    author: 'Pedro',
    title: 'Cattori',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page36',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/36.webp',
    author: 'Andre',
    title: 'Landgraf',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page37',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/37.webp',
    author: 'Monica',
    title: 'Powell',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page38',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/39.webp',
    author: 'Brian',
    title: 'Lee',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202306page39',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/39.webp',
    author: 'Sean',
    title: 'McQuaid',
    articleContent: `Duis sit quis commodo cillum. Ad esse officia proident. Aliqua excepteur nulla sunt mollit enim. Reprehenderit irure nisi culpa aute labore cupidatat sint ad et nisi dolor officia deserunt duis. Anim et non excepteur. Voluptate aliquip laboris aute in in sit incididunt pariatur sit eu ad sunt irure. Qui adipisicing amet sit elit minim fugiat incididunt.
Consequat proident deserunt est nisi in dolore consequat irure.`,
  },
  {
    edition: '202306',
    page: '202399page40',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/41.webp',
    title: `Dummy Page 40`,
    author: `Dummy Author`,
    articleContent: `Dummy Content`,
    authorInfo: `Dummy Info`,
  },
  {
    edition: '202306',
    page: '202399page41',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/41.webp',
    title: `Dummy Page 41`,
    author: `Dummy Author`,
    articleContent: `Dummy Content`,
    authorInfo: `Dummy Info`,
  },
  {
    edition: '202306',
    page: '202399page42',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/41.webp',
    title: `Dummy Page 42`,
    author: `Dummy Author`,
    articleContent: `Dummy Content`,
    authorInfo: `Dummy Info`,
  },
  {
    edition: '2023',
    page: '202399page43',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/41.webp',
    title: `Dummy Page 43`,
    author: `Dummy Author`,
    articleContent: `Dummy Content`,
    authorInfo: `Dummy Info`,
  },
  /* {
    edition: '202108',
    page: '202108page03',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/202108page03.webp',
    title: `Bitcoin? Oder Dachlatten?`,
    author: `Fritz Eckenga`,
    articleContent: `Sicher haben auch Sie sich in den letzten Monaten oft gefragt: Wohin mit meinem vielen Geld? Ach nich? Ja. Warum auch. Is ja mein Geld. Und meine Sorgen möchten auch Sie gar nicht haben. Als Systemfirlefanz, also als Angehöriger der Unterhaltungsbranche, bin ich ja ein absoluter Krisengewinnler. Ich weiß wirklich nicht mehr, wo und wie ich die ganze Künstlersoforthilfe-Alimentierungsasche, die die öffentliche Hand über mir ausgestreut hat, gewinnbringend investieren soll. Jetzt bin ich aber nicht nur verzweifelt, sondern auch pfiffig. Deswegen habe ich intensiv im Internet recherchiert. Nicht ganz einfach. Muss man wegen der Netzkriminalität smart vorgehen. Aber dann klappt’s. Nach meiner geschickt verschlüsselten Suchanfrage „Profit für Profis?“ schicken mir die Undercover-Algorithmiker täglich zwei Dutzend Angebote. Ganz große Nummer, absoluter Geheimtipp: Bitcoin Mining! Ja, das war doch was für mich. Ich bin ja nicht nur pfiffig. Sondern auch aus dem Ruhrgebiet. Und „Mining“, also nach Kohle schürfen, liegt bei uns in der Familie. Früher, da hatten wir Kohledeputat-Depots. Heute kann ich’s ja sagen: Hat meinen Opa stinkreich gemacht. Er schürfte auf Zeche Zollern II, Dortmund-Bövinghausen. Also ran an die Mäuse, Bitcoins schürfen! Klang verheißungsvoll. Muss man gar nicht für unter die Erde. Geht über Tage, am Rechner. Denn beim Bitcoin, so meine Recherchen,  handelt es sich um eine „Kryptowährung“. Um  Himmels Willen! Finger weg! Zu gefährlich!  Über „Krypto“ hatte ich schon in der Grundlagenliteratur viel Schlimmes gelesen. Denn  wenn der Bitcoin eine Kryptowährung ist, besteht er garantiert aus Kryptonit. Das ist  schon Superman zum Verhängnis geworden.  Grünes Kryptonit wirkt wie radioaktives Gift, rotes macht hemmungslos, und das schwarze ist das Böse schlechthin. Es spaltet die Persönlichkeit. Außerdem ist der Bitcoin ein Klimakiller. Sein Schürfen verbraucht pro Jahr 147 Terawattstunden, mehr Strom als zum Beispiel das ganze Land Schweden. Seitdem wir davon erfahren haben, lassen  nicht nur ich, sondern sogar Tesla-Chef Elon  Musk die Finger vom Bitcoin Mining. Ich weiß  nicht, wie er jetzt seine Kohle investiert. Ich  jedenfalls habe im Darknet der Handwerkskammer Düsseldorf erfahren, dass bundesweit ein absoluter Mangel an Baustoffen besteht. Heißer Tipp: Holz ist knapp. Ich gehe in Dachlatten!  Systemfirlefanz,  `,
    authorInfo: `Fritz Eckenga ruhrt in sich selbst. Von Dortmund aus dichtet er sich die Welt zusammen. Mit seinem  Soloprogramm „Am Ende der Ahnenstange“  gastiert er am 27. 8. in Unna (Nachholtermin),  im WDR-Morgenecho bringt er am 7. 8. einen  neuen „Schrägstrich“-Beitrag, und auf WDR 2  meldet er sich jeden Mittwoch um 10:50 Uhr  unter dem Motto „Folgendes“. Alles Weitere  siehe unter eckenga.com.`,
  },
  {
    edition: `202305`,
    page: '202305page03',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/202305page03.webp',
    title: `You'll never drive alone`,
    author: `Wilfried Schmickler`,
    articleContent: `Olaf Scholz steht ja zur Zeit schwer in der Kritik wegen seiner Reden zum Krieg in der Ukraine. Kaum hat er wieder eine gehalten, sitzen am nächsten Tag die hauptberuflichen Talkshowsesselpfurzer bei Markus Laber-Lanz, bei Frankie Aufblasberg und bei Maischen Menschberger und sind schwer enttäuscht. Viel zu emotionslos sei der Kanzler, nicht? Zu schmallippig. Zu unterkühlt. Zu hölzern. Zu wenig aufwühlend. Es sei allerhöchste Zeit, dass der Bundeskanzler das deutsche Volk mit einer Blut-, Schweiß- und Tränen-Rede aus der mentalen Komfortzone herausreiße.  Olaf Scholz ist eben nicht der Typ für große Worte. Bei dem ist eben alles eine Nummer kleiner. Zwei Schriftsteller haben ja nun gefordert, hier in Deutschland die Stelle eines Parlamentspoeten einzuführen. Ein Gedicht im Parlament hat es, soweit ich weiß, überhaupt nur einmal gegeben, vor 20 Jahren, vom damaligen Landwirtschaftsminister Karl-Heinz Funke. „Oldenburger Butter / Hilft dem Vater auf die Mutter.“ War damals ein Brüller im Hohen Haus. Wäre heute eher ein Fall für die Gleichstellungsbeauftragte. Wie dem auch sei, ein bisschen Poesie im Bundestag täte dem Laden ganz  gut. Ich hab mich direkt beworben - selbstverständlich mit einer Arbeitsprobe. So hab ich eine Rede für Olaf Scholz geschrieben, zusammengedichtet. Eine Blut- Schweiß- und Tränen-Rede: Oh Gott, Boykott, Boykott, oh Gott / Debakel, Crash, Ruin, Bankrott / Embargo total, Sanktionen radikal / Folgen fatal, Konsequenzen brutal / Blut,  Schweiß und Tränen / Statt Gas aus den Hähnen  / Die Pipelines dicht / Das Ende in Sicht / Wir  zahlen den Preis / Mit Blut, Schweiß und Tränen  / Wenn die globalen Lieferketten reißen / Und  alle Küchenmeister Schmalhans heißen / Moral ist gut / Doch unermesslich hoch der Preis / Und  jeder ahnt, was jeder weiß / Dass irgendwann die allerschlimmste Katastrophe droht / Oh hilf uns Herr in unserer Not / Dann kommt das Sonntagsfahrverbot / Blut, Schweiß und Tränen wollen wir vergießen / Doch unser Treibstoff, der muss fließen / Wie sprach der Kanzler? / Wenn  sich all deine Träume in Luft auflösen? / Fahr  weiter, fahr weiter / You’ll never drive alone.`,
    authorInfo: `Wilfried Schmickler Sein neues Programm „Es hört nicht auf“  tritt an gegen Idiotien und Ungerechtigkeiten, gegen soziale Ausgrenzung,  gegen Hass und Intoleranz. Mit Worten  der Wahrheit, gnadenlos und messerscharf. Wie schon in den anderen Soloprogrammen des „brillanten Moralisten“  (Süddeutsche Zeitung), der auch schon  pro bono für fiftyfifty aufgetreten ist:  „Es war nicht alles schlecht“ (2009),  „Weiter“ (2010), „Ich weiß es doch auch  nicht“ (2012) und „Das Letzte“ (2021).  Ausgezeichnet (u.a.) mit dem Deutschen Kleinkunstpreis (2 x), dem Deutschen Kabarettpreis, dem Prix Pantheon  und dem Salzburger Stier.  www.wilfriedschmickler.de`,
  },

  {
    edition: '202307',
    page: '202307page03',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/202307page03.webp',
    title: `Klebrige Zeiten`,
    author: `Martin Maier-Bode`,
    articleContent: `Halt! Sie befinden sich inhaltlich in Übereinstimmung mit vielen Forderungen der Klimabewegung? Sie machen sich Gedanken über unsere gemeinsame Zukunft auf diesem Planeten? Und Sie haben eben zufällig festgestellt, dass Ihnen noch Büromaterial fehlt und erwägen, im Schreibwarenladen unter anderem drei Prittstifte und eine Tube Uhu zu erwerben. Aufgepasst! Die bayerische Justiz kennt da wenig Gnade. Erst vor wenigen Wochen hat die Staatsanwaltschaft München eine bundesweite Razzia mit insgesamt 170 Beamten in sieben Bundesländern ausgelöst. Da wurde unter anderem in Privatwohnungen eingedrungen und es wurden mit gezückter Waffe Leute aus ihrem Bett komplimentiert. Computer wurden konfisziert und „Geldströme“ nachvollzogen. Grund für dieses entschiedene Eingreifen: Die Aktivisten haben wiederholt negativ in den Straßenverkehr eingegriffen. Das darf nicht sein! Insgesamt führten die Aktivitäten der Protestierenden zu mehreren hundert Metern Stau. Hier war deutlich Gefahr im Verzug. Die gründen vor unseren Augen eine kriminelle Vereinigung. Da musste gehandelt werden. Bundesinnenministerin Faeser gab zu Protokoll, dass man sich eben von den Klima-Aktivisten der Letzten Generation nicht mehr „auf der Nase herumtanzen“ lassen wolle. Das sollte Entschiedenheit signalisieren, wobei meines Erachtens „auf der Nase herumsitzen“ etwas besser zu deren Aktionen gepasst hätte. Noch schärfer kommentierte mein ehemaliger Lieblingsverkehrsminister Dobrindt den Letzte-Generations-Komplex: Es bestünde die Gefahr, dass aus den Klimaaktivisten eine „neue Klima-RAF“ entstünde. Zur Erinnerung: Alexander Dobrindt ist genau das unerreichte Genie, das alleine durch sein großflächiges Breitband-Versagen bei der LKWMaut mal eben eine halbe Milliarde Euro in die Luft gepustet hat. Bei geschätzten Einsatzkosten der Polizei von 50.000 Euro bei einem durch die Letzte Generation verursachten Stau, könnten die Klimaaktivisten alleine dafür 100.000 Mal aktiv werden,  das heißt die nächsten 274 Jahre lang jeden Tag mindestens eine Großkreuzung blockieren. Das wäre so eine Art langanhaltende Payback-Time. Einziges Problem bei der Rechnung: Bis dahin dürfte sich das mit dem Klimawandel schon erledigt haben … Doch nicht nur Dobrindt gehört zu den hellen Kerzen auf der Torte, die sich in Sachen Klimaaktivisten gemeldet haben. Porsche-Liebhaber Christian  Lindner sagt, es wäre „eine Form physischer Gewalt“ wenn man  Menschen mutwillig „in ihrer  Mobilität einschränkt“. Mir war nicht bewusst, dass zum Beispiel die Eisenbahnergewerkschaft so gefährlich ist, denn die macht mit ihren (übrigens vollkommen berechtigten) Streiks genau das  im ganz großen Stil, was die paar  Aktivisten der Letzten Generation da im Kleinen veranstalten – aber klar, vielleicht droht uns ja auch eine Gewerkschafts-RAF. In Lindners neoliberalem Wirfeiern-unsere-Hochzeit-aufSylt-und-fliegen-dafür-mitdem-Privatjet-an-Milieu würde dieser Gedanke bestimmt auch verfangen.  Also, überlegen Sie sich das besser noch mal. Nicht das mit den  Prittstiften, die dürfen Sie natürlich kaufen. Konsum kurbelt die Wirtschaft an. Aber das mit den inhaltlichen Übereinstimmungen mit der Klimabewegung – schlagen Sie sich das vielleicht  besser aus dem Kopf, denn sie  gründen sonst unter Umständen  noch ohne es zu merken eine  kriminelle Vereinigung.`,
    authorInfo: `Martin Maier-Bode ist Mitglied des Kom(m)ödchen-Ensembles und als Autor und Kabarettist an den Programmen „Quickies“,  „Irgendwas mit Menschen“ und  „Deutschland gucken“ beteiligt. Von  2009 bis 2014 war er künstlerischer  Leiter der Distel in Berlin. Als Solokabarettist ist Maier-Bode derzeit  mit „Kabarett alternativlos“ in der  Republik unterwegs. Die Rheinische  Post lobt: „Wesentlich gehaltvoller ist  als jeder Comedy-Einheitsbrei.“ Die Westdeutsche Zeitung findet: „augenzwinkernd und schonungslos“.`,
  },
  {
    edition: '202308',
    page: '202308page03',
    articleImage:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/202308page03.webp',
    title: `Die Welt — ein Call-Center`,
    author: `Von Mathias Tretter`,
    articleContent: `In China befeuern die Kommunisten den Neoliberalismus. Die chinesische KP verschwendet WIR DRUCKENkeinen einzigen Gedanken mehr an das Proletariat. Die SPD dagegen ist immer noch auf der GERNE FÜR SIESuche nach der Arbeiterklasse - in der Hoffnung, sie nicht zu finden. Die wissen überhaupt nicht mehr, wen sie noch vertreten. Karl Kraus würde über die heutige SPD sagen: „Es reicht nicht, kein Angebot zu haben.  Man muss auch unfähig sein, es  zu verkaufen.“ Und zwar an eine Kundschaft, die es nicht mehr gibt. Und ausgerechnet die gewinnen die Wahlen. Früher war die SPD die Partei der kleinen Leute. Jetzt ist sie die des kleinsten Übels. Was einmal die Arbeiterklasse war, heißt jetzt „Unterschicht“. Und wir haben eine Dienstleistungsgesellschaft. So nennt man es, wenn alle was tun, aber keiner was macht. Sogenannte  Bullshit-Jobs. Im Call-Center zum Beispiel. Man verdient  nichts und bekommt alles ab. Es wird oft gesagt, das sei moderne Sklavenarbeit. Ich weiß nicht, warum man die Sklaverei so denunziert. Sklaven haben in der Regel nur einen, von dem sie angebrüllt werden. Davon träumen Telefonisten. Und: Sklaven Die SPD ist immer noch auf der Suche nach der Arbeiterklasse – in der Hoffnung, sie nicht zu finden. können sich mit anderen Sklaven unterhalten. Im Call-Center dagegen trägt jeder Kopfhörer. Die quasseln den ganzen Tag, aber kein Wort miteinander. Und da entsteht kein Spartacus-Aufstand. Gewerkschaften  brauchen Redner und Betriebsräte Sprecher. Aber Call-Center-Angestellte wollen nur eins: Endlich den Mund halten. Stellen Sie sich das nur mal vor: Nach acht Stunden Geschrei am Telefon auch noch zur Ver.di-Sitzung.  Da bekämpft man den Tinnitus mit dem Hörsturz. Aber für die chinesische KP ist genau das das Ideal - das ganze Land ein Call-Center. China ist mindestens so widersprüchlich wie die  USA. Und ausgerechnet das sind die beiden übrig gebliebenen Weltmächte: das kapitalistischste Land der Erde und Amerika.`,
    authorInfo: `Mathias Tretter, geboren 1972 in  Würzburg, studierte Anglistik und  Germanistik, danach wandte er sich  dem Kabarett zu. Sein erstes Soloprogramm brachte er 2003 heraus. Seither folgten sieben weitere. Tretter  bildete zusammen mit Philipp Weber  und Claus von Wagner auch das Kabarett-Trio „Erstes Deutsches Zwangsensemble“, das 2010 den Deutschen  Kleinkunstpreis erhielt. Tretter selbst  wurde mit dem Deutschen Kabarett-Preis geehrt. Über ihn schrieb die Süddeutsche Zeitung: „Mathias   Tretter schafft es, über Transhumanismus, die Post-Post-Moderne,  das Retro-Phänomen Windowing  und den Fluch der Unsterblichkeit  bei gleichbleibend hohem intellektuellen Anspruch in einem derart  unverschämt locker-nonchalanten  Duktus und Habitus zu reden und zu  spielen, dass man in Gedanken noch  kein halbes Mal abschweift.“ Am 3. September tritt Mathias Tretter mit seinem Programm „Sittenstrolch“ im Düsseldorfer Kom(m)ödchen auf.`,
  },
   */
]
// #endregion

aricleArray.forEach((article, index) => {
  
  index++
  fakeArticles.create({
    ...article,
    id: `${article.page}`,
    index: `${index}`,
  })
})

