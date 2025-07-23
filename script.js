const proverbs = [
  // {
  // yoruba: "Ẹni tí ó bá fẹ́ràn ìkà, òun náà máa jẹ́ kó rí ire.",
  // translation: "He who loves wickedness shall not see goodness.",
  // meaning: "Spread good vibes, not chaos. Karma no dey sleep."
  // },
  // {
  // yoruba: "Ìwà lẹ̀wà, kì í ṣe ojú.",
  // translation: "Character is beauty, not the face.",
  // meaning: "Your vibe > your skin. Be premium inside and out."
  // },
  // {
  // yoruba: "Kí á má ṣàì jìyà, kì í ṣe àdúrà.",
  // translation: "To never suffer is not a realistic prayer.",
  // meaning: "Pain is part of the upgrade. Trust the process."
  // },
  // {
  // yoruba: "Agbára ọkùnrin kì í tán l'ọ́kọ̀ ẹlẹ́dẹ̀.",
  // translation: "A man's strength does not end in a pig's corral.",
  // meaning: "Don't waste your energy where it’s not valued."
  // },
  // {
  // yoruba: "Bí ọ̀ràn bá ṣokùnkùn, àlùfáà ní ń mọ̀ọ́kùn.",
  // translation: "If the matter is too dark, the priest will light the path.",
  // meaning: "Even deep confusion has its solution. Keep calm and debug."
  // },
  // {
  // yoruba: "Ọmọ tó mọ́yà kì í jẹ kó gba ẹ̀fọ́ lọ́wọ́ àgbà.",
  // translation: "A wise child doesn't snatch vegetables from elders.",
  // meaning: "Be respectful. Chill. Learn from OGs."
  // },
  // {
  // yoruba: "Ẹni tí ó bá mọ onà, kì í sùn nínú ọ̀nà.",
  // translation: "He who knows the road doesn't sleep in the path.",
  // meaning: "Wisdom is movement. Don’t get stuck where you already know the way."
  // },
  // {
  // yoruba: "Àjẹ́ ké lẹ́yìn ọjà, kò mọ pé ọjà tán.",
  // translation: "The witch cried after the market closed, unaware it's too late.",
  // meaning: "Timing is everything. Shoot your shot early!"
  // },
  // {
  // yoruba: "Tí òun bá jẹ́ jù, kì í jẹ́ kó pé tán.",
  // translation: "If something is too much, it won't last long.",
  // meaning: "Balance your energy. Even vibes need boundaries."
  // },
  // {
  // yoruba: "Tí òun bá jẹ́ jù, kì í jẹ́ kó pé tán.",
  // translation: "If something is too much, it won't last long.",
  // meaning: "Balance your energy. Even vibes need boundaries."
  // },
  // {
  // yoruba: "Àgbà tí ó bá ní kí ọmọ wọn má gbọ́n, òun gan-an ló ní kí wọ́n má gbé.",
  // translation: "An elder who wants children not to be wise wants them not to survive.",
  // meaning: "Don't dim someone's light because you feel threatened by their glow."
  // },
  // {
  // yoruba: "Bí a bá ń gun igi tí kò lẹ́ka, a ó rí ohun tí a ó mú sọ̀kalẹ̀.",
  // translation: "If you climb a tree without branches, you'll find something to bring down.",
  // meaning: "Even when the path looks impossible, hustle finds a way."
  // },
  // {
  // yoruba: "Ẹni tí ó bá ní kí wọ́n má rí òun lójú, kò gbọdọ̀ wà níbi tí wọ́n ti ń wò.",
  // translation: "One who doesn't want to be seen shouldn't be where people are looking.",
  // meaning: "If you want privacy, don't post your business on social media."
  // },
  // {
  // yoruba: "Òkété tí ó bá gun igi, ó di ọ̀bọ.",
  // translation: "A grass-cutter that climbs a tree becomes a monkey.",
  // meaning: "Switch up your environment, switch up your whole vibe."
  // },
  // {
  // Yoruba:"Ẹni tí ó bá jẹ́ ká mọ̀ ọ́ dáadáa, inú rẹ̀ dára.",
  // translation:"One who lets us know them well has a good heart.",
  // meaning:"Transparency shows confidence and good intentions."
  // },
  // {
  // Yoruba: "Kì í ṣe gbogbo ohun tí ó dára ni ó máa dùn mọ́ni.",
  // Translation: "Not everything that is good will be pleasant to us.",
  // Meaning: "Sometimes the right path doesn't feel good, but it leads to growth."
  // },
  // {
  // Yoruba: "Ẹni tí ó bá mọ ibi tí òun ti ń lọ, ọ̀nà rẹ̀ kò ní ṣòro.",
  // Translation: "One who knows where they're going won't find their path difficult.",
  // Meaning: "Clear vision makes any journey manageable. Know your destination."
  // },
  // {
  // yoruba: "Ìwà lẹ̀wà, kì í ṣe ojú.",
  // translation: "Character is beauty, not the face.",
  // meaning: "Your vibe > your skin. Be premium inside and out."
  // },
  {
                yoruba: "Ẹni tí ó bá fẹ́ràn ìkà, òun náà máa jẹ́ kó rí ire.",
                translation: "He who loves wickedness shall not see goodness.",
                meaning: "Spread good vibes, not chaos. Karma no dey sleep."
            },
            {
                yoruba: "Ìwà lẹ̀wà, kì í ṣe ojú.",
                translation: "Character is beauty, not the face.",
                meaning: "Your vibe > your skin. Be premium inside and out."
            },
            {
                yoruba: "Kí á má ṣàì jìyà, kì í ṣe àdúrà.",
                translation: "To never suffer is not a realistic prayer.",
                meaning: "Pain is part of the upgrade. Trust the process."
            },
            {
                yoruba: "Agbára ọkùnrin kì í tán l'ọ́kọ̀ ẹlẹ́dẹ̀.",
                translation: "A man's strength does not end in a pig's corral.",
                meaning: "Don't waste your energy where it's not valued."
            },
            {
                yoruba: "Bí ọ̀ràn bá ṣokùnkùn, àlùfáà ní ń mọ̀ọ́kùn.",
                translation: "If the matter is too dark, the priest will light the path.",
                meaning: "Even deep confusion has its solution. Keep calm and debug."
            },
            {
                yoruba: "Ọmọ tó mọ́yà kì í jẹ kó gba ẹ̀fọ́ lọ́wọ́ àgbà.",
                translation: "A wise child doesn't snatch vegetables from elders.",
                meaning: "Be respectful. Chill. Learn from OGs."
            },
            {
                yoruba: "Ẹni tí ó bá mọ onà, kì í sùn nínú ọ̀nà.",
                translation: "He who knows the road doesn't sleep in the path.",
                meaning: "Wisdom is movement. Don't get stuck where you already know the way."
            },
            {
                yoruba: "Àjẹ́ ké lẹ́yìn ọjà, kò mọ pé ọjà tán.",
                translation: "The witch cried after the market closed, unaware it's too late.",
                meaning: "Timing is everything. Shoot your shot early!"
            },
            {
                yoruba: "Tí òun bá jẹ́ jù, kì í jẹ́ kó pé tán.",
                translation: "If something is too much, it won't last long.",
                meaning: "Balance your energy. Even vibes need boundaries."
            },
            {
                yoruba: "Àgbà tí ó bá ní kí ọmọ wọn má gbọ́n, òun gan-an ló ní kí wọ́n má gbé.",
                translation: "An elder who wants children not to be wise wants them not to survive.",
                meaning: "Don't dim someone's light because you feel threatened by their glow."
            },
            {
                yoruba: "Bí a bá ń gun igi tí kò lẹ́ka, a ó rí ohun tí a ó mú sọ̀kalẹ̀.",
                translation: "If you climb a tree without branches, you'll find something to bring down.",
                meaning: "Even when the path looks impossible, hustle finds a way."
            },
            {
                yoruba: "Ẹni tí ó bá ní kí wọ́n má rí òun lójú, kò gbọdọ̀ wà níbi tí wọ́n ti ń wò.",
                translation: "One who doesn't want to be seen shouldn't be where people are looking.",
                meaning: "If you want privacy, don't post your business on social media."
            },
            {
                yoruba: "Òkété tí ó bá gun igi, ó di ọ̀bọ.",
                translation: "A grass-cutter that climbs a tree becomes a monkey.",
                meaning: "Switch up your environment, switch up your whole vibe."
            },
            {
                yoruba: "Ẹni tí ó bá jẹ́ ká mọ̀ ọ́ dáadáa, inú rẹ̀ dára.",
                translation: "One who lets us know them well has a good heart.",
                meaning: "Transparency shows confidence and good intentions."
            },
            {
                yoruba: "Kì í ṣe gbogbo ohun tí ó dára ni ó máa dùn mọ́ni.",
                translation: "Not everything that is good will be pleasant to us.",
                meaning: "Sometimes the right path doesn't feel good, but it leads to growth."
            },
            {
                yoruba: "Ẹni tí ó bá mọ ibi tí òun ti ń lọ, ọ̀nà rẹ̀ kò ní ṣòro.",
                translation: "One who knows where they're going won't find their path difficult.",
                meaning: "Clear vision makes any journey manageable. Know your destination."
            },
            // NEW PROVERBS START HERE (50 additional ones)
            {
                yoruba: "Àgbà tí ó gbọ́n ju ọmọ lọ, kò sí.",
                translation: "There is no elder wiser than a child in some matters.",
                meaning: "Fresh perspectives beat experience sometimes. Stay open to learning from anyone."
            },
            {
                yoruba: "Bí inú bá dùn ẹni, ojú á ń yọ̀.",
                translation: "When the heart is happy, the face shows joy.",
                meaning: "Your inner peace always shows on the outside. Glow from within."
            },
            {
                yoruba: "Ẹni tí ó ń gun òkè ní ń rí òkè tí ó ga jù.",
                translation: "One who climbs a mountain sees taller mountains.",
                meaning: "Level up and you'll see bigger challenges. Growth never stops."
            },
            {
                yoruba: "Kò sí ẹni tí ó lè pa ẹranko tí kò mọ orúkọ rẹ̀.",
                translation: "No one can kill an animal whose name they don't know.",
                meaning: "Knowledge is power. Know your target before you act."
            },
            {
                yoruba: "Àkàrà tí a bá jẹ lómi, kò dùn bí tí a bá jẹ lẹ́gbẹ̀ẹ́ ọtí.",
                translation: "Bean cakes eaten with water don't taste as good as those eaten with palm wine.",
                meaning: "Context and environment matter. Surround yourself with quality vibes."
            },
            {
                yoruba: "Ẹni tí ó bá ní àgbàrá, kò ní í lo fún ohun tí kò tọ́.",
                translation: "One who has power should not use it for wrong purposes.",
                meaning: "With great power comes great responsibility. Use your influence wisely."
            },
            {
                yoruba: "Bí ẹja bá kú nínú omi, kò burú fún omi náà.",
                translation: "If fish dies in water, it doesn't make the water bad.",
                meaning: "Don't let someone else's failure define the space you're in."
            },
            {
                yoruba: "Ẹni tí ń bẹ̀rù ikú kì í gbé ayé dáa.",
                translation: "One who fears death cannot live life well.",
                meaning: "Fear of failure stops you from really living. Take calculated risks."
            },
            {
                yoruba: "Àgbàdo kan kì í jẹ́ kí àkàrà gbóná jù.",
                translation: "One corn kernel cannot make bean cakes burn.",
                meaning: "Small problems shouldn't derail your whole plan. Stay focused on the bigger picture."
            },
            {
                yoruba: "Bí a bá ńlá sókè, a kì í gbàgbé ibi tí a ti jáde.",
                translation: "As we climb up, we shouldn't forget where we started.",
                meaning: "Never forget your roots. Success should humble you, not change your character."
            },
            {
                yoruba: "Ẹni tí ó bá tẹ́ ẹgbẹ́ rẹ̀ mọ́lẹ̀, òun gan-an ni yóó tẹ́ ara rẹ̀ mọ́lẹ̀.",
                translation: "One who betrays their friend will eventually betray themselves.",
                meaning: "Loyalty starts with self-respect. How you treat others reflects who you are."
            },
            {
                yoruba: "Ohun tí a bá sọ lọ́dọ̀ ènìyàn, ló máa yọ padà wá bá wa.",
                translation: "What we say to people will come back to us.",
                meaning: "Words have energy. Speak life into others and life will speak back to you."
            },
            {
                yoruba: "Ẹni tí ó bá ní sùúrù, ohun gbogbo ni yóó rí.",
                translation: "One who has patience will see everything.",
                meaning: "Patience is the ultimate cheat code. Time reveals all truths."
            },
            {
                yoruba: "Bí ọwọ́ otún bá jẹ́ ọwọ́ òsì, wọ́n á jọ mú ohun kan.",
                translation: "If the right hand cooperates with the left hand, they can carry anything together.",
                meaning: "Teamwork makes the dream work. Unity multiplies strength."
            },
            {
                yoruba: "Ẹni tí ó bá ní kí wọ́n má mọ̀ pé òun ni, kò gbọdọ̀ sọ̀rọ̀.",
                translation: "One who doesn't want to be known shouldn't speak.",
                meaning: "Your words reveal who you are. Silence is sometimes wisdom."
            },
            {
                yoruba: "Àjàkálẹ̀ aró tí ó ní òun kò kọ ẹ̀kọ́, yóó máa kọ títí ayé ó fi pé.",
                translation: "The dye-maker who claims to have no more to learn will keep learning till the world ends.",
                meaning: "Pride stops progress. Stay humble, keep growing."
            },
            {
                yoruba: "Ẹni tí ó bá rí àǹfààní kan, kò gbọdọ̀ gbàgbé pé àǹfààní míì wà.",
                translation: "One who finds one opportunity shouldn't forget that other opportunities exist.",
                meaning: "Don't put all your eggs in one basket. Keep your options open."
            },
            {
                yoruba: "Bí ẹni bá ń kọ́ ilé, kò gbọdọ̀ gbàgbé òjò.",
                translation: "When building a house, one must not forget about rain.",
                meaning: "Plan for challenges. Prepare for storms while building your castle."
            },
            {
                yoruba: "Àgbà tí ó bá fi ẹnu rẹ̀ lù ọmọ, ọmọ náà yóó fi ẹnu rẹ̀ lù ọmọ òun.",
                translation: "An elder who uses their mouth to beat a child, that child will use their mouth to beat their own child.",
                meaning: "What you model gets passed down. Break negative cycles with better choices."
            },
            {
                yoruba: "Ẹni tí ó bá bínú sí ohun kan, yóó rí ohun kan tí yóó tún bínú sí i.",
                translation: "One who gets angry at something will find something else to get angry about.",
                meaning: "Anger is a habit. Choose peace as your default mode."
            },
            {
                yoruba: "Bí òkun bá ń yí padà, ẹja kékeré máa ń tún rí àyè àti àǹfààní.",
                translation: "When the ocean changes, small fish find new space and opportunities.",
                meaning: "Change creates opportunity. Adapt and you'll find your lane."
            },
            {
                yoruba: "Ẹni tí ó ní í lo àkókò rẹ̀ fún ènìyàn, ènìyàn yóó lo àkókò wọn fún un.",
                translation: "One who invests their time in people, people will invest their time in them.",
                meaning: "What you give is what you get. Invest in relationships, not just results."
            },
            {
                yoruba: "Àgbàrá tí à ń lò láti kọ́lé yẹ kó jẹ́ ti ìbálépọ̀, kì í ṣe ti ìpayà.",
                translation: "The strength used to build should be from cooperation, not from fear.",
                meaning: "Build with love, not control. Fear-based foundations always crack."
            },
            {
                yoruba: "Bí ẹni bá fẹ́ mọ ọ̀tún, kò gbọdọ̀ kọ òsì sílẹ̀.",
                translation: "If one wants to know the right, they shouldn't abandon the left.",
                meaning: "Consider all perspectives before making decisions. Balance is wisdom."
            },
            {
                yoruba: "Ẹni tí ó bá fi àgbàrá rẹ̀ ran ẹlòmíràn lọ́wọ́, àgbàrá rẹ̀ yóó pọ̀ sí i.",
                translation: "One who uses their strength to help others will have their strength increased.",
                meaning: "Helping others multiplies your own power. Share to grow."
            },
            {
                yoruba: "Bí a bá ń gun òkè pẹ̀lú ẹgbẹ́, àárẹ̀ kò ní jẹ wá lára.",
                translation: "If we climb mountains with friends, tiredness won't affect us.",
                meaning: "Good company makes hard journeys easier. Choose your squad wisely."
            },
            {
                yoruba: "Ẹni tí ó bá ní àwọn ọmọ rẹ̀ kò gbọdọ̀ jẹ aláìgbọ́ràn, òun gan-an kò gbọdọ̀ jẹ́ aláìgbọ́ràn.",
                translation: "One who doesn't want their children to be stubborn shouldn't be stubborn themselves.",
                meaning: "You can't teach what you don't practice. Model the behavior you want to see."
            },
            {
                yoruba: "Àkókò tí a bá fi ń fọ ọmọ lẹ́kọ̀ọ́ ní ń mú kó mọ̀ọ́ràn.",
                translation: "The time spent teaching a child is what makes them wise.",
                meaning: "Investment in education pays compound interest. Teach with patience."
            },
            {
                yoruba: "Bí àgbà bá sọ̀rọ̀ kan, àgbà mẹ́ta yóó gbọ́.",
                translation: "If one elder speaks, three elders should listen.",
                meaning: "Even wise people need to listen more than they speak. Humility opens ears."
            },
            {
                yoruba: "Ẹni tí ó bá mú ohun tí ó lè mú, yóó rí ohun tí kò lè mú.",
                translation: "One who carries what they can carry will find what they cannot carry.",
                meaning: "Do your part and help will come. Start where you are with what you have."
            },
            {
                yoruba: "Igi tí ó bá gbé lóde òrun, àwọn ẹyẹ ni yóó máa wá sí ọ̀dọ̀ rẹ̀.",
                translation: "A tree that reaches toward heaven will have birds come to it.",
                meaning: "Elevate your standards and elevated people will find you."
            },
            {
                yoruba: "Bí ẹni bá fẹ́ dìde, kò gbọdọ̀ wò àwọn tí ó kú sílẹ̀.",
                translation: "If one wants to rise, they shouldn't look at those who have fallen.",
                meaning: "Focus on inspiration, not limitations. Look up, not down."
            },
            {
                yoruba: "Àgbà tí ó ń kọ́ ọmọ ọgbọ́n ní ń kọ́ ara rẹ̀ pẹ̀lú.",
                translation: "An elder teaching wisdom is also teaching themselves.",
                meaning: "Teaching is learning. When you share knowledge, you deepen your own understanding."
            },
            {
                yoruba: "Ẹni tí ó bá ní àgbàrá láti ṣe ohun kan, ó ní àgbàrá láti má ṣe é.",
                translation: "One who has the power to do something has the power not to do it.",
                meaning: "True power is self-control. Sometimes the strongest move is restraint."
            },
            {
                yoruba: "Bí omi bá ń sàn, ó máa mú ẹyin àti òkúta lọ.",
                translation: "When water flows, it carries both eggs and stones.",
                meaning: "Life's changes affect everyone. Be ready to move with the current."
            },
            {
                yoruba: "Ẹni tí ó bá ní owó, kò ní í fi gbogbo rẹ̀ ra ohun kan.",
                translation: "One who has money won't spend it all on one thing.",
                meaning: "Diversify your investments. Don't put everything into one bucket."
            },
            {
                yoruba: "Àgbà tí ó bá fẹ́ kí ọmọ rẹ̀ dárà, òun gan-an ní láti dárà.",
                translation: "An elder who wants their child to be good must be good themselves.",
                meaning: "Be the change you want to see in your family. Leadership starts at home."
            },
            {
                yoruba: "Bí ẹni bá ń ṣiṣẹ́ pẹ̀lú àgbàrá rẹ̀, àgbàrá yóó pọ̀ sí i.",
                translation: "If one works with their strength, their strength will increase.",
                meaning: "Use it or lose it. Your abilities grow through consistent practice."
            },
            {
                yoruba: "Ẹni tí ó bá gbọ́ ìmọ̀ ran kan, yóó ní àǹfààní láti gbọ́ ìmọ̀ ran mẹ́ta.",
                translation: "One who receives one piece of advice will have the opportunity to receive three.",
                meaning: "Wisdom attracts more wisdom. Stay teachable and knowledge will find you."
            },
            {
                yoruba: "Bí ojú bá ti ń rí ohun kan dáadáa, etí yóó gbọ́ ohun rẹ̀ dáadáa.",
                translation: "If the eye sees something well, the ear will hear about it well.",
                meaning: "Good experiences get shared. Excellence creates its own publicity."
            },
            {
                yoruba: "Àgbàrá tí ẹni bá ní kò tó tí àwùjọ.",
                translation: "One person's strength is not as much as the community's strength.",
                meaning: "Individual talent is good, but collective power is unbeatable."
            },
            {
                yoruba: "Ẹni tí ó bá fẹ́ gòkè, kò gbọdọ̀ fi àwọn tí ó wà lísàlẹ̀ ṣọ́rọ̀.",
                translation: "One who wants to go up shouldn't speak badly of those below.",
                meaning: "Don't step on others to elevate yourself. Lift as you climb."
            },
            {
                yoruba: "Bí ẹni bá ṣe ohun kan pẹ̀lú ìfẹ́, yóó rí èrè rẹ̀.",
                translation: "If one does something with love, they will see its benefits.",
                meaning: "Love is the secret ingredient that makes everything better. Lead with your heart."
            },
            {
                yoruba: "Àgbà tí ó bá ṣe àṣìṣe kan, yóó kọ́ ọmọ rẹ̀ láti má ṣe é.",
                translation: "An elder who makes a mistake will teach their child not to make it.",
                meaning: "Mistakes are lessons in disguise. Share your failures to help others succeed."
            },
            {
                yoruba: "Ẹni tí ó bá mọ̀ pé òun kò mọ nǹkan kan, ó ti bẹ̀rẹ̀ sí ní kọ́ ọ.",
                translation: "One who knows they don't know something has begun to learn it.",
                meaning: "Acknowledging ignorance is the first step to wisdom. Stay curious."
            },
            {
                yoruba: "Bí a bá ń lo ọ̀nà kan títí, a máa rí ọ̀nà mẹ́ta.",
                translation: "If we keep walking on one path, we will see three paths.",
                meaning: "Persistence reveals options. Keep moving and opportunities will appear."
            },
            {
                yoruba: "Ẹni tí ó bá tí ọmọ rẹ̀ nínú, ọmọ náà yóó tí àwọn míràn nínú.",
                translation: "One who encourages their child, that child will encourage others.",
                meaning: "Encouragement is contagious. Be someone's cheerleader and watch the ripple effect."
            },
            {
                yoruba: "Àkókò tí a bá lò láti ronú nípa ohun kan ní ń mú kó yé wa dáadáa.",
                translation: "The time we spend thinking about something makes us understand it well.",
                meaning: "Deep thinking beats quick reactions. Take time to process before responding."
            },
            {
                yoruba: "Bí ẹni bá ní àwọn ọ̀rẹ́ tí ó dára, wọ́n yóó mú kó dára pẹ̀lú.",
                translation: "If one has good friends, they will make them good too.",
                meaning: "Your circle shapes your character. Choose friends who inspire your best self."
            },
            {
                yoruba: "Ẹni tí ó bá gbọ́ ìmọ̀ ran tí kò bá òun mu, kò tíì gbọ́ ìmọ̀ ran.",
                translation: "One who hears advice that doesn't concern them hasn't really heard advice.",
                meaning: "Wisdom without application is just noise. Make it personal to make it powerful."
            }
];

function consultOracle() {
  const result = proverbs[Math.floor(Math.random() * proverbs.length)];
  document.getElementById("yoruba").textContent = `🗣️ ${result.yoruba}`;
  document.getElementById("translation").textContent = `🌍 ${result.translation}`;
  document.getElementById("meaning").textContent = `💡 ${result.meaning}`;
}
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'yo-NG'; // You can try 'yo-NG' if browser supports it
  utterance.rate = 0.5;
  utterance.pitch = 0.5;
  synth.speak(utterance);
}
speak(`${result.yoruba}. ${result.translation}. ${result.meaning}`);
function consultOracle() {
  const result = proverbs[Math.floor(Math.random() * proverbs.length)];
  
  // Reset animation
  const box = document.getElementById("oracle-box");
  box.classList.remove("oracle-box");
  void box.offsetWidth; // magic trick to restart animation
  box.classList.add("oracle-box");

  document.getElementById("yoruba").textContent = `🗣️ ${result.yoruba}`;
  document.getElementById("translation").textContent = `🌍 ${result.translation}`;
  document.getElementById("meaning").textContent = `💡 ${result.meaning}`;

  speak(`${result.yoruba}. ${result.translation}. ${result.meaning}`);
}
