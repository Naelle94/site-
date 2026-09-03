// Snapshot HubSpot — extrait le 2026-09-03 (portail Gratia #40058607)
// Ces données sont figées au moment de l'extraction. Le statut (MQL / Converti / Signé)
// et la classification (Entreprise / Poubelle) que l'utilisateur choisit ensuite dans le
// dashboard sont, elles, sauvegardées localement (voir lib/storage.ts) et survivent aux
// rechargements de page.

export const HUBSPOT_PORTAL_ID = "40058607";

export function hubspotContactUrl(id: string): string {
  return `https://app.hubspot.com/contacts/${HUBSPOT_PORTAL_ID}/record/0-1/${id}`;
}

export interface BDevLead {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  jobtitle?: string;
  phone?: string;
  city?: string;
  country?: string;
  createdate: string; // ISO
  hubspotStage: "lead" | "opportunity";
}

export interface FormSubmission {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  jobtitle?: string;
  phone?: string;
  createdate: string; // ISO
  hubspotStage: string;
  formName: string;
}

// --- Leads [BDev] — source HubSpot: hs_object_source_detail_1 = "BDev Ventures by WinDifferent" ---
export const BDEV_LEADS: BDevLead[] = [
  { id: "246262963113", firstname: "Jason", lastname: "Perry", email: "jason.perry@octavegroup.com", jobtitle: "Underwriting Operations Analyst", city: "London", country: "United States", createdate: "2026-09-03T15:47:32.654Z", hubspotStage: "opportunity" },
  { id: "244793063248", firstname: "Julia", lastname: "Miller", email: "procurement@luthresearch.com", city: "San Diego", country: "United States", createdate: "2026-08-27T20:12:34.069Z", hubspotStage: "opportunity" },
  { id: "244740208440", firstname: "Richard", lastname: "Holcomb", email: "rholcomb@methodsense.com", jobtitle: "Chief Growth Officer", city: "Raleigh", country: "United States", createdate: "2026-08-27T16:17:32.669Z", hubspotStage: "opportunity" },
  { id: "244342143864", firstname: "Mary", lastname: "Martin", email: "mmartin@dualinsurance.com", jobtitle: "Senior Vice President", city: "Raleigh", country: "United States", createdate: "2026-08-25T21:22:33.380Z", hubspotStage: "lead" },
  { id: "242984529706", firstname: "Zachary", lastname: "Savas", email: "zsavas@iwerk.com", jobtitle: "President", city: "Royal Oak", country: "United States", createdate: "2026-08-19T13:27:32.844Z", hubspotStage: "opportunity" },
  { id: "242595384177", firstname: "Chandler", lastname: "Kirby", email: "ckirby@mmlcapital.com", jobtitle: "Investment Associate", phone: "+1 646 362 0942", city: "New York", country: "United States", createdate: "2026-08-17T21:47:32.491Z", hubspotStage: "opportunity" },
  { id: "240331205549", firstname: "Ian", lastname: "Watson", email: "iwatson@celent.com", jobtitle: "Head of Risk Management Research", city: "Essex", country: "United States", createdate: "2026-08-06T19:07:33.021Z", hubspotStage: "opportunity" },
  { id: "240322414163", firstname: "Brian", lastname: "Fleming", email: "brian.fleming@igsboston.com", jobtitle: "Managing Director", city: "Boston", country: "United States", createdate: "2026-08-06T16:22:38.743Z", hubspotStage: "opportunity" },
  { id: "239607471911", firstname: "Audrea", lastname: "Turgeman", email: "audreaturgeman@newportai.com", jobtitle: "Director of International Sales Strategy", phone: "+1 413-459-2976", city: "Orange", country: "United States", createdate: "2026-08-03T18:27:32.787Z", hubspotStage: "opportunity" },
  { id: "237387270505", firstname: "Alphonse", lastname: "Romero", email: "aromero@acupoll.com", jobtitle: "Director, Operations and Analytics", city: "Cincinnati", country: "United States", createdate: "2026-07-24T16:42:35.762Z", hubspotStage: "opportunity" },
  { id: "235195857688", firstname: "Annette", lastname: "Griffin", email: "annette.griffin@riospartners.com", jobtitle: "Senior Consultant", city: "Washington", country: "United States", createdate: "2026-07-14T16:27:33.347Z", hubspotStage: "opportunity" },
  { id: "225942922319", firstname: "Nathan", lastname: "Phelps", email: "nathan.phelps@usadvisors.com", jobtitle: "Junior Analyst", phone: "415.501.8039", city: "San Francisco County", country: "United States", createdate: "2026-06-02T23:07:33.127Z", hubspotStage: "opportunity" },
  { id: "221592717338", firstname: "Nathan", lastname: "Johnson", email: "njohnsonpaul@gemcorp.net", jobtitle: "General Manager", city: "London", country: "United Kingdom", createdate: "2026-05-14T12:27:33.134Z", hubspotStage: "lead" },
  { id: "221353613409", firstname: "Nannette", lastname: "Kordus", email: "nkordus@proterrapartners.com", jobtitle: "Chief Human Resources Officer", phone: "612.257.7902", city: "Minneapolis", country: "United States", createdate: "2026-05-13T12:52:34.150Z", hubspotStage: "opportunity" },
  { id: "220215315090", firstname: "Balaji", lastname: "Venkatrao", email: "bvenkatrao@crestlineinc.com", jobtitle: "Investment Director, Crestline Europe", phone: "+44 20 7747 2168", city: "London", country: "United Kingdom", createdate: "2026-05-07T11:47:34.145Z", hubspotStage: "lead" },
  { id: "218908387206", firstname: "Maxime", lastname: "Le", email: "maxime.lefloch@gibuk.com", city: "Greater London", country: "United Kingdom", createdate: "2026-04-30T12:07:33.306Z", hubspotStage: "lead" },
  { id: "217695881992", firstname: "John", lastname: "Farr", email: "jfarr@columbiawestcap.com", city: "Maricopa", country: "United States", createdate: "2026-04-24T17:22:32.394Z", hubspotStage: "opportunity" },
  { id: "214657468269", firstname: "Gregg", lastname: "Schor", email: "gschor@protegrityadvisors.com", jobtitle: "Chief Executive Officer", phone: "631.285.3172", city: "Beaufort", country: "United States", createdate: "2026-04-09T16:52:33.194Z", hubspotStage: "opportunity" },
];

// --- New Form Submissions — source HubSpot: hs_object_source_label = "FORM" (formulaire "Scope your project") ---
export const FORM_SUBMISSIONS: FormSubmission[] = [
  { id: "246270790151", firstname: "Moira", lastname: "Schieke", email: "moira@connexus-health.com", createdate: "2026-09-03T15:33:11.687Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "243963719548", firstname: "Mariana", lastname: "Manic", email: "manicmariana1@gmail.com", createdate: "2026-08-24T12:37:26.564Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "243769657683", firstname: "Angelo", lastname: "Eugen", email: "angeloeugen2@gmaio.com", createdate: "2026-08-23T11:38:29.825Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "243624573735", firstname: "Nutuconstantin", lastname: "Nutu", email: "constantinutu@36gmail.com", createdate: "2026-08-22T12:48:36.362Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "242935385659", firstname: "Samira", lastname: "ETTAQY", email: "ettaqy.samira20@gmail.com", createdate: "2026-08-20T15:42:24.940Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "243187213160", firstname: "Nitu", lastname: "Marius", email: "nitumarius38967@gmail.com", createdate: "2026-08-20T11:22:19.645Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "243171458976", firstname: "Garamia.ion", lastname: "N/A", email: "garamiaion@yahoo.com", createdate: "2026-08-20T10:21:15.721Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "242936775729", firstname: "Vasilica Violeta", lastname: "Stratone", email: "violetastratone09@gmail.com", createdate: "2026-08-19T08:53:26.180Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "242289824287", firstname: "Laurentiu", lastname: "Țâru", email: "laurentiutaru54@gmail.com", createdate: "2026-08-16T10:33:43.709Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "241792512557", firstname: "test", lastname: "test", email: "test11111111111111@gmail.com", createdate: "2026-08-13T17:37:59.997Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "241564711205", firstname: "AmirSaber", lastname: "Sharifi", email: "amirsaber@convenientlicensing.com", createdate: "2026-08-12T17:25:03.686Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "241492323702", firstname: "Soma", lastname: "Test 4", email: "soma.somorjai@gogratia.com", createdate: "2026-08-12T11:57:46.014Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "240534506670", firstname: "Rick", lastname: "Custodio", email: "rick.custodio@harver.com", jobtitle: "Chief Financial Officer", createdate: "2026-08-07T13:26:31.005Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238552667054", firstname: "Cicodeica", lastname: "Mihaela", email: "cicodeicam@gam.com", createdate: "2026-07-29T19:34:19.016Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238545973552", firstname: "Nicolae", lastname: "N/A", email: "nicudumitrache38@yahoo.com", createdate: "2026-07-29T18:03:09.437Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238533036440", firstname: "Jessyca", lastname: "Dudley", email: "jessyca@alltogetherbold.com", jobtitle: "Senior Strategy Advisor", createdate: "2026-07-29T15:53:35.473Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238243448619", firstname: "Karla", lastname: "Venerio", email: "karla.venerio@gmail.com", createdate: "2026-07-28T12:42:35.334Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238140157094", firstname: "Sxgqmakdt", lastname: "N/A", email: "ibob.e.ru.bo.f5.9.7@gmail.com", createdate: "2026-07-28T02:04:25.016Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238122573424", firstname: "Shelly", lastname: "Eubanks", email: "shellyb6667@gmail.com", createdate: "2026-07-28T01:44:51.746Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "238117146272", firstname: "Tina", lastname: "Willyard", email: "willyardtina9@gmail.com", createdate: "2026-07-28T00:46:24.963Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "237378287482", firstname: "QSgNVNhiSvAEZAESKVO", lastname: "N/A", email: "b.er.ohi.ye.do6.20@gmail.com", createdate: "2026-07-24T16:34:22.413Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "237175847792", firstname: "Viktoria", lastname: "TEST 3", email: "viktoria.molnar@gogratia.com", createdate: "2026-07-23T17:33:33.181Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "235213171987", firstname: "Ttjhfd", lastname: "Dghj", email: "tiviyo5437@promcool.com", createdate: "2026-07-14T17:01:04.935Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "232362312622", firstname: "Jeanne", lastname: "Meyer", email: "jeanne@authentic-intel.co", jobtitle: "Chief Executive Officer", createdate: "2026-06-30T14:24:09.087Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "225994492431", firstname: "Diego", lastname: "Ortiz", email: "diego@igbo.mx", jobtitle: "Investment Analyst", createdate: "2026-06-03T07:06:19.912Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "220046323269", firstname: "Courtney", lastname: "Stewart", email: "courtney@durablecap.com", jobtitle: "Director of Business Operations", phone: "301 761 3922", createdate: "2026-05-06T15:56:34.023Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "218912572471", firstname: "Joao", lastname: "Melo", email: "jpforny@rjps.dev", createdate: "2026-04-30T12:59:41.724Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "216466619416", firstname: "Abid jan", lastname: "Baloch", email: "ka81764@gmail.com", createdate: "2026-04-19T02:44:37.673Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "216219482499", firstname: "Cetta", lastname: "Adhipurusa", email: "cetta.adhipurusa@arghajata.com", jobtitle: "Consultant", createdate: "2026-04-17T14:33:11.101Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "215484205908", firstname: "Abuzar", lastname: "Khan", email: "abuzarkhan946977@gmail.com", createdate: "2026-04-14T03:43:09.963Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "213770312592", firstname: "Timothy", lastname: "oreke", email: "breazykaay9@gmail.com", createdate: "2026-04-05T14:00:43.058Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "211919242081", firstname: "A", lastname: "A", email: "olafbaymax9@gmail.com", createdate: "2026-03-27T06:42:00.856Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "211005441424", firstname: "Kelvin oghenemaro", lastname: "Ogbara", email: "ogbarakelvinmaro@gmail.com", createdate: "2026-03-23T12:14:43.385Z", hubspotStage: "lead", formName: "Scope your project" },
  { id: "209115444390", firstname: "Sara", lastname: "Casamento", email: "sara.casamento@crosstreecapital.com", jobtitle: "Director of Operations", phone: "813-540-6249", createdate: "2026-03-16T14:29:24.305Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "208488789926", firstname: "D", lastname: "S", email: "devarajsbr@gmail.com", createdate: "2026-03-11T07:51:19.380Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "205599411519", firstname: "Genevieve", lastname: "Castelline", email: "gcastelline@quadrantmgt.com", createdate: "2026-02-26T15:50:43.769Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "202986027791", firstname: "TEST123", lastname: "TEST123", email: "ssounouvou.naelle@gmail.com", createdate: "2026-02-17T14:30:36.001Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "201523504902", firstname: "Vanessa", lastname: "Leung", email: "vleung@apollo.com", jobtitle: "Director of Event Technology", createdate: "2026-02-11T16:51:06.959Z", hubspotStage: "customer", formName: "Scope your project" },
  { id: "200020847433", firstname: "Marty", lastname: "Kaufman", email: "marty.kaufman@gogratia.com", jobtitle: "Head of Revenue", phone: "443.494.9144", createdate: "2026-02-06T17:29:55.590Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "194652601518", firstname: "Norbert", lastname: "Pap", email: "norbert@gogratia.com", jobtitle: "Chief Technology Officer", createdate: "2026-01-20T16:36:26.071Z", hubspotStage: "opportunity", formName: "Scope your project" },
  { id: "194424102213", firstname: "Naelle", lastname: "Soun", email: "naelle@gogratia.com", jobtitle: "Marketing", createdate: "2026-01-20T10:10:26.785Z", hubspotStage: "opportunity", formName: "Scope your project" },
];
