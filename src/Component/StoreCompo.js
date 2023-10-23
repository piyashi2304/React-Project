import React, { createContext, useState } from "react";
export const Store = createContext();
function StoreCompo(props){
    const [data,setData] = useState([
        {
        id:"1",
        cat:"Home",
        title :"UNESCO World Heritage Site of Taj Mahal, Agra, Rajasthan, India",
        img :"https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=",
        cont :"The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a masterpiece of Mughal architecture. Built by Emperor Shah Jahan in the 17th century in memory of his beloved wife Mumtaz Mahal, it is a UNESCO World Heritage Site and a symbol of eternal love and architectural splendor.",
        },
        {
        id:"2",
        cat : "Home",
        title : "Bollywood",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeucFBZYnIjSO9PK-Z4uH-fIgoZACqZ0G7XQ&usqp=CAU",
        cont :"Tower Bridge, an iconic London landmark, is a bascule and suspension bridge that spans the River Thames. It was completed in 1894 and is renowned for its impressive Gothic-style towers and a glass-floored walkway. The bridge opens to allow tall ships to pass through, making it a symbol of London's rich history and engineering marvel."
       },
       {
        id:"3",
        cat : "Home",
        title : "Hollywood",
        img :"https://assets.website-files.com/62311413466139dfed65b237/62e2db292064333f5102a3bf_Artboard%201%20copy-100.jpg",
        cont :"Pyramids are ancient, iconic structures with a triangular shape, typically built as tombs or monuments. The most famous is the Great Pyramid of Giza in Egypt, one of the Seven Wonders of the Ancient World. Pyramids represent remarkable architectural and engineering feats, showcasing the ingenuity of ancient civilizations."
       },
       {
        id:"4",
        cat : "Home",
        title :"Technology" ,
        img : "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
        cont :"The Western Wall, also known as the Wailing Wall, is an iconic religious site in Jerusalem, sacred to Judaism. It's a remnant of the ancient Second Temple and serves as a place of prayer and reflection. Visitors from around the world leave notes with personal prayers in its crevices, making it a profound symbol of faith and unity."
       },
       {
        id:"5",
        cat :"Home",
        title:"Fitness",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJD2DnEOyNf9TdZoKm7CtCt5SW4auHVItPrg&usqp=CAU",
        cont:"Christ the Redeemer is a colossal statue atop Rio de Janeiro's Corcovado Mountain. A symbol of Brazil and Christianity, it stands 98 feet tall with arms outstretched. Completed in 1931, it offers breathtaking panoramic views of the city. A UNESCO World Heritage site, it's a must-visit landmark and an emblem of cultural and spiritual significance."
       },
       {
        id:"6",
        cat:"Home",
        title:"Food",
        img:"https://png.pngtree.com/element_our/20190601/ourmid/pngtree-a-bowl-of-food-image_1366388.jpg",
        cont:"Petra, a UNESCO World Heritage site in Jordan, is a mesmerizing archaeological city carved into rose-red cliffs. Known as the Rose city  it was the capital of the Nabatean Kingdom in ancient times. Visitors explore its intricate rock-cut architecture, including the famous Treasury and Monastery, uncovering a rich history and captivating beauty."
       },
       {
        id:"7",
        cat:"Home",
        title:"The Great Wall of China",
        img:"https://cdn1.matadornetwork.com/blogs/1/2018/02/Great-Wall-of-China.jpg",
        cont :"The Great Wall of China is a monumental structure stretching over 13,000 miles across northern China. Built over centuries, it served as a defensive barrier against invaders. This UNESCO World Heritage site is a symbol of China's history, engineering prowess, and is visited by millions each year for its awe-inspiring vistas."
       },
       {
        id:"8",
        cat:"Home",
        title:"The Colosseum, Rome",
        img:"https://cdn1.matadornetwork.com/blogs/1/2018/02/View-of-the-Colosseum.jpg",
        cont:"The Colosseum, an ancient Roman amphitheater, is an iconic symbol of Rome's rich history. Completed in AD 80, it hosted gladiator contests and other spectacles, accommodating over 50,000 spectators. Its enduring architecture and historical significance draw visitors worldwide, making it one of the most renowned archaeological sites in Italy."
       },
       {
        id:"9",
        cat:"Home",
        title:"Machu Picchu, Peru",
        img:"https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Side-view-of-Machu-Picchu.jpg",
        cont:"Machu Picchu, nestled in the Andes Mountains of Peru, is an enigmatic Inca citadel. Built in the 15th century, it boasts breathtaking terraces, temples, and stone structures. This UNESCO World Heritage site, shrouded in mist and mystery, draws hikers and history enthusiasts seeking a glimpse into the ancient Inca civilization."
       },
       {
        id:"10",
        cat:"Home",
        title:"Chichén Itzá, Mexico",
        img:"https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Chichen-Itza-at-night.jpg",
        cont:"Chichén Itzá, located in Mexico's Yucatan Peninsula, is a captivating archaeological site. It was a prominent Maya city from the 7th to 10th centuries. The site features the iconic El Castillo pyramid, astronomical observatory, and sacred cenote. A UNESCO World Heritage site, it offers a window into ancient Mesoamerican culture and history."
       },
       {
        id:"11",
        cat:"Bollywood",
        title:"Bollywood Magic: Lights, Camera, Stories",
        img:"https://cdn.inc42.com/wp-content/uploads/2022/03/Bollywood-celebs-investing-ft-1-1-1024x768.jpg",
        cont:"Bollywood, the Hindi-language film industry centered in Mumbai, is renowned worldwide for its vibrant and melodramatic movies. Combining song, dance, romance, and drama, Bollywood films offer a unique cinematic experience. These movies often showcase Indian culture and have a dedicated global fan base, making them a significant part of Indian entertainment."
       },
       {
        id:"12",
        cat:"Bollywood",
        title:"Directing the Dreams: Celebrating Bollywood's Visionary Directors",
        img:"https://pichharperfect.files.wordpress.com/2015/09/feature-image.jpg",
        cont:"Sanjay Leela Bhansali is a renowned Bollywood director known for grand and visually stunning films, including Devdas and Padmaavat. Rajkumar Hirani is acclaimed for his heartwarming and socially relevant movies, such as 3 Idiots and PK Other notable directors include Karan Johar, Anurag Kashyap, and Zoya Akhtar, known for their unique storytelling styles."
       },
       {
        id:"13",
        cat:"Bollywood",
        title:"Glamour Icons: India's Leading Bollywood Actors",
        img:"https://www.beyoung.in/beyoungistan/wp-content/uploads/2023/04/top-bollywood-actors-header1.jpg",
        cont:"Top Bollywood actors, celebrated for their talent and charisma, include Shah Rukh Khan, often called the King of Bollywood Aamir Khan known for his versatile roles, Amitabh Bachchan, a legend of Indian cinema, and younger stars like Ranbir Kapoor and Ranveer Singh, who are redefining the industry with their versatility and energy."
       },
       {
        id:"14",
        cat:"Bollywood",
        title:"Leading Ladies: Celebrating Bollywood's Top Actresses",
        img:"https://gkschools.com/images/bollywood-richest_12-actresses.jpg",
        cont:"Top Bollywood actresses are celebrated for their beauty and talent. Icons like Deepika Padukone and Priyanka Chopra have made their mark in both Bollywood and Hollywood. Alia Bhatt and Kareena Kapoor Khan continue to impress with their performances, while veterans like Madhuri Dixit and Kajol maintain their status as beloved figures in the industry."
       },
       {
        id:"15",
        cat:"Bollywood",
        title:"Bollywood Blockbusters: Where Dreams Come to Life",
        img:"https://s3images.zee5.com/wp-content/uploads/sites/7/2020/08/Iconic-Bollywood-Films.jpg",
        cont:"Bollywood films, a significant part of Indian cinema, are known for their vibrant storytelling, catchy music, and elaborate dance sequences. They often encompass various genres, from romance and drama to action and comedy, offering a rich cultural experience. Bollywood movies have a dedicated global fan base, making them a vital component of world cinema."
       },
       {
        id:"16",
        cat:"Bollywood",
        title:"Celluloid Paradises: Bollywood's Iconic Filming Locations",
        img:"https://orbisholidays.in/img/blogs/bollywood-shooting-locations/bollywood-movies-shot-in-kerala.png",
        cont:"The Mehrangarh Fort in Jodhpur, Rajasthan, is a favored shooting location for Bollywood films. Its majestic architecture, historical significance, and scenic views provide a stunning backdrop for various movie genres. Iconic Bollywood movies like Lagaan and The Dark Knight Rises have been filmed within the fort's grandeur, making it a top choice for filmmakers."
       },
       {
        id:"17",
        cat:"Bollywood",
        title:"Laugh Riot: Celebrating Bollywood's Comedy Maestros",
        img:"https://www.trendmainia.com/wp-content/uploads/2021/05/comedy-actors-1.jpg",
        cont:"Bollywood comedians play a crucial role in Indian cinema, providing humor and laughter to audiences. Legends like Johnny Lever, Paresh Rawal, and Govinda have delivered memorable performances, while contemporary talents like Ayushmann Khurrana and Rajkummar Rao skillfully combine comedy with versatile acting. Their contributions enrich the vibrant world of Bollywood entertainment."
       },
       {
        id:"18",
        cat:"Bollywood",
        title:"Bollywood's Masterful Villains: Portraying Shadows and Depth",
        img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201204/collage-650_042412042720.jpg?VersionId=yaEviXroaWw1.d6jdaNKSKAhBLfhIWrz&size=686:*",
        cont:"Bollywood villains have left an indelible mark on Indian cinema, creating iconic antagonists. Legendary actors like Amrish Puri, Pran, and Prem Chopra brought memorable evil characters to life. Modern actors like Shah Rukh Khan, with his portrayal of antiheroes in films like Don have redefined villainy with charisma and complexity, adding depth to Bollywood narratives."
       },
       {
        id:"19",
        cat:"Bollywood",
        title:"On Location: Behind the Scenes of Bollywood Filming",
        img:"https://media.istockphoto.com/id/1302518964/photo/film-night-scene-shooting-in-historic-heart-of-the-city-camera-crew-director-and-actors.jpg?s=612x612&w=0&k=20&c=1odctSkD8n8iYOpmH8S9eGVj1_yjPeWJSBQO4qTV8X0=",
        cont:"Bollywood shooting involves the intricate process of capturing scenes for Indian cinema. It encompasses a blend of drama, music, dance, and vibrant storytelling. Iconic locations and elaborate sets are used to bring captivating stories to life, making Bollywood shooting a dynamic and visually stunning endeavor that reflects the heart and soul of India's film industry."
        },
       {
        id:"20",
        cat:"Technology",
        title:"Tech Insights: Unveiling Tomorrow's World",
        img:"https://cdn-res.keymedia.com/cms/images/us/038/0308_637823689896406541.jpg",
        cont:"Technology is the application of scientific knowledge to solve practical problems and improve efficiency in various fields. It encompasses innovations such as smartphones, artificial intelligence, renewable energy, and nanotechnology. Technology has profoundly impacted society, enabling rapid communication, automation, and advancements in healthcare, transportation, and entertainment."
       },
       {
        id:"21",
        cat:"Technology",
        title:"The Power Revolution: The Steam Engine Saga",
        img:"https://i0.wp.com/www.merchantnavydecoded.com/wp-content/uploads/2023/06/image-1-compressed-1.jpg?fit=1140%2C570&ssl=1",
        cont:"The steam engine revolutionized transportation and industry in the 18th and 19th centuries. Invented by James Watt, it converts the energy of pressurized steam into mechanical work, driving locomotives, ships, and factories. This innovation played a pivotal role in the Industrial Revolution, transforming society and the global economy."
       },
       {
        id:"22",
        cat:"Technology",
        title:"Illuminating History: The Invention of the Light Bulb",
        img:"https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHQlMjBidWxifGVufDB8fDB8fHww&w=1000&q=80",
        cont:"The light bulb, invented by Thomas Edison in 1879, is a key advancement in modern lighting. It consists of a filament enclosed in a glass bulb filled with inert gas. When electricity flows through the filament, it emits light, making it a fundamental component of everyday illumination and technological progress."
       },
       {
        id:"23",
        cat:"Technology",
        title:"Connected Worlds: The Evolution of the Telephone",
        img:"https://4.imimg.com/data4/RK/GT/MY-13455815/vintage-antique-re-creation-old-draw-telephone-tp-02.jpg",
        cont:"The telephone, credited to Alexander Graham Bell in 1876, transformed long-distance communication. It relies on electrical signals to transmit sound over vast distances, enabling real-time conversations. Bell's invention marked the start of the telecommunications industry and has since evolved into the modern smartphone, a ubiquitous device for voice and data communication."
       },
       {
        id:"24",
        cat:"Technology",
        title:"From Mainframes to Mainstream: The Personal Computer Revolution",
        img:"https://www.shutterstock.com/image-illustration/desktop-pc-personal-computer-modern-260nw-300266366.jpg",
        cont:"The personal computer, introduced in the 1970s, revolutionized how people work, connect, and create. These compact machines, like the IBM PC, Apple Macintosh, and later Windows-based systems, made computing accessible to individuals. PCs have since evolved, becoming an integral part of modern life for productivity, entertainment, and information."
       },
       {
        id:"25",
        cat:"Technology",
        title:"Unveiling the Digital Frontier: A Journey Through the Interne",
        img:"https://st.depositphotos.com/1062624/4071/i/450/depositphotos_40716309-stock-photo-best-internet-concept-of-global.jpg",
        cont:"The internet, a global network of interconnected computers, emerged in the late 20th century. It enables instant communication, access to vast information, and online services. Tim Berners-Lee's World Wide Web further revolutionized the internet, making it an integral part of modern life, reshaping communication, commerce, and education."
       },
       {
        id:"26",
        cat:"Technology",
        title:"Mobile Miracles: The Evolution of the Mobile Phone",
        img:"https://m.economictimes.com/thumb/msid-92435220,width-1280,height-720,resizemode-4,imgsize-60952/smartphones.jpg",
        cont:"The mobile phone, introduced in the 1980s, transformed communication and personal mobility. These handheld devices, like the Motorola DynaTAC and Nokia 3310, have evolved into today's smartphones. They combine voice calls, text messaging, internet access, and a multitude of apps, making them indispensable for daily life, work, and entertainment."
       },
       {
        id:"27",
        cat:"Technology",
        title:"Mastering the Machine Mind: The World of Artificial Intelligence",
        img:"https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=1024x1024&w=is&k=20&c=Mz2G15YAcE09_ywaRc43p9jmG2urk69uqyopTbaG4cI=",
        cont:"Artificial intelligence (AI) refers to machines and computer systems mimicking human intelligence. It encompasses various technologies like machine learning, deep learning, and natural language processing. AI is used in fields such as healthcare, finance, autonomous vehicles, and personal assistants like Siri and Alexa. It has the potential to transform industries and society."
       },
       {
        id:"28",
        cat:"Technology",
        title:"Shaping Tomorrow: The 3D Printing Revolution",
        img:"https://assets.weforum.org/topic/image/responsive_medium_webp_NsFNrB4YnvB-OKrhANJjqInsRahbpTIZurHxhAFlBhk.webp",
        cont:"3D printing, also known as additive manufacturing, is a technology that constructs three-dimensional objects layer by layer from digital designs. It's used in a wide range of applications, from prototyping and custom manufacturing to aerospace and healthcare. 3D printing has the potential to revolutionize production processes and shape the future of manufacturing."
       },
       {
        id:"29",
        cat:"Technology",
        title:"Energizing the Future: Exploring Renewable Energy Sources",
        img:"https://www.nationalgrid.com/sites/default/files/styles/content_embedded_image/public/images/EnergyExplained_DifferentTypesRenewableEnergy_640x360.jpg",
        cont:"Renewable energy sources, such as solar, wind, hydro, and geothermal power, harness natural processes to generate clean, sustainable electricity. They reduce greenhouse gas emissions, combat climate change, and enhance energy security. Renewable energy technologies continue to advance, playing a crucial role in the transition to a more sustainable and eco-friendly energy system."
       },
       {
        id:"30",
        cat:"Hollywood",
        title:"Sinking of the Titanic: A Tragic Tale of the Unsinkable",
        img:"https://m.media-amazon.com/images/I/61corUPYwfL._AC_UF1000,1000_QL80_.jpg",
        cont:"The Titanic, a luxurious British passenger liner, famously sank on April 15, 1912, during its maiden voyage from Southampton to New York. Striking an iceberg in the North Atlantic, the ship tragically claimed over 1,500 lives due to inadequate lifeboats. This disaster remains one of history's most iconic maritime tragedies."
       },
       {
        id:"31",
        cat:"Hollywood",
        title:"Redemption Behind Bars: The Shawshank Story",
        img:"https://i.ytimg.com/vi/d-d0TmFjmt8/maxresdefault.jpg",
        cont:"The Shawshank Redemption directed by Frank Darabont is a 1994 film adaptation of Stephen King's novella. The story revolves around Andy Dufresne a banker wrongly imprisoned for murder, and his friendship with fellow inmate Red. The film explores themes of hope friendship and redemption, becoming a beloved classic in cinema."
      },
      {
        id:"32",
        cat:"Hollywood",
        title:"The Godfather: A Mafia Masterpiece",
        img:"https://images5.alphacoders.com/131/thumb-1920-1315822.jpg",
        cont:"The Godfather, directed by Francis Ford Coppola, is a 1972 cinematic masterpiece. It tells the story of the Corleone crime family, led by patriarch Vito Corleone (Marlon Brando). The film's exploration of power, loyalty, and crime has made it an iconic work in the gangster genre, with its sequels equally celebrated."
      },
      {
        id:"33",
        cat:"Hollywood",
        title:"The Dark Knight: A Gotham Legend",
        img:"https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52217243-a137-45d6-9c6a-0dfab4633034/4fee222a97308b9e04d79724b86728d86ed94667.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        cont:"The Dark Knight, directed by Christopher Nolan, is a 2008 superhero film and the second installment in the Batman trilogy. It features Christian Bale as Batman and Heath Ledger's unforgettable performance as the Joker. The film is acclaimed for its dark and complex narrative, exploring themes of chaos and moral ambiguity."
      },
      {
        id:"34",
        cat:"Hollywood",
        title:"The Godfather Part II: Continuation of a Crime Saga",
        img:"https://images3.alphacoders.com/131/1315823.jpg",
        cont:"The Godfather Part II, directed by Francis Ford Coppola in 1974, is a sequel and prequel to the original film. It juxtaposes Michael Corleone's rise to power with his father Vito's early life. The film's exploration of family, power, and morality received critical acclaim and is considered one of the greatest cinematic achievements."
      },
      {
        id:"35",
        cat:"Hollywood",
        title:"12 Angry Men: Justice in the Jury Room",
        img:"https://assets.mubicdn.net/images/artworks/330191/images-original.png?1625164293",
        cont:"12 Angry Men, directed by Sidney Lumet in 1957, is a courtroom drama film. It depicts a jury's deliberation over a murder case, with one juror (Henry Fonda) challenging the group's consensus. The film delves into prejudice, justice, and the power of individual conviction, earning it a reputation as a class."
      },
      {
        id:"36",
        cat:"Hollywood",
        title:"Schindler's List: A Tale of Resilience and Redemption",
        img:"https://www.thestreambible.com/wp-content/uploads/2023/05/Schindlers-List.png",
        cont:"Schindler's List, directed by Steven Spielberg in 1993, is a haunting portrayal of the Holocaust. It tells the true story of Oskar Schindler, a German businessman who saved the lives of over a thousand Polish-Jewish refugees. The film is a powerful and emotional exploration of the capacity for both cruelty and compassion during a dark chapter in history."
      },
      {
        id:"37",
        cat:"Hollywood",
        title:"The Lord of the Rings: The Return of the King - A Fantasy Epic Concludes",
        img:"https://gepig.com/game_cover_460w/1595.jpg",
        cont:"The Lord of the Rings: The Return of the King, directed by Peter Jackson in 2003, is the epic conclusion of J.R.R. Tolkien's fantasy trilogy. It follows the final battles for Middle-earth as Frodo and Sam inch closer to Mount Doom. The film won 11 Academy Awards, cementing its status as a cinematic masterpiece."
      },
      {
        id:"38",
        cat:"Hollywood",
        title:"Pulp Fiction: A Mind-Bending Crime Odyssey",
        img:"https://m.media-amazon.com/images/M/MV5BMTc5Njg5Njg2MV5BMl5BanBnXkFtZTgwMjAwMzg5MTE@._V1_.jpg",
        cont:"Pulp Fiction, directed by Quentin Tarantino in 1994, is a cult classic crime film with a non-linear narrative. It weaves interconnected stories of crime, redemption, and eccentric characters, portrayed by John Travolta, Samuel L. Jackson, and Uma Thurman. The film is celebrated for its stylish direction, sharp dialogue, and iconic soundtrack."
      },
      {
        id:"39",
        cat:"Hollywood",
        title:"Avatar: Journey to Pandora",
        img:"https://images.thedirect.com/media/article_full/avatar-way-of-water-jake-sully-disney.jpg",
        cont:"Avatar, directed by James Cameron in 2009, is a groundbreaking science fiction film set on the alien planet of Pandora. The movie, known for its innovative use of 3D technology, explores themes of environmentalism, colonialism, and indigenous culture. It remains one of the highest-grossing films of all time, captivating audiences with its stunning visuals and imaginative world."
      },

       {
        id:"40",
        cat:"Fitness",
        title:"Unlocking Wellness: The Significance of Yoga in Modern Life",
        img:"https://www.shutterstock.com/shutterstock/photos/1690063582/display_1500/stock-photo-set-of-woman-in-different-yoga-poses-names-of-asanas-text-flat-style-illustration-1690063582.jpg",
        cont:"Yoga is a holistic practice originating from ancient India that combines physical postures, breath control, meditation, and philosophy to promote physical and mental well-being. It enhances flexibility, strength, and relaxation, while reducing stress and fostering mindfulness. Yoga is popular worldwide, offering a path to balance and inner peace."
       },
       {
        id:"41",
        cat:"Fitness",
        title:"Backbend Bliss: Ardha Chakrasana - The Half Wheel Posture",
        img:"https://media.istockphoto.com/id/499923526/photo/half-wheel-pose.jpg?s=612x612&w=0&k=20&c=SNq3A-X-B2Uk6o_XceCfPjVgpd-I7GQOhrpYWF7cwu0=",
        cont:"Ardha Chakrasana, also known as the Half Wheel Pose, is a yoga asana where the practitioner arches their back, lifting the chest towards the sky. This pose combines flexibility and strength, stretching the spine, chest, and shoulders, while engaging the core and legs. It's a great heart opener in yoga practice."
       },
       {
        id:"42",
        cat:"Fitness",
        title:"Find Your Inner Calm: Tadasana - The Palm Tree Pose",
        img:"https://t4.ftcdn.net/jpg/04/82/51/61/360_F_482516134_19xy3iIUrtXsFyBh9tNVGNS78YuFqsr3.jpg",
        cont:"Tadasana, or the Palm Tree Pose, is a fundamental yoga posture that involves standing with feet together, arms at your sides, and spine straight. This pose promotes proper alignment, balance, and improved posture. It's a foundational asana for various yoga sequences, enhancing strength, focus, and body awareness."
       },
       {
        id:"43",
        cat:"Fitness",
        title:"Discover Balance and Strength: Trikonasana - The Triangle Posture",
        img:"https://www.yogaclassplan.com/wp-content/uploads/2021/01/27-triangle.jpg",
        cont:"Trikonasana, the Triangle Pose, is a yoga asana that involves standing with legs apart and reaching one hand towards the floor while the other extends upward. This posture stretches the sides of the body, opens the hips, and improves balance. It enhances flexibility, strengthens the legs, and aids digestion and spine health."
       },
       {
        id:"44",
        cat:"Fitness",
        title:"Elevate Your Spirit with Bhujangasana",
        img:"https://www.shutterstock.com/image-vector/cobra-pose-beautiful-girl-practice-260nw-2086235635.jpg",
        cont:"Bhujangasana, or Cobra Pose, is a yoga position where the practitioner lies on their stomach, palms under their shoulders, and lifts their chest, arching the back. This asana strengthens the spine, opens the chest, and enhances flexibility. It can alleviate back pain, improve posture, and stimulate abdominal organs, aiding digestion."
       },
       {
        id:"45",
        cat:"Fitness",
        title:"Reaching for Balance: The Essence of Padahastasana",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6KCmoSwhnsmdt3uuvGlPIRALdx9L6oOF9w&usqp=CAU",
        cont:"Padahastasana, also known as the Hand to Foot Pose, is a yoga posture that involves bending forward to touch your toes while keeping your legs straight. It enhances flexibility, stretches the spine and hamstrings, improves blood circulation, and promotes a sense of relaxation and inner calm. A vital pose for overall well-being."
       },
       {
        id:"46",
        cat:"Fitness",
        title:"Rise and Radiate: The Majesty of Ustrasana - The Camel Pose",
        img:"https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1642394427/BW%20BLOG/Untitled-design---2022-01-17T101024.621.jpg",
        cont:"Ustrasana, the Camel Pose, is a profound yoga posture that involves bending backward while kneeling, creating a deep arch in the spine. It opens the heart chakra, improving posture, flexibility, and relieving lower back tension. Ustrasana can rejuvenate energy and promote emotional release, fostering a sense of vitality and strength."
       },
       {
        id:"47",
        cat:"Fitness",
        title:"Unfold the Future: Paschimottanasana - The Seated Forward Bend Pose",
        img:"https://www.india-a2z.com/images/Paschimottanasana.jpg",
        cont:"Paschimottanasana, or the Seated Forward Bend Pose, is a yoga posture that involves bending forward from a seated position, reaching for your toes. This asana stretches the entire back body, hamstrings, and calms the mind. It promotes flexibility, relieves stress, and may help alleviate digestive issues while enhancing a sense of inner peace and introspection."
       },
       {
        id:"48",
        cat:"Fitness",
        title:"Spiral to Serenity: Ardha Matsyendrasana - The Half Lord of the Fishes Pose",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7gmk4CnuZO8MwIUwZO3Gh7IasdqJEazFOQ&usqp=CAU",
        cont:"Ardha Matsyendrasana, the Half Lord of the Fishes Pose, is a seated yoga asana that involves twisting the spine while sitting with one leg crossed over the other. This pose enhances spinal flexibility, aids digestion, and revitalizes the spine's energy flow. It's a balancing posture that promotes harmony and inner equilibrium."
       },
       {
        id:"49",
        cat:"Fitness",
        title:"Arching to Vitality: Dhanurasana - The Bow Pose",
        img:"https://media.istockphoto.com/id/1066259556/photo/young-sporty-attractive-woman-practicing-yoga-doing-dhanurasana-exercise.jpg?s=612x612&w=0&k=20&c=bLgElo-pNfMBaqom4VoYGJmzzInx3dT2B8kTihTCIds=",
        cont:"Dhanurasana, the Bow Pose, is a dynamic yoga posture that resembles a bow when practiced. This asana involves lying on your stomach, bending your knees, and reaching back to grasp your ankles. It enhances spinal flexibility, strengthens the back and abdominal muscles, and invigorates the entire body, promoting a sense of vitality and openness."
       },
       {
        id:"50",
        cat:"Food",
        title:"The Spice of Life: Exploring the Rich Tapestry of Indian Cuisine",
        img:"https://media.istockphoto.com/id/1403976698/photo/assorted-indian-various-food-with-spices-rice-and-fresh-vegetables.webp?b=1&s=170667a&w=0&k=20&c=wcdoXaNuPuyRNQe5w7BHLhvOGw_roILTmJDCFBg5ZOU=",
        cont:"Indian cuisine is a tapestry of diverse flavors, vibrant spices, and cultural traditions. From the fiery curries of the South to the aromatic biryanis of the North, it's a journey through a world of tastes. The use of herbs, spices, and regional ingredients creates an unparalleled culinary experience, pleasing palates worldwide."
       },
       {
        id:"51",
        cat:"Food",
        title:"Harmony in a Bowl: A Glimpse into Japanese Cuisine",
        img:"https://www.shutterstock.com/image-photo/japanese-food-260nw-304585997.jpg",
        cont:"Japanese cuisine is an artful harmony of flavors and aesthetics. Sushi's delicate balance, the umami-rich broth of ramen, and the precision of tempura frying exemplify culinary perfection. With fresh ingredients and centuries of tradition, Japanese food is an exquisite fusion of taste, presentation, and cultural heritage."
       },
       {
        id:"52",
        cat:"Food",
        title:"Savoring the Sun: South Mediterranean Cuisine Unveiled",
        img:"https://nomadparadise.com/wp-content/uploads/2020/05/mediterranean-food-010-1024x640.jpg",
        cont:"South Mediterranean cuisine is a celebration of sun-kissed flavors. It combines the richness of olive oil, the tang of citrus, and the aromatic embrace of herbs like oregano and thyme. From Greek moussaka to Turkish kebabs, it's a delightful journey through a region renowned for its fresh ingredients and vibrant culinary heritage"
       },
       {
        id:"53",
        cat:"Food",
        title:"Seoulful Delights: Exploring the Diverse World of Korean Cuisine",
        img:"https://static.toiimg.com/thumb/82085026.cms?resizemode=4&width=1200",
        cont:"Korean cuisine is a harmonious blend of bold flavors and traditions. Kimchi's fiery kick, succulent BBQ, and comforting stews like bulgogi and bibimbap showcase a culinary journey rooted in history. The use of fermented ingredients and intricate seasonings make Korean food an enticing adventure for the palate and the soul"
       },
       {
        id:"54",
        cat:"Food",
        title:"A Taste of Ethiopia: Flavors from the Horn of Africa",
        img:"https://e7.pngegg.com/pngimages/778/877/png-clipart-ethiopian-cuisine-restaurant-menelik-vegetarian-cuisine-dish-recipe-paris-cafe-menu-food-recipe-thumbnail.png",
        cont:"Ethiopian cuisine is a culinary revelation, boasting a symphony of flavors and unique traditions. Injera, a spongy flatbread, serves as the cornerstone, accompanying diverse stews like doro wat and kitfo. Rich spices and the communal dining style of injera create an immersive experience, making Ethiopian food a cultural and gastronomic delight."
       },
       {
        id:"55",
        cat:"Food",
        title:"Nordic Eats: A Culinary Expedition through Scandinavian Delights",
        img:"https://cdn.shopify.com/s/files/1/0254/7715/2804/files/ScandinavianFood_1024x1024.png?v=1690725798",
        cont:"Nordic Scandinavian cuisine, shaped by nature's rugged beauty, offers a treasure trove of pure, simple flavors. From herring and salmon to hearty rye bread and iconic Swedish meatballs, it reflects the region's cold climate and foraging traditions. Traditional methods blend seamlessly with modern innovations, making it a unique culinary journey."
       },
       {
        id:"56",
        cat:"Food",
        title:"Vietnamese Gastronomy: A Symphony of Flavors from the Far East",
        img:"https://w7.pngwing.com/pngs/913/626/png-transparent-thai-cuisine-pho-noodle-house-vietnamese-cuisine-chinese-cuisine-vietnam-food-soup-food-seafood.png",
        cont:"Vietnamese food is a delicate balance of sweet, sour, and savory flavors. From the iconic pho to spring rolls and banh mi, it tantalizes the senses. Fresh herbs, lemongrass, and fish sauce create a harmonious blend, while street food stalls and family-run restaurants offer a diverse and rich culinary experience"
       },
       {
        id:"57",
        cat:"Food",
        title:"Savoring the Middle East: Lebanese Culinary Treasures",
        img:"https://img.freepik.com/premium-photo/dish-lebanese-food-white-background_912356-1257.jpg",
        cont:"Lebanese cuisine is a vibrant mosaic of Mediterranean flavors and Middle Eastern traditions. From aromatic dishes like tabbouleh and hummus to succulent shawarma and kebabs, it delights the palate. The use of fresh herbs, olive oil, and pomegranate molasses creates a rich, tantalizing tapestry that embodies Lebanese culinary excellence."
       },
       {
        id:"58",
        cat:"Food",
        title:"Thai Temptations: A Journey Through the Flavors of Thailand",
        img:"https://p7.hiclipart.com/preview/555/979/745/pad-thai-nasi-goreng-thai-cuisine-thai-tea-chinese-cuisine-pad-thai.jpg",
        cont:"Thai cuisine is a thrilling culinary adventure, a harmonious blend of sweet, sour, salty, and spicy. From the aromatic curries like green and red curry to the refreshing flavors of papaya salad and tom yum soup, Thai food is an explosion of taste. Fresh herbs and exotic spices create a mesmerizing gastronomic journey"
       },
       {
        id:"59",
        cat:"Food",
        title:"Sabores de España: Exploring the Rich Culinary Traditions of Spain",
        img:"https://e7.pngegg.com/pngimages/203/451/png-clipart-paella-spanish-cuisine-glogster-portuguese-cuisine-others-miscellaneous-food.png",
        cont:"Spanish cuisine is a vibrant tapestry of flavors, reflecting the country's diverse regions. From paella's saffron-kissed rice to the bold flavors of gazpacho and the simplicity of tapas, it's a culinary journey. Olive oil, sausages like chorizo, and fresh seafood are staples, making Spanish food a feast for the senses"
       },

    ]
       )
    return(
        <>
        <Store.Provider value = {[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )
}
export default StoreCompo