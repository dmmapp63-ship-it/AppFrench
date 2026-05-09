const sections = document.querySelectorAll('.section');
const menuButtons = document.querySelectorAll('.menu-item');
const currentSectionTitle = document.getElementById('currentSectionTitle');
const streakCounter = document.getElementById('streakCounter');
const wordsLearned = document.getElementById('wordsLearned');
const grammarRead = document.getElementById('grammarRead');
const quizScore = document.getElementById('quizScore');
const favoriteCount = document.getElementById('favoriteCount');
const flashcardWord = document.getElementById('flashcardWord');
const flashcardDefinition = document.getElementById('flashcardDefinition');
const vocabList = document.getElementById('vocabList');
const grammarList = document.getElementById('grammarList');
const vocabSearch = document.getElementById('vocabSearch');
const grammarSearch = document.getElementById('grammarSearch');
const clearSearch = document.getElementById('clearSearch');
const levelButtons = document.querySelectorAll('#vocabulary .level-button');
const activityHistory = document.getElementById('activityHistory');
const roadmapList = document.getElementById('roadmapList');
const resetRoadmap = document.getElementById('resetRoadmap');
const practicePrompt = document.getElementById('practicePrompt');
const practiceAnswer = document.getElementById('practiceAnswer');
const practiceFeedback = document.getElementById('practiceFeedback');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswers = document.getElementById('quizAnswers');
const quizStatus = document.getElementById('quizStatus');
const nextQuestion = document.getElementById('nextQuestion');
const themeToggle = document.getElementById('themeToggle');
const themeToggleBottom = document.getElementById('themeToggleBottom');
const newFlashcard = document.getElementById('newFlashcard');
const playPronunciation = document.getElementById('playPronunciation');
const showExample = document.getElementById('showExample');
const startQuiz = document.getElementById('startQuiz');
const checkAnswer = document.getElementById('checkAnswer');
const nextPrompt = document.getElementById('nextPrompt');
const practiceTabs = document.querySelectorAll('.practice-tab');
const translatePanel = document.getElementById('translatePanel');
const speakingPanel = document.getElementById('speakingPanel');
const pronunciationPanel = document.getElementById('pronunciationPanel');
const dialoguePanel = document.getElementById('dialoguePanel');
const speakingPrompt = document.getElementById('speakingPrompt');
const speakingRecognized = document.getElementById('speakingRecognized');
const speakingFeedback = document.getElementById('speakingFeedback');
const startSpeaking = document.getElementById('startSpeaking');
const nextSpeaking = document.getElementById('nextSpeaking');
const pronunciationPrompt = document.getElementById('pronunciationPrompt');
const playPronunciationPhrase = document.getElementById('playPronunciationPhrase');
const startPronunciation = document.getElementById('startPronunciation');
const nextPronunciation = document.getElementById('nextPronunciation');
const pronunciationRecognized = document.getElementById('pronunciationRecognized');
const pronunciationFeedback = document.getElementById('pronunciationFeedback');
const dialogueText = document.getElementById('dialogueText');
const dialogueTitle = document.getElementById('dialogueTitle');
const toggleDialogueTranslation = document.getElementById('toggleDialogueTranslation');
const nextDialogue = document.getElementById('nextDialogue');
const favoriteFilter = document.getElementById('favoriteFilter');
const topicButtons = document.getElementById('topicButtons');
const dashboardChallenge = document.getElementById('dashboardChallenge');
const refreshChallenge = document.getElementById('refreshChallenge');
const speakDialogueLine = document.getElementById('speakDialogueLine');
const vocabResultSummary = document.getElementById('vocabResultSummary');
const loadMoreVocab = document.getElementById('loadMoreVocab');
const completeDailyGoal = document.getElementById('completeDailyGoal');
const dailyGoalStatus = document.getElementById('dailyGoalStatus');
const exportBackup = document.getElementById('exportBackup');
const importBackupInput = document.getElementById('importBackupInput');
const backupStatus = document.getElementById('backupStatus');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const syncNowBtn = document.getElementById('syncNowBtn');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const authStatus = document.getElementById('authStatus');
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const toastContainer = document.getElementById('toastContainer');
const practiceLevelRow = document.getElementById('practiceLevelRow');
const practiceLevelFilter = document.getElementById('practiceLevelFilter');
const practiceTopicFilter = document.getElementById('practiceTopicFilter');
const practiceOrderFilter = document.getElementById('practiceOrderFilter');
const voiceSelectEl = document.getElementById('voiceSelect');
const testVoiceBtn = document.getElementById('testVoice');
const practiceMeta = document.getElementById('practiceMeta');
const speakingMeta = document.getElementById('speakingMeta');
const pronunciationMeta = document.getElementById('pronunciationMeta');
const dialogueMeta = document.getElementById('dialogueMeta');

const vocabularies = (typeof vocabularyData !== 'undefined' && vocabularyData.length) ? vocabularyData : [
  { level: 'A1', topic: 'Chào hỏi', word: 'Bonjour', meaning: 'Xin chào', example: 'Bonjour, comment ça va ?', difficulty: 1 },
  { level: 'A1', topic: 'Chào hỏi', word: 'Merci', meaning: 'Cảm ơn', example: 'Merci beaucoup !', difficulty: 1 },
  { level: 'A2', topic: 'Du lịch', word: 'Réserver', meaning: 'Đặt trước', example: 'Je voudrais réserver une chambre.', difficulty: 2 }
];

const grammarLessons = [
  { level:'A1', title:'Mạo từ (Articles)', text:'Mạo từ xác định: le (giống đực), la (giống cái), les (số nhiều). Mạo từ bất định: un, une, des. Ví dụ: le chat (con mèo), une pomme (một quả táo), des livres (những cuốn sách).' },
  { level:'A1', title:'Động từ être (Thì hiện tại)', text:'Je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Dùng để mô tả trạng thái, nghề nghiệp, quốc tịch. Ví dụ: Je suis étudiant. Elle est française.' },
  { level:'A1', title:'Động từ avoir (Thì hiện tại)', text:'J\'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Dùng để diễn đạt sở hữu. Ví dụ: J\'ai un chat. Nous avons deux enfants.' },
  { level:'A1', title:'Phủ định với ne...pas', text:'Đặt "ne" trước động từ và "pas" sau. Ví dụ: Je ne parle pas anglais. Il n\'a pas de voiture. Trước nguyên âm: ne → n\'.' },
  { level:'A1', title:'Câu hỏi cơ bản', text:'3 cách hỏi: (1) Intonation: Tu parles français ? (2) Est-ce que: Est-ce que tu parles français ? (3) Đảo ngữ: Parles-tu français ? Từ hỏi: qui (ai), quoi (gì), où (ở đâu), quand (khi nào), pourquoi (tại sao), comment (như thế nào).' },
  { level:'A1', title:'Tính từ sở hữu', text:'Mon/ma/mes (của tôi), ton/ta/tes (của bạn), son/sa/ses (của anh/cô ấy), notre/nos (của chúng tôi), votre/vos (của các bạn), leur/leurs (của họ). Ví dụ: mon frère, ma sœur, mes parents.' },
  { level:'A1', title:'Số đếm 1–100', text:'1–10: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix. Số đặc biệt: 11 onze, 12 douze, 16 seize, 20 vingt, 21 vingt et un, 70 soixante-dix, 80 quatre-vingts, 90 quatre-vingt-dix, 100 cent.' },
  { level:'A1', title:'Giới từ nơi chốn', text:'à = ở/đến (thành phố/nước nhỏ), en = ở/đến (nước giống cái), au = ở/đến (nước giống đực), dans = trong, sur = trên, sous = dưới, devant = trước, derrière = sau, chez = tại nhà của. Ví dụ: Je suis à Paris. Il habite en France.' },
  { level:'A2', title:'Thì quá khứ gần (Passé Composé)', text:'Cấu trúc: avoir/être + participe passé. Dùng avoir: j\'ai mangé, tu as parlé. Dùng être (với động từ di chuyển và phản thân): je suis allé(e), nous sommes partis. Ví dụ: Hier, j\'ai mangé une pizza. Elle est arrivée à midi.' },
  { level:'A2', title:'Thì tương lai gần (Futur Proche)', text:'Cấu trúc: aller + infinitif. Je vais manger, tu vas partir, il va travailler. Diễn đạt dự định hoặc sự kiện sắp xảy ra. Ví dụ: Je vais apprendre le français. Nous allons voyager en été.' },
  { level:'A2', title:'Tính từ miêu tả', text:'Tính từ thường đứng SAU danh từ: une robe bleue, un livre intéressant. Trừ BAGS (Beauty, Age, Goodness, Size): une belle femme, un vieux monsieur, un bon repas, un petit enfant. Tính từ chia theo giống/số: grand/grande/grands/grandes.' },
  { level:'A2', title:'Đại từ tân ngữ trực tiếp (COD)', text:'le, la, l\', les đứng trước động từ. Ví dụ: Je mange la pomme → Je la mange. Tu vois les enfants → Tu les vois. Với passé composé: Je l\'ai vu. Lưu ý: participe passé chia theo giới tính/số của COD đứng trước.' },
  { level:'A2', title:'Thì hiện tại tiếp diễn', text:'Cấu trúc: être en train de + infinitif. Diễn đạt hành động đang xảy ra ngay lúc nói. Ví dụ: Je suis en train de manger. Elle est en train d\'étudier. Nous sommes en train de regarder un film.' },
  { level:'A2', title:'So sánh hơn / bằng / kém', text:'Hơn: plus + adj + que. Bằng: aussi + adj + que. Kém: moins + adj + que. Ví dụ: Paris est plus grand que Lyon. Marie est aussi intelligente que Paul. Ce livre est moins cher que l\'autre. Đặc biệt: bon → meilleur, mauvais → pire.' },
  { level:'B1', title:'Thì chưa hoàn thành (Imparfait)', text:'Hình thành từ nous-form hiện tại bỏ -ons + đuôi: -ais, -ais, -ait, -ions, -iez, -aient. Dùng để: mô tả bối cảnh quá khứ, thói quen trong quá khứ, trạng thái kéo dài. Ví dụ: Quand j\'étais enfant, je jouais au foot tous les jours.' },
  { level:'B1', title:'Đại từ tân ngữ gián tiếp (COI)', text:'lui (cho anh/cô ấy), leur (cho họ) đứng trước động từ. Ví dụ: Je parle à Marie → Je lui parle. Il écrit à ses parents → Il leur écrit. Phân biệt COD/COI: direct = verbe + quelqu\'un, indirect = verbe + à + quelqu\'un.' },
  { level:'B1', title:'Điều kiện cách (Conditionnel présent)', text:'Hình thành: gốc futur + đuôi imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Dùng để: lịch sự, giả thiết, ước muốn. Ví dụ: Je voudrais un café. Si j\'avais de l\'argent, j\'achèterais une voiture. Vous devriez partir.' },
  { level:'B1', title:'Mệnh đề quan hệ (Relatif)', text:'Qui = chủ ngữ: La femme qui parle est professeur. Que = tân ngữ: Le livre que je lis est intéressant. Dont = de + relatif: L\'ami dont je parle s\'appelle Paul. Où = nơi/thời gian: La ville où j\'habite est belle.' },
  { level:'B1', title:'Thì tương lai đơn (Futur Simple)', text:'Hình thành: infinitif + đuôi: -ai, -as, -a, -ons, -ez, -ont. Bất quy tắc: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-. Ví dụ: Demain, je partirai tôt. Dans dix ans, nous habiterons à Paris.' },
  { level:'B1', title:'Liên từ và trạng từ nối', text:'Thêm ý: de plus, en outre, également. Trái lại: cependant, pourtant, néanmoins, en revanche. Nguyên nhân: parce que, car, puisque. Hậu quả: donc, ainsi, c\'est pourquoi. Nhượng bộ: bien que + subjonctif, même si.' },
  { level:'B2', title:'Tiếp liên cách (Subjonctif présent)', text:'Dùng sau: vouloir que, falloir que, bien que, pour que, avant que, à moins que... Ví dụ: Il faut que tu viennes. Je veux qu\'elle soit heureuse. Bien qu\'il soit fatigué, il travaille. Hình thành: gốc ils-form + đuôi: -e, -es, -e, -ions, -iez, -ent.' },
  { level:'B2', title:'Thì quá khứ xa (Plus-que-parfait)', text:'Cấu trúc: imparfait de avoir/être + participe passé. Diễn đạt hành động xảy ra TRƯỚC một hành động quá khứ khác. Ví dụ: Quand je suis arrivé, il était déjà parti. Elle avait fini son travail avant de partir.' },
  { level:'B2', title:'Câu bị động (Voix passive)', text:'Cấu trúc: être (chia thì) + participe passé + par + agent. Ví dụ: Le président signe la loi → La loi est signée par le président. Le voleur a été arrêté par la police. Lưu ý participe passé chia theo chủ ngữ.' },
  { level:'B2', title:'Câu điều kiện loại 2 và 3', text:'Loại 2 (giả thiết không thực trong hiện tại): Si + imparfait, conditionnel présent. Ví dụ: Si j\'avais le temps, je voyagerais plus. Loại 3 (giả thiết không thực trong quá khứ): Si + plus-que-parfait, conditionnel passé. Ví dụ: Si j\'avais étudié, j\'aurais réussi.' },
  { level:'C1', title:'Động từ phản thân (Verbes pronominaux)', text:'4 loại: phản thân thực sự (se laver), tương hỗ (se parler), thụ động (se vendre bien), thành ngữ (se souvenir, se tromper). Passé composé luôn dùng être. Ví dụ: Ils se sont rencontrés à Paris. Je me suis trompé de chemin.' },
  { level:'C1', title:'Danh hóa và trừu tượng hóa', text:'Biến động từ thành danh từ: partir → le départ, arriver → l\'arrivée, choisir → le choix, savoir → le savoir. Dùng trong văn viết trang trọng để tạo câu súc tích hơn. Ví dụ: La prise de décision est difficile (= Décider est difficile).' },
  { level:'C1', title:'Phong cách văn viết nâng cao', text:'Đảo ngữ văn học: Ainsi parla le prophète. Participe présent thay mệnh đề: En arrivant, il a vu... Gérondif: En travaillant dur, on réussit. Subjonctif imparfait trong văn cổ: Bien qu\'il fût fatigué... Nominalisation để trang trọng hóa câu.' }
];

const practiceTasks = [
  { level:'A1', topic:'Chào hỏi',   prompt:'Xin chào, bạn có khỏe không?',             answer:'Bonjour, comment ça va ?' },
  { level:'A1', topic:'Chào hỏi',   prompt:'Cảm ơn rất nhiều.',                          answer:'Merci beaucoup.' },
  { level:'A1', topic:'Chào hỏi',   prompt:'Tạm biệt, hẹn gặp lại.',                     answer:'Au revoir, à bientôt.' },
  { level:'A1', topic:'Giới thiệu', prompt:'Tôi tên là Nam.',                            answer:'Je m\'appelle Nam.' },
  { level:'A1', topic:'Giới thiệu', prompt:'Tôi muốn cà phê.',                           answer:'Je veux un café.' },
  { level:'A1', topic:'Giới thiệu', prompt:'Tôi là sinh viên.',                          answer:'Je suis étudiant.' },
  { level:'A1', topic:'Gia đình',   prompt:'Tôi có hai anh trai.',                       answer:'J\'ai deux frères.' },
  { level:'A1', topic:'Gia đình',   prompt:'Gia đình tôi có bốn người.',                 answer:'Ma famille a quatre personnes.' },
  { level:'A1', topic:'Thực phẩm', prompt:'Tôi muốn một bánh mì.',                      answer:'Je voudrais un pain.' },
  { level:'A1', topic:'Thực phẩm', prompt:'Tôi thích ăn phô mai.',                      answer:'J\'aime manger du fromage.' },
  { level:'A2', topic:'Du lịch',   prompt:'Nhà ga ở đâu?',                              answer:'Où est la gare ?' },
  { level:'A2', topic:'Du lịch',   prompt:'Tôi muốn đặt một phòng.',                    answer:'Je voudrais réserver une chambre.' },
  { level:'A2', topic:'Du lịch',   prompt:'Sân bay cách đây bao xa?',                   answer:'À quelle distance se trouve l\'aéroport ?' },
  { level:'A2', topic:'Mua sắm',   prompt:'Cái này giá bao nhiêu?',                     answer:'Combien ça coûte ?' },
  { level:'A2', topic:'Mua sắm',   prompt:'Tôi muốn trả bằng thẻ.',                     answer:'Je voudrais payer par carte.' },
  { level:'A2', topic:'Thời tiết', prompt:'Hôm nay trời rất nóng.',                     answer:'Il fait très chaud aujourd\'hui.' },
  { level:'A2', topic:'Thời tiết', prompt:'Trời có vẻ sắp mưa.',                        answer:'Il va probablement pleuvoir.' },
  { level:'B1', topic:'Gia đình',  prompt:'Anh trai tôi sống ở Lyon.',                  answer:'Mon frère habite à Lyon.' },
  { level:'B1', topic:'Công việc', prompt:'Tôi đang tìm kiếm một công việc mới.',       answer:'Je cherche un nouvel emploi.' },
  { level:'B1', topic:'Công việc', prompt:'Cuộc họp bị hoãn đến ngày mai.',             answer:'La réunion est reportée à demain.' },
  { level:'B1', topic:'Cảm xúc',  prompt:'Tôi cảm thấy rất mệt sau khi làm việc.',    answer:'Je me sens très fatigué après le travail.' },
  { level:'B1', topic:'Cảm xúc',  prompt:'Tôi rất vui vì được gặp bạn.',              answer:'Je suis très content de te voir.' },
  { level:'B2', topic:'Liên từ',  prompt:'Tuy nhiên, tôi chưa hiểu rõ.',              answer:'Cependant, je ne comprends pas bien.' },
  { level:'B2', topic:'Công việc', prompt:'Chúng ta phải hoàn thành dự án trước thứ Sáu.', answer:'Nous devons finir le projet avant vendredi.' },
  { level:'B2', topic:'Môi trường', prompt:'Biến đổi khí hậu là vấn đề toàn cầu.',    answer:'Le changement climatique est un problème mondial.' },
  { level:'B2', topic:'Xã hội',   prompt:'Bình đẳng giới là quyền cơ bản của con người.', answer:'L\'égalité des sexes est un droit fondamental.' },
  { level:'C1', topic:'Tư duy',   prompt:'Mặc dù vậy, cần có nhiều sắc thái hơn.',    answer:'Néanmoins, il faut plus de nuance.' },
  { level:'C1', topic:'Tư duy',   prompt:'Lập luận đó thiếu bằng chứng thuyết phục.',  answer:'Cet argument manque de preuves convaincantes.' }
];

const listeningTasks = [
  { level:'A1', topic:'Giới thiệu', sentence:'Je m\'appelle Marie.', options:['Tôi tên là Marie.','Tôi sống ở Paris.','Tôi thích ăn.','Tôi đang học.'], answer:'Tôi tên là Marie.' },
  { level:'A1', topic:'Chào hỏi', sentence:'Bonjour, comment ça va ?', options:['Xin chào, bạn có khỏe không?','Tạm biệt, hẹn gặp lại.','Cảm ơn rất nhiều.','Tôi không hiểu.'], answer:'Xin chào, bạn có khỏe không?' },
  { level:'A1', topic:'Thực phẩm', sentence:'Je voudrais un croissant, s\'il vous plaît.', options:['Tôi muốn một bánh sừng bò.','Tôi có một cây bút.','Tôi yêu thích âm nhạc.','Tôi đọc sách.'], answer:'Tôi muốn một bánh sừng bò.' },
  { level:'A1', topic:'Gia đình', sentence:'J\'ai deux sœurs et un frère.', options:['Tôi có hai chị và một anh.','Tôi có ba anh trai.','Tôi không có anh chị.','Tôi có một em gái.'], answer:'Tôi có hai chị và một anh.' },
  { level:'A2', topic:'Thời tiết', sentence:'Il fait très chaud aujourd\'hui.', options:['Hôm nay trời rất nóng.','Tôi rất đói.','Cô ấy đang ngủ.','Anh ấy thích cà phê.'], answer:'Hôm nay trời rất nóng.' },
  { level:'A2', topic:'Du lịch', sentence:'Où est la gare, s\'il vous plaît ?', options:['Nhà ga ở đâu?','Bạn khỏe không?','Tôi muốn ăn.','Anh ấy là bác sĩ.'], answer:'Nhà ga ở đâu?' },
  { level:'A2', topic:'Mua sắm', sentence:'Combien coûte cette robe ?', options:['Chiếc váy này giá bao nhiêu?','Tôi muốn mua giày.','Cửa hàng đóng cửa rồi.','Tôi thích màu xanh.'], answer:'Chiếc váy này giá bao nhiêu?' },
  { level:'A2', topic:'Thực phẩm', sentence:'Je suis allé au marché ce matin.', options:['Tôi đã đi chợ sáng nay.','Tôi làm việc tối qua.','Tôi học tiếng Anh.','Tôi mua một chiếc áo.'], answer:'Tôi đã đi chợ sáng nay.' },
  { level:'B1', topic:'Du lịch', sentence:'Nous aimons voyager ensemble.', options:['Chúng tôi thích đi du lịch cùng nhau.','Chúng tôi học cùng lớp.','Chúng tôi ăn trưa ở nhà.','Chúng tôi có hai con.'], answer:'Chúng tôi thích đi du lịch cùng nhau.' },
  { level:'B1', topic:'Cảm xúc', sentence:'Je me sens très fatigué après le travail.', options:['Tôi cảm thấy rất mệt sau khi làm việc.','Tôi rất vui hôm nay.','Tôi không thích thời tiết này.','Tôi muốn đi ngủ sớm.'], answer:'Tôi cảm thấy rất mệt sau khi làm việc.' },
  { level:'B1', topic:'Công việc', sentence:'Je cherche un nouvel emploi depuis trois mois.', options:['Tôi tìm kiếm việc làm mới được 3 tháng.','Tôi đã nghỉ việc tuần trước.','Tôi thích công việc hiện tại.','Tôi sẽ đi phỏng vấn ngày mai.'], answer:'Tôi tìm kiếm việc làm mới được 3 tháng.' },
  { level:'B2', topic:'Môi trường', sentence:'Il faut protéger l\'environnement pour les générations futures.', options:['Cần bảo vệ môi trường cho các thế hệ tương lai.','Biến đổi khí hậu là vấn đề toàn cầu.','Năng lượng tái tạo rất quan trọng.','Chúng ta nên tái chế nhiều hơn.'], answer:'Cần bảo vệ môi trường cho các thế hệ tương lai.' },
  { level:'B2', topic:'Quan hệ', sentence:'Malgré les difficultés, ils ont réussi à s\'entendre.', options:['Mặc dù khó khăn, họ đã tìm được tiếng nói chung.','Họ đã chia tay sau nhiều năm.','Cuộc gặp gỡ diễn ra suôn sẻ.','Họ đồng ý với tất cả mọi thứ.'], answer:'Mặc dù khó khăn, họ đã tìm được tiếng nói chung.' },
  { level:'C1', topic:'Tư duy', sentence:'Il est essentiel de nuancer son argumentation.', options:['Cần thiết phải làm rõ sắc thái trong lập luận.','Tranh luận là điều không cần thiết.','Mọi ý kiến đều có giá trị như nhau.','Sự thuyết phục phụ thuộc vào cảm xúc.'], answer:'Cần thiết phải làm rõ sắc thái trong lập luận.' }
];

const speakingTasks = [
  { level:'A1', topic:'Giới thiệu', prompt:'Je m\'appelle Nam.',                         expected:'Je m\'appelle Nam.' },
  { level:'A1', topic:'Chào hỏi',  prompt:'Bonjour, comment ça va ?',                   expected:'Bonjour, comment ça va ?' },
  { level:'A1', topic:'Gia đình',  prompt:'J\'ai deux frères.',                          expected:'J\'ai deux frères.' },
  { level:'A2', topic:'Thực phẩm', prompt:'Je voudrais un café, s\'il vous plaît.',     expected:'Je voudrais un café, s\'il vous plaît.' },
  { level:'A2', topic:'Du lịch',  prompt:'Où est la gare, s\'il vous plaît ?',          expected:'Où est la gare, s\'il vous plaît ?' },
  { level:'A2', topic:'Mua sắm',  prompt:'Combien ça coûte, s\'il vous plaît ?',        expected:'Combien ça coûte, s\'il vous plaît ?' },
  { level:'B1', topic:'Cảm xúc',  prompt:'Je parle de ma journée.',                     expected:'Je parle de ma journée.' },
  { level:'B1', topic:'Học tập',  prompt:'J\'aime apprendre le français.',              expected:'J\'aime apprendre le français.' },
  { level:'B1', topic:'Công việc', prompt:'Je cherche un nouvel emploi.',               expected:'Je cherche un nouvel emploi.' },
  { level:'B2', topic:'Thành phố', prompt:'Aujourd\'hui, je vais au marché.',           expected:'Aujourd\'hui, je vais au marché.' },
  { level:'B2', topic:'Môi trường', prompt:'Il faut protéger l\'environnement.',        expected:'Il faut protéger l\'environnement.' },
  { level:'B2', topic:'Lập luận',  prompt:'Cependant, il faut plus de nuance.',         expected:'Cependant, il faut plus de nuance.' },
  { level:'C1', topic:'Tư duy',   prompt:'Il est essentiel de bien argumenter.',        expected:'Il est essentiel de bien argumenter.' }
];

const pronunciationTasks = [
  { level:'A1', topic:'Chào hỏi',   phrase:'Bonjour, comment ça va ?' },
  { level:'A1', topic:'Chào hỏi',   phrase:'Merci beaucoup, au revoir !' },
  { level:'A1', topic:'Giới thiệu', phrase:'Je m\'appelle Marie, et toi ?' },
  { level:'A1', topic:'Số đếm',     phrase:'Un, deux, trois, quatre, cinq.' },
  { level:'A2', topic:'Thực phẩm',  phrase:'Je voudrais un café, s\'il vous plaît.' },
  { level:'A2', topic:'Thành phố',  phrase:'Où sont les toilettes, s\'il vous plaît ?' },
  { level:'A2', topic:'Du lịch',    phrase:'Le train part à quelle heure ?' },
  { level:'A2', topic:'Mua sắm',    phrase:'Combien coûte cette veste bleue ?' },
  { level:'B1', topic:'Giới thiệu', phrase:'Je ne parle pas très bien français, mais j\'apprends.' },
  { level:'B1', topic:'Giao tiếp',  phrase:'Pouvez-vous répéter plus lentement, s\'il vous plaît ?' },
  { level:'B1', topic:'Cảm xúc',   phrase:'Je suis vraiment content de faire votre connaissance.' },
  { level:'B1', topic:'Công việc',  phrase:'J\'ai cinq ans d\'expérience dans ce domaine.' },
  { level:'B2', topic:'Cảm xúc',   phrase:'Je suis vraiment désolé pour ce malentendu.' },
  { level:'B2', topic:'Công việc',  phrase:'La réunion est reportée à demain matin à neuf heures.' },
  { level:'B2', topic:'Môi trường', phrase:'Il faut agir maintenant pour protéger notre planète.' },
  { level:'C1', topic:'Tư duy',    phrase:'Il est essentiel de nuancer son point de vue dans toute argumentation.' }
];

const dialogueTasks = [
  {
    level:'A1', topic:'Thực phẩm',
    title: 'Quán cà phê',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous désirez ?', vi: 'Xin chào, anh/chị muốn gì?' },
      { speaker: 'Khách', fr: 'Je voudrais un café et un croissant.', vi: 'Tôi muốn một cà phê và một bánh sừng bò.' },
      { speaker: 'Nhân viên', fr: 'Avec plaisir, ce sera tout ?', vi: 'Vâng ạ, còn gì nữa không?' },
      { speaker: 'Khách', fr: 'Oui, merci.', vi: 'Vâng, cảm ơn.' }
    ]
  },
  {
    level:'A2', topic:'Ẩm thực',
    title: 'Tại nhà hàng',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous avez réservé ?', vi: 'Xin chào, anh/chị đã đặt bàn chưa?' },
      { speaker: 'Khách', fr: 'Oui, au nom de Nam.', vi: 'Có, tên Nam.' },
      { speaker: 'Nhân viên', fr: 'Suivez-moi, je vous en prie.', vi: 'Mời anh/chị theo tôi.' }
    ]
  },
  {
    level:'A2', topic:'Du lịch',
    title: 'Tại ga tàu',
    lines: [
      { speaker: 'Khách', fr: 'Le train pour Paris part à quelle heure ?', vi: 'Tàu đi Paris lúc mấy giờ?' },
      { speaker: 'Nhân viên', fr: 'Il part à quinze heures.', vi: 'Nó đi lúc 3 giờ chiều.' }
    ]
  },
  {
    level:'B1', topic:'Công việc',
    title: 'Phỏng vấn xin việc',
    lines: [
      { speaker: 'Giám đốc', fr: 'Pouvez-vous vous présenter ?', vi: 'Bạn có thể tự giới thiệu không?' },
      { speaker: 'Người xin việc', fr: 'Bien sûr. Je m\'appelle Nam, j\'ai cinq ans d\'expérience.', vi: 'Tất nhiên. Tôi là Nam, tôi có 5 năm kinh nghiệm.' },
      { speaker: 'Giám đốc', fr: 'Quelles sont vos qualités principales ?', vi: 'Những ưu điểm chính của bạn là gì?' },
      { speaker: 'Người xin việc', fr: 'Je suis sérieux, organisé et très motivé.', vi: 'Tôi nghiêm túc, nghiêm ngắn và rất nhiệt tình.' }
    ]
  },
  {
    level:'B2', topic:'Quan hệ',
    title: 'Thảo luận về môi trường',
    lines: [
      { speaker: 'A', fr: 'Que penses-tu du réchauffement climatique ?', vi: 'Bạn nghĩ gì về biến đổi khí hậu?' },
      { speaker: 'B', fr: 'C\'est un problème très grave qui nécessite une action immédiate.', vi: 'Đó là vấn đề rất nghiêm trọng cần hành động ngay.' },
      { speaker: 'A', fr: 'Quelles solutions proposes-tu ?', vi: 'Bạn đề xuất giải pháp nào?' },
      { speaker: 'B', fr: 'Il faut utiliser les énergies renouvelables et recycler davantage.', vi: 'Cần sử dụng năng lượng tái tạo và tái chế nhiều hơn.' }
    ]
  }
];

const quizQuestions = [
  {
    question: '“Je suis” nghĩa là gì?',
    choices: ['Tôi là', 'Bạn là', 'Chúng tôi có', 'Họ làm'],
    answer: 'Tôi là'
  },
  {
    question: 'Chọn từ để nói “Xin chào”',
    choices: ['Merci', 'Au revoir', 'Bonjour', 'S’il vous plaît'],
    answer: 'Bonjour'
  },
  {
    question: 'Từ nào là mạo từ xác định?',
    choices: ['Un', 'La', 'Des', 'Pomme'],
    answer: 'La'
  },
  {
    question: '“Nous allons à l’école” nghĩa là?',
    choices: ['Chúng tôi nghe nhạc', 'Chúng tôi đi học', 'Chúng tôi ăn cơm', 'Chúng tôi ngủ'],
    answer: 'Chúng tôi đi học'
  }
];

const roadmapItems = [
  { id: 'a1', title: 'A1 - Khởi đầu', description: 'Chào hỏi, giới thiệu và câu hỏi cơ bản.', focus: 'Nắm vững giao tiếp đơn giản thường ngày.', completed: false },
  { id: 'a2', title: 'A2 - Ứng dụng', description: 'Mua sắm, du lịch, ẩm thực và giờ giấc.', focus: 'Sử dụng câu ngắn trong tình huống thực tế.', completed: false },
  { id: 'b1', title: 'B1 - Mở rộng', description: 'Gia đình, cảm xúc, mô tả và thói quen.', focus: 'Kể chuyện ngắn và mô tả ý kiến.', completed: false },
  { id: 'b2', title: 'B2 - Thuyết trình', description: 'Hội thoại, lập luận và diễn đạt phong phú.', focus: 'Nói tự nhiên và phản xạ nhanh hơn.', completed: false },
  { id: 'c1', title: 'C1 - Nâng cao', description: 'Diễn đạt sắc thái, từ vựng chuyên sâu.', focus: 'Đọc báo chí, tranh luận và thảo luận.', completed: false },
  { id: 'c2', title: 'C2 - Tinh thông', description: 'Viết luận, thảo luận và phát âm chuẩn.', focus: 'Sử dụng tiếng Pháp như người bản xứ.', completed: false }
];

const dailyChallenges = [
  'Dịch 1 câu tiếng Việt sang tiếng Pháp.',
  'Nghe và chọn đáp án chính xác cho câu nghe.',
  'Luyện nói 1 câu ngắn bằng tiếng Pháp.',
  'Đọc to 1 câu tiếng Pháp và so sánh với mẫu âm.',
  'Xem lại 1 chủ đề từ vựng yêu thích.'
];

let currentDailyChallenge = 0;
let onlyFavorites = false;

let activeFlashcard = 0;
let activePractice = 0;
let activeListening = 0;
let activeSpeaking = 0;
let activePronunciation = 0;
let activeDialogue = 0;
let quizState = { current: 0, score: 0, total: 0, active: false };
let selectedLevel = 'all';
let selectedTopic = 'all';
let vocabTopics = ['all', ...new Set(vocabularies.map(item => item.topic))];
let searchQuery = '';
let grammarQuery = '';
let favoriteWords = [];
let activityHistoryList = [];
let roadmapProgress = {};
let vocabVisibleLimit = 80;
let dailyGoal = { date: '', done: false };
let recognition = null;
let isRecognizing = false;
let recognitionStopRequested = false;
let recognitionHasResult = false;
let speechMode = 'speaking';
let dialogueTranslationVisible = false;
let vocabSearchDebounce = null;
let grammarSearchDebounce = null;
let practiceFilterLevel = 'all';
let practiceFilterTopic = 'all';
let practiceFilterOrder = 'easy';
let selectedVoice = null;
let quizSoundEnabled = true;
let quizFilterLevel = 'all';
let quizFilterTopic = 'all';
let firebaseReady = false;
let cloudSyncInProgress = false;
let cloudSyncDebounce = null;
let suppressCloudSync = false;
let auth = null;
let db = null;
let currentUser = null;
let authLoading = false;

const firebaseConfig = {
  apiKey: 'AIzaSyB3ZaPfX8hjFLv-MFReKb3aF7HAOSla8iA',
  authDomain: 'app-frecnh.firebaseapp.com',
  projectId: 'app-frecnh',
  storageBucket: 'app-frecnh.firebasestorage.app',
  messagingSenderId: '75444091062',
  appId: '1:75444091062:web:c131b889bf6a6d8061ce17'
};

function updateSection(sectionId) {
  sections.forEach(section => {
    section.classList.toggle('active-section', section.id === sectionId);
  });
  menuButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.section === sectionId);
  });
  const activeButton = Array.from(menuButtons).find(btn => btn.dataset.section === sectionId);
  if (activeButton) {
    currentSectionTitle.textContent = activeButton.textContent;
  }
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function updateStats() {
  const stats = readStorage('frenchCoachStats', {
    wordsLearned: vocabularies.length,
    grammarRead: grammarLessons.length,
    quizScore: 0,
    streak: 0,
    lastPractice: null
  });
  wordsLearned.textContent = stats.wordsLearned;
  grammarRead.textContent = stats.grammarRead;
  quizScore.textContent = stats.quizScore;
  favoriteCount.textContent = favoriteWords.length;
  streakCounter.textContent = `Chuỗi ngày: ${stats.streak}`;
}

function saveStats(overrides = {}) {
  const existing = readStorage('frenchCoachStats', {});
  localStorage.setItem('frenchCoachStats', JSON.stringify({
    wordsLearned: vocabularies.length,
    grammarRead: grammarLessons.length,
    quizScore: existing.quizScore || 0,
    streak: existing.streak || 0,
    lastPractice: existing.lastPractice || null,
    ...overrides
  }));
  updateStats();
  queueCloudSync();
}

function playQuizSound(correct) {
  if (!quizSoundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (correct) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.4);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch {}
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadDailyStats() {
  return readStorage('frenchCoachDailyStats', []);
}

function recordDailyStat(type) {
  const today = getTodayKey();
  let stats = loadDailyStats();
  let entry = stats.find(s => s.date === today);
  if (!entry) {
    entry = { date: today, quizCorrect: 0, quizWrong: 0, quizTotal: 0, practiceCount: 0 };
    stats.unshift(entry);
    stats = stats.slice(0, 90);
  }
  entry[type] = (entry[type] || 0) + 1;
  if (type === 'quizCorrect' || type === 'quizWrong') {
    entry.quizTotal = (entry.quizCorrect || 0) + (entry.quizWrong || 0);
  }
  localStorage.setItem('frenchCoachDailyStats', JSON.stringify(stats));
  renderEvaluation();
  queueCloudSync();
}

function renderEvaluation(period) {
  const el = document.getElementById('evalContent');
  if (!el) return;
  if (!period) {
    const active = document.querySelector('.eval-tab.active');
    period = active ? active.dataset.period : 'daily';
  }
  const allStats = loadDailyStats();
  const today = getTodayKey();

  if (period === 'daily') {
    const d = allStats.find(s => s.date === today) || {};
    const qCorrect = d.quizCorrect || 0, qTotal = d.quizTotal || 0;
    const spCorrect = d.speakingCorrect || 0, spAttempt = d.speakingAttempt || 0;
    const prCorrect = d.pronunciationCorrect || 0, prAttempt = d.pronunciationAttempt || 0;
    const lsCorrect = d.listeningCorrect || 0, lsWrong = d.listeningWrong || 0;
    const lsTotal = lsCorrect + lsWrong;
    const practice = d.practiceCount || 0;
    const dialogue = d.dialogueCount || 0;
    const grammar = d.grammarView || 0;

    function row(icon, label, val, pct, cls) {
      const fillCls = pct === 0 ? 'accent' : cls;
      return `<div class="eval-row">
        <span class="eval-row-icon">${icon}</span>
        <span class="eval-row-label">${label}</span>
        <span class="eval-row-val">${val}</span>
        <div class="eval-bar"><div class="eval-bar-fill ${fillCls}" style="width:${Math.min(100, Math.max(0,pct))}%"></div></div>
      </div>`;
    }
    const qPct = qTotal > 0 ? Math.round(qCorrect/qTotal*100) : 0;
    const spPct = spAttempt > 0 ? Math.round(spCorrect/spAttempt*100) : 0;
    const prPct = prAttempt > 0 ? Math.round(prCorrect/prAttempt*100) : 0;
    const lsPct = lsTotal > 0 ? Math.round(lsCorrect/lsTotal*100) : 0;
    const grade = cls => cls >= 70 ? 'green' : cls >= 40 ? 'ok' : 'accent';

    el.innerHTML = `<div class="eval-rows">
      ${row('🎯','Quiz', qTotal>0?`${qCorrect}/${qTotal} (${qPct}%)`:'Chưa làm', qPct, grade(qPct))}
      ${row('📝','Dịch câu', practice>0?`${practice} câu đúng`:'Chưa làm', Math.min(100,practice*5), 'green')}
      ${row('🎤','Luyện nói', spAttempt>0?`${spCorrect}/${spAttempt} lần tốt (${spPct}%)`:'Chưa luyện', spPct, grade(spPct))}
      ${row('🔊','Phát âm', prAttempt>0?`${prCorrect}/${prAttempt} lần đúng (${prPct}%)`:'Chưa luyện', prPct, grade(prPct))}
      ${row('👂','Nghe hiểu', lsTotal>0?`${lsCorrect}/${lsTotal} câu đúng (${lsPct}%)`:'Chưa làm', lsPct, grade(lsPct))}
      ${row('💬','Hội thoại', dialogue>0?`${dialogue} lần xem`:'Chưa xem', Math.min(100,dialogue*20), 'green')}
      ${row('📖','Ngữ pháp', grammar>0?`${grammar} lần vào trang`:'Chưa xem', Math.min(100,grammar*25), 'green')}
    </div>`;
    return;
  }

  const days = period === 'weekly' ? 7 : 30;
  const dayLabels = ['CN','T2','T3','T4','T5','T6','T7'];
  const entries = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const label = period === 'weekly' ? dayLabels[d.getDay()] : (i === 0 ? 'Nay' : `${d.getDate()}/${d.getMonth()+1}`);
    const entry = allStats.find(s => s.date === key) || { quizTotal: 0, quizCorrect: 0, practiceCount: 0 };
    entries.push({ ...entry, label });
  }
  function dayTotal(e) {
    return (e.quizTotal||0) + (e.practiceCount||0) + (e.speakingAttempt||0) + (e.pronunciationAttempt||0) + (e.listeningCorrect||0) + (e.listeningWrong||0) + (e.dialogueCount||0);
  }
  function dayAccuracy(e) {
    const correct = (e.quizCorrect||0) + (e.practiceCount||0) + (e.speakingCorrect||0) + (e.pronunciationCorrect||0) + (e.listeningCorrect||0);
    const total = (e.quizTotal||0) + (e.practiceCount||0) + (e.speakingAttempt||0) + (e.pronunciationAttempt||0) + (e.listeningCorrect||0) + (e.listeningWrong||0);
    return total > 0 ? Math.round(correct / total * 100) : -1;
  }
  const maxTotal = Math.max(...entries.map(e => dayTotal(e)), 1);
  const hasAny = entries.some(e => dayTotal(e) > 0);
  if (!hasAny) {
    el.innerHTML = `<p class="eval-empty">Chưa có dữ liệu. Hãy làm quiz hoặc luyện tập để xem thống kê!</p>`;
    return;
  }
  el.innerHTML = `<div class="eval-chart">` + entries.map(e => {
    const total = dayTotal(e);
    const acc = dayAccuracy(e);
    const heightPct = total > 0 ? Math.max(8, Math.round((total / maxTotal) * 100)) : 4;
    const cls = total === 0 ? 'empty' : acc >= 70 ? 'good' : acc >= 40 ? 'ok' : 'low';
    const tip = total > 0
      ? `Quiz:${e.quizCorrect||0}/${e.quizTotal||0} · Dịch:${e.practiceCount||0} · Nói:${e.speakingCorrect||0}/${e.speakingAttempt||0} · Phát âm:${e.pronunciationCorrect||0}/${e.pronunciationAttempt||0} · Nghe:${e.listeningCorrect||0}/${(e.listeningCorrect||0)+(e.listeningWrong||0)}`
      : 'Chưa học';
    return `<div class="eval-chart-col">
      <div class="eval-chart-bar ${cls}" style="height:${heightPct}%" title="${tip}"></div>
      <span class="eval-chart-label">${e.label}</span>
    </div>`;
  }).join('') + `</div>`;
}

function loadFavorites() {
  favoriteWords = readStorage('frenchCoachFavorites', []);
}

function saveFavorites() {
  localStorage.setItem('frenchCoachFavorites', JSON.stringify(favoriteWords));
  updateStats();
  queueCloudSync();
}

function isFavorite(word) {
  return favoriteWords.includes(word);
}

function toggleFavoriteWord(word) {
  if (isFavorite(word)) {
    favoriteWords = favoriteWords.filter(item => item !== word);
    recordActivity(`Xoá yêu thích: ${word}`);
  } else {
    favoriteWords.push(word);
    recordActivity(`Yêu thích: ${word}`);
  }
  saveFavorites();
  renderVocabList();
}

function loadHistory() {
  activityHistoryList = readStorage('frenchCoachHistory', []);
}

function saveHistory() {
  localStorage.setItem('frenchCoachHistory', JSON.stringify(activityHistoryList));
  queueCloudSync();
}

function recordActivity(text) {
  const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  activityHistoryList.unshift(`${time} — ${text}`);
  activityHistoryList = activityHistoryList.slice(0, 6);
  saveHistory();
  renderHistory();
}

function renderHistory() {
  activityHistory.innerHTML = activityHistoryList.length
    ? activityHistoryList.map(item => `<li>${item}</li>`).join('')
    : '<li>Chưa có hoạt động. Bắt đầu học ngay!</li>';
}

function loadRoadmap() {
  roadmapProgress = readStorage('frenchCoachRoadmap', {});
}

function saveRoadmap() {
  localStorage.setItem('frenchCoachRoadmap', JSON.stringify(roadmapProgress));
  queueCloudSync();
}

function toggleRoadmapItem(id) {
  roadmapProgress[id] = !roadmapProgress[id];
  saveRoadmap();
  renderRoadmap();
  renderDashboardChallenge();
  recordActivity(`${roadmapProgress[id] ? 'Hoàn thành' : 'Bỏ hoàn thành'}: ${id.toUpperCase()}`);
}

function renderRoadmap() {
  roadmapList.innerHTML = roadmapItems.map(item => `
    <article class="card roadmap-card ${roadmapProgress[item.id] ? 'completed' : ''}">
      <div>
        <p class="roadmap-level">${item.title}</p>
        <h4>${item.description}</h4>
        <p class="roadmap-focus">${item.focus}</p>
      </div>
      <button class="pill roadmap-toggle" data-roadmap="${item.id}">${roadmapProgress[item.id] ? 'Hoàn thành' : 'Đánh dấu'}</button>
    </article>
  `).join('');
}

function clearRoadmap() {
  roadmapProgress = {};
  saveRoadmap();
  renderRoadmap();
  renderDashboardChallenge();
  recordActivity('Đặt lại tiến độ lộ trình');
}

function loadDailyGoal() {
  const today = new Date().toDateString();
  const saved = readStorage('frenchCoachDailyGoal', { date: today, done: false });
  dailyGoal = saved.date === today ? saved : { date: today, done: false };
}

function saveDailyGoal() {
  localStorage.setItem('frenchCoachDailyGoal', JSON.stringify(dailyGoal));
  queueCloudSync();
}

function renderDailyGoal() {
  if (!dailyGoalStatus || !completeDailyGoal) return;
  dailyGoalStatus.textContent = dailyGoal.done
    ? 'Tuyệt vời! Bạn đã hoàn thành mục tiêu học hôm nay.'
    : 'Hôm nay bạn chưa hoàn thành mục tiêu.';
  completeDailyGoal.textContent = dailyGoal.done
    ? 'Đã hoàn thành hôm nay'
    : 'Đánh dấu hoàn thành hôm nay';
  completeDailyGoal.disabled = dailyGoal.done;
}

function completeTodayGoal() {
  if (dailyGoal.done) return;
  dailyGoal.done = true;
  saveDailyGoal();
  renderDailyGoal();
  maybeUpdateStreak();
  recordActivity('Hoàn thành mục tiêu học hôm nay');
}

function renderPractice() {
  const tasks = getFilteredPracticeTasks(practiceTasks);
  activePractice = activePractice % tasks.length;
  const task = tasks[activePractice];
  practicePrompt.textContent = task.prompt;
  practiceAnswer.value = '';
  practiceFeedback.textContent = '';
  if (practiceMeta) practiceMeta.textContent = [task.level, task.topic].filter(Boolean).join(' · ');
}

function renderSpeaking() {
  const tasks = getFilteredPracticeTasks(speakingTasks);
  activeSpeaking = activeSpeaking % tasks.length;
  const task = tasks[activeSpeaking];
  speakingPrompt.textContent = task.prompt;
  speakingRecognized.textContent = '';
  speakingFeedback.textContent = '';
  if (speakingMeta) speakingMeta.textContent = [task.level, task.topic].filter(Boolean).join(' · ');
}

function renderPronunciation() {
  const tasks = getFilteredPracticeTasks(pronunciationTasks);
  activePronunciation = activePronunciation % tasks.length;
  const task = tasks[activePronunciation];
  pronunciationPrompt.textContent = task.phrase;
  pronunciationRecognized.textContent = '';
  pronunciationFeedback.textContent = '';
  if (pronunciationMeta) pronunciationMeta.textContent = [task.level, task.topic].filter(Boolean).join(' · ');
}

function renderDialogue() {
  const tasks = getFilteredPracticeTasks(dialogueTasks);
  activeDialogue = activeDialogue % tasks.length;
  const task = tasks[activeDialogue];
  dialogueTitle.textContent = task.title;
  if (dialogueMeta) dialogueMeta.textContent = [task.level, task.topic].filter(Boolean).join(' · ');
  dialogueText.innerHTML = task.lines.map(line => `
    <div class="dialogue-line">
      <p class="dialogue-speaker"><strong>${line.speaker}:</strong> ${line.fr}</p>
      <p class="dialogue-translation" style="display: ${dialogueTranslationVisible ? 'block' : 'none'}">${line.vi}</p>
    </div>
  `).join('');
}

function switchPracticeTab(tab) {
  practiceTabs.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  const listeningPanel = document.getElementById('listeningPanel');
  translatePanel.style.display = tab === 'translate' ? 'block' : 'none';
  speakingPanel.style.display = tab === 'speaking' ? 'block' : 'none';
  pronunciationPanel.style.display = tab === 'pronunciation' ? 'block' : 'none';
  dialoguePanel.style.display = tab === 'dialogue' ? 'block' : 'none';
  if (listeningPanel) listeningPanel.style.display = tab === 'listening' ? 'block' : 'none';
}

function renderListening() {
  const filtered = listeningTasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || !t.level || t.level === practiceFilterLevel;
    return matchLevel;
  });
  const tasks = filtered.length ? filtered : listeningTasks;
  activeListening = activeListening % tasks.length;
  const task = tasks[activeListening];
  const listeningMeta = document.getElementById('listeningMeta');
  const listeningAnswers = document.getElementById('listeningAnswers');
  const listeningFeedback = document.getElementById('listeningFeedback');
  if (listeningMeta) listeningMeta.textContent = task.level ? task.level : '';
  if (listeningFeedback) listeningFeedback.textContent = '';
  if (listeningAnswers) {
    listeningAnswers.innerHTML = task.options.map(opt =>
      `<button class="pill answer-choice listening-choice">${opt}</button>`
    ).join('');
    listeningAnswers.querySelectorAll('.listening-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const correct = btn.textContent === task.answer;
        listeningAnswers.querySelectorAll('.listening-choice').forEach(b => {
          b.disabled = true;
          if (b.textContent === task.answer) b.classList.add('correct-answer');
          else if (b === btn && !correct) b.classList.add('wrong-answer');
        });
        recordDailyStat(correct ? 'listeningCorrect' : 'listeningWrong');
        if (listeningFeedback) {
          listeningFeedback.textContent = correct ? 'Chính xác!' : `Sai. Đáp án: ${task.answer}`;
          listeningFeedback.style.color = correct ? '#22c55e' : '#ef4444';
        }
      });
    });
  }
}

function beginSpeechRecognition() {
  if (!recognition) {
    const errorText = 'Trình duyệt không hỗ trợ nhận diện giọng nói.';
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorText;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorText;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    return false;
  }
  recognitionHasResult = false;
  recognitionStopRequested = false;
  isRecognizing = true;
  recognition.start();
  return true;
}

function maybeUpdateStreak() {
  const stats = readStorage('frenchCoachStats', { streak: 0, lastPractice: null, quizScore: 0 });
  const today = new Date().toDateString();
  if (stats.lastPractice !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = stats.lastPractice === yesterday ? stats.streak + 1 : 1;
    saveStats({ streak: newStreak, lastPractice: today, quizScore: stats.quizScore });
  }
}

function renderFlashcard() {
  const item = vocabularies[activeFlashcard];
  flashcardWord.textContent = item.word;
  flashcardDefinition.textContent = item.meaning;
}

function renderVocabList() {
  const filtered = vocabularies.filter(vocab => {
    const matchLevel = selectedLevel === 'all' || vocab.level === selectedLevel;
    const matchTopic = selectedTopic === 'all' || vocab.topic === selectedTopic;
    const text = `${vocab.word} ${vocab.meaning} ${vocab.example} ${vocab.topic}`.toLowerCase();
    const matchSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
    const matchFavorite = !onlyFavorites || isFavorite(vocab.word);
    return matchLevel && matchTopic && matchSearch && matchFavorite;
  });
  const visible = filtered.slice(0, vocabVisibleLimit);

  vocabList.innerHTML = visible.length ? visible.map(vocab => `
    <article class="card vocab-card">
      <div class="vocab-card-top">
        <div class="vocab-badge">${getDifficultyStars(vocab.level, vocab.difficulty)}</div>
        <button class="pill favorite-button ${isFavorite(vocab.word) ? 'active' : ''}" data-word="${vocab.word}">
          ${isFavorite(vocab.word) ? '★' : '☆'}
        </button>
      </div>
      <h4>${vocab.word}</h4>
      <p>${vocab.meaning}</p>
      <small>${vocab.example}</small>
      <div class="vocab-card-footer">
        <span class="vocab-tag">${vocab.topic}</span>
        <button class="pill secondary vocab-speak-btn" data-speak="${vocab.word.replace(/"/g, '&quot;')}" title="Nghe phát âm">🔊 Nghe</button>
      </div>
    </article>
  `).join('') : '<div class="card empty-state">Không tìm thấy từ nào phù hợp.</div>';

  if (vocabResultSummary) {
    const shown = Math.min(filtered.length, vocabVisibleLimit);
    vocabResultSummary.textContent = `Hiển thị ${shown}/${filtered.length} từ (tổng kho: ${vocabularies.length}).`;
  }
  if (loadMoreVocab) {
    loadMoreVocab.style.display = filtered.length > vocabVisibleLimit ? 'inline-flex' : 'none';
  }
}

function renderTopicButtons() {
  if (!topicButtons) return;
  topicButtons.innerHTML = vocabTopics.map(topic => `
    <button class="pill topic-button ${selectedTopic === topic ? 'active' : ''}" data-topic="${topic}">
      ${topic === 'all' ? 'Tất cả chủ đề' : topic}
    </button>
  `).join('');
}

function getReadGrammar() {
  return readStorage('frenchCoachReadGrammar', []);
}

function toggleReadGrammar(title) {
  let read = getReadGrammar();
  if (read.includes(title)) {
    read = read.filter(t => t !== title);
  } else {
    read.push(title);
    recordDailyStat('grammarView');
  }
  localStorage.setItem('frenchCoachReadGrammar', JSON.stringify(read));
  queueCloudSync();
  renderGrammar();
}

function renderGrammar() {
  const grammarLevelEl = document.getElementById('grammarLevelFilter');
  const grammarLevel = grammarLevelEl ? grammarLevelEl.value : 'all';
  const read = getReadGrammar();
  const filtered = grammarLessons.filter(lesson => {
    const query = grammarQuery.trim().toLowerCase();
    const matchLevel = grammarLevel === 'all' || lesson.level === grammarLevel;
    const matchSearch = !query || lesson.title.toLowerCase().includes(query) || lesson.text.toLowerCase().includes(query);
    return matchLevel && matchSearch;
  });
  grammarList.innerHTML = filtered.length ? filtered.map(lesson => {
    const isRead = read.includes(lesson.title);
    return `
    <article class="card grammar-card${isRead ? ' grammar-read' : ''}">
      <div class="grammar-card-header">
        ${lesson.level ? `<span class="task-meta">${lesson.level}</span>` : ''}
        <button class="pill grammar-read-btn secondary" data-grammar-title="${lesson.title.replace(/"/g,'&quot;')}" title="${isRead ? 'Bỏ đánh dấu' : 'Đánh dấu đã đọc'}">
          ${isRead ? '✅ Đã đọc' : '📖 Đánh dấu đã đọc'}
        </button>
      </div>
      <h4>${lesson.title}</h4>
      <p>${lesson.text}</p>
    </article>`;
  }).join('') : '<div class="card empty-state">Không tìm thấy chủ đề ngữ pháp phù hợp.</div>';
}

grammarList.addEventListener('click', event => {
  const btn = event.target.closest('.grammar-read-btn');
  if (btn) toggleReadGrammar(btn.dataset.grammarTitle);
});

function renderDashboardChallenge() {
  if (!dashboardChallenge) return;
  const index = currentDailyChallenge % dailyChallenges.length;
  const completed = Object.values(roadmapProgress).filter(Boolean).length;
  const percent = roadmapItems.length ? Math.round((completed / roadmapItems.length) * 100) : 0;
  dashboardChallenge.innerHTML = `
    ${dailyChallenges[index]}<br>
    <strong>Tiến độ lộ trình:</strong> ${percent}% hoàn thành.<br>
    <strong>Gợi ý:</strong> Chọn tab phù hợp và luyện ngay.
  `;
}

function normalizeFrenchText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9'\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getDifficultyStars(level, difficulty) {
  const filled = '★'.repeat(difficulty || 1);
  const empty = '☆'.repeat(5 - (difficulty || 1));
  return `${level} ${filled}${empty}`;
}

function similarityScore(a, b) {
  if (!a.length && !b.length) return 1;
  if (!a.length || !b.length) return 0;
  const wordsA = a.split(' ');
  const wordsB = b.split(' ');
  const matches = wordsA.filter(word => wordsB.includes(word)).length;
  return matches / Math.max(wordsA.length, wordsB.length);
}

function getPronunciationAdvice(transcript, expected) {
  const normalizedTranscript = normalizeFrenchText(transcript);
  const normalizedExpected = normalizeFrenchText(expected);
  const score = similarityScore(normalizedTranscript, normalizedExpected);
  if (normalizedTranscript === normalizedExpected) {
    return 'Phát âm rất tốt rồi. Hãy tiếp tục luyện theo nhịp như vậy.';
  }
  if (score >= 0.7) {
    return 'Bạn đã gần đúng. Chú ý phát âm rõ các âm cuối và nhấn nhá từ chính.';
  }
  if (score >= 0.4) {
    return 'Cần luyện lại câu này. Tập trung vào nhấn mạnh từ quan trọng và phát âm âm đầu, âm cuối.';
  }
  return 'Bạn cần luyện thêm. Nghe chậm và lặp lại từng cụm từ, chú ý âm thanh giống câu mẫu.';
}

function setupSpeechRecognition(forceReset = false) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  console.debug('SpeechRecognition support:', !!SpeechRecognition, 'window.SpeechRecognition=', !!window.SpeechRecognition, 'window.webkitSpeechRecognition=', !!window.webkitSpeechRecognition);
  if (!SpeechRecognition) {
    const errorText = 'Trình duyệt của bạn không hỗ trợ SpeechRecognition. Hãy dùng Chrome/Edge mới nhất hoặc mở trên localhost/HTTPS.';
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorText;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorText;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    return false;
  }
  if (!recognition || forceReset) {
    if (recognition && recognition.abort) {
      recognition.abort();
    }
    recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;
  }

  recognition.addEventListener('result', event => {
    const text = event.results[0][0].transcript;
    recognitionHasResult = true;
    if (speechMode === 'speaking') {
      const task = speakingTasks[activeSpeaking];
      const normalizedText = normalizeFrenchText(text);
      const normalizedExpected = normalizeFrenchText(task.expected);
      const score = similarityScore(normalizedText, normalizedExpected);
      speakingRecognized.textContent = `Bạn nói: ${text}`;
      speakingFeedback.textContent = normalizedText === normalizedExpected || score >= 0.7
        ? 'Bạn đã nói rất tốt!'
        : `Bạn nói: ${text}. Câu đúng: ${task.expected}`;
      speakingFeedback.style.color = score >= 0.7 ? '#22c55e' : '#ff6b6b';
      recordDailyStat('speakingAttempt');
      if (score >= 0.7) recordDailyStat('speakingCorrect');
    } else if (speechMode === 'pronunciation') {
      const task = pronunciationTasks[activePronunciation];
      const normalizedText = normalizeFrenchText(text);
      const normalizedExpected = normalizeFrenchText(task.phrase);
      const score = similarityScore(normalizedText, normalizedExpected);
      pronunciationRecognized.textContent = `Bạn nói: ${text}`;
      pronunciationFeedback.textContent = getPronunciationAdvice(text, task.phrase);
      pronunciationFeedback.style.color = score >= 0.7 ? '#22c55e' : '#ff6b6b';
      if (score < 0.7) {
        pronunciationFeedback.textContent += ' Hãy lặp lại và chú ý nhấn âm.';
      }
      recordDailyStat('pronunciationAttempt');
      if (score >= 0.7) recordDailyStat('pronunciationCorrect');
    }
    isRecognizing = false;
  });

  recognition.addEventListener('nomatch', () => {
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = 'Không khớp giọng nói. Hãy thử lại với cách phát âm rõ ràng hơn.';
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = 'Không khớp giọng nói. Hãy thử lại với cách phát âm rõ ràng hơn.';
      pronunciationFeedback.style.color = '#ff6b6b';
    }
  });

  recognition.addEventListener('start', () => {
    console.debug('SpeechRecognition bắt đầu');
  });

  recognition.addEventListener('speechstart', () => {
    console.debug('Người dùng đang nói');
  });

  recognition.addEventListener('soundstart', () => {
    console.debug('Âm thanh được phát hiện');
  });

  recognition.addEventListener('end', () => {
    console.debug('SpeechRecognition kết thúc; isRecognizing=', isRecognizing, 'hasResult=', recognitionHasResult, 'stopRequested=', recognitionStopRequested);
    if (recognitionStopRequested) {
      recognitionStopRequested = false;
      if (!recognitionHasResult) {
        if (speechMode === 'speaking') {
          speakingFeedback.textContent = 'Không nhận diện được giọng nói. Hãy thử lại và nói rõ hơn.';
          speakingFeedback.style.color = '#ff6b6b';
        } else if (speechMode === 'pronunciation') {
          pronunciationFeedback.textContent = 'Không nhận diện được giọng nói. Hãy thử lại và nói rõ hơn.';
          pronunciationFeedback.style.color = '#ff6b6b';
        }
      }
      recognitionHasResult = false;
      isRecognizing = false;
      return;
    }
    isRecognizing = false;
  });

  recognition.addEventListener('error', event => {
    if (recognitionStopRequested) {
      recognitionStopRequested = false;
      recognitionHasResult = false;
      isRecognizing = false;
      return;
    }
    let errorMessage = `Nhận diện giọng nói dừng do lỗi: ${event.error}. Hãy thử lại.`;
    if (event.error === 'no-speech') {
      errorMessage = 'Không bắt được giọng nói. Hãy thử nói rõ hơn hoặc dùng localhost/HTTPS thay vì 127.0.0.1 nếu trang chạy trên địa chỉ đó.';
    }
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      errorMessage = 'Micro chưa được cấp phép hoặc trình duyệt chặn. Kiểm tra quyền micro và làm mới trang.';
    }
    if (speechMode === 'speaking') {
      speakingFeedback.textContent = errorMessage;
      speakingFeedback.style.color = '#ff6b6b';
    } else if (speechMode === 'pronunciation') {
      pronunciationFeedback.textContent = errorMessage;
      pronunciationFeedback.style.color = '#ff6b6b';
    }
    isRecognizing = false;
    recognition = null;
  });

  return true;
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  if (selectedVoice) utterance.voice = selectedVoice;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function populateVoiceSelect() {
  if (!voiceSelectEl) return;
  const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('fr'));
  if (!voices.length) {
    voiceSelectEl.innerHTML = '<option value="">Không tìm thấy giọng tiếng Pháp</option>';
    return;
  }
  const saved = localStorage.getItem('frenchCoachVoice');
  voiceSelectEl.innerHTML = voices.map((v, i) =>
    `<option value="${i}" ${saved === v.name ? 'selected' : ''}>${v.name} (${v.lang})</option>`
  ).join('');
  const savedIdx = voices.findIndex(v => v.name === saved);
  selectedVoice = voices[savedIdx >= 0 ? savedIdx : 0];
}

function getFilteredPracticeTasks(tasks) {
  let list = tasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || t.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || t.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
  if (!list.length) list = tasks;
  if (practiceFilterOrder === 'hard') list = [...list].reverse();
  return list;
}

function populatePracticeFilters() {
  const allTasks = [...practiceTasks, ...speakingTasks, ...pronunciationTasks, ...dialogueTasks];
  const levels = ['all', ...new Set(allTasks.map(t => t.level).filter(Boolean))].sort((a, b) => a === 'all' ? -1 : a.localeCompare(b));
  const topics = ['all', ...new Set(allTasks.map(t => t.topic).filter(Boolean))].sort((a, b) => a === 'all' ? -1 : a.localeCompare(b));
  if (practiceLevelFilter) {
    practiceLevelFilter.innerHTML = levels.map(l =>
      `<option value="${l}">${l === 'all' ? 'Tất cả cấp độ' : l}</option>`
    ).join('');
  }
  if (practiceTopicFilter) {
    practiceTopicFilter.innerHTML = topics.map(t =>
      `<option value="${t}">${t === 'all' ? 'Tất cả chủ đề' : t}</option>`
    ).join('');
  }
}

function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('frenchCoachTheme', isDark ? 'dark' : 'light');
  queueCloudSync();
}

function setBackupStatus(message, isError = false) {
  if (!backupStatus) return;
  backupStatus.textContent = message;
  backupStatus.style.color = isError ? '#ff6b6b' : 'var(--muted)';
}

function setAuthStatus(message, isError = false) {
  if (!authStatus) return;
  authStatus.textContent = message;
  authStatus.style.color = isError ? '#ff6b6b' : 'var(--muted)';
}

function showToast(message, isError = false) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast${isError ? ' error' : ''}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function evaluatePasswordStrength(password) {
  let score = 0;
  if (!password) return { score: 0, label: 'chưa nhập' };
  if (password.length >= 6) score += 1;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  const labels = ['rất yếu', 'yếu', 'trung bình', 'khá', 'mạnh'];
  return { score, label: labels[Math.max(0, score - 1)] || 'rất yếu' };
}

function updatePasswordStrengthUI() {
  if (!passwordStrengthBar || !passwordStrengthText || !authPassword) return;
  const { score, label } = evaluatePasswordStrength(authPassword.value);
  const width = Math.min(100, score * 20);
  passwordStrengthBar.style.width = `${width}%`;
  if (score <= 1) passwordStrengthBar.style.background = '#ef4444';
  else if (score <= 3) passwordStrengthBar.style.background = '#f59e0b';
  else passwordStrengthBar.style.background = '#22c55e';
  passwordStrengthText.textContent = `Độ mạnh mật khẩu: ${label}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getAuthInputs() {
  return {
    email: authEmail ? authEmail.value.trim() : '',
    password: authPassword ? authPassword.value : ''
  };
}

function setAuthLoading(isLoading) {
  authLoading = isLoading;
  if (registerBtn) registerBtn.disabled = isLoading || Boolean(currentUser);
  if (loginBtn) loginBtn.disabled = isLoading || Boolean(currentUser);
  if (logoutBtn) logoutBtn.disabled = isLoading || !currentUser;
  if (syncNowBtn) syncNowBtn.disabled = isLoading || !currentUser || !firebaseReady;
  if (resetPasswordBtn) resetPasswordBtn.disabled = isLoading || !firebaseReady;
  if (authEmail) authEmail.disabled = isLoading;
  if (authPassword) authPassword.disabled = isLoading;
}

function mapAuthError(error) {
  const code = error && error.code ? error.code : '';
  if (code === 'auth/email-already-in-use') return 'Email đã tồn tại, hãy đăng nhập hoặc dùng email khác.';
  if (code === 'auth/invalid-email') return 'Email không hợp lệ.';
  if (code === 'auth/weak-password') return 'Mật khẩu yếu, cần ít nhất 6 ký tự.';
  if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') return 'Sai email hoặc mật khẩu.';
  if (code === 'auth/too-many-requests') return 'Bạn thử quá nhiều lần, vui lòng đợi một chút.';
  return 'Có lỗi xảy ra, vui lòng thử lại.';
}

function isFirebaseConfigured() {
  return !Object.values(firebaseConfig).some(value => value.startsWith('PASTE_FIREBASE_'));
}

function updateAuthButtons() {
  const signedIn = Boolean(currentUser);
  if (registerBtn) registerBtn.disabled = authLoading || signedIn;
  if (loginBtn) loginBtn.disabled = authLoading || signedIn;
  if (logoutBtn) logoutBtn.disabled = authLoading || !signedIn;
  if (syncNowBtn) syncNowBtn.disabled = authLoading || !signedIn || !firebaseReady;
  if (resetPasswordBtn) resetPasswordBtn.disabled = authLoading || !firebaseReady;
  if (togglePasswordBtn) togglePasswordBtn.disabled = authLoading;
}

function getCloudDocRef() {
  if (!db || !currentUser) return null;
  return db.collection('userProgress').doc(currentUser.uid);
}

async function syncToCloudNow(options = {}) {
  const { manual = false } = options;
  if (!firebaseReady || !currentUser || cloudSyncInProgress) return;
  const ref = getCloudDocRef();
  if (!ref) return;
  cloudSyncInProgress = true;
  try {
    const payload = createBackupPayload();
    await ref.set({
      version: payload.version,
      updatedAt: new Date().toISOString(),
      data: payload.data
    }, { merge: true });
    setAuthStatus(`Da dong bo luc ${new Date().toLocaleTimeString('vi-VN')}.`);
    if (manual) showToast('Đồng bộ thành công.');
  } catch {
    setAuthStatus('Dong bo that bai. Kiem tra cau hinh Firebase hoac mang.', true);
    if (manual) showToast('Đồng bộ thất bại.', true);
  } finally {
    cloudSyncInProgress = false;
  }
}

function queueCloudSync() {
  if (suppressCloudSync || !firebaseReady || !currentUser) return;
  clearTimeout(cloudSyncDebounce);
  cloudSyncDebounce = setTimeout(syncToCloudNow, 1000);
}

async function pullCloudData() {
  if (!firebaseReady || !currentUser) return;
  const ref = getCloudDocRef();
  if (!ref) return;
  try {
    const snap = await ref.get();
    if (!snap.exists) {
      setAuthStatus('Dang nhap thanh cong. Chua co du lieu cloud, se tao khi ban hoc.');
      updateAuthButtons();
      return;
    }
    const cloudPayload = snap.data();
    suppressCloudSync = true;
    applyBackupData({ data: cloudPayload.data || {} });
    suppressCloudSync = false;
    setAuthStatus('Da tai tien do tu cloud thanh cong.');
  } catch {
    suppressCloudSync = false;
    setAuthStatus('Khong tai du lieu cloud duoc. Vui long thu lai.', true);
  }
  updateAuthButtons();
}

function initFirebaseSync() {
  if (!window.firebase) {
    setAuthStatus('Khong tai duoc Firebase SDK.', true);
    return;
  }
  if (!isFirebaseConfigured()) {
    setAuthStatus('Can dien firebaseConfig trong app.js de bat dong bo tai khoan.', true);
    updateAuthButtons();
    return;
  }
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    db = firebase.firestore();
    firebaseReady = true;

    auth.onAuthStateChanged(async user => {
      currentUser = user || null;
      if (currentUser) {
        if (authEmail && currentUser.email) authEmail.value = currentUser.email;
        if (authPassword) authPassword.value = '';
        setAuthStatus(`Đã đăng nhập: ${currentUser.email}. Đang đồng bộ...`);
        updateAuthButtons();
        await pullCloudData();
      } else {
        setAuthStatus('Chưa đăng nhập.');
        updateAuthButtons();
      }
    });
  } catch {
    setAuthStatus('Khoi tao Firebase that bai. Kiem tra firebaseConfig.', true);
  }
}

async function registerWithEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email, password } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Email chưa đúng định dạng.', true);
    return;
  }
  if (!password || password.length < 6) {
    setAuthStatus('Mật khẩu cần ít nhất 6 ký tự.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    setAuthStatus('Đăng ký thành công. Đang đồng bộ dữ liệu...');
    showToast('Đăng ký thành công.');
    await syncToCloudNow({ manual: true });
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function loginWithEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email, password } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Email chưa đúng định dạng.', true);
    return;
  }
  if (!password) {
    setAuthStatus('Vui lòng nhập mật khẩu.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.signInWithEmailAndPassword(email, password);
    setAuthStatus('Đăng nhập thành công.');
    showToast('Đăng nhập thành công.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function logoutAccount() {
  if (!firebaseReady || !auth || authLoading) return;
  setAuthLoading(true);
  try {
    await auth.signOut();
    setAuthStatus('Đã đăng xuất.');
    showToast('Đã đăng xuất.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

async function sendPasswordReset() {
  if (!firebaseReady || !auth || authLoading) return;
  const { email } = getAuthInputs();
  if (!email || !isValidEmail(email)) {
    setAuthStatus('Nhập email hợp lệ để nhận link đặt lại mật khẩu.', true);
    return;
  }
  setAuthLoading(true);
  try {
    await auth.sendPasswordResetEmail(email);
    setAuthStatus('Đã gửi email đặt lại mật khẩu. Hãy kiểm tra hộp thư.');
    showToast('Đã gửi email đặt lại mật khẩu.');
  } catch (error) {
    setAuthStatus(mapAuthError(error), true);
    showToast(mapAuthError(error), true);
  } finally {
    setAuthLoading(false);
    updateAuthButtons();
  }
}

function createBackupPayload() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      frenchCoachStats: readStorage('frenchCoachStats', null),
      frenchCoachFavorites: readStorage('frenchCoachFavorites', []),
      frenchCoachHistory: readStorage('frenchCoachHistory', []),
      frenchCoachRoadmap: readStorage('frenchCoachRoadmap', {}),
      frenchCoachDailyGoal: readStorage('frenchCoachDailyGoal', null),
      frenchCoachDailyStats: readStorage('frenchCoachDailyStats', []),
      frenchCoachReadGrammar: readStorage('frenchCoachReadGrammar', []),
      frenchCoachTheme: localStorage.getItem('frenchCoachTheme') || 'light',
      frenchCoachUi: {
        selectedLevel,
        selectedTopic,
        onlyFavorites
      }
    }
  };
}

function downloadBackupFile() {
  try {
    const payload = createBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 10);
    const link = document.createElement('a');
    link.href = url;
    link.download = `frenchcoach-backup-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setBackupStatus('Xuất backup thành công. Hãy chép file này sang máy khác để nhập.');
  } catch {
    setBackupStatus('Xuất backup thất bại. Vui lòng thử lại.', true);
  }
}

function applyBackupData(payload) {
  if (!payload || typeof payload !== 'object' || !payload.data) {
    throw new Error('INVALID_BACKUP');
  }
  const { data } = payload;

  if (data.frenchCoachStats) {
    localStorage.setItem('frenchCoachStats', JSON.stringify(data.frenchCoachStats));
  }
  if (Array.isArray(data.frenchCoachFavorites)) {
    localStorage.setItem('frenchCoachFavorites', JSON.stringify(data.frenchCoachFavorites));
  }
  if (Array.isArray(data.frenchCoachHistory)) {
    localStorage.setItem('frenchCoachHistory', JSON.stringify(data.frenchCoachHistory));
  }
  if (data.frenchCoachRoadmap && typeof data.frenchCoachRoadmap === 'object') {
    localStorage.setItem('frenchCoachRoadmap', JSON.stringify(data.frenchCoachRoadmap));
  }
  if (data.frenchCoachDailyGoal && typeof data.frenchCoachDailyGoal === 'object') {
    localStorage.setItem('frenchCoachDailyGoal', JSON.stringify(data.frenchCoachDailyGoal));
  }
  if (Array.isArray(data.frenchCoachDailyStats)) {
    localStorage.setItem('frenchCoachDailyStats', JSON.stringify(data.frenchCoachDailyStats));
  }
  if (Array.isArray(data.frenchCoachReadGrammar)) {
    localStorage.setItem('frenchCoachReadGrammar', JSON.stringify(data.frenchCoachReadGrammar));
  }
  if (typeof data.frenchCoachTheme === 'string') {
    localStorage.setItem('frenchCoachTheme', data.frenchCoachTheme);
  }

  if (data.frenchCoachUi && typeof data.frenchCoachUi === 'object') {
    selectedLevel = data.frenchCoachUi.selectedLevel || 'all';
    selectedTopic = data.frenchCoachUi.selectedTopic || 'all';
    onlyFavorites = Boolean(data.frenchCoachUi.onlyFavorites);
  }

  loadFavorites();
  loadHistory();
  loadRoadmap();
  loadDailyGoal();
  renderTopicButtons();
  renderVocabList();
  renderGrammar();
  renderHistory();
  renderRoadmap();
  renderDailyGoal();
  loadTheme();
  updateStats();

  levelButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === selectedLevel);
  });
  favoriteFilter.classList.toggle('favorite-active', onlyFavorites);
  favoriteFilter.textContent = onlyFavorites ? 'Bỏ lọc' : 'Chỉ yêu thích';
}

function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      applyBackupData(payload);
      setBackupStatus('Nhập backup thành công. Dữ liệu học đã được khôi phục.');
    } catch {
      setBackupStatus('File backup không hợp lệ hoặc đã hỏng.', true);
    } finally {
      if (importBackupInput) importBackupInput.value = '';
    }
  };
  reader.onerror = () => {
    setBackupStatus('Không thể đọc file backup. Vui lòng thử lại.', true);
    if (importBackupInput) importBackupInput.value = '';
  };
  reader.readAsText(file, 'utf-8');
}

function loadTheme() {
  const stored = localStorage.getItem('frenchCoachTheme');
  setTheme(stored === 'dark');
}

let generatedQuiz = [];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function populateQuizTopics() {
  const el = document.getElementById('quizTopicFilter');
  if (!el) return;
  const topics = ['all', ...new Set(vocabularies.map(v => v.topic).filter(Boolean))].sort((a, b) => a === 'all' ? -1 : a.localeCompare(b));
  el.innerHTML = topics.map(t => `<option value="${t}">${t === 'all' ? 'Tất cả chủ đề' : t}</option>`).join('');
}

function updateQuizProgress() {
  const wrap = document.getElementById('quizProgressWrap');
  const fill = document.getElementById('quizProgressFill');
  const label = document.getElementById('quizProgressLabel');
  if (!wrap || !fill || !label) return;
  if (!quizState.active && quizState.total === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'flex';
  const pct = quizState.total > 0 ? Math.round((quizState.current / quizState.total) * 100) : 0;
  fill.style.width = `${pct}%`;
  label.textContent = `${quizState.current}/${quizState.total}`;
}

function generateQuizFromVocab() {
  const countEl = document.getElementById('quizCountFilter');
  const count = countEl ? parseInt(countEl.value, 10) : 15;
  let pool = vocabularies.filter(v => {
    const matchLevel = quizFilterLevel === 'all' || v.level === quizFilterLevel;
    const matchTopic = quizFilterTopic === 'all' || v.topic === quizFilterTopic;
    return matchLevel && matchTopic;
  });
  if (pool.length < 4) pool = vocabularies;
  const picked = shuffleArray(pool).slice(0, count);
  return picked.map(item => {
    const distractors = shuffleArray(
      vocabularies.filter(v => v.word !== item.word && v.meaning !== item.meaning)
    ).slice(0, 3).map(v => v.meaning);
    const choices = shuffleArray([item.meaning, ...distractors]);
    return {
      question: `"${item.word}" nghĩa là gì?`,
      meta: `${item.level} · ${item.topic}`,
      choices,
      answer: item.meaning
    };
  });
}

function startQuizSession() {
  generatedQuiz = generateQuizFromVocab();
  quizState = { current: 0, score: 0, total: generatedQuiz.length, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  if (!quizState.active) return;
  const question = generatedQuiz[quizState.current];
  quizQuestion.textContent = question.question;
  const metaEl = document.getElementById('quizQuestionMeta');
  if (metaEl) metaEl.textContent = question.meta || '';
  quizAnswers.innerHTML = question.choices.map(choice =>
    `<button class="answer-choice">${choice}</button>`
  ).join('');
  quizStatus.textContent = `Điểm: ${quizState.score}`;
  nextQuestion.disabled = true;
  updateQuizProgress();
}

function evaluateQuizChoice(answer) {
  const currentQuestion = generatedQuiz[quizState.current];
  const correct = answer === currentQuestion.answer;
  if (correct) quizState.score += 1;
  playQuizSound(correct);
  recordDailyStat(correct ? 'quizCorrect' : 'quizWrong');
  quizAnswers.querySelectorAll('.answer-choice').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) btn.classList.add('correct-answer');
    else if (btn.textContent === answer && !correct) btn.classList.add('wrong-answer');
  });
  quizState.current += 1;
  updateQuizProgress();
  if (quizState.current >= quizState.total) {
    quizState.active = false;
    const pct = Math.round((quizState.score / quizState.total) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
    quizQuestion.textContent = `${emoji} Hoàn thành! ${quizState.score}/${quizState.total} (${pct}%)`;
    quizAnswers.innerHTML = `<button class="pill quiz-retry-btn" id="retryQuiz">🔄 Thử lại</button>`;
    document.getElementById('retryQuiz')?.addEventListener('click', startQuizSession);
    quizStatus.textContent = `${pct}%`;
    nextQuestion.disabled = true;
    saveStats({ quizScore: quizState.score });
    recordActivity(`Hoàn thành quiz: ${quizState.score}/${quizState.total} (${pct}%)`);
  } else {
    nextQuestion.disabled = false;
  }
}

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateSection(button.dataset.section);
    if (button.dataset.section === 'grammar') recordDailyStat('grammarView');
  });
});

newFlashcard.addEventListener('click', () => {
  activeFlashcard = Math.floor(Math.random() * vocabularies.length);
  document.getElementById('flashcardInner')?.classList.remove('flipped');
  renderFlashcard();
});

const flashcardScene = document.getElementById('flashcardScene');
if (flashcardScene) {
  flashcardScene.addEventListener('click', event => {
    if (event.target.closest('button')) return;
    document.getElementById('flashcardInner')?.classList.toggle('flipped');
  });
}

playPronunciation.addEventListener('click', () => {
  const item = vocabularies[activeFlashcard];
  speak(item.word);
});

showExample.addEventListener('click', () => {
  const item = vocabularies[activeFlashcard];
  flashcardDefinition.textContent = `${item.meaning} — Ví dụ: ${item.example}`;
});

practiceTabs.forEach(tab => {
  tab.addEventListener('click', () => switchPracticeTab(tab.dataset.tab));
});

startSpeaking.addEventListener('click', () => {
  speechMode = 'speaking';
  setupSpeechRecognition(true);
  if (beginSpeechRecognition()) {
    speakingFeedback.textContent = 'Đang nghe bạn nói...';
    speakingFeedback.style.color = '#3f79ff';
  }
});

nextSpeaking.addEventListener('click', () => {
  activeSpeaking = (activeSpeaking + 1) % getFilteredPracticeTasks(speakingTasks).length;
  renderSpeaking();
});

playPronunciationPhrase.addEventListener('click', () => {
  const task = getFilteredPracticeTasks(pronunciationTasks)[activePronunciation];
  speak(task.phrase);
});

startPronunciation.addEventListener('click', () => {
  speechMode = 'pronunciation';
  setupSpeechRecognition(true);
  if (beginSpeechRecognition()) {
    pronunciationFeedback.textContent = 'Đang nghe phát âm của bạn...';
    pronunciationFeedback.style.color = '#3f79ff';
  }
});

nextPronunciation.addEventListener('click', () => {
  activePronunciation = (activePronunciation + 1) % getFilteredPracticeTasks(pronunciationTasks).length;
  renderPronunciation();
});

toggleDialogueTranslation.addEventListener('click', () => {
  dialogueTranslationVisible = !dialogueTranslationVisible;
  renderDialogue();
});

nextDialogue.addEventListener('click', () => {
  activeDialogue = (activeDialogue + 1) % getFilteredPracticeTasks(dialogueTasks).length;
  recordDailyStat('dialogueCount');
  renderDialogue();
});

vocabList.addEventListener('click', event => {
  if (event.target.matches('.favorite-button')) {
    const word = event.target.dataset.word;
    toggleFavoriteWord(word);
  }
  if (event.target.matches('.vocab-speak-btn')) {
    const text = event.target.dataset.speak;
    if (text) speak(text);
  }
});

grammarSearch.addEventListener('input', event => {
  clearTimeout(grammarSearchDebounce);
  grammarSearchDebounce = setTimeout(() => {
    grammarQuery = event.target.value;
    renderGrammar();
  }, 150);
});

const grammarLevelFilterEl = document.getElementById('grammarLevelFilter');
if (grammarLevelFilterEl) {
  grammarLevelFilterEl.addEventListener('change', renderGrammar);
}

vocabSearch.addEventListener('input', event => {
  clearTimeout(vocabSearchDebounce);
  vocabSearchDebounce = setTimeout(() => {
    searchQuery = event.target.value.trim();
    vocabVisibleLimit = 80;
    renderVocabList();
  }, 150);
});

clearSearch.addEventListener('click', () => {
  searchQuery = '';
  vocabSearch.value = '';
  vocabVisibleLimit = 80;
  renderVocabList();
});

levelButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedLevel = button.dataset.level;
    vocabVisibleLimit = 80;
    levelButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    renderVocabList();
  });
});

topicButtons.addEventListener('click', event => {
  if (!event.target.matches('.topic-button')) return;
  selectedTopic = event.target.dataset.topic;
  vocabVisibleLimit = 80;
  renderTopicButtons();
  renderVocabList();
});

checkAnswer.addEventListener('click', () => {
  const answer = practiceAnswer.value.trim();
  const task = getFilteredPracticeTasks(practiceTasks)[activePractice];
  if (!answer) {
    practiceFeedback.textContent = 'Hãy nhập câu bạn đã viết.';
    practiceFeedback.style.color = '#ff6b6b';
    return;
  }
  if (answer.toLowerCase() === task.answer.toLowerCase()) {
    practiceFeedback.textContent = 'Chính xác!';
    practiceFeedback.style.color = '#22c55e';
    recordDailyStat('practiceCount');
    maybeUpdateStreak();
  } else {
    practiceFeedback.textContent = `Sai rồi. Gợi ý: ${task.answer}`;
    practiceFeedback.style.color = '#ff6b6b';
  }
});

nextPrompt.addEventListener('click', () => {
  activePractice = (activePractice + 1) % getFilteredPracticeTasks(practiceTasks).length;
  renderPractice();
});

refreshChallenge.addEventListener('click', () => {
  currentDailyChallenge = (currentDailyChallenge + 1) % dailyChallenges.length;
  renderDashboardChallenge();
});

document.addEventListener('click', event => {
  if (!event.target.matches('.eval-tab')) return;
  document.querySelectorAll('.eval-tab').forEach(btn => btn.classList.toggle('active', btn === event.target));
  renderEvaluation(event.target.dataset.period);
});

const quizSoundToggleBtn = document.getElementById('quizSoundToggle');
if (quizSoundToggleBtn) {
  quizSoundEnabled = localStorage.getItem('frenchCoachQuizSound') !== 'off';
  quizSoundToggleBtn.textContent = quizSoundEnabled ? '🔊 Âm thanh: Bật' : '🔇 Âm thanh: Tắt';
  quizSoundToggleBtn.addEventListener('click', () => {
    quizSoundEnabled = !quizSoundEnabled;
    localStorage.setItem('frenchCoachQuizSound', quizSoundEnabled ? 'on' : 'off');
    quizSoundToggleBtn.textContent = quizSoundEnabled ? '🔊 Âm thanh: Bật' : '🔇 Âm thanh: Tắt';
    if (quizSoundEnabled) playQuizSound(true);
  });
}

document.addEventListener('keydown', event => {
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  if (event.key === 'Enter') {
    const activeSection = document.querySelector('.section.active-section');
    if (!activeSection) return;
    if (activeSection.id === 'practice') {
      const activeTab = document.querySelector('.practice-tab.active');
      if (!activeTab) return;
      if (activeTab.dataset.tab === 'translate') checkAnswer?.click();
    }
    return;
  }

  const num = parseInt(event.key);
  if (num >= 1 && num <= 4) {
    const choices = document.querySelectorAll('#quizAnswers .answer-choice:not(:disabled)');
    if (choices.length >= num) choices[num - 1].click();
  }
});

if (completeDailyGoal) {
  completeDailyGoal.addEventListener('click', completeTodayGoal);
}

favoriteFilter.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  vocabVisibleLimit = 80;
  favoriteFilter.classList.toggle('favorite-active', onlyFavorites);
  favoriteFilter.textContent = onlyFavorites ? 'Bỏ lọc' : 'Chỉ yêu thích';
  renderVocabList();
});

if (loadMoreVocab) {
  loadMoreVocab.addEventListener('click', () => {
    vocabVisibleLimit += 80;
    renderVocabList();
  });
}

if (exportBackup) {
  exportBackup.addEventListener('click', downloadBackupFile);
}

if (importBackupInput) {
  importBackupInput.addEventListener('change', event => {
    const file = event.target.files && event.target.files[0];
    importBackupFile(file);
  });
}

if (registerBtn) {
  registerBtn.addEventListener('click', registerWithEmail);
}

if (loginBtn) {
  loginBtn.addEventListener('click', loginWithEmail);
}

if (resetPasswordBtn) {
  resetPasswordBtn.addEventListener('click', sendPasswordReset);
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', logoutAccount);
}

if (syncNowBtn) {
  syncNowBtn.addEventListener('click', () => syncToCloudNow({ manual: true }));
}

if (togglePasswordBtn) {
  togglePasswordBtn.addEventListener('click', () => {
    if (!authPassword) return;
    const isHidden = authPassword.type === 'password';
    authPassword.type = isHidden ? 'text' : 'password';
    togglePasswordBtn.textContent = isHidden ? 'Ẩn' : 'Hiện';
  });
}

if (authPassword) {
  authPassword.addEventListener('input', updatePasswordStrengthUI);
  authPassword.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginWithEmail();
    }
  });
}

if (authEmail) {
  authEmail.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginWithEmail();
    }
  });
}

const playListeningSentenceBtn = document.getElementById('playListeningSentence');
const nextListeningBtn = document.getElementById('nextListening');

if (playListeningSentenceBtn) {
  playListeningSentenceBtn.addEventListener('click', () => {
    const filtered = listeningTasks.filter(t => practiceFilterLevel === 'all' || !t.level || t.level === practiceFilterLevel);
    const tasks = filtered.length ? filtered : listeningTasks;
    speak(tasks[activeListening % tasks.length].sentence);
  });
}

if (nextListeningBtn) {
  nextListeningBtn.addEventListener('click', () => {
    const filtered = listeningTasks.filter(t => practiceFilterLevel === 'all' || !t.level || t.level === practiceFilterLevel);
    const tasks = filtered.length ? filtered : listeningTasks;
    activeListening = (activeListening + 1) % tasks.length;
    renderListening();
  });
}

speakDialogueLine.addEventListener('click', () => {
  const task = getFilteredPracticeTasks(dialogueTasks)[activeDialogue];
  const text = task.lines.map(line => line.fr).join(' ');
  speak(text);
});

const quizLevelRow = document.getElementById('quizLevelRow');
if (quizLevelRow) {
  quizLevelRow.addEventListener('click', event => {
    if (!event.target.matches('[data-quiz-level]')) return;
    quizFilterLevel = event.target.dataset.quizLevel;
    quizLevelRow.querySelectorAll('[data-quiz-level]').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.quizLevel === quizFilterLevel)
    );
  });
}

const quizTopicFilterEl = document.getElementById('quizTopicFilter');
if (quizTopicFilterEl) {
  quizTopicFilterEl.addEventListener('change', () => { quizFilterTopic = quizTopicFilterEl.value; });
}

startQuiz.addEventListener('click', startQuizSession);

quizAnswers.addEventListener('click', event => {
  if (event.target.matches('.answer-choice')) {
    evaluateQuizChoice(event.target.textContent);
  }
});

nextQuestion.addEventListener('click', () => {
  if (quizState.active) showQuizQuestion();
});

resetRoadmap.addEventListener('click', clearRoadmap);
roadmapList.addEventListener('click', event => {
  if (event.target.matches('.roadmap-toggle')) {
    toggleRoadmapItem(event.target.dataset.roadmap);
  }
});

themeToggle.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));
themeToggleBottom.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));

if (practiceLevelRow) {
  practiceLevelRow.addEventListener('click', event => {
    if (!event.target.matches('[data-practice-level]')) return;
    practiceFilterLevel = event.target.dataset.practiceLevel;
    practiceLevelRow.querySelectorAll('[data-practice-level]').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.practiceLevel === practiceFilterLevel)
    );
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0; activeListening = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue(); renderListening();
  });
}

if (practiceLevelFilter) {
  practiceLevelFilter.addEventListener('change', () => {
    practiceFilterLevel = practiceLevelFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue();
  });
}

if (practiceTopicFilter) {
  practiceTopicFilter.addEventListener('change', () => {
    practiceFilterTopic = practiceTopicFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue();
  });
}

if (practiceOrderFilter) {
  practiceOrderFilter.addEventListener('change', () => {
    practiceFilterOrder = practiceOrderFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue();
  });
}

if (voiceSelectEl) {
  voiceSelectEl.addEventListener('change', () => {
    const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('fr'));
    const idx = parseInt(voiceSelectEl.value, 10);
    selectedVoice = voices[idx] || null;
    if (selectedVoice) localStorage.setItem('frenchCoachVoice', selectedVoice.name);
  });
}

if (testVoiceBtn) {
  testVoiceBtn.addEventListener('click', () => speak('Bonjour, je parle français !'));
}

if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = populateVoiceSelect;
}

function init() {
  loadFavorites();
  loadHistory();
  loadRoadmap();
  loadDailyGoal();
  populatePracticeFilters();
  populateVoiceSelect();
  populateQuizTopics();
  renderFlashcard();
  renderTopicButtons();
  renderVocabList();
  renderGrammar();
  renderPractice();
  renderSpeaking();
  renderPronunciation();
  renderDialogue();
  renderListening();
  renderDashboardChallenge();
  renderDailyGoal();
  renderEvaluation('daily');
  switchPracticeTab('translate');
  renderHistory();
  renderRoadmap();
  setupSpeechRecognition();
  loadTheme();
  updateStats();
  maybeUpdateStreak();
  initFirebaseSync();
  updateAuthButtons();
  updatePasswordStrengthUI();
}

init();
