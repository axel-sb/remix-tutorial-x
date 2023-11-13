var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/app.css
var app_default = "/build/_assets/app-ATWRKLKG.css";

// app/data.ts
var import_match_sorter = require("match-sorter"), import_sort_by = __toESM(require("sort-by")), import_tiny_invariant = __toESM(require("tiny-invariant")), fakeContacts = {
  records: {},
  async getAll() {
    return Object.keys(fakeContacts.records).map((key) => fakeContacts.records[key]).sort((0, import_sort_by.default)("page"));
  },
  async get(id) {
    return fakeContacts.records[id] || null;
  },
  async create(values) {
    let id = values.id || Math.random().toString(36).substring(2, 9), createdAt = (/* @__PURE__ */ new Date()).toISOString(), newContact = { id, createdAt, ...values };
    return fakeContacts.records[id] = newContact, newContact;
  },
  async set(id, values) {
    let contact = await fakeContacts.get(id);
    (0, import_tiny_invariant.default)(contact, `No contact found for ${id}`);
    let updatedContact = { ...contact, ...values };
    return fakeContacts.records[id] = updatedContact, updatedContact;
  },
  destroy(id) {
    return delete fakeContacts.records[id], null;
  }
};
async function getContacts(query) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let contacts = await fakeContacts.getAll();
  return query && (contacts = (0, import_match_sorter.matchSorter)(contacts, query, {
    keys: ["page"]
  })), contacts.sort((0, import_sort_by.default)("page"));
}
async function createEmptyContact() {
  return await fakeContacts.create({});
}
async function getContact(id) {
  return fakeContacts.get(id);
}
async function updateContact(id, updates) {
  let contact = await fakeContacts.get(id);
  if (!contact)
    throw new Error(`No contact found for ${id}`);
  return await fakeContacts.set(id, { ...contact, ...updates }), contact;
}
async function deleteContact(id) {
  fakeContacts.destroy(id);
}
[
  {
    page: "page01",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/01.webp",
    first: "Titel",
    last: "Juni 2023",
    twitter: "queer und obdachlos"
  },
  {
    page: "page02",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/02.webp",
    first: "Von Patrick Wei\xDF",
    last: "Liebe Leserinnen und Leser,",
    twitter: `es ist u\u0308ber zwei Jahre her, dass einige Privatleute, darunter ich, drei private Wohnungen fu\u0308r drei zuvor obdachlose Menschen zur Verfu\u0308gung gestellt haben. Dauerhaft und an keine Bedingungen geknu\u0308pft. Es fu\u0308hlte sich damals richtig an und heute immer noch. Wir konnten helfen: in Du\u0308sseldorf, in unserer Heimat, Menschen aus unserer Heimat. Mit U\u0308bergabe der drei Wohnungen begann eine neue Erfahrung - fu\u0308r die drei Menschen und fu\u0308r uns.
Dankbarkeit ist in diesem Zusammenhang der zentrale Begriff. Dankbarkeit dafu\u0308r, ein Zuhause zu haben und endlich im Leben wieder Fu\xDF zu fassen. Einen Ansprechpartner zu haben: an guten und an weniger guten Tagen. Unterstu\u0308tzung zu erhalten, wenn man sie braucht. Eine solide Basis zu haben. Das eigene Leben aktiv in die Hand zu nehmen und etwas aus sich selbst zu machen. Wir lernten erst u\u0308ber den Selbstversuch das Konzept \u201EHousing First\u201C richtig kennen. \u201EHousing First Du\u0308sseldorf e.V\u201C hei\xDFt der anschlie\xDFend von fiftyfiftyund anderen aus U\u0308berzeugung gegru\u0308ndete Verein.
Dieser Verein ka\u0308mpft in Du\u0308sseldorf dafu\u0308r, dass unsere Stadt die erste in Deutschland wird, in der keine Menschen mehr auf der Stra\xDFe leben mu\u0308ssen. Dafu\u0308r beno\u0308tigt es zwingend die Unterstu\u0308tzung von Privatpersonen, da sich der Gro\xDFteil der Wohnungen in Du\u0308sseldorf und anderswo in Privatbesitz be\uE01Endet. Der Anreiz fu\u0308r eine Vermietung an obdachlose Menschen besteht zum einen in der Sicherheit der Mietzahlung durch das zusta\u0308ndige Jobcenter, in der engmaschigen Betreuung der Mieter*innen durch unseren Verein und vor allem in dem Bewusstsein, einen Menschen gerettet zu haben. Die optimale Wohnung ist dabei zwischen 25 und 30 Quadratmeter gro\xDF, also fu\u0308r Einzelpersonen geeignet - die meisten Obdachlosen sind ja allein.
Wir, die wir private Wohnungen fu\u0308r Obdachlose zur Verfu\u0308gung stellen, sind Botschafter fu\u0308r Housing First und wollen so mit Hilfe anderer Investoren und Wohnungsbaugesellschaften laufend neuen Wohnraum akquirieren und eine Art Schneeballeffekt auslo\u0308sen. Ich kann mir gut vorstellen, dass wir in unserer Stadt Du\u0308sseldorf noch weitere Verbu\u0308ndete fu\u0308r unser Unterfangen finden. Denn der gesellschaftliche Zusammenhalt lebt vom Geben und Nehmen, von Solidarita\u0308t; das gilt auch und insbesondere fu\u0308r eine Stadt wie Du\u0308sseldorf. Wir sind daher sehr stolz, unseren Oberbu\u0308rgermeister, Dr. Stephan Keller, als Schirmherrn fu\u0308r Housing First an unserer Seite zu wissen.
Es lohnt sich f\xFCr die \xDCberwindung der Obdachlosigkeit zu k\xE4mpfen - mit vereinten Kr\xE4ften. Jeden Tag!`
  },
  {
    page: "page03",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/03.webp",
    first: "Christian Ehring",
    last: "Onkel Willi sitzt bei Markus Lanz",
    twitter: `Sie lesen diesen Text. Das ist erfreulich. Womo\u0308glich ho\u0308ren Sie sogar zu, wenn andere etwas sagen? Dann sind Sie in der Minderheit. Die meisten Menschen teilen sich lieber mit, reden, schreiben, podcasten, kuratieren ihr gro\xDFartiges Leben auf Instagram. Und sie geben ungefragt Tipps. Man erha\u0308lt immerzu Tipps. Ohne darum gebeten zu haben. Ich meine mich zu erinnern, dass man fru\u0308her bespielsweise krank sein konnte, ohne dass augenblicklich jemand Tipps gegeben hat. Fru\u0308her bekam man zu ho\u0308ren: \u201EGute Besserung!\u201C Oder auch: \u201EWie geht es Dir?\u201C. Heute: \u201EAlso, was mir ja sehr geholfen hat \u2026 Salbei! Empfehle ich Dir auch!\u201C - \u201EBei Bandscheibenvorfall?\u201C - \u201EUnbedingt!\u201C \u201EIch kann Dir einen sehr guten Osteopathen empfehlen!\u201C - \u201ENein danke, kein Interesse.\u201C - \u201EIch empfehle ihn Dir trotzdem.\u201C Fru\u0308her musste man sich auch noch jahrelang in ein Fachgebiet vertiefen, um als Experte oder Expertin zu gelten. Heute wissen alle alles und fachsimpeln be\uE01Fissen u\u0308ber Pandemien, Milita\u0308rstrategien und globale Zusammenha\u0308nge. Mich erinnert das an Onkel Willi. Mein Onkel Willi hat fru\u0308her bei Familienfeiern immer bei den Mahlzeiten ungefragt die Weltpolitik analysiert. Und ich dachte schon als kleiner Junge: \u201EHm, so richtig Ahnung hat er glaube ich nicht, der Onkel Willi.\u201C Heute habe ich ganz oft das Gefu\u0308hl, Onkel Willi sitzt bei Markus Lanz.Fu\u0308r Partygespra\u0308che reichen tatsa\u0308chlich einzelne Sa\u0308tze, um als Fachmann oder Fachfrau zu gelten. Beispiel gefa\u0308llig? Kein Problem. Wenn Sie als Amerikaexperte gelten wollen, reicht der Satz: \u201ENew York ist nicht die USA, und die USA sind nicht New York.\u201C Testen Sie das ruhig mal. Wenn Sie den Wein am Tisch probieren mu\u0308ssen und haben keine Ahnung von Wein, sagen Sie einfach: \u201EDas Terroir wurde hier sehr differenziert herausgearbeitet.\u201C Wichtig: Den Satz nur bei Wein sagen. Niemals bei Bier. Auch beim Sport gibt es ExpertenSa\u0308tze. Was mir bei der letzten Fu\xDFballWM aufgefallen ist, ist der Satz: \u201EMir gefa\u0308llt, wie die Mannschaft gegen den Ball spielt.\u201C Fu\xDFballmannschaften spielten fru\u0308her gegen Bremen oder gegen Schalke. Heute spielen alle gegen den Ball. Das hei\xDFt, der Ball ist der Gegner. Und ich \uE01Dnde, bei der deutschen Nationalmannschaft hat man das auch gemerkt. Auch gut: \u201EEs gibt Probleme ein effizientes Pressing aufzuziehen.\u201C Dieser Satz macht sie automatisch zum Experten beim Thema Fu\xDFball. Oder auch bei Darmproblemen. Sie wollen lieber RusslandExperte sein? Nichts leichter als das. Um Russland-Experte zu sein, muss man rein gar nichts wissen. Da reicht es, wenn man einmal im Leben einen Wodka Lemon getrunken hat.

CHRISTIAN EHRING ist Kabarettist, Moderator, Autor und Musiker. Er stammt aus Duisburg, wuchs in Krefeld auf und lebt in Du\u0308sseldorf. Langja\u0308hrige Ta\u0308tigkeit beim Kom(m)o\u0308dchen, seit 2009 geho\u0308rt er zum Team der ZDF-heute-show, seit 2011 moderiert er mit gro\xDFem Erfolg die Sendung extra3. Sein neuestes Programm Stand jetzt ist hochaktuelle Satire nach der Zeitenwende. Ehring analysiert in gewohnt bissiger Weise die aktuelle Gro\xDFwetterlage. Stand jetzt wird\u2019s lustig.`
  },
  {
    page: "page04",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/04.webp",
    first: "Oliver Ongaro",
    last: "Friede den Hu\u0308tten 1",
    twitter: "Zorro steht vor mir und er ist mindestens so zornig wie die gleichnamige Figur, die wir aus Bu\u0308chern und Filmen kennen. Sein Infinitivdeutsch ist schwer zu verstehen, allemal jetzt, da er so wu\u0308tend ist - fast unversta\u0308ndlich. Ich ho\u0308re immer wieder \u201EOrdnungsamt\u201C raus und \u201EZelt ist weg\u201C. Mit Zorro sind sechs weitere Menschen in die Beratungsstelle von gekommen, vier Ma\u0308nner und zwei Frauen. Es ist immer noch kalt drau\xDFen, der Fru\u0308hling in diesem Jahr lie\xDF ja lange auf sich warten. Da stehen sie nun mit mehreren blauen Mu\u0308llsa\u0308cken und einigen abgeranzten Reisetaschen, ihr ganzes Hab und Gut. In ihren Gesichter spiegelt sich viel Hoffnungslosigkeit, Angst und Unversta\u0308ndnis. Als wa\u0308re das Leben auf der Stra\xDFe nicht schon schwer genug. Zorro und die anderen sind Armutsmigrant*innen aus Ruma\u0308nien und geho\u0308ren der Minderheit der Roma an. Erst mit U\u0308bersetzung durch andere ruma\u0308nische Obdachlose bekommen wir schlie\xDFlich ein Bild von dem zustande, was sich am Morgen abgespielt hat. Zorro und seine Familienangeho\u0308rigen, in diesem Falle auch Onkel und Cousinen, ein junger Mann ist erst 17 Jahre alt, haben in einem Zelt im Nordpark geschlafen, viele Woche schon. Dann ist am Morgen das Ordnungsamt gekommen und hat das Zelt abgerissen, die Mu\u0308llabfuhr hat es dann kaltherzig entsorgt - Zelt und Schlafsa\u0308cke, von fiftyfifty-Spendengeldern finanziert. Vorher konnten Zorro und seine Leute noch schnell ihre Sachen rausholen. Jetzt wei\xDF die Gruppe nicht wohin. Sie wollen gerne zusammen bleiben, weil sie kaum Deutsch ko\u0308nnen und sich ohne Zorro noch schwerer zurecht fnden als ohnehin schon. Da stehen sie also nun bei uns mitten im Raum. In solchen Momenten packt mich immer richtiger Zorn. Ich empfinde es als eine willku\u0308rliche beho\u0308rdliche Ma\xDFnahme gegenu\u0308ber armen Menschen. Fragen dra\u0308ngen sich auf. War ein Dolmetscher bei der Ra\u0308umung vor Ort? Gab es ein Auto, das die Sachen und Menschen zur Notschlafstelle gefahren ha\u0308tte? Sicherlich, der Park ist zur Erholung der Stadtbevo\u0308lkerung gedacht und nicht zum Campen. Die Stadtverwaltung handelt nur im Ausgleich der Interessen, spazieren gehen zu ko\u0308nnen, ohne den Anblick von Obdachlosen \u201Eertragen\u201C zu mu\u0308ssen gegenu\u0308ber der Notwendigkeit, einen Schutzraum fu\u0308r die Nacht zu beanspruchen. Die ko\u0308nnen doch in eine Notschlafstelle gehen, hei\xDFt es dann. Aber, darf man das in einem demokratischen Land, Menschen das Dach u\u0308ber dem Kopf einfach wegnehmen? Ist es nicht streng genommen Diebstahl, Zelt und Schlafsa\u0308cke von Obdachlosen einfach zu \u201Eentsorgen\u201C? Ha\u0308tten die Stadtbediensteten nicht alles daran setzen mu\u0308ssen, eine Lo\u0308sung fu\u0308r diese obdachlosen Menschen zu fnden - etwa eine Wohnung in einer sta\u0308dtischen Unterkunft? Und: Was bringt es, Menschen zu vertreiben, ihnen das Zelt wegzunehmen, wenn sie anschlie\xDFend zu uns kommen und wir quasi gezwungen sind, ihnen ein neues Zelt zu geben, mit dem sie dann an einer anderen Stelle drau\xDFen kampieren? Begegnungen auf der Stra\xDFe, der Ort scheint mittlerweile verlassen zu sein. Nur ein Mu\u0308llhaufen. Trotzdem haben hier Menschen ein Zuhause gehabt - in einer selbst gebauten \u201EUnterkunft\u201C in Du\u0308sseldorf."
  },
  {
    page: "page05",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/05.webp",
    first: "Oliver Ongaro",
    last: "Friede den Hu\u0308tten 2",
    twitter: `Darf man das, Menschen das Dach u\u0308ber dem Kopf einfach wegnehmen? Ist es nicht streng genommen Diebstahl, Zelt und Schlafsa\u0308cke von Obdachlosen einfach zu \u201Eentsorgen\u201C?
Weltweit, in den Favelas von Brasilien bis zu den Slums von Indien, sind es immer die besitzlosen Armen, deren Hu\u0308tten weggebaggert und zersto\u0308rt werden. Jetzt auch hier in Du\u0308sseldorf, nicht zum ersten Mal. Darf man das vergleichen? Nach mehreren Telefonaten mit der Stadtverwaltung ergibt sich spontan leider keine Unterbringungsmo\u0308glichkeit fu\u0308r Zorro und seine Gruppe, einzeln oder zu zweit ko\u0308nnten sie in einer Notunterkunft schlafen. Sie wollen aber zusammen bleiben und dann packen sie ihre wenigen Sachen auf der Suche nach einem neuen Ort fu\u0308r die Nacht. Zwei Tage spa\u0308ter entschuldigt sich die Stadtverwaltung bei den Tra\u0308gern der Wohnungslosenhilfe, die Ra\u0308umung wa\u0308re unzureichend abgestimmt worden. Immerhin. Schlie\xDFlich gibt es zwischen fiftyfifty und der Stadt eine Absprache, dass die Ra\u0308umung von \u201EPlatten\u201C, wie es im Obdachlosen-jargon hei\xDFt, also von Schlafstellen der Obdachlosen, vorher angeku\u0308ndigt wird, damit wir als Streetworkerinnen und Streetworker eine andere U\u0308bernachtungsmo\u0308glichkeit fnden oder zumindest die Menschen darauf vorbereiten ko\u0308nnen. Ortswechsel. Es ist morgens kurz nach acht Uhr. Ich stehe vor einem imposanten Bu\u0308roneubau im Stadtteil Flingern. Ein Mitarbeiter der Deutschen Bahn hat uns angeschrieben. Es ga\u0308be Beschwerden u\u0308ber ein Zelt von Obdachlosen, das sich in der Na\u0308he der Gleise befindet. Ob wir von fiftyfifty einmal nachschauen ko\u0308nnten? Fotos des Zeltes sind der Mail angeha\u0308ngt. Die Fotos sind von oben gemacht worden, in dem Geba\u0308ude ist eine staatliche Beho\u0308rde untergebracht. Mich schockiert der Anblick von Armut. Ich fnde sie sogar unertra\u0308glich. Ich glaube aber nicht, dass es den Beschwerdefu\u0308hrern darum ging, sich Sorgen um verelendete Menschen zu machen. Ob sie sich die Mu\u0308he gemacht haben, einmal aus der Komfortzone des Bu\u0308ros runter zu gehen und nachzuschauen, wer ihre Nachbarn sind? Ich glaube nicht. Das Zelt ist vollgestopft mit Kleidung, u\u0308berall liegen Beutel mit - wahrscheinlich vom Sperrmu\u0308ll - gesammelten Dingen herum. Kuscheltiere neben alten To\u0308pfen, dazwischen immer wieder nasse Kleidung. Eine alte Decke liegt u\u0308ber dem Zelt. Der Ort scheint mittlerweile verlassen zu sein. Nur ein Mu\u0308llhaufen - ko\u0308nnte man sagen. Trotzdem hat hier ein Mensch sein Zuhause gehabt. Ich schaue an der Fassade des neuen Bu\u0308rogeba\u0308ude gegenu\u0308ber hinauf und wieder runter auf das Zelt neben mir. Mir kommt der Schriftsteller Georg Bu\u0308chner in den Sinn, sein Zitat im Hessischen Landboten. Eine drastische A\u0308u\xDFerung, getroffen vor knapp 200 Jahren angesichts der ungerechten gesellschaftlichen Verha\u0308ltnisse. \u201EFriede den Hu\u0308tten, Krieg den Pala\u0308sten.\u201C Damals wie heute. Nachtrag: Mit Hilfe von fiftyfifty haben Zorro und seine Leute mittlerweile doch noch gemeinsam einen Platz in einer sta\u0308dtischen Notwohnung bekommen. Geht doch. Oliver Ongaro, fiftyfifty-Streetworker`
  },
  {
    page: "page06",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/06.webp",
    first: " ",
    last: "",
    twitter: ""
  },
  {
    page: "page07",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/07.webp",
    first: "Daniel Bache",
    last: "Queer und obdachlos",
    twitter: `Queere Menschen sind besonders von Obdachlosigkeit betroffen. Die Einrichtungen der Wohnungslosenhilfe sind darauf aber kaum oder gar nicht eingestellt. Und die Bundesregierung verliert sich in Symbol-Politik, obwohl sie bei Amtsantritt einen \u201Equeerpolitischen Aufbruch\u201C versprochen hat.
Im Juni finden in vielen Sta\u0308dten Deutschlands und der Welt wieder die Paraden zum Christo-pher Street Day (CSD) statt. Und damit kehrt auch die allja\u0308hrliche Debatte u\u0308ber den politischen Gehalt der CSD-Events zuru\u0308ck. Immer wieder wird innerhalb queerer Communities u\u0308ber den Charakter vor allem der gro\xDFen CSD-Paraden gestritten. Die einen sehen darin u\u0308berkommerzialisierte Sauforgien, andere betonen, wie wichtig es ist, dass die Communities Gelegenheit bekommen, sich selbst und das Erreichte zu feiern. Der Christopher Street Day oder die Pride, wie sie international genannt wird, erinnert an die Unruhen 1969 in der New Yorker Christopher Street. Damals wehrte sich eine Gruppe von trans und homosexuellen Menschen vor der Szene-Bar Stone wall Inn gegen willku\u0308rliche Razzien durch die New Yorker Polizei. Solche staatlichen U\u0308bergriffe gegen queere Communities waren damals keine Seltenheit, nicht nur in den USA. Viele der queeren Held*innen von Stonewall kamen aus preka\u0308ren Lebensverha\u0308ltnissen und waren von Mehrfachdiskriminierung betroffen, etwa als People of Colour, Sexarbeitende oder Wohnungslose. Schon allein deshalb braucht queere Emanzipation den Blick fu\u0308r das gesamtgesellschaftliche Ganze. Wer das Erbe der Pride-Bewegung ernstnimmt, muss dort hinschauen, wo die Not am gro\u0308\xDFten ist - global genauso wie zu Hause. Zu den wesentlichen Dingen im Leben eines Menschen geho\u0308rt das Grundrecht auf Wohnen. Kaum jemand begreift Wohnungslosigkeit aber als besonderes Problem queerer Menschen. Dabei ist es wichtig, sich dem Thema auch aus einer queeren Perspektive zu na\u0308hern. Und es wird Zeit, dass die Auseinandersetzung`
  },
  {
    page: "page08",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/08.webp",
    first: "Daniel Bache",
    last: "Queer und obdachlos 2",
    twitter: `mit preka\u0308ren Lebenslagen innerhalb queerer Communities auf der Pride und daru\u0308ber hinaus an Sichtbarkeit gewinnt.

Queer
\u2026 ist ein Sammelbegriff fu\u0308r Personen, deren geschlechtliche Identita\u0308t (wer sie in Bezug auf ihr Geschlecht sind) und/oder sexuelle Orientierung (wen sie begehren oder wie sie lieben) nicht einer zweigeschlechtlichen Norm entspricht. Queer wird auch verwendet, um Bewegungen und Dinge zu bezeichnen, die mit queeren Menschen in Verbindung stehen, wie zum Beispiel die queere Szene, Queer Studies oder queere Filmfestivals. Ha\u0308ufig wird auch das Ku\u0308rzel LSBTIQ* fu\u0308r lesbische, schwule, bisexuelle, trans- und intergeschlechtliche sowie queere Menschen verwendet.
Es geht um die spezifischen Ursachen fu\u0308r preka\u0308re Lebenslagen bei queeren Menschen und um gruppenbezogenen Lo\u0308sungsstrategien fu\u0308r soziale Probleme. Dabei spielen gesundheitliche Bedarfe eine Rolle, Armut, Berufliches oder aber eben auch die Miete, Wohnen und Wohnungslosigkeit. Die Auseinandersetzung mit Wohnungslosigkeit bei lesbischen, schwulen, bisexuellen, trans- und intergeschlechtlichen sowie queeren Menschen, abgeku\u0308rzt LSBTIQ*, ist schon deshalb eine Herausforderung, weil wir wenig daru\u0308ber wissen. Es fehlt an verla\u0308sslichen Zahlen und Betrachtungen in der Fla\u0308che. Die Organisation FEANTSA, ein europaweiter Zusammenschluss nationaler Organisationen der Wohnungslosenhilfe, hat 2021 einen Bericht vero\u0308ffentlicht, nach dem 60 Prozent der Teilnehmenden einer Umfrage unter Wohnungslosen-Organisationen angaben, schon einmal mit Wohnungslosigkeit bei jungen Queers konfrontiert gewesen zu sein. U\u0308ber 70 Prozent gaben gleichzeitig an, dass es keine Ma\xDFnahmen seitens ihrer jeweiligen nationalen Regierung ga\u0308be, die das Thema direkt adressieren. In Deutschland warnt u.a. das Jugendnetzwerk Lambda e. V. seit Jahren davor, dass Wohnungslosigkeit - neben einer erho\u0308hten Suizidrate oder einem gro\u0308\xDFeren Risiko fu\u0308r psychische Erkrankungen - zu den gro\u0308\xDFten Gefahren in der Lebenswelt queerer Jugendlicher geho\u0308rt. Wohnungslosigkeit bei LSBTIQ* beschra\u0308nkt sich aber keineswegs nur auf die ju\u0308ngere Generation. In Berlin ist im vergangenen Jahr mit QUEERHOME* die deutschlandweit erste queere Anlaufstelle fu\u0308r wohnungslose queere Menschen gestartet. Kathrin* Schultz, eine der zwei Hauptamtlichen bei QUEERHOME*, arbeitet bereits seit sieben Jahren mit queeren Wohnungslosen und besta\u0308tigt, dass der Bedarf enorm ist. \u201EWir befinden uns gerade noch im Aufbau. Uns gibt es erst seit gut vier Monaten und uns haben schon rund 230 Anfragen erreicht\u201C, so Schultz. Die Ursachen von Wohnungslosigkeit bei queeren Menschen sind weitla\u0308ufig. So werden etwa nicht wenige nach ihrem Coming-out von der eigenen Familie vor die Tu\u0308r gesetzt. Andere sind aus queerfeindlichen Staaten geflohen, darunter nicht zuletzt auch EU-Staaten wie Ungarn oder Polen. Besonders problematisch: Wer aus einem EU-Staat in Deutschland auf der Stra\xDFe landet, erha\u0308lt keinen Geflu\u0308chteten-Status und damit kaum Schutz oder Anspruch auf soziale Leistungen. Auch Krankheit und Schulden fu\u0308hren oft dazu, dass queere Menschen und andere obdachlos werden. An die Anlaufstelle QUEERHOME* wenden sich aber nicht nur Queers, die bereits auf der Stra\xDFe leben, sondern auch solche, die sich in unzumutbaren Wohnverha\u0308ltnissen befinden. Hier geht es etwa um ha\u0308usliche Gewalt oder Wohnen ohne vertragliche Grundlage. Dabei ist eine eigene Wohnung oder ein eigenes Zimmer besonders wichtig fu\u0308r die Privatspha\u0308re und als Schutzraum. Bei trans Menschen`
  },
  {
    page: "page09",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/09.webp",
    first: "Daniel Bache",
    last: "Queer und obdachlos 3",
    twitter: "geht es oft zudem um den Zugang zu sanita\u0308ren Anlagen oder zu einer guten gesundheitlichen Versorgung, etwa bei der Angleichung an die bereits existierende geschlechtliche Identita\u0308t, der sogenannten Transition. Auch eine medizinische Versorgung bei HIV oder anderen Erkrankungen spielt eine gro\xDFe Rolle, psychosoziale Bedarfe, der Aufbau neuer familia\u0308rer Strukturen oder schlicht der Umstand, dass queere Menschen bei Projekten wie QUEERHOME* auf andere Queers treffen, die ein Gefu\u0308hl fu\u0308r ihre Lebenswirklichkeit haben und vor denen sie sich nicht outen mu\u0308ssen. \u201EWir wollen die Scham abbauen, denn das Problem betrifft viele Ratsuchende\u201C, sagt Schultz.In der Bundespolitik ist es derweil verda\u0308chtig still um dieses Thema. Der Aktionsplan \u201EQueer leben\u201C, den die Bundesregierung dieses Jahr an den Start gebracht hat, sieht bisher lediglich eine allgemeine Studie zur sozialen Situation von LSBTIQ* in Deutschland vor. Zu den wenigen Politiker*innen, die sich in der Vergangenheit mit dem Thema Wohnungslosigkeit bei LSBTIQ* befasst haben, geho\u0308rt Kathrin Vogler, Bundestagsabgeordnete aus Nordrhein-Westfalen und queerpolitische Sprecherin der Fraktion DIE LINKE. Sie kritisiert die Bundesregierung dafu\u0308r, dass sie soziale Fragen in der Queerpolitik weitra\u0308umig ausklammert. Im Gespra\u0308ch mit fiftyfifty erkla\u0308rte sie: \u201ENRW ist das a\u0308rmste westdeutsche Fla\u0308chenland. Gerade im Ruhrgebiet haben wir einen Armut-Hotspot. Die massiv steigenden Mieten, inzwischen nicht nur in den gro\xDFen Sta\u0308dten, erzeugen eine Konkurrenzsituation auf dem Wohnungsmarkt, die es allen marginalisierten Gruppen schwermacht, u\u0308berhaupt noch angemessenen Wohnraum zu finden. Wir brauchen auch deshalb mehr sozialen und bezahlbaren Wohnungsbestand in o\u0308ffentlicher Hand, um Diskriminierungen auszuschlie\xDFen.\u201C Derweil hat sich der Sonntagsclub e.V., Tra\u0308ger von QUEERHOME* und eine der a\u0308ltesten Initiativen fu\u0308r LSBTIQ* der ehemaligen DDR mit 50-ja\u0308hriger Vereinsgeschichte, fu\u0308r die Mitwirkung an dem Aktionsplan der Bundesregierung beworben und dafu\u0308r ein Konzept mit Fokus auf Wohnungs- und Obdachlosigkeit bei Queers vorgelegt. Die Bewerbung ist mit der irrsinnigen Begru\u0308ndung abgelehnt worden, es seien insgesamt zu viele eingegangen. Und das, obwohl QUEERHOME* als Mitorganisation der Bundesarbeitsgemeinschaft Wohnungslosenhilfe (BAGW) auch bundesweit arbeitet und bisher das einzige queere Projekt dieser Art ist. Deshalb ist es wichtig, dass die Bundesregierung explizit diejenigen einbindet, die zu LSBTIQ* und Wohnberatung oder Wohnungslosenhilfe arbeiten. Das wa\u0308re ein Signal von enormer Tragweite! Stattdessen verfestigt sich der Eindruck, dass soziale Themen in der Queerpolitik der Ampel eine untergeordnete Rolle spielen. Dabei hat die Bundesregierung zu ihrem Amtsantritt ausdru\u0308cklich einen \u201Equeerpolitischen Aufbruch\u201C versprochen, verliert sich aber nun an vielen Stellen in Symbolpolitik."
  },
  {
    page: "page10",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/10.webp",
    first: "Daniel Bache",
    last: "Queer und obdachlos 4",
    twitter: "Queerpolitik soll wohl mo\u0308glichst wenig Geld kosten, dafu\u0308r aber mo\u0308glichst viele Wahlstimmen abgreifen. Das wirft grundsa\u0308tzlich die Frage auf, inwieweit es ausreicht, Aspekte queerer Emanzipation an irgendeine Regierung zu delegieren - auch wenn sie sich selbst als gesellschaftspolitisch progressiv versteht. Damit queere Infrastruktur als ein Teil o\u0308ffentlicher Daseinsfu\u0308rsorge anerkannt wird und die sozialen No\u0308te queerer Communities ernstgenommen werden, bedarf es eines deutlich ka\u0308mpferischeren und gesellschaftskritischeren Auftretens in der O\u0308ffentlichkeit. Das bedeutet, dass queeres Engagement ein Gefu\u0308hl fu\u0308r breitere gesellschaftliche Auseinandersetzungen gewinnen und sta\u0308rker auf Konfrontation mit dem Staat gehen muss. Das gilt auch fu\u0308r Verba\u0308nde, selbst wenn sie riskieren, Fo\u0308rdermittel staatlicherseits zu verlieren. Die ritualartige Debatte um die Re-Politisierung von CSDs darf sich also nicht in blo\xDFer Stonewall-Nostalgie oder radikalen Posen erscho\u0308pfen. Entscheidend ist, wo die No\u0308te am gro\u0308\xDFten sind und wie einander geholfen werden kann. Politisch, aber auch im allta\u0308glichen Umgang. Es geht um Solidarita\u0308t, um das Wesentliche. Dafu\u0308r braucht es breite gesellschaftliche Bu\u0308ndnisse. \u201EZu Beginn der Homosexuellenbewegung in Westdeutschland bestand ein enger Zusammenhang zwischen sozialen und rechtlichen Gleichheitsthemen, der sich leider in der A\u0308ra des Neoliberalismus deutlich in Richtung einer eher rechtlich verstandenen Gleichstellungspolitik verschoben hat. Umgekehrt hat dies dazu gefu\u0308hrt, dass soziale Bewegungen Emanzipationsfragen nicht mehr ganz selbstversta\u0308ndlich mit bearbeiten. Damit verschenken beide wichtiges Potenzial, das sie gemeinsam entfalten ko\u0308nnten\u201C, so die LINKEN-Politikerin Kathrin Vogler. Kathrin Schultz a\u0308u\xDFert daher den Wunsch, dass sich bundesweit verschiedene Akteur*innen zusammenschlie\xDFen, um soziale Forderungen queerer Communities als Protest auf die Stra\xDFe zu tragen. Es wa\u0308re wu\u0308nschenswert, dass das funktioniert - und zwar schnellstmo\u0308glich."
  },
  {
    page: "page11",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/11.webp",
    first: "Thomas Hirsch",
    last: "Aufrufe gegen Gleichgu\u0308ltigkeit",
    twitter: "Wie aktuell und brisant, mitunter auch direkt die Werke von Jenny Holzer sind, zeigt sich in ihrer Ausstellung in Du\u0308sseldorf in der losen Anha\u0308ufung menschlicher Knochen. Einige sind von Silberba\u0308ndern - wie Identifikationsmarken - mit einem eingravierten Text umfangen, der die verschiedenen Perspektiven der Verbrechen zu Wort kommen la\u0308sst: Holzer hat dieses Mahnmal urspru\u0308nglich als Reaktion auf die sexuelle Gewalt gegen Frauen und Ma\u0308dchen als Waffe im Jugoslawien-Krieg geschaffen; hier nun ist es eine Anklage gegen alle Grausamkeiten vom Zweiten Weltkrieg bis hin zum Ukrainekrieg. Es ist eine dramatische Verdeutlichung im Werk der New Yorker Ku\u0308nstlerin (*1950), das sich ansonsten eher diskret in die Gesellschaft einschleicht und ihr den Spiegel vor Augen ha\u0308lt. Jenny Holzers zentrales Verfahren ist von Anfang an die textliche Mitteilung, die sie multimedial, a\u0308sthetisch arrangiert mitten im Alltag platziert. Sie begann in den 1970er Jahren mit der Verteilung der \u201ETruisms\u201C: In Schreibmaschinenschrift auf Papier waren Alltagsweisheiten zu lesen, die, teils philosophischen Ursprungs, durch inflationa\u0308ren Gebrauch abgeschliffen sind und kaum in ihrer Bedeutung und Tiefe hinterfragt werden. Darauf folgten die \u201EInflammatory Essays\u201C, die mit je 100 Worten in 20 Zeilen auf farbigem Papier als Plakate radikale Vorschla\u0308ge, Befehle oder Prophezeiungen im kulturellen aber auch politischen Bereich bu\u0308ndeln. Beru\u0308hmt wurde Jenny Holzer vor allem mit ihren LED-Laufschriften in leuchtenden Buchstaben in einer schwarzen Konstruktion im Innenraum ebenso wie in der Stadt. In ihrer kontinuierlichen Flie\xDFgeschwindigkeit nie auf einmal zu sehen, erschlie\xDFen sie sich erst im wiederholten Lesen. Holzer bedient sich hier der U\u0308berfutung mit Informationen parallel zu den am unteren Bildschirmrand eingeblendeten aktuellen Nachrichten. Ihre Leuchtschriften und Laufba\u0308nder - hoch u\u0308ber den Ko\u0308pfen der Passanten oder wie aus dem Boden perlend - wirken ganz ohne vordergru\u0308ndigen Kontext bedrohlich dra\u0308ngend und entlarven die Hohlheit von Floskeln und regen zum Nachdenken an. In Du\u0308sseldorf sind aber auch die Steinba\u0308nke ausgestellt, deren gemei\xDFelte Texte genauso wenig aus dem Kopf gehen. Und dann zeigt sich, was fu\u0308r eine Macht Sprache und Text besitzen, wie sie vom Denken Besitz ergreifen, aber auch was fu\u0308r Chancen des Begreifens und der Durchdringung sie bieten. Wie sie zu Formen der Mitteilung und der Kommunikation verbotener Gedanken werden. Im Fortschreiten ihres Werkes ist Jenny Holzer zunehmend politisch geworden und arbeitet dazu mittlerweile auch mit Malerei. Ihre Gema\u0308lde in der Bel Etage von K21 vergro\u0308\xDFern interne, partiell geschwa\u0308rzte Untersuchungsberichte u.a. zu Misshandlungen irakischer Gefangener durch die US-Armee. Die Sprache deckt hier auf, auch wenn sie selbst verborgen bleibt. Man muss die Betroffenen zu Wort kommen lassen, mit allem Nachdruck und aller Aufmerksamkeit."
  },
  {
    page: "page12",
    avatar: "https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/12.webp",
    first: "Werbung",
    last: "-",
    twitter: "Hier sieht Sie jeder. Hauswirtschaftliche Dienstleistungen Rufen Sie uns an. Unsere Mitarbeiterinnen helfen Ihnen gern. 0211 1719342 oder info@casa-blanka.de kanzlei f\xFCr arbeitsrecht \u2013 d\xFCsseldorf gewerkschaftlich orientiert \u2013 fachlich kompetent \u2013 engagiert wir beraten und vertreten besch\xE4ftigte, betriebs-, personal-, gesamtbetriebs-, konzernbetriebs- und eurobetriebsr\xE4te, gewerkschaften und arbeitnehmervertreter im aufsichtsrat kooperationspartner: m\xFCnchen: seebacher.\uFB02eischmann.m\xFCller \u2013 www.sfm-arbeitsrecht.de hamburg: gaidies heggemann & partner \u2013 www.gsp.de k\xF6ln: towaRA:Arbeitsrecht GbR \u2013 www.towara.com grabenstra\xDFe 17 \u2022 40213 d\xFCsseldorf \u2022 fon 0211 550 200 kanzlei@sl-arbeitsrecht.de \u2022 www.sl-arbeitsrecht.de Dr. Uwe Silberberger | Dr. Frank Lorenz | Anne Quante Juni 2023 Die zakk-Kneipe ist ge\xF6ffnet: Mittwoch bis Samstag ab 16 Uhr frischer Kuchen, hausgemachte Pizza und vieles mehr! Jeden Sonntag Fr\xFChst\xFCck ab 9.30 Uhr! Do 1.6. Lesung mit Farah Bouamar & Talk Im Rahmen des Projekts \u201Enichts anders\u201C / D\xFCsseldorfer Literaturtage So 4.6. attac politisches Fr\xFChst\xFCck Thema: Soziale Ungleichheit schw\xE4cht die Menschen und zerst\xF6rt das Klima So 4.6. Jazzslam Im Rahmen der D\xB4dorfer Literaturtage. Moderation Jean-Philippe Kindler Mo 5.6. D\xFCsseldorfer Tauschring: Fr\xFChst\xFCck Infos und Austausch f\xFCr alle Interessierten So 11.6. Echt oder Fake In Echt-Zeit Fake-Facts identifizieren! Mo 12.6. WDR 5 Radioshow Aktuelles Kabarett, erstaunliche Talks, ausgesuchte Live-Musik! Fr 16.6. HitQuiz - den Song kenn ich! Das gro\xDFe Quiz mit zooey, Niekohle und DJ Ingwart. So 18.6. Schumann goes Hip-Hop Das Crossover Hip-Hop Projekt performt in der Tonhalle! Mo 19.6. Curtis Harding \u201EIf Words Were Flowers\u201CTour 2023 Do 22.6. Von wegen Sokrates Das Philosophische Caf\xE9 I know this much is true? Was k\xF6nnen wir wirklich wissen? Fr 23.6. Anjas Singabend Zusammen singt man weniger allein Sa 24.6. Flingern Nord: Vom Flinger Broich bis zum Uhrenturm Ein historischer Stadtteilrundgang mit Kaspar Michels Sa 24.6. Wladimir Kaminer liest gute Texte und legt anschlie\xDFend Platten auf! Di 27.6. Leseb\xFChne live im zakk: Abend mit Goldrand Mit Alex Burkhard, Bernard Hoffmeister & Frank Kl\xF6tgen sowie Aylin Celik. zakk.de \u2022 Fichtenstr. 40 \u2022 D\xFCsseldorf Putzen, waschen, b\xFCgeln, einkaufen, Arztbesuche. Ich helfe Ihnen im Haushalt. Professionell und preiswert. Bin sehr nett, spreche sehr gut deutsch, k\xFCmmere mich f\xFCrsorglich und schnell um Ihre W\xFCnsche. Nur 25 Euro die Stunde inklusive Anfahrt. Probieren Sie es aus. Sie werden zufrieden sein. Ihre Giorgiana Giorgiana Pruteanu +49 176 66993209 Deshalb f\xF6rdern wir die verschiedensten sozialen Projekte in D\xFCsseldorf. Damit die Herzen wirklich aller D\xFCsseldorfer h\xF6herschlagen. Unser Herz schl\xE4gt f\xFCr D\xFCsseldorf. Und f\xFCr alle Menschen in unserer Stadt. Foto: Robert Eikelpoth marktplatz_13 Rudi Becker erh\xE4lt eine hohe Auszeichnung f\xFCr seinen unerm\xFCdlichen Einsatz f\xFCr nierenkranke Menschen. Foto: Bundesverband \u2022 Kfz-Schadengutachten \u2022 Kfz-Wertgutachten \u2022 Gebrauchtwagenbewertungen \u2022 Oldtimerbewertungen Kfz-Sachverst\xE4ndigenund Ing. -B\xFCro Renken Mobil: 0178 \u2013 163 68 82 Hauptuntersuchungen | \xC4nderungsabnahmen | Gas-System-Einbaupr\xFCfungen AMTLICHE FAHRZEUGPR\xDCFUNGEN WIR HELFEN TIEREN IN DER NOT! Gesch\xE4ftsstelle Tel.: (02 11) 13 19 28 Clara-Vahrenholz-Tierheim R\xFCdigerstra\xDFe 1 40472 D\xFCsseldorf Tel.: (02 11) 65 18 50 Spendenkonten: (Spenden an uns sind steuerlich absetzbar) Kreissparkasse D\xFCsseldorf Stadtsparkasse D\xFCsseldorf IBAN: DE 11 3015 0200 0001 0409 30 IBAN: DE 92 3005 0110 0019 0687 58 R\xFCdigerstra\xDFe 1 40472 D\xFCsseldorf Anwaltskanzlei ROTH \xB7 AYDIN Arbeitsrecht & Sozialrecht Te l: 0211 / 626 044 Fax: 0211 / 626 047 email: info@roth-aydin.de K\xFChlwetter Stra\xDFe 49 40239 D\xFCsseldorf r o t h - a y d i n . d e Jewei Jeweil ls um s um 1 18:00 Uhr. 03. Januar, Di. 2023 07. M\xE4rz, Di. 2023 02. Mai, Di. 2023 07. November, Di. 2023 07. Februar, Di. 2023 04. April, Di. 2023 06. Juni, Di. 2023 01. August, Di. 2023 10. Oktober, Di. 2023 05. Dezember, Di. 2023 2023 IBAN: DE23 3702 0500 0008 0901 00 Achtung: Alle Termine finden im AMMNESTY B\xDCRO statt. Achtung: Alle Termine finden im AMMNESTY B\xDCRO statt. AMMNESTY B\xDCRO, Grafenberger Allee 56, 40237 D\xFCsseldorf 04. Juli, Di. 2023 05. September, Di. 2023 INFOABENDE www.amnesty-duesseldorf.de Informieren & Engagieren. 2023 \u2013 sei dabei! Achtung: Alle Termine \uFB01nden im AMMNESTY B\xDCRO statt. AMMNESTY B\xDCRO, Grafenberger Allee 56, 40237 D\xFCsseldorf Jeweils um 18:00 Uhr. SPENDENKONTO Bank f\xFCr Sozialwirtschaft IBAN: DE23 3702 0500 0008 0901 00 06. Juni, Di. 2023 04. Juli, Di. 2023 01. August, Di. 2023 05. September, Di. 2023 10. Oktober, Di. 2023 07. November, Di. 2023 Gemeinsam gegen Wohnungslosigkeit Housing First D\xFCsseldorf e.V. sucht Mietwohungen. Housing First m\xF6chte Obdachlose dauerhaft in Wohnungen bringen. Sie m\xF6chten uns unterst\xFCtzen? Wir suchen private Wohnungseigent\xFCmer:innen, Investor:innen sowie Wohnungsbaugesellschaften, die bereit sind Wohnraum zurVerf\xFCgung zu stellen. Melden Sie sich bei uns! info@housingfirstduesseldorf.de 0211 976 323 48 www.housingfirstduesseldorf.de"
  }
  /* {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/13.webp',
    first: 'Scott',
    last: 'Smerchek',
    twitter: '@smerchek',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/14.webp',
    first: 'Giovanni',
    last: 'Benussi',
    twitter: '@giovannibenussi',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/15.webp',
    first: 'Igor',
    last: 'Minar',
    twitter: '@IgorMinar',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/16.webp',
    first: 'Brandon',
    last: 'Kish',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/17.webp',
    first: 'Arisa',
    last: 'Fukuzaki',
    twitter: '@arisa_dev',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/18.webp',
    first: 'Alexandra',
    last: 'Spalato',
    twitter: '@alexadark',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/19.webp',
    first: 'Cat',
    last: 'Johnson',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/20.webp',
    first: 'Ashley',
    last: 'Narcisse',
    twitter: '@_darkfadr',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/21.webp',
    first: 'Edmund',
    last: 'Hung',
    twitter: '@_edmundhung',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/22.webp',
    first: 'Clifford',
    last: 'Fajardo',
    twitter: '@cliffordfajard0',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/23.webp',
    first: 'Erick',
    last: 'Tamayo',
    twitter: '@ericktamayo',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/24.webp',
    first: 'Paul',
    last: 'Bratslavsky',
    twitter: '@codingthirty',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/25.webp',
    first: 'Pedro',
    last: 'Cattori',
    twitter: '@pcattori',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/26.webp',
    first: 'Andre',
    last: 'Landgraf',
    twitter: '@AndreLandgraf94',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/27.webp',
    first: 'Monica',
    last: 'Powell',
    twitter: '@indigitalcolor',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/28.webp',
    first: 'Brian',
    last: 'Lee',
    twitter: '@brian_dlee',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/29.webp',
    first: 'Sean',
    last: 'McQuaid',
    twitter: '@SeanMcQuaidCode',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/30.webp',
    first: 'Shane',
    last: 'Walker',
    twitter: '@swalker326',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/31.webp',
    first: 'Jon',
    last: 'Jensen',
    twitter: '@jenseng',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/32.webp',
    first: 'Clifford',
    last: 'Fajardo',
    twitter: '@cliffordfajard0',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/33.webp',
    first: 'Erick',
    last: 'Tamayo',
    twitter: '@ericktamayo',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/34.webp',
    first: 'Paul',
    last: 'Bratslavsky',
    twitter: '@codingthirty',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/35.webp',
    first: 'Pedro',
    last: 'Cattori',
    twitter: '@pcattori',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/36.webp',
    first: 'Andre',
    last: 'Landgraf',
    twitter: '@AndreLandgraf94',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/37.webp',
    first: 'Monica',
    last: 'Powell',
    twitter: '@indigitalcolor',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/39.webp',
    first: 'Brian',
    last: 'Lee',
    twitter: '@brian_dlee',
  },
  {
    page : "page", 
    avatar:
      'https://raw.githubusercontent.com/axel-sb/remix-tutorial/main/app/images/453/39.webp',
    first: 'Sean',
    last: 'McQuaid',
    twitter: '@SeanMcQuaidCode',
  }, */
].forEach((contact) => {
  fakeContacts.create({
    ...contact,
    id: `${contact.page}`
  });
});

// app/root.tsx
var import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), action = async () => {
  let contact = await createEmptyContact();
  return (0, import_node2.redirect)(`/contacts/${contact.id}/edit`);
}, links = () => [
  { rel: "stylesheet", href: app_default }
], loader = async ({ request }) => {
  let q = new URL(request.url).searchParams.get("q"), contacts = await getContacts(q);
  return (0, import_node2.json)({ contacts, q });
};
function App() {
  let { contacts, q } = (0, import_react2.useLoaderData)(), navigation = (0, import_react2.useNavigation)(), submit = (0, import_react2.useSubmit)(), searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
  return (0, import_react3.useEffect)(() => {
    let searchField = document.getElementById("q");
    searchField instanceof HTMLInputElement && (searchField.value = q || "");
  }, [q]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "de", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "sidebar", className: "subject", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Juni 2023" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react2.Form,
            {
              id: "search-form",
              onChange: (event) => {
                let isFirstSearch = q === null;
                submit(event.currentTarget, {
                  replace: !isFirstSearch
                });
              },
              role: "search",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "input",
                  {
                    id: "q",
                    "aria-label": "Search contacts",
                    className: searching ? "loading" : "",
                    defaultValue: q || "",
                    placeholder: "Search",
                    type: "search",
                    name: "q"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 79,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "search-spinner", "aria-hidden": !0, hidden: !searching }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 88,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 69,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", children: "New" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { children: contacts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "horizontal-media-scroller", children: contacts.map(
          (contact) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react2.NavLink,
            {
              className: ({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "",
              to: `contacts/${contact.page}`,
              children: [
                contact.page ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    alt: `${contact.first} ${contact.last} avatar`,
                    src: contact.avatar
                  },
                  contact.avatar,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 106,
                    columnNumber: 19
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { children: "No Name" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 112,
                  columnNumber: 19
                }, this),
                " ",
                contact.favorite ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "\u2605" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 114,
                  columnNumber: 43
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 99,
              columnNumber: 21
            },
            this
          ) }, contact.page, !1, {
            fileName: "app/root.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { children: "No contacts" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: navigation.state === "loading" && !searching ? "loading" : "",
          id: "detail",
          className: "subject2",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 126,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/contacts.$contactId.destroy.tsx
var contacts_contactId_destroy_exports = {};
__export(contacts_contactId_destroy_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var action2 = async ({ params }) => ((0, import_tiny_invariant2.default)(params.contactId, "Missing contactId param"), await deleteContact(params.contactId), (0, import_node3.redirect)("/"));

// app/routes/contacts.$contactId_.edit.tsx
var contacts_contactId_edit_exports = {};
__export(contacts_contactId_edit_exports, {
  action: () => action3,
  default: () => EditContact,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), action3 = async ({ params, request }) => {
  (0, import_tiny_invariant3.default)(params.contactId, "Missing contactId param");
  let formData = await request.formData(), updates = Object.fromEntries(formData);
  return console.log(
    "\u2766   \u2E3A\u25B6\uFE0E   action   \u2E3A\u25B6\uFE0E   Object.fromEntries(formData):",
    Object.fromEntries(formData)
  ), await updateContact(params.contactId, updates), (0, import_node4.redirect)(`/contacts/${params.contactId}`);
}, loader2 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.contactId, "Missing contactId param");
  let contact = await getContact(params.contactId);
  if (!contact)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node4.json)({ contact });
};
function EditContact() {
  let { contact } = (0, import_react4.useLoaderData)(), navigate = (0, import_react4.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Form, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Name" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          defaultValue: contact.first,
          "aria-label": "First name",
          name: "first",
          type: "text",
          placeholder: "First"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          "aria-label": "Last name",
          defaultValue: contact.last,
          name: "last",
          placeholder: "Last",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Twitter" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          defaultValue: contact.twitter,
          name: "twitter",
          placeholder: "@jack",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Avatar URL" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          "aria-label": "Avatar URL",
          defaultValue: contact.avatar,
          name: "avatar",
          placeholder: "https://example.com/avatar.jpg",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId_.edit.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Notes" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { defaultValue: contact.notes, name: "notes", rows: 6 }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", children: "Save" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => navigate(-1), type: "button", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contacts.$contactId_.edit.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/contacts.$contactId.tsx
var contacts_contactId_exports = {};
__export(contacts_contactId_exports, {
  action: () => action4,
  default: () => Contact,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action4 = async ({
  params,
  request
}) => {
  (0, import_tiny_invariant4.default)(params.contactId, "Missing contactId param");
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true"
  });
}, loader3 = async ({ params }) => {
  (0, import_tiny_invariant4.default)(params.contactId, "Missing contactId param");
  let contact = await getContact(params.contactId);
  if (!contact)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node5.json)({ contact });
};
function Contact() {
  let { contact } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: "contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    contact.avatar ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        alt: `${contact.first} ${contact.last} avatar`,
        src: contact.avatar
      },
      contact.avatar,
      !1,
      {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 40,
        columnNumber: 11
      },
      this
    ) : null,
    contact.first || contact.last ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: contact.first }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
        " ",
        contact.last,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Favorite, { contact }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "No Name" }, void 0, !1, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    " ",
    contact.twitter ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: contact.twitter }, void 0, !1, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 57,
      columnNumber: 28
    }, this) : null,
    contact.notes ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: contact.notes }, void 0, !1, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 58,
      columnNumber: 26
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "edit-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Edit" }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react5.Form,
        {
          action: "destroy",
          method: "post",
          onSubmit: (event) => {
            confirm(
              "Please confirm you want to delete this record."
            ) || event.preventDefault();
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Delete" }, void 0, !1, {
            fileName: "app/routes/contacts.$contactId.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var Favorite = ({ contact }) => {
  let fetcher = (0, import_react5.useFetcher)(), favorite = contact.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
      name: "favorite",
      value: favorite ? "false" : "true",
      children: favorite ? "\u2605" : "\u2606"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 92,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { id: "index-page", children: "fifty-fifty digital" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-53SZMTLV.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XDA55CGT.js", "/build/_shared/chunk-USNPOF7D.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RQ4JUADO.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-B6YRXK3V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contacts.$contactId": { id: "routes/contacts.$contactId", parentId: "root", path: "contacts/:contactId", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId-DTNFMKJ5.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/contacts.$contactId.destroy": { id: "routes/contacts.$contactId.destroy", parentId: "routes/contacts.$contactId", path: "destroy", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId.destroy-CD54FBRA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contacts.$contactId_.edit": { id: "routes/contacts.$contactId_.edit", parentId: "root", path: "contacts/:contactId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId_.edit-WNUVIMQJ.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "d1bcbb11", hmr: { runtime: "/build/_shared/chunk-USNPOF7D.js", timestamp: 1698188734700 }, url: "/build/manifest-D1BCBB11.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contacts.$contactId.destroy": {
    id: "routes/contacts.$contactId.destroy",
    parentId: "routes/contacts.$contactId",
    path: "destroy",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_destroy_exports
  },
  "routes/contacts.$contactId_.edit": {
    id: "routes/contacts.$contactId_.edit",
    parentId: "root",
    path: "contacts/:contactId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_edit_exports
  },
  "routes/contacts.$contactId": {
    id: "routes/contacts.$contactId",
    parentId: "root",
    path: "contacts/:contactId",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
