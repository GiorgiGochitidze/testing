import { useState } from "react";


const AboutUs2 = () => {
    const [text, setText] = useState(false)
    const [text1, setText1] = useState(false)
    const [text2, setText2] = useState(false)
    const [text3, setText3] = useState(false)
    const [text4, setText4] = useState(false)

    return ( 
        <div className="about-us-container">
            <div className="about-content" onMouseEnter={() => text ? setText(false) : setText(true)} onMouseLeave={() => setText(false)}>
                <h1 className="about-name">Mission</h1>
                {text && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia1.jpg" />
                        <img src="../misia2.jpg" />
                        <img src="../misia3.jpg" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>Stärkung der Beschäftigungsmöglichkeiten auf dem lokalen und internationalen Arbeitsmarkt, insbesondere für Jugendliche und Frauen, durch Verbesserung des Zugangs zu nicht-formaler Bildung und Förderung der Beschäftigungspolitik.</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text1 ? setText1(false) : setText1(true)} onMouseLeave={() => setText1(false)}>
                <h1 className="about-name">View</h1>
                {text1 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" />
                        <img src="../misia5.jpg" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>Das Projekt „Berufliche Orientierung für Studenten aus der Region Ajara“ wird von der Nichtregierungsorganisation „Saorsa“ in Zusammenarbeit mit der amerikanischen Ecke Batumi durchgeführt.

Ziel des Projekts ist die Berufswahl der Studierenden unter Berücksichtigung ihrer persönlichen Eigenschaften, Neigungen, Interessen, Fähigkeiten, Werte, Arbeitsmarktanforderungen und Entwicklungsperspektiven.

Die amerikanische Botschaft in Georgien ist der finanzielle Unterstützer des Projekts.
</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text2 ? setText2(false) : setText2(true)} onMouseLeave={() => setText2(false)}>
                <h1 className="about-name">Purpose</h1>
                {text2 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" />
                        <img src="../misia5.jpg" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                        <ul>
                            <li>Förderung der beruflichen und beruflichen Entwicklung von Menschen;</li>
                            <li>Schaffung eines starken beruflichen Netzwerks zwischen Staat, Bildungseinrichtungen, Arbeitgebern und Arbeitssuchenden;</li>
                            <li>Förderung der Einführung menschenwürdiger Arbeitsbedingungen;</li>
                            <li>Unterstützung bei der Schaffung eines diskriminierungs- und belästigungsfreien Umfelds am Arbeitsplatz:</li>
                            <li>Förderung der Beteiligung von Jugendlichen und Frauen an sozioökonomischen Prozessen und Stärkung ihrer Beteiligung.</li>
                        </ul>
                    </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text3 ? setText3(false) : setText3(true)} onMouseLeave={() => setText3(false)}>
                <h1 className="about-name">Werte</h1>
                {text3 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" />
                        <img src="../misia5.jpg" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                            <p>1. Respekt und Liebe; persönliche und berufliche Motivation für das Glück der Menschen;</p>
                            <p>2. Akzeptanz und Anerkennung: den Menschen aktiv zuhören, die Rechte der Menschen teilen, den Individualismus respektieren;</p>
                            <p>3. Um Hilfe bitten und Hilfe erhalten; Möglichkeiten für Menschen entwickeln;</p>
                            <p>4. Positives Denken: Selbstbewusstsein und Sorge um das Wohlergehen der Menschen</p>
                            <p>5. Kritisches Denken: Kreativität für Veränderung und Förderung alternativen Denkens;</p>
                            <p>6. „Anders heißt nicht schlecht“: Die Person unterliegt keinem Urteil, wir können nur das Verhalten verbessern und ändern;</p>
                            <p>7. „Du hast kein Recht, bis du es erfüllst“: Jeder Mensch hat das Recht auf Bildung, Arbeit und Leben;</p>
                            <p>8. „Care: Soziale Verantwortung und professionelles Ehrenamt stärken“.</p>
                            <p>9. „Gesundes Verhalten: gute Bürgerschaft und Einführung positiver Veränderungen“;</p>
                            <p>10. Recht und Wahlfreiheit: persönliches Selbstbewusstsein und Schaffung von Wahlmöglichkeiten;</p>
                            <p>11. Inspiration: Teilen von Wissen und Erfahrung, selbstlose Motivation, das Ziel zu erreichen.</p>
                    </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text4 ? setText4(false) : setText4(true)} onMouseLeave={() => setText4(false)}>
                <h1 className="about-name">Basics</h1>
                {text4 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" />
                        <img src="../misia5.jpg" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                    Saorsa ist eine nicht-unternehmerische (gemeinnützige) juristische Person auf Mitgliedschaftsbasis, die am 15. März 2018 gegründet wurde.
                     „Saorsa“ ist eine auf Mitgliedschaft basierende Organisation der Zivilgesellschaft (CSO) und
                     verwaltet durch die folgenden Strukturen:
                     • Hauptversammlung.
                     • Aufsichtsrat.
                     • Geschäftsführer.

                    <p>Die Hauptversammlung und der Aufsichtsrat sind leitende Organe,
                     Und die Organisation wird vom Geschäftsführer geleitet. Aufsicht
                     Die Mitglieder des Vorstandes werden von den Mitgliedern der Mitgliederversammlung und dem Geschäftsführer gewählt
                     Auswahl und Bestellung erfolgen durch Beschluss des Aufsichtsrats.</p>

                    <p>Die Mitgliederversammlung ist das höchste Organ, durch das
                     Mitglieder diskutieren Themen, die für die Organisation relevant sind, und Mitglieder, Problem
                     Gibt Empfehlungen und gibt Feedback an den Aufsichtsrat und die Geschäftsleitung
                     mit dem Direktor. Jedes Mitglied von "Saorsa" muss an der Hauptversammlung teilnehmen und
                     an der Abstimmung teilzunehmen.</p>
                    </p>

                    <p>
                    Der Aufsichtsrat bestimmt die Tagesordnung der Organisation und stellt bereit
                    was den deklarierten Werten von "Saorsa" entsprechen sollte.
                    mit den Grundsätzen. Die Vorstandsmitglieder haben die Verantwortung, zu diskutieren und zu entscheiden
                    wichtige strategische Themen und tragen zur Führung der Organisation bei
                    bei der Schaffung der notwendigen Voraussetzungen für effektives Arbeiten.
                    Die Mitglieder des Aufsichtsrats werden von den „Saorsa“-Mitgliedern aus den eigenen Reihen gewählt, zwei
                    für ein Jahr. Ein Mitglied kann als Mitglied des Aufsichtsrats wiedergewählt werden
                    Nur einmal. Der Aufsichtsrat besteht aus höchstens fünf Mitgliedern. eines
                    Während des Wahlzyklus werden nicht mehr als drei von fünf Mitgliedern geändert, um zu wechseln
                    Die Kontinuität des Geschäfts und des Führungsteams von „Saorsa“ soll gewahrt bleiben
                    Die Unterstützung. Befugnisse und Angelegenheiten entscheiden sie
                    Gemeinsam durch einfache Stimmenmehrheit, dokumentiert durch die Organisation
                    in der Satzung.
                    </p>

                    <p>
                    Der Exekutivdirektor von "Saorsa" ist für die Führung der Organisation verantwortlich
                    und Management. Er arbeitet eng mit dem Aufsichtsrat der Organisation zusammen
                    Bildung einer strategischen Vision im Prozess. Und später bietet
                    Steigerung der Motivation der Mitarbeiter der Organisation und deren Unterstützung
                    bei der Verwirklichung der Vision und Mission der Organisation. Der Geschäftsführer führt die
                    Grundlegende Funktionen, die essentiell wichtig und effektiv sind
                    für Geschäftsführer von Organisationen des Nichtregierungssektors,
                    wie Personalmanagement, Organisation der täglichen Aktivitäten
                    und Überwachung der abgeschlossenen Arbeiten, Gewinnung von Finanzmitteln,
                    Kommunikation aufbauen, planen, Strategien entwickeln, Marketing,
                    Probleme lösen und so weiter
                    </p>

                    <p>
                    Merkmale und Vorteile des Saorsa-Teams:
                    Zuverlässigkeit, Professionalität, Loyalität, Teamfähigkeit, Stabilität, Offenheit und Innovationsbereitschaft; Fleiß, Aufrichtigkeit, Unparteilichkeit, Ausdauer, Optimismus.
                    Internationale Kenntnisse und Ausbildung, vielfältige und langjährige Berufserfahrung, Arbeitserfahrung in lokalen und internationalen öffentlichen, privaten, Nichtregierungsorganisationen, exklusive Erfahrung in der Konzeption, Leitung und Umsetzung von internationalen und Entwicklungsprojekten; praktische Erfahrung mit dem Schutz grundlegender Menschenrechte und Grundfreiheiten;
                    Workforce Management und Führungsqualitäten, Einhaltung ethischer Berufsstandards, soziale und emotionale Intelligenz.
                    Projekte, Schulungen und Dienstleistungen:
                        <ul>
                        <li>- Beschäftigungsfähigkeiten;</li>
                            <li>-   berufliche Orientierung und Karriereentwicklung;</li>
                            <li>-   professionelle Kommunikation;</li>
                            <li>-   persönliches Wachstum und Entwicklung;</li>
                            <li>-   Umgang mit Konflikten und Stress am Arbeitsplatz</li>
                            <li>-   bürgerschaftliches Engagement und Führung;</li>
                            <li>-   finanzielle Allgemeinbildung;</li>
                            <li>-   Unternehmertum;</li>
                            <li>-   Rechtsberatung;</li>
                            <li>-   Kinderrechte;</li>
                            <li>-   Gender Mainstreaming und Budgetierung;</li>
                            <li>-   Rekrutierung;</li>
                            <li>-   Karriereförderung von Mitarbeitern;</li>
                            <li>-   Organisationsmanagement und -entwicklung;</li>
                            <li>-   Organisationskultur der Arbeit und Unternehmensloyalität;</li>
                            <li>-   Arbeitsleistungsindikatoren und Motivation;</li>
                            <li>-   effektive Servicefähigkeiten;</li>
                            <li>-   Mobbing-Prävention und Intervention im Bildungsumfeld;</li>
                            <li>-   Projektmanagement;</li>
                            <li>-   Erstellung eines internen Richtliniendokuments zur Gleichstellung am Arbeitsplatz;</li>
                            <li>-   Forschungsdesign und -implementierung;</li>
                            <li>-   Praktikumsprogramm;</li>
                            <li>-   Austauschprogramm;</li>
                            <li>-   Planung und Durchführung beschäftigungsfördernder Maßnahmen.</li>
                            <li>-   Fremdsprache;</li>
                        </ul>
                    </p>

                    <p>
                    Tätigkeitsbereiche: hochwertige Bildung, Karriereentwicklung, Beschäftigung, Menschenrechte, Unternehmertum, zivilgesellschaftliches Engagement, Gleichstellung der Geschlechter, menschenwürdige Arbeit und wirtschaftliche Selbstbestimmung.
                     Zielgruppe: Arbeitssuchende und Berufstätige, insbesondere Jugendliche und Frauen.
                     Realisierte Projekte/Leistungen:

                        <p>
                        1. Lebensgrundlagen für junge Menschen "Schaffen und Arbeit finden" - 2018
                        US-Botschaft in Georgien
                        2. Karriereentwicklungsprogramm für in Adjara lebende Studenten - 2018-2019, US-Botschaft in Georgien
                        3. „Voice of rural women“ für Frauen, die im bergigen Adscharien leben – 2019–2020, US-Botschaft in Georgien
                        4. Berufsorientierungsprogramm für Studenten, die im bergigen Adscharien leben – 2019, Ministerium für Bildung, Sport und Kultur der Autonomen Republik Adscharien
                        5. Stimme von Frauen, die in ländlichen Gebieten leben I I für Frauen, die in Khulo leben – 2020-2021
                        US-Botschaft in Georgien
                        6. Women for Democratic Engagement – ​​​​2020-2021, Königlich Niederländische Botschaft
                        7. Promoting Business and Policy Dialogue for Women Living in Adjara – 2021-2022, USAID Economic Governance Program
                        8. Berufsbildungsprogramm für junge Mädchen und Frauen – 2022 – Frauenstiftung in Georgien.
                        </p>

                        <p>
                        Die Organisation stellte bezahlte Dienstleistungen für Karriereentwicklung, Beschäftigungsfähigkeit,
                         Mobbing-Prävention und -Intervention, Motivation, Arbeits- und Frauenrechte, Bürgerführung, aktive Bürgerschaft, Menschenrechte, Unternehmertum.
                        </p>
                    </p>
                </div>
                }
            </div>
        </div>
     );
}
 
export default AboutUs2;