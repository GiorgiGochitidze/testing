import { useState } from "react";


const AboutUs = () => {
    const [text, setText] = useState(false)
    const [text1, setText1] = useState(false)
    const [text2, setText2] = useState(false)
    const [text3, setText3] = useState(false)
    const [text4, setText4] = useState(false)

    return ( 
        <div className="about-us-container">
            <div className="about-content" onMouseEnter={() => text ? setText(false) : setText(true)} onMouseLeave={() => setText(false)}>
                <h1 className="about-name">მისია</h1>
                {text && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia1.jpg" alt="" />
                        <img src="../misia2.jpg" alt="" />
                        <img src="../misia3.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>ადგილობრივ და საერთაშორისო შრომის ბაზარზე დასაქმების შესაძლებლობების გაძლიერება, განსაკუთრებით, ახალგაზრდებისა და ქალებისთვის, არაფორმალური განათლების ხელმისაწვდომობის გაზრდით და დასაქმების პოლიტიკის ხელშეწყობით.</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text1 ? setText1(false) : setText1(true)} onMouseLeave={() => setText1(false)}>
                <h1 className="about-name">ხედვა</h1>
                {text1 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>ყველას აქვს უფლება იყოს ბედნიერი, ჰქონდეს პროფესიის არჩევის, დასაქმებისა და ღირსეული შრომის პრინციპების რეალიზაციის თავისუფლება.</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text2 ? setText2(false) : setText2(true)} onMouseLeave={() => setText2(false)}>
                <h1 className="about-name">მიზანი</h1>
                {text2 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                        <ul>
                        <li>ადამიანების პროფესიული და კარიერული განვითარების ხელშეწყობა;</li> 
                        <li>ძლიერი პროფესიული ქსელის შექმნა, სახელმწიფოს, საგანმანათლებლო დაწესებულებებს, დამსაქმებლებს და სამუშაო მაძიებელთაშორის;</li>
                        <li>ღირსეული შრომის პირობების დანერგვის ხელშეწყობა; </li>
                        <li>სამუშაო ადგილებზე დისკრიმინაციისა და შევიწროებისგან თავისუფალი გარემოს შექმნაში მხარდაჭერა:</li>
                        <li>სოციალურ-ეკონომიკურ პროცესებში ახალგაზრდებისა და ქალების მონაწილეობის წახალისება და ჩართულობის გაძლიერება.</li>
                        </ul>
                        </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text3 ? setText3(false) : setText3(true)} onMouseLeave={() => setText3(false)}>
                <h1 className="about-name">ღირებულებები</h1>
                {text3 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                            <p>1. პატივისცემა და სიყვარული; პიროვნული და პროფესიული მოტივაცია ადამიანების ბედნიერებისთვის;</p>
                            <p>2. მიმღებლობა და აღიარება: ადამიანების აქტიური მოსმენა, ადამიანების უფლებების გაზიარება, ინდივიდუალიზმის პატივისცემა;</p>
                            <p>3. დახმარების თხოვნა და მიღება; ადამიანებისთვის შესაძლებლობების განვითარება;</p>
                            <p>4. პოზიტიური აზროვნება: თვითშემეცნება და ადამიანების კეთილდღეობაზე ზრუნვა</p>
                            <p>5. კრიტიკული აზროვნება: ცვლილებებისთვის შემოქმედებითობა და ალტერნატიული აზროვნების ხელშეწყობა;</p>
                            <p>6. ,,განსხვავებული არნიშნავს ცუდს“: პიროვნება არ ექვემდებარება განსჯას, მხოლოდ ქცევის გაუმჯობესება და შეცვლა შეგვიძლია;</p>
                            <p>7. ,,მანამ არ გაქვს უფლება, სანამ არ აღასრულებ მას“: ყველა ადამიანს აქვს უფლება განათლების, დასაქმების და სიცოცხლის;</p>
                            <p>8. ,,მზრუნველობა: სოციალური პასუხისმგებლობის და პროფესიული მოხალისეობის გაძლიერება“.</p>
                            <p>9. ,,ჯანსაღი ქცევა: კარგი მოქალაქეობა და პოზიტიური ცვლილებების დანერგვა“;</p>
                            <p>10. არჩევანის უფლება და თავისუფლება: პიროვნული თვითშემეცნება და არჩევანთა მრავალფეროვნების შექმნა;</p>
                            <p>11. შთაგონება: ცოდნის და გამოცდილების გაზიარება, უანგარო მოტივაცია მიზნის მიღწევისთვის.</p>
                    </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text4 ? setText4(false) : setText4(true)} onMouseLeave={() => setText4(false)}>
                <h1 className="about-name">ძირითადი</h1>
                {text4 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                    საორსა არის წევრობაზე დაფუძნებული არასამეწარმეო (არაკომერციული) იურიდიული პირი, რომელიც დაარსდა 2018 წლის 15 მარტს.
                    "საორსა" წევრობაზე დაფუძნებული სამოქალაქო საზოგადოების ორგანიზაციაა (CSO) და
                    იმართება შემდეგი სტრუქტურების მეშვეობით:
                    • საერთო კრება.
                    • სამეთვალყურეო საბჭო.
                    • აღმასრულებელი დირექტორი.

                    <p>საერთო კრება და სამეთვალყურეო საბჭო წარმოადგენენ მმართველობით სტრუქტურებს,
                    ხოლო ორგანიზაციას ხელმძღვანელობს აღმასრულებელი დირექტორი. სამეთვალყურეო
                    საბჭოს წევრებს ირჩევენ საერთო კრებისწევრები, ხოლო აღმასრულებელი დირექტორის
                    შერჩევა და დანიშვნა ხდება სამეთვალყურეო საბჭოს გადაწყვეტილებით.</p>

                    <p>საერთო კრება წარმოადგენს მმართველობის უმაღლეს ორგანოს, რომლის მეშვეობით
                    წევრები განიხილავენ ორგანიზაციისა და წევრებისთვის აქტუალურ საკითხებს, გასცემენ
                    რეკომენდაციებს და აწარმოებენ უკუკავშირს სამეთვალყურეო საბჭოსა და აღმასრულებელ
                    დირექტორთან. "საორსა"-ს თითოეული წევრი უნდა ესწრებოდეს საერთო კრებას და
                    მონაწილეობას იღებდეს კენჭისყრაში.</p>
                    </p>

                    <p>
                    სამეთვალყურეო საბჭო განსაზღვრავს ორგანიზაციის დღის წესრიგს და უზრუნველყოფს
                    რომლის თანხვედრაში იყოს „საორსა“-ს დეკლარირებულ ღირებულებებსა და
                    პრინციპებთან. საბჭოს წევრებს ეკისრებათ პასუხისმგებლობა, განიხილონ და გადაჭრან
                    ძირითადი სტრატეგიული საკითხები და ხელი შეუწყონ ორგანიზაციის ხელმძღვანელობას
                    ეფექტური მუშაობისთვის საჭირო წინაპირობების ჩამოყალიბებაში.
                    სამეთვალყურეო საბჭოს წევრებს ირჩევენ "საორსა"-ს წევრები მათივე რიგებიდან, ორი
                    წლის ვადით. წევრის სამეთვალყურეო საბჭოს წევრად განმეორებით არჩევა შესაძლებელია
                    მხოლოდ ერთხელ. სამეთვალყურეო საბჭო შედგება არაუმეტეს ხუთიწევრისგან. ერთი
                    საარჩევნო ციკლის განმავლობაში ხუთი წევრიდან იცვლება არაუმეტეს სამი წევრი, რათა
                    უზურნველყოფილი იქნას ბიზნესის უწყვეტობა და "საორსა"-ს მმართველი გუნდის
                    მხარდაჭერა. უფლებამოსილებები და საკითხები, რომლებსაც ისინი წყვეტენ
                    ერთობლივად ხმათა უბრალო უმრავლესობით, დოკუმენტირებულია ორგანიზაციის
                    წესდებაში.
                    </p>

                    <p>
                    „საორსა“-ს აღმასრულებელი დირექტორი პასუხისმგებელია ორგანიზაციის ლიდერობასა
                    და მართვაზე. ის მჭიდროდ თანამშრომლობს სამეთვალყურეო საბჭოსთან ორგანიზაციის
                    სტრატეგიული ხედვისჩამოყალიბები სპროცესში. მოგვიანებით კი, უზრუნველყოფს
                    ორგანიზაციის თანამშრომლების მოტივაციის ამაღლებასა და მათ მხარდაჭერას
                    ორგანიზაციის ხედვისა და მისიის მიღწევაში. აღმასრულებელი დირექტორი ასრულებს იმ
                    ძირითად ფუნქციებს, რომლებიც არსებითად მნიშვნელოვანი და ეფექტიანია
                    არასამთავრობო სექტორის ორგანიზაციების აღმასრულებელი დირექტორებისთვის,
                    როგორებიცაა ადამიანური რესურსების მართვა, ყოველდღიური საქმიანობის ორგანიზება
                    და შესრულებული სამუშაოების მონიტორინგი, ფინანსური რესურსების მოზიდვა,
                    კომუნიკაციების დამყარება, დაგეგმვა, სტრატეგიების შემუშავება, მარკეტინგი,
                    პრობლემების გადაჭრა და ა.შ.
                    </p>

                    <p>
                    საორსას გუნდის მახასიათებლები და უპირატესობები:
                    სანდოობა, პროფესიონალიზმი,  ლოიალურობა, გუნდურობა, სტაბილურობა, სიახლების მიმართღიაობა და მზაობა; გულმოდგინება, გულწრფელობა, მიუკერძოებლობა, შეუპოვრობა, ოპტიმიზმი.
                    საერთაშორისო ცოდნა და განათლება, მრავალფეროვანი და მრავალწლიანი სამუშაო გამოცდილება, ადგილობრივ და საერთაშორისო საჯარო, კერძო, არასამთავრობო ორგანიზაციებში სამუშაო გამოცდილება, საერთაშორისო და განვითარების პროექტების შედგენის, მართვის და განხორციელების ექსკლუზიური გამოცდილება; ადამიანის ფუნდამენტური უფლებების და თავისუფლებების დაცვის პრაქტიკული გამოცდილება;
                    სამუშაო ძალის მართვისა და გაძღოლის უნარები,  ეთიკური პროფესიული სტანდარტების დაცვა, სოციალური და ემოციური ინტელექტის ფლობა.
                    პროექტები, ტრენინგები და სერვისები:
                        <ul>
                            <li>-   დასაქმების უნარები;</li>
                            <li>-   პროფ-ორიენტაცია და კარიერული განვითარება;</li>
                            <li>-	პროფესიული კომუნიკაციები;</li>
                            <li>-	პიროვნული ზრდა და განვითარება;</li>
                            <li>-	სამუშაო ადგილზე კონფლიქტების და სტრესის მართვა</li>
                            <li>-	სამოქალაქო ჩართულობა და ლიდერობა;</li>
                            <li>-	ფინანსური წიგნიერება;</li>
                            <li>-	მეწარმეობა;</li>
                            <li>-	სამართლებრივი კონსულტაცია;</li>
                            <li>-	ბავშვთა უფლებები;</li>
                            <li>-	გენდერული მეინსტრიმინგი და ბიუჯეტირება;</li>
                            <li>-	რეკრუტინგი;</li>
                            <li>-	თანამშრომელთა კარიერული გაძლიერება;</li>
                            <li>-	ორგანიზაციის მართვა და განვითარება;</li>
                            <li>-	შრომის ორგანიზაციული კულტურა და კორპორატიული ლოიალიზმი;</li>
                            <li>-	სამუშაოს შესრულების ინდიკატორები და მოტივაცია;</li>
                            <li>-	ეფექტური მომსახურების უნარები;</li>
                            <li>-	ბულინგის პრევენცია და ინტერვენცია საგანამანთლებლო გარემოში;</li>
                            <li>-	პროექტების მენეჯმენტი;</li>
                            <li>-	სამუშაო ადგილზე თანასწორობის შიდაპოლიტიკის დოკუმენტის შექმნა;</li>
                            <li>-	კვლევის დიზაინი და განხორციელება;</li>
                            <li>-	სტაჟირები სპროგრამა;</li>
                            <li>-	გაცვლითი პროგრამა;</li>
                            <li>-	დასაქმების ხელშემწყობი ღონისძიებების დაგეგმვა და განხორციელება.</li>
                            <li>-	უცხო ენა;</li>
                        </ul>
                    </p>

                    <p>
                    საქმიანობის სფერო: ხარისხიანი განათლება, კარიერული განვითარება, დასაქმება, ადამიანების უფლებები, მეწარმეობა, სამოქალაქო აქტივიზმი, გენდერული თანასწორობა, ღირსეული შრომა და ეკონომიკური გაძლიერება.
                    მიზნობრივი ჯგუფი : სამუშაოს მაძიებელი და დასაქმებული, განსაკუთრებით ახალგაზრდები და ქალები. 
                    განხორციელებული პროექტები/სერვისები:

                        <p>
                        1.	ახალგაზრდების საარსებო საშუალებები „შექმენი და დასაქმდი“ – 2018 წელი
                        აშშ საელჩო საქართველოში
                        2.	კარიერული განვითარების პროგრამა აჭარაში მცხოვრები მოსწავლეებისთვის – 2018-2019, აშშ საელჩო საქართველოში
                        3.	„სოფლად მცხოვრები ქალების ხმაI „ მაღალმთიანი აჭარაში მცხოვრები ქალებისთვის – 2019-2020, აშშ საელჩო საქართველოში
                        4.	პროფ–ორიენტაციის პროგრამა მაღალმთიან აჭარაში მცხოვრები მოსწავლეებისთვის – 2019, აჭარის ავტონომიური რესპუბლიკის განათლების, სპორტის და კულტურის სამინისტრო
                        5.	სოფლად მცხოვრები ქალების ხმაI I ხულოში მცხოვრები ქალებისთვის – 2020–2021
                        აშშ საელჩო საქართველოში
                        6.	ქალები დემოკრატიული ჩართულობისთვის – 2020-2021, ნიდერლანდების სამეფო საელჩო
                        7.	მეწარმოების და პოლიტიკის დიალოგის ხელშეწყობა აჭარაში მცხოვრები ქალებისთვის – 2021-2022, USAID ეკონომიკური მმართველობის პროგრამა
                        8.	ახალგაზრდა გოგონების და ქალების პროფესიული გადამზადების პროგრამა – 2022 წელი – ქალთა ფონდი საქართველოში.
                        </p>

                        <p>
                        ორგანიზაციამ განახორციელა ფასიანი სერვისები კარიერული განვითარების, დასაქმების უნარების,
                        ბულინგის პრევენცია და ინტერვენცია, მოტივაცია, შრომითი და ქალთა უფლებების, სამოქალაქ ოლიდერობა, აქტიური მოქალაქეობა, ადამიანის უფლებების, მეწარმეობის მიმართულებით. 
                        </p>
                    </p>
                </div>
                }
            </div>
        </div>
     );
}
 
export default AboutUs;