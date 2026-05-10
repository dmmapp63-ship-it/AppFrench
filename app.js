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
const passwordStrengthBar = document.getElementById('passwordStrengthBar');
const passwordStrengthText = document.getElementById('passwordStrengthText');
const syncNowBtn = document.getElementById('syncNowBtn');
const authStatus = document.getElementById('authStatus');
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
  // ── Chào hỏi ──────────────────────────────────────────────────
  { level:'A1', topic:'Chào hỏi', word:'Bonjour',       meaning:'Xin chào',         example:'Bonjour, comment ça va ?', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'Merci',         meaning:'Cảm ơn',           example:'Merci beaucoup !', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'Au revoir',     meaning:'Tạm biệt',         example:'Au revoir, à bientôt !', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'S\'il vous plaît', meaning:'Xin hãy / làm ơn', example:'Un café, s\'il vous plaît.', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'Excusez-moi',   meaning:'Xin lỗi',          example:'Excusez-moi, où est la gare ?', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'Oui',           meaning:'Vâng / có',        example:'Oui, je comprends.', difficulty:1 },
  { level:'A1', topic:'Chào hỏi', word:'Non',           meaning:'Không',            example:'Non, merci.', difficulty:1 },

  // ── Giới thiệu ────────────────────────────────────────────────
  { level:'A1', topic:'Giới thiệu', word:'Je m\'appelle', meaning:'Tôi tên là',     example:'Je m\'appelle Marie.', difficulty:1 },
  { level:'A1', topic:'Giới thiệu', word:'Je suis',       meaning:'Tôi là',         example:'Je suis étudiant.', difficulty:1 },
  { level:'A1', topic:'Giới thiệu', word:'J\'ai',         meaning:'Tôi có',         example:'J\'ai vingt ans.', difficulty:1 },
  { level:'A1', topic:'Giới thiệu', word:'J\'habite',     meaning:'Tôi sống ở',     example:'J\'habite à Paris.', difficulty:1 },

  // ── Du lịch ───────────────────────────────────────────────────
  { level:'A2', topic:'Du lịch', word:'Réserver',       meaning:'Đặt trước',        example:'Je voudrais réserver une chambre.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'L\'hôtel',       meaning:'Khách sạn',        example:'L\'hôtel est près de la gare.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'La gare',        meaning:'Nhà ga',           example:'Le train part de la gare à midi.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'L\'aéroport',    meaning:'Sân bay',          example:'Nous arrivons à l\'aéroport à 8h.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'Le billet',      meaning:'Vé',               example:'Je voudrais un billet aller-retour.', difficulty:2 },

  // ── Cơ thể ────────────────────────────────────────────────────
  { level:'A1', topic:'Cơ thể', word:'Un enfant',       meaning:'Trẻ con',          example:'Un enfant joue dans le jardin.', difficulty:1 },
  { level:'A2', topic:'Cơ thể', word:'Un adulte',       meaning:'Người lớn',        example:'Les adultes travaillent toute la journée.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'L\'adolescence',  meaning:'Tuổi thanh niên',  example:'L\'adolescence est une période difficile.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'L\'apparence',    meaning:'Vẻ bề ngoài',      example:'L\'apparence physique est importante.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'Le cœur',         meaning:'Trái tim',         example:'Le cœur bat environ 70 fois par minute.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'Les poumons',     meaning:'Phổi',             example:'Les poumons servent à respirer.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'L\'estomac',      meaning:'Dạ dày',           example:'J\'ai mal à l\'estomac.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'La peau',         meaning:'Da',               example:'La peau protège notre corps.', difficulty:2 },
  { level:'A2', topic:'Cơ thể', word:'Un muscle',       meaning:'Cơ bắp',           example:'Le sport développe les muscles.', difficulty:2 },
  { level:'B1', topic:'Cơ thể', word:'La sexualité',    meaning:'Giới tính / tình dục', example:'On parle de sexualité au cours de biologie.', difficulty:3 },
  { level:'B1', topic:'Cơ thể', word:'Une ressemblance',meaning:'Sự tương đồng',    example:'Il y a une ressemblance entre les deux frères.', difficulty:3 },
  { level:'B1', topic:'Cơ thể', word:'Un squelette',    meaning:'Bộ xương',         example:'Le squelette humain compte 206 os.', difficulty:3 },

  // ── Gia đình ──────────────────────────────────────────────────
  { level:'A1', topic:'Gia đình', word:'Le père',        meaning:'Bố',              example:'Mon père travaille dans un bureau.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'La mère',        meaning:'Mẹ',              example:'Ma mère cuisine très bien.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'Le grand-père',  meaning:'Ông',             example:'Mon grand-père a quatre-vingts ans.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'La grand-mère',  meaning:'Bà',              example:'Ma grand-mère fait de bons gâteaux.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'Le frère',       meaning:'Anh/em trai',     example:'Mon frère s\'appelle Lucas.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'La sœur',        meaning:'Chị/em gái',      example:'Ma sœur est plus jeune que moi.', difficulty:1 },
  { level:'A2', topic:'Gia đình', word:'La tante',       meaning:'Cô / dì',         example:'Ma tante habite à Lyon.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'L\'oncle',       meaning:'Chú / bác',       example:'Mon oncle est médecin.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Le cousin',      meaning:'Anh/em họ (nam)', example:'Mon cousin vient nous voir ce week-end.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'La cousine',     meaning:'Chị/em họ (nữ)', example:'Ma cousine est très sympathique.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Le petit-fils',  meaning:'Cháu trai',       example:'Le petit-fils joue avec son grand-père.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'La petite-fille',meaning:'Cháu gái',        example:'La petite-fille ressemble à sa grand-mère.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Le neveu',       meaning:'Cháu họ (nam)',   example:'Mon neveu a cinq ans.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'La nièce',       meaning:'Cháu họ (nữ)',    example:'Ma nièce apprend le piano.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Un couple',      meaning:'Cặp đôi',         example:'Ce couple est marié depuis dix ans.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Un mariage',     meaning:'Hôn nhân / đám cưới', example:'Leur mariage a eu lieu en juin.', difficulty:2 },
  { level:'B1', topic:'Gia đình', word:'Un(e) époux(se)',meaning:'Chồng / vợ',      example:'Mon épouse travaille à l\'hôpital.', difficulty:3 },
  { level:'B1', topic:'Gia đình', word:'Le beau-frère',  meaning:'Anh rể',          example:'Mon beau-frère est très gentil.', difficulty:3 },
  { level:'B1', topic:'Gia đình', word:'La belle-fille', meaning:'Chị dâu',         example:'La belle-fille prépare le dîner.', difficulty:3 },
  { level:'B1', topic:'Gia đình', word:'Un divorce',     meaning:'Ly hôn',          example:'Le divorce est de plus en plus fréquent.', difficulty:3 },

  // ── Chỗ ở ─────────────────────────────────────────────────────
  { level:'A2', topic:'Chỗ ở', word:'Un appartement',   meaning:'Căn hộ',           example:'J\'habite dans un appartement au troisième étage.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Un domicile',      meaning:'Nơi cư trú / nhà', example:'Quel est votre domicile ?', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Un pavillon',      meaning:'Nhà riêng có sân', example:'Ils habitent dans un pavillon avec un grand jardin.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Un quartier',      meaning:'Khu phố',          example:'C\'est un quartier calme et agréable.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Un salon',         meaning:'Phòng khách',      example:'Nous regardons la télé dans le salon.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Une chambre',      meaning:'Phòng ngủ',        example:'Ma chambre est au premier étage.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'La cuisine',       meaning:'Phòng bếp',        example:'Ma mère cuisine dans la cuisine.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'La salle de bains',meaning:'Phòng tắm',        example:'La salle de bains est à gauche.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'L\'entrée',        meaning:'Cửa vào / lối vào',example:'Les chaussures sont dans l\'entrée.', difficulty:2 },
  { level:'A2', topic:'Chỗ ở', word:'Un garage',        meaning:'Gara / chỗ để xe', example:'La voiture est dans le garage.', difficulty:2 },
  { level:'B1', topic:'Chỗ ở', word:'Une résidence',    meaning:'Khu cư trú',       example:'Cette résidence est très sécurisée.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'L\'immeuble',      meaning:'Toà nhà chung cư', example:'Cet immeuble a douze étages.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'Une agence immobilière', meaning:'Công ty bất động sản', example:'Nous avons trouvé l\'appartement via une agence immobilière.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'L\'espace',        meaning:'Không gian',       example:'Cet appartement manque d\'espace.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'L\'ascenseur',     meaning:'Thang máy',        example:'L\'ascenseur est en panne.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'Le couloir',       meaning:'Hành lang',        example:'La salle de bains est au bout du couloir.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'L\'étage',         meaning:'Tầng',             example:'Nous habitons au cinquième étage.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'Le rez-de-chaussée',meaning:'Tầng trệt',       example:'La boutique se trouve au rez-de-chaussée.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'Le parking',       meaning:'Bãi đỗ xe',        example:'Il y a un parking souterrain.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'La luminosité',    meaning:'Độ sáng',          example:'Cet appartement a une bonne luminosité.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'L\'orientation',   meaning:'Hướng (nhà)',      example:'L\'appartement a une orientation plein sud.', difficulty:3 },
  { level:'B1', topic:'Chỗ ở', word:'La vue',           meaning:'Tầm nhìn / cảnh', example:'Depuis ma fenêtre, j\'ai une belle vue sur la mer.', difficulty:3 },
  { level:'B2', topic:'Chỗ ở', word:'Les mètres carrés',meaning:'Diện tích (m²)',   example:'Cet appartement fait soixante mètres carrés.', difficulty:4 },

  // ── Đồ vật ────────────────────────────────────────────────────
  { level:'A1', topic:'Đồ vật', word:'La table',        meaning:'Cái bàn',          example:'Les livres sont sur la table.', difficulty:1 },
  { level:'A1', topic:'Đồ vật', word:'La fenêtre',      meaning:'Cửa sổ',           example:'J\'ouvre la fenêtre pour avoir de l\'air.', difficulty:1 },
  { level:'A1', topic:'Đồ vật', word:'Le lit',          meaning:'Giường ngủ',       example:'Je me couche dans mon lit à 22h.', difficulty:1 },
  { level:'A1', topic:'Đồ vật', word:'La lampe',        meaning:'Đèn ngủ',          example:'J\'allume la lampe pour lire.', difficulty:1 },
  { level:'A2', topic:'Đồ vật', word:'Le fauteuil',     meaning:'Ghế bành',         example:'Grand-père dort dans son fauteuil.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le canapé',       meaning:'Ghế sofa / đi văng',example:'Nous regardons la télé sur le canapé.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le rideau',       meaning:'Rèm cửa',          example:'Ferme les rideaux, s\'il te plaît.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le tableau',      meaning:'Bức tranh / bảng', example:'Il y a un tableau de Monet sur le mur.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'L\'horloge',      meaning:'Đồng hồ treo tường',example:'L\'horloge indique midi.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La télévision',   meaning:'Tivi',             example:'Je regarde la télévision le soir.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'L\'évier',        meaning:'Bồn rửa bát',      example:'Mets les assiettes dans l\'évier.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le lave-vaisselle',meaning:'Máy rửa bát',     example:'Je mets les assiettes dans le lave-vaisselle.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le bol',          meaning:'Bát / tô',         example:'Je mange mes céréales dans un bol.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'L\'assiette',     meaning:'Đĩa',              example:'Pose l\'assiette sur la table.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le verre',        meaning:'Cốc / ly',         example:'Je bois de l\'eau dans un verre.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La poêle',        meaning:'Chảo',             example:'Je fais cuire les œufs dans la poêle.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le four à micro-ondes',meaning:'Lò vi sóng',  example:'Je réchauffe ma soupe au four à micro-ondes.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le four',         meaning:'Lò nướng',         example:'Je fais cuire le gâteau au four.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le réfrigérateur',meaning:'Tủ lạnh',          example:'Le beurre est dans le réfrigérateur.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le grille-pain',  meaning:'Máy nướng bánh mì',example:'Je fais griller du pain dans le grille-pain.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'L\'oreiller',     meaning:'Gối',              example:'J\'ai besoin d\'un oreiller confortable.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La couette',      meaning:'Chăn bông / nệm',  example:'Je me glisse sous la couette.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La couverture',   meaning:'Chăn / mền',       example:'Il fait froid, prends une couverture.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Les lits superposés',meaning:'Giường tầng',   example:'Les enfants dorment dans des lits superposés.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La commode',      meaning:'Tủ đầu giường',    example:'Ma commode est à côté du lit.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'L\'armoire',      meaning:'Tủ quần áo',       example:'Mes vêtements sont dans l\'armoire.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La douche',       meaning:'Vòi hoa sen',      example:'Je prends une douche tous les matins.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le robinet',      meaning:'Vòi nước',         example:'Ferme le robinet après usage.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le savon',        meaning:'Xà phòng',         example:'Je me lave les mains avec du savon.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'La baignoire',    meaning:'Bồn tắm',          example:'Je prends un bain dans la baignoire.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Le lavabo',       meaning:'Bồn rửa mặt',      example:'Je me brosse les dents devant le lavabo.', difficulty:2 },
  { level:'A2', topic:'Đồ vật', word:'Les toilettes',   meaning:'Bồn cầu / nhà vệ sinh', example:'Les toilettes sont au bout du couloir.', difficulty:2 },

  // ── Thực phẩm ─────────────────────────────────────────────────
  { level:'A1', topic:'Thực phẩm', word:'Le café',      meaning:'Cà phê',           example:'Je bois un café le matin.', difficulty:1 },
  { level:'A1', topic:'Thực phẩm', word:'Le pain',      meaning:'Bánh mì',          example:'Je mange du pain au petit-déjeuner.', difficulty:1 },
  { level:'A2', topic:'Thực phẩm', word:'La baguette',  meaning:'Bánh mì dài',      example:'J\'achète une baguette à la boulangerie.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Le gâteau',    meaning:'Bánh ngọt',        example:'Elle fait un gâteau au chocolat.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Un raisin',    meaning:'Quả nho',          example:'Je mange une grappe de raisins.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Un pamplemousse',meaning:'Quả bưởi',       example:'Le pamplemousse est acide.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Une aubergine',meaning:'Quả cà tím',       example:'Je fais revenir l\'aubergine à la poêle.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Une courgette',meaning:'Quả bí xanh',      example:'J\'ajoute des courgettes dans la soupe.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Une épice',    meaning:'Gia vị',           example:'Le curry est une épice très parfumée.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Un crabe',     meaning:'Con cua',          example:'Nous mangeons du crabe en entrée.', difficulty:2 },
  { level:'A2', topic:'Thực phẩm', word:'Des fruits de mer',meaning:'Hải sản',      example:'J\'adore les fruits de mer.', difficulty:2 },
  { level:'B1', topic:'Thực phẩm', word:'Une brioche',  meaning:'Bánh brioche',     example:'On mange une brioche au petit-déjeuner.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Des céréales', meaning:'Ngũ cốc',          example:'Les céréales sont riches en fibres.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Un cordon bleu',meaning:'Thịt cuộn giăm bông', example:'Il commande un cordon bleu avec des frites.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Un apéritif',  meaning:'Món khai vị / rượu khai vị', example:'On prend l\'apéritif avant le dîner.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Le légume sec',meaning:'Rau khô / đậu khô',example:'Les lentilles sont un légume sec.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Le plat préparé',meaning:'Món ăn chế biến sẵn', example:'Je manque de temps, je prends un plat préparé.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Le produit laitier',meaning:'Sản phẩm từ sữa', example:'Le fromage est un produit laitier.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Végétarien(ne)',meaning:'Người ăn chay',    example:'Elle est végétarienne depuis deux ans.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'La charcuterie',meaning:'Thịt nguội',      example:'Il y a de la charcuterie sur le plateau.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'Le steak haché',meaning:'Bít tết xay',     example:'Je voudrais un steak haché bien cuit.', difficulty:3 },
  { level:'B1', topic:'Thực phẩm', word:'La spécialité',meaning:'Món đặc sản',      example:'La bouillabaisse est une spécialité marseillaise.', difficulty:3 },

  // ── Tự nhiên ──────────────────────────────────────────────────
  { level:'A1', topic:'Tự nhiên', word:'La rose',        meaning:'Hoa hồng',        example:'Il m\'offre une rose rouge.', difficulty:1 },
  { level:'A2', topic:'Tự nhiên', word:'La mer',         meaning:'Biển',            example:'Nous allons à la mer cet été.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'La montagne',    meaning:'Núi',             example:'J\'aime faire de la randonnée en montagne.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'La rivière',     meaning:'Sông',            example:'La rivière traverse la ville.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'La campagne',    meaning:'Vùng nông thôn',  example:'Il fait bon vivre à la campagne.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'Le jardin',      meaning:'Vườn',            example:'Il y a des fleurs dans le jardin.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'La marguerite',  meaning:'Hoa cúc',         example:'Les enfants cueillent des marguerites.', difficulty:2 },
  { level:'A2', topic:'Tự nhiên', word:'Un animal domestique',meaning:'Động vật nuôi trong nhà', example:'Le chat est un animal domestique populaire.', difficulty:2 },
  { level:'B1', topic:'Tự nhiên', word:'Un mammifère',   meaning:'Động vật có vú',  example:'La baleine est un mammifère marin.', difficulty:3 },
  { level:'B1', topic:'Tự nhiên', word:'Marin(e)',       meaning:'Thuộc về biển',   example:'La faune marine est très diversifiée.', difficulty:3 },
  { level:'B1', topic:'Tự nhiên', word:'Le marronnier',  meaning:'Cây hạt dẻ',      example:'Les marronniers fleurissent au printemps.', difficulty:3 },
  { level:'B1', topic:'Tự nhiên', word:'Un arbre fruitier',meaning:'Cây ăn quả',    example:'Le pommier est un arbre fruitier.', difficulty:3 },
  { level:'B1', topic:'Tự nhiên', word:'Une menace',     meaning:'Mối đe dọa',      example:'La pollution est une menace pour la biodiversité.', difficulty:3 },
  { level:'B2', topic:'Tự nhiên', word:'Le réchauffement climatique',meaning:'Sự nóng lên toàn cầu', example:'Le réchauffement climatique affecte tous les pays.', difficulty:4 },
  { level:'B2', topic:'Tự nhiên', word:'Une énergie renouvelable',meaning:'Năng lượng tái tạo', example:'L\'énergie solaire est une énergie renouvelable.', difficulty:4 },
  { level:'B2', topic:'Tự nhiên', word:'Un écosystème',  meaning:'Hệ sinh thái',    example:'La forêt amazonienne est un écosystème fragile.', difficulty:4 },

  // ── Động từ cơ bản (top frequency) ───────────────────────────
  { level:'A1', topic:'Động từ', word:'Être',            meaning:'Là / ở',           example:'Je suis étudiant.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Avoir',           meaning:'Có',               example:'J\'ai vingt ans.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Aller',           meaning:'Đi',               example:'Je vais à l\'école.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Faire',           meaning:'Làm / tạo',        example:'Je fais mes devoirs.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Dire',            meaning:'Nói / nói rằng',   example:'Il dit la vérité.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Pouvoir',         meaning:'Có thể',           example:'Je peux venir demain.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Vouloir',         meaning:'Muốn',             example:'Je veux apprendre le français.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Savoir',          meaning:'Biết (kiến thức)', example:'Tu sais parler français ?', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Voir',            meaning:'Nhìn thấy',        example:'Je vois la tour Eiffel.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Venir',           meaning:'Đến',              example:'Il vient de Paris.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Devoir',          meaning:'Phải / cần',       example:'Je dois partir maintenant.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Parler',          meaning:'Nói chuyện',       example:'Tu parles français ?', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Prendre',         meaning:'Lấy / bắt',        example:'Je prends le bus tous les jours.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Aimer',           meaning:'Yêu / thích',      example:'J\'aime la musique française.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Donner',          meaning:'Cho / tặng',       example:'Il me donne un cadeau.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Regarder',        meaning:'Nhìn / xem',       example:'Je regarde un film.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Appeler',         meaning:'Gọi / đặt tên',   example:'Comment tu t\'appelles ?', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Partir',          meaning:'Rời đi',           example:'Il part en vacances demain.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Mettre',          meaning:'Đặt / mặc',        example:'Je mets mon manteau.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Rester',          meaning:'Ở lại',            example:'Je reste à la maison ce soir.', difficulty:1 },
  { level:'A1', topic:'Động từ', word:'Arriver',         meaning:'Đến / xảy ra',     example:'Il arrive toujours en retard.', difficulty:1 },
  { level:'A2', topic:'Động từ', word:'Passer',          meaning:'Qua / trải qua',   example:'Je passe mes vacances en France.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Penser',          meaning:'Nghĩ',             example:'Je pense que c\'est une bonne idée.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Attendre',        meaning:'Chờ đợi',          example:'J\'attends le bus depuis vingt minutes.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Trouver',         meaning:'Tìm thấy / thấy', example:'J\'ai trouvé les clés.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Laisser',         meaning:'Để lại / để cho', example:'Laisse-moi tranquille !', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Arrêter',         meaning:'Dừng lại',         example:'Arrête de parler !', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Connaître',       meaning:'Biết (người/nơi)', example:'Tu connais Paris ?', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Demander',        meaning:'Hỏi / xin',        example:'Je te demande un service.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Comprendre',      meaning:'Hiểu',             example:'Je ne comprends pas cette question.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Sortir',          meaning:'Ra ngoài',         example:'On sort ce soir ?', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Entendre',        meaning:'Nghe thấy',        example:'J\'entends de la musique.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Chercher',        meaning:'Tìm kiếm',         example:'Je cherche mon portefeuille.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Aider',           meaning:'Giúp đỡ',          example:'Peux-tu m\'aider ?', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Essayer',         meaning:'Thử',              example:'Essaie cette veste !', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Revenir',         meaning:'Quay trở lại',     example:'Il revient à dix-neuf heures.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Jouer',           meaning:'Chơi',             example:'Les enfants jouent dans le parc.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Finir',           meaning:'Kết thúc / xong', example:'Tu as fini tes devoirs ?', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Perdre',          meaning:'Mất / thua',       example:'J\'ai perdu mon portefeuille.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Sentir',          meaning:'Ngửi / cảm thấy', example:'Ça sent bon !', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Rentrer',         meaning:'Về nhà',           example:'Je rentre à la maison à dix-huit heures.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Vivre',           meaning:'Sống',             example:'Il vit en France depuis dix ans.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Tenir',           meaning:'Giữ / nắm',        example:'Tiens la porte, s\'il te plaît.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Suivre',          meaning:'Theo / theo dõi', example:'Suis-moi, s\'il te plaît.', difficulty:2 },
  { level:'A2', topic:'Động từ', word:'Croire',          meaning:'Tin / cho rằng',  example:'Je crois que tu as raison.', difficulty:2 },
  { level:'B1', topic:'Động từ', word:'Falloir',         meaning:'Cần phải (il faut)',example:'Il faut étudier pour réussir.', difficulty:3 },
  { level:'B1', topic:'Động từ', word:'Plaire',          meaning:'Làm hài lòng',     example:'Ce film me plaît beaucoup.', difficulty:3 },
  { level:'B1', topic:'Động từ', word:'Rendre',          meaning:'Trả lại / làm cho',example:'Ce médicament le rend malade.', difficulty:3 },
  { level:'B1', topic:'Động từ', word:'Mourir',          meaning:'Chết',             example:'Il est mort dans un accident.', difficulty:3 },

  // ── Danh từ thông dụng ────────────────────────────────────────
  { level:'A1', topic:'Danh từ', word:'L\'homme',        meaning:'Đàn ông / người',  example:'L\'homme sourit à la caméra.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'La femme',        meaning:'Phụ nữ / vợ',     example:'Cette femme est médecin.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'Le jour',         meaning:'Ngày',             example:'Quel beau jour !', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'La nuit',         meaning:'Đêm',              example:'Il fait froid la nuit.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'Le soir',         meaning:'Buổi tối',         example:'Le soir, je regarde la télé.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'La vie',          meaning:'Cuộc sống',        example:'La vie est belle !', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'L\'heure',        meaning:'Giờ / thời gian', example:'Quelle heure est-il ?', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'Le nom',          meaning:'Tên / họ',         example:'Quel est ton nom de famille ?', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'L\'ami(e)',       meaning:'Bạn bè',           example:'C\'est mon meilleur ami.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'La maison',       meaning:'Ngôi nhà',         example:'Je reste à la maison.', difficulty:1 },
  { level:'A1', topic:'Danh từ', word:'La main',         meaning:'Bàn tay',          example:'Donne-moi la main.', difficulty:1 },
  { level:'A2', topic:'Danh từ', word:'Le temps',        meaning:'Thời gian / thời tiết', example:'Je n\'ai pas le temps.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'Le monde',        meaning:'Thế giới / mọi người', example:'Tout le monde est là.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'La fois',         meaning:'Lần',              example:'C\'est la première fois.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'L\'an',          meaning:'Năm',              example:'Il a vingt ans.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'Le besoin',       meaning:'Nhu cầu',          example:'J\'ai besoin de toi.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'La peur',         meaning:'Sự sợ hãi',        example:'J\'ai peur du noir.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'Le problème',     meaning:'Vấn đề',           example:'Quel est le problème ?', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'L\'argent',       meaning:'Tiền / bạc',       example:'Je n\'ai plus d\'argent.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'Les gens',        meaning:'Mọi người',        example:'Les gens sont très gentils ici.', difficulty:2 },
  { level:'A2', topic:'Danh từ', word:'La personne',     meaning:'Người',            example:'Il n\'y a personne dans la rue.', difficulty:2 },
  { level:'B1', topic:'Danh từ', word:'L\'accord',       meaning:'Sự đồng ý / thỏa thuận', example:'D\'accord, je suis d\'accord avec toi.', difficulty:3 },
  { level:'B1', topic:'Danh từ', word:'Monsieur',        meaning:'Ông / thưa ông',   example:'Bonjour, monsieur le directeur.', difficulty:3 },

  // ── Thời gian ─────────────────────────────────────────────────
  { level:'A1', topic:'Thời gian', word:'Lundi',          meaning:'Thứ Hai',          example:'Le lundi, j\'ai cours de français.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Mardi',          meaning:'Thứ Ba',           example:'Le mardi, je vais au sport.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Mercredi',       meaning:'Thứ Tư',           example:'Mercredi, les enfants n\'ont pas école.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Jeudi',          meaning:'Thứ Năm',          example:'Jeudi soir, nous allons au cinéma.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Vendredi',       meaning:'Thứ Sáu',          example:'Le vendredi c\'est le début du week-end.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Samedi',         meaning:'Thứ Bảy',          example:'Samedi matin, je fais les courses.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Dimanche',       meaning:'Chủ Nhật',         example:'Le dimanche, toute la famille se retrouve.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Le printemps',   meaning:'Mùa xuân',         example:'Au printemps, les fleurs éclosent.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'L\'été',         meaning:'Mùa hè',           example:'En été, nous allons à la plage.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'L\'automne',     meaning:'Mùa thu',          example:'En automne, les feuilles tombent.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'L\'hiver',       meaning:'Mùa đông',         example:'En hiver, il neige dans les montagnes.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Aujourd\'hui',   meaning:'Hôm nay',          example:'Aujourd\'hui, il fait beau.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Demain',         meaning:'Ngày mai',         example:'Demain, j\'ai un examen important.', difficulty:1 },
  { level:'A1', topic:'Thời gian', word:'Hier',           meaning:'Hôm qua',          example:'Hier, je suis allé au cinéma.', difficulty:1 },
  { level:'A2', topic:'Thời gian', word:'La semaine',     meaning:'Tuần',             example:'Je travaille cinq jours par semaine.', difficulty:2 },
  { level:'A2', topic:'Thời gian', word:'Le mois',        meaning:'Tháng',            example:'Dans un mois, je pars en vacances.', difficulty:2 },
  { level:'A2', topic:'Thời gian', word:'L\'année',       meaning:'Năm',              example:'Cette année, j\'apprends le français.', difficulty:2 },

  // ── Gia đình (bổ sung) ────────────────────────────────────────
  { level:'A1', topic:'Gia đình', word:'Le fils',         meaning:'Con trai',         example:'Son fils a dix ans.', difficulty:1 },
  { level:'A1', topic:'Gia đình', word:'La fille',        meaning:'Con gái',          example:'Sa fille est très intelligente.', difficulty:1 },
  { level:'A2', topic:'Gia đình', word:'Célibataire',     meaning:'Độc thân',         example:'Il est encore célibataire à trente ans.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Marié(e)',        meaning:'Đã kết hôn',       example:'Ils sont mariés depuis cinq ans.', difficulty:2 },
  { level:'A2', topic:'Gia đình', word:'Divorcé(e)',      meaning:'Đã ly hôn',        example:'Elle est divorcée depuis l\'année dernière.', difficulty:2 },

  // ── Mua sắm ───────────────────────────────────────────────────
  { level:'A2', topic:'Mua sắm', word:'Le magasin',       meaning:'Cửa hàng',         example:'Je vais au magasin acheter des vêtements.', difficulty:2 },
  { level:'A2', topic:'Mua sắm', word:'Le prix',          meaning:'Giá tiền',         example:'Quel est le prix de cette veste ?', difficulty:2 },
  { level:'A2', topic:'Mua sắm', word:'La taille',        meaning:'Kích cỡ / số đo',  example:'Quelle est votre taille ?', difficulty:2 },
  { level:'A2', topic:'Mua sắm', word:'Les soldes',       meaning:'Hàng giảm giá',    example:'Les soldes commencent en janvier.', difficulty:2 },
  { level:'A2', topic:'Mua sắm', word:'La réduction',     meaning:'Giảm giá',         example:'Il y a une réduction de vingt pour cent.', difficulty:2 },
  { level:'A2', topic:'Mua sắm', word:'Le caissier',      meaning:'Thu ngân',         example:'Le caissier rend la monnaie.', difficulty:2 },
  { level:'B1', topic:'Mua sắm', word:'En coton',         meaning:'Bằng vải cotton',  example:'Cette chemise est en coton, très confortable.', difficulty:3 },
  { level:'B1', topic:'Mua sắm', word:'En cuir',          meaning:'Bằng da',          example:'Ces chaussures sont en cuir véritable.', difficulty:3 },
  { level:'B1', topic:'Mua sắm', word:'En soie',          meaning:'Bằng lụa',         example:'Cette robe est en soie.', difficulty:3 },
  { level:'B1', topic:'Mua sắm', word:'La mode',          meaning:'Thời trang',       example:'Paris est la capitale de la mode.', difficulty:3 },

  // ── Nghề nghiệp ───────────────────────────────────────────────
  { level:'A2', topic:'Nghề nghiệp', word:'L\'étudiant(e)',meaning:'Sinh viên',        example:'Je suis étudiant en droit.', difficulty:2 },
  { level:'A2', topic:'Nghề nghiệp', word:'Le professeur',meaning:'Giáo viên',         example:'Mon professeur est très patient.', difficulty:2 },
  { level:'A2', topic:'Nghề nghiệp', word:'Le médecin',   meaning:'Bác sĩ',           example:'Le médecin examine le patient.', difficulty:2 },
  { level:'A2', topic:'Nghề nghiệp', word:'L\'infirmier(ère)',meaning:'Y tá',          example:'L\'infirmière prend la tension artérielle.', difficulty:2 },
  { level:'A2', topic:'Nghề nghiệp', word:'Le cuisinier', meaning:'Đầu bếp',          example:'Le cuisinier prépare un plat gastronomique.', difficulty:2 },
  { level:'B1', topic:'Nghề nghiệp', word:'Le directeur', meaning:'Giám đốc',         example:'Le directeur a signé le contrat.', difficulty:3 },
  { level:'B1', topic:'Nghề nghiệp', word:'L\'ingénieur', meaning:'Kỹ sư',            example:'Elle est ingénieure en informatique.', difficulty:3 },
  { level:'B1', topic:'Nghề nghiệp', word:'L\'avocat(e)', meaning:'Luật sư',          example:'Mon avocat défend mes droits.', difficulty:3 },
  { level:'B1', topic:'Nghề nghiệp', word:'Embaucher',    meaning:'Tuyển dụng',       example:'L\'entreprise va embaucher dix salariés.', difficulty:3 },
  { level:'B1', topic:'Nghề nghiệp', word:'Licencier',    meaning:'Sa thải',          example:'Il a été licencié pour faute grave.', difficulty:3 },
  { level:'B2', topic:'Nghề nghiệp', word:'Démissionner', meaning:'Từ chức / nghỉ việc', example:'Elle a démissionné pour créer sa propre entreprise.', difficulty:4 },
  { level:'B2', topic:'Nghề nghiệp', word:'Le salaire',   meaning:'Lương',            example:'Son salaire a augmenté cette année.', difficulty:4 },

  // ── Công nghệ ─────────────────────────────────────────────────
  { level:'A2', topic:'Công nghệ', word:'L\'ordinateur',  meaning:'Máy tính',         example:'Je travaille sur mon ordinateur toute la journée.', difficulty:2 },
  { level:'A2', topic:'Công nghệ', word:'Le téléphone',   meaning:'Điện thoại',       example:'Mon téléphone est en charge.', difficulty:2 },
  { level:'A2', topic:'Công nghệ', word:'Le mot de passe',meaning:'Mật khẩu',         example:'N\'oublie pas ton mot de passe.', difficulty:2 },
  { level:'A2', topic:'Công nghệ', word:'L\'application', meaning:'Ứng dụng',         example:'J\'ai installé une nouvelle application.', difficulty:2 },
  { level:'B1', topic:'Công nghệ', word:'Le courriel',    meaning:'Thư điện tử (email)', example:'J\'ai reçu un courriel important ce matin.', difficulty:3 },
  { level:'B1', topic:'Công nghệ', word:'Les réseaux sociaux',meaning:'Mạng xã hội', example:'Les réseaux sociaux influencent les jeunes.', difficulty:3 },
  { level:'B1', topic:'Công nghệ', word:'Télécharger',    meaning:'Tải xuống',        example:'Je télécharge le fichier depuis le site.', difficulty:3 },
  { level:'B1', topic:'Công nghệ', word:'L\'imprimante',  meaning:'Máy in',           example:'L\'imprimante est en panne.', difficulty:3 },
  { level:'B1', topic:'Công nghệ', word:'La connexion',   meaning:'Kết nối mạng',     example:'La connexion internet est lente.', difficulty:3 },
  { level:'B2', topic:'Công nghệ', word:'L\'intelligence artificielle',meaning:'Trí tuệ nhân tạo', example:'L\'intelligence artificielle transforme notre quotidien.', difficulty:4 },

  // ── Giáo dục ──────────────────────────────────────────────────
  { level:'A1', topic:'Giáo dục', word:'L\'école',        meaning:'Trường học',       example:'Les enfants vont à l\'école le matin.', difficulty:1 },
  { level:'A2', topic:'Giáo dục', word:'L\'école maternelle',meaning:'Trường mẫu giáo', example:'Mon fils entre à l\'école maternelle cette année.', difficulty:2 },
  { level:'A2', topic:'Giáo dục', word:'L\'école primaire',meaning:'Trường tiểu học', example:'L\'école primaire dure cinq ans.', difficulty:2 },
  { level:'A2', topic:'Giáo dục', word:'Le collège',      meaning:'Trường THCS',      example:'Mon frère est au collège.', difficulty:2 },
  { level:'A2', topic:'Giáo dục', word:'Le lycée',        meaning:'Trường THPT',      example:'Elle passe le bac au lycée.', difficulty:2 },
  { level:'A2', topic:'Giáo dục', word:'L\'université',   meaning:'Đại học',          example:'Il étudie à l\'université de Paris.', difficulty:2 },
  { level:'A2', topic:'Giáo dục', word:'Le cours',        meaning:'Bài học / giờ học',example:'Le cours de maths commence à 9h.', difficulty:2 },
  { level:'B1', topic:'Giáo dục', word:'Réussir un examen',meaning:'Thi đậu',         example:'Elle a réussi son examen avec mention.', difficulty:3 },
  { level:'B1', topic:'Giáo dục', word:'Échouer',         meaning:'Thất bại / thi rớt',example:'Il a échoué à l\'examen et doit le repasser.', difficulty:3 },
  { level:'B1', topic:'Giáo dục', word:'Le diplôme',      meaning:'Bằng cấp',         example:'Elle a obtenu son diplôme en juin.', difficulty:3 },
  { level:'B1', topic:'Giáo dục', word:'La bourse',       meaning:'Học bổng',         example:'Il a décroché une bourse pour étudier à Lyon.', difficulty:3 },

  // ── Du lịch (bổ sung) ─────────────────────────────────────────
  { level:'A1', topic:'Du lịch', word:'À gauche',         meaning:'Bên trái / rẽ trái',example:'La boulangerie est à gauche.', difficulty:1 },
  { level:'A1', topic:'Du lịch', word:'À droite',         meaning:'Bên phải / rẽ phải',example:'Tournez à droite au carrefour.', difficulty:1 },
  { level:'A1', topic:'Du lịch', word:'Tout droit',       meaning:'Đi thẳng',         example:'Continuez tout droit pendant deux cents mètres.', difficulty:1 },
  { level:'A2', topic:'Du lịch', word:'Le musée',         meaning:'Bảo tàng',         example:'Le musée du Louvre est le plus visité au monde.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'La banque',        meaning:'Ngân hàng',        example:'Je vais à la banque retirer de l\'argent.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'La pharmacie',     meaning:'Hiệu thuốc',       example:'La pharmacie est reconnaissable à sa croix verte.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'Une chambre simple',meaning:'Phòng đơn',       example:'Je voudrais une chambre simple pour deux nuits.', difficulty:2 },
  { level:'A2', topic:'Du lịch', word:'Une chambre double',meaning:'Phòng đôi',       example:'Nous réservons une chambre double.', difficulty:2 },

  // ── Tính từ ───────────────────────────────────────────────────
  { level:'A1', topic:'Tính từ', word:'Grand(e)',         meaning:'To / cao',        example:'Mon frère est très grand.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Petit(e)',         meaning:'Nhỏ / thấp',      example:'C\'est une petite ville sympa.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Gros(se)',         meaning:'Béo / to',        example:'Ce chat est très gros.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Mince',            meaning:'Mảnh khảnh',      example:'Elle est grande et mince.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Haut(e)',          meaning:'Cao / trên cao',  example:'Le Mont-Blanc est très haut.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Bas(se)',          meaning:'Thấp',            example:'Le plafond est bas.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Gentil(le)',       meaning:'Tốt bụng',        example:'Elle est très gentille avec tout le monde.', difficulty:1 },
  { level:'A1', topic:'Tính từ', word:'Méchant(e)',       meaning:'Độc ác / hung hăng', example:'Il est méchant avec les autres.', difficulty:1 },
  { level:'A2', topic:'Tính từ', word:'Intelligent(e)',   meaning:'Thông minh',      example:'C\'est un élève très intelligent.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Bête',             meaning:'Ngốc nghếch / ngu', example:'Ne fais pas le bête !', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Large',            meaning:'Rộng rãi',        example:'La rue est large et bien éclairée.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Étroit(e)',        meaning:'Chật hẹp / hẹp', example:'Cette robe est trop étroite pour moi.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Sombre',           meaning:'Tối tăm / u ám', example:'La pièce est sombre, allume la lumière.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Rapide',           meaning:'Nhanh',           example:'Le TGV est un train très rapide.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Lent(e)',          meaning:'Chậm',            example:'Internet est lent ce soir.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Simple',           meaning:'Đơn giản',        example:'La recette est très simple.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Drôle',            meaning:'Hài hước',        example:'Il raconte des histoires drôles.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Gai(e)',           meaning:'Vui vẻ',          example:'Elle est toujours gaie et souriante.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Optimiste',        meaning:'Lạc quan',        example:'Il faut rester optimiste.', difficulty:2 },
  { level:'A2', topic:'Tính từ', word:'Dynamique',        meaning:'Năng động',       example:'C\'est une équipe dynamique.', difficulty:2 },
  { level:'B1', topic:'Tính từ', word:'Généreux(se)',     meaning:'Hào phóng',       example:'Il est très généreux envers les autres.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Mesquin(e)',       meaning:'Hẹp hòi / keo kiệt', example:'C\'est mesquin de refuser d\'aider.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Complexe',         meaning:'Phức tạp',        example:'Ce problème est vraiment complexe.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Lâche',             meaning:'Hèn nhát',        example:'C\'est lâche de ne pas défendre ses amis.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Paresseux(se)',    meaning:'Lười biếng',      example:'Il est trop paresseux pour faire ses devoirs.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Travailleur(se)',  meaning:'Chăm chỉ',        example:'Elle est très travailleuse.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Patient(e)',       meaning:'Kiên nhẫn',       example:'Il faut être patient pour apprendre une langue.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Impatient(e)',     meaning:'Nóng nảy / thiếu kiên nhẫn', example:'Il est impatient d\'avoir les résultats.', difficulty:3 },
  { level:'B1', topic:'Tính từ', word:'Prudent(e)',       meaning:'Cẩn thận',        example:'Sois prudent sur la route.', difficulty:3 },
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

const sentenceTasks = [
  { level:'A1', topic:'Chào hỏi',   vi:'Xin chào!',                                       fr:'Bonjour !' },
  { level:'A1', topic:'Chào hỏi',   vi:'Tạm biệt!',                                       fr:'Au revoir !' },
  { level:'A1', topic:'Giới thiệu', vi:'Tôi tên là Nam.',                                 fr:'Je m\'appelle Nam.' },
  { level:'A1', topic:'Giới thiệu', vi:'Tôi là học sinh.',                                fr:'Je suis étudiant.' },
  { level:'A1', topic:'Cảm ơn',     vi:'Cảm ơn rất nhiều.',                              fr:'Merci beaucoup.' },
  { level:'A1', topic:'Số đếm',     vi:'Tôi muốn hai cái.',                               fr:'Je voudrais deux.' },
  { level:'A2', topic:'Thực phẩm',  vi:'Tôi muốn một tách cà phê.',                      fr:'Je voudrais un café.' },
  { level:'A2', topic:'Du lịch',    vi:'Nhà ga ở đâu?',                                   fr:'Où est la gare ?' },
  { level:'A2', topic:'Mua sắm',    vi:'Cái này giá bao nhiêu?',                          fr:'Combien coûte ceci ?' },
  { level:'A2', topic:'Thành phố',  vi:'Tôi đang tìm một khách sạn.',                    fr:'Je cherche un hôtel.' },
  { level:'A2', topic:'Gia đình',   vi:'Tôi có một người anh trai.',                      fr:'J\'ai un frère.' },
  { level:'B1', topic:'Giao tiếp',  vi:'Bạn có thể nói chậm hơn không?',                fr:'Pouvez-vous parler plus lentement ?' },
  { level:'B1', topic:'Cảm xúc',    vi:'Tôi rất vui được gặp bạn.',                      fr:'Je suis très content de vous rencontrer.' },
  { level:'B1', topic:'Công việc',  vi:'Tôi đang tìm việc làm.',                          fr:'Je cherche un emploi.' },
  { level:'B1', topic:'Học tập',    vi:'Tôi học tiếng Pháp mỗi ngày.',                   fr:'J\'apprends le français tous les jours.' },
  { level:'B2', topic:'Môi trường', vi:'Chúng ta phải bảo vệ môi trường.',               fr:'Nous devons protéger l\'environnement.' },
  { level:'B2', topic:'Lập luận',   vi:'Tuy nhiên, tôi có ý kiến khác.',                 fr:'Cependant, j\'ai une opinion différente.' },
  { level:'B2', topic:'Công việc',  vi:'Cuộc họp bị hoãn đến ngày mai.',                 fr:'La réunion est reportée à demain.' },
  { level:'C1', topic:'Tư duy',     vi:'Điều quan trọng là phải lập luận có chiều sâu.', fr:'Il est essentiel de bien argumenter.' },
];

const dialogueTasks = [
  {
    level:'A1', topic:'Chào hỏi',
    title: 'Gặp gỡ lần đầu',
    lines: [
      { speaker: 'A', fr: 'Bonjour ! Comment tu t\'appelles ?', vi: 'Xin chào! Bạn tên là gì?' },
      { speaker: 'B', fr: 'Je m\'appelle Marie. Et toi ?', vi: 'Tôi tên là Marie. Còn bạn?' },
      { speaker: 'A', fr: 'Moi, c\'est Lucas. Enchanté !', vi: 'Tôi là Lucas. Rất vui được gặp bạn!' },
      { speaker: 'B', fr: 'Enchantée ! Tu es français ?', vi: 'Rất vui được gặp bạn! Bạn là người Pháp à?' },
      { speaker: 'A', fr: 'Oui, je suis de Paris. Et toi ?', vi: 'Vâng, tôi đến từ Paris. Còn bạn?' },
      { speaker: 'B', fr: 'Je suis vietnamienne, mais j\'apprends le français.', vi: 'Tôi là người Việt Nam, nhưng tôi đang học tiếng Pháp.' }
    ]
  },
  {
    level:'A1', topic:'Chào hỏi',
    title: 'Chào hỏi buổi sáng',
    lines: [
      { speaker: 'A', fr: 'Bonjour, comment ça va ?', vi: 'Chào buổi sáng, bạn có khỏe không?' },
      { speaker: 'B', fr: 'Ça va bien, merci. Et toi ?', vi: 'Tôi khỏe, cảm ơn. Còn bạn?' },
      { speaker: 'A', fr: 'Très bien, merci. Bonne journée !', vi: 'Rất khỏe, cảm ơn. Chúc bạn một ngày tốt lành!' },
      { speaker: 'B', fr: 'Merci, toi aussi !', vi: 'Cảm ơn, bạn cũng vậy nhé!' }
    ]
  },
  {
    level:'A1', topic:'Giới thiệu',
    title: 'Giới thiệu bản thân',
    lines: [
      { speaker: 'Giáo viên', fr: 'Bonjour à tous ! Présentez-vous, s\'il vous plaît.', vi: 'Chào tất cả mọi người! Hãy tự giới thiệu bản thân nhé.' },
      { speaker: 'Élève', fr: 'Bonjour, je m\'appelle Nam. J\'ai vingt ans.', vi: 'Xin chào, tôi tên là Nam. Tôi hai mươi tuổi.' },
      { speaker: 'Giáo viên', fr: 'Tu es étudiant ?', vi: 'Bạn là sinh viên à?' },
      { speaker: 'Élève', fr: 'Oui, je suis étudiant en informatique.', vi: 'Vâng, tôi là sinh viên ngành công nghệ thông tin.' },
      { speaker: 'Giáo viên', fr: 'Et tu habites où ?', vi: 'Và bạn sống ở đâu?' },
      { speaker: 'Élève', fr: 'J\'habite à Hanoï, au Vietnam.', vi: 'Tôi sống ở Hà Nội, Việt Nam.' }
    ]
  },
  {
    level:'A1', topic:'Gia đình',
    title: 'Nói về gia đình',
    lines: [
      { speaker: 'A', fr: 'Tu as des frères et sœurs ?', vi: 'Bạn có anh chị em không?' },
      { speaker: 'B', fr: 'Oui, j\'ai un frère et une sœur. Et toi ?', vi: 'Có, tôi có một anh trai và một chị gái. Còn bạn?' },
      { speaker: 'A', fr: 'Moi, je suis fils unique.', vi: 'Tôi là con một.' },
      { speaker: 'B', fr: 'Tes parents habitent avec toi ?', vi: 'Bố mẹ bạn sống cùng bạn không?' },
      { speaker: 'A', fr: 'Oui, on habite tous ensemble à Hanoï.', vi: 'Vâng, chúng tôi sống cùng nhau ở Hà Nội.' }
    ]
  },
  {
    level:'A1', topic:'Thực phẩm',
    title: 'Quán cà phê',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous désirez ?', vi: 'Xin chào, anh/chị muốn gì?' },
      { speaker: 'Khách', fr: 'Je voudrais un café et un croissant.', vi: 'Tôi muốn một cà phê và một bánh sừng bò.' },
      { speaker: 'Nhân viên', fr: 'Avec plaisir, ce sera tout ?', vi: 'Vâng ạ, còn gì nữa không?' },
      { speaker: 'Khách', fr: 'Oui, c\'est combien ?', vi: 'Vâng, tổng cộng bao nhiêu ạ?' },
      { speaker: 'Nhân viên', fr: 'Ça fait quatre euros cinquante.', vi: 'Tất cả là bốn euro năm mươi xu.' },
      { speaker: 'Khách', fr: 'Voilà, merci.', vi: 'Của anh/chị đây, cảm ơn.' }
    ]
  },
  {
    level:'A2', topic:'Mua sắm',
    title: 'Tại cửa hàng quần áo',
    lines: [
      { speaker: 'Vendeur', fr: 'Bonjour, je peux vous aider ?', vi: 'Xin chào, tôi có thể giúp gì cho anh/chị không?' },
      { speaker: 'Client', fr: 'Oui, je cherche une veste pour l\'hiver.', vi: 'Vâng, tôi đang tìm một chiếc áo khoác cho mùa đông.' },
      { speaker: 'Vendeur', fr: 'Quelle taille faites-vous ?', vi: 'Anh/chị mặc cỡ bao nhiêu?' },
      { speaker: 'Client', fr: 'Je fais du M.', vi: 'Tôi mặc cỡ M.' },
      { speaker: 'Vendeur', fr: 'Voici une veste très tendance. Elle vous plaît ?', vi: 'Đây là một chiếc áo rất thời thượng. Anh/chị thích không?' },
      { speaker: 'Client', fr: 'Oui, c\'est combien ?', vi: 'Vâng, giá bao nhiêu vậy?' },
      { speaker: 'Vendeur', fr: 'Elle est à soixante-dix euros.', vi: 'Chiếc này giá bảy mươi euro.' }
    ]
  },
  {
    level:'A2', topic:'Thực phẩm',
    title: 'Tại nhà hàng',
    lines: [
      { speaker: 'Nhân viên', fr: 'Bonjour, vous avez réservé ?', vi: 'Xin chào, anh/chị đã đặt bàn chưa?' },
      { speaker: 'Khách', fr: 'Oui, au nom de Nam.', vi: 'Có, tên Nam.' },
      { speaker: 'Nhân viên', fr: 'Suivez-moi, je vous en prie.', vi: 'Mời anh/chị theo tôi.' },
      { speaker: 'Khách', fr: 'Qu\'est-ce que vous recommandez ?', vi: 'Anh/chị có gợi ý món gì không?' },
      { speaker: 'Nhân viên', fr: 'Je vous recommande le steak avec des frites.', vi: 'Tôi giới thiệu món bít tết với khoai tây chiên.' }
    ]
  },
  {
    level:'A2', topic:'Du lịch',
    title: 'Tại ga tàu',
    lines: [
      { speaker: 'Khách', fr: 'Bonjour, je voudrais un billet pour Paris.', vi: 'Xin chào, tôi muốn mua vé đi Paris.' },
      { speaker: 'Nhân viên', fr: 'Aller simple ou aller-retour ?', vi: 'Vé một chiều hay khứ hồi?' },
      { speaker: 'Khách', fr: 'Aller-retour, s\'il vous plaît.', vi: 'Khứ hồi, làm ơn.' },
      { speaker: 'Nhân viên', fr: 'Le train part à quinze heures, quai numéro cinq.', vi: 'Tàu khởi hành lúc 15 giờ, sân ga số năm.' },
      { speaker: 'Khách', fr: 'Merci. C\'est combien ?', vi: 'Cảm ơn. Giá bao nhiêu?' },
      { speaker: 'Nhân viên', fr: 'Vingt-cinq euros, s\'il vous plaît.', vi: 'Hai mươi lăm euro, xin cảm ơn.' }
    ]
  },
  {
    level:'A2', topic:'Chỗ ở',
    title: 'Tìm phòng thuê',
    lines: [
      { speaker: 'Locataire', fr: 'Bonjour, j\'appelle pour l\'appartement à louer.', vi: 'Xin chào, tôi gọi để hỏi về căn hộ cho thuê.' },
      { speaker: 'Propriétaire', fr: 'Oui, c\'est un deux-pièces au troisième étage.', vi: 'Vâng, đó là căn hộ hai phòng ở tầng ba.' },
      { speaker: 'Locataire', fr: 'Il y a un ascenseur ?', vi: 'Có thang máy không ạ?' },
      { speaker: 'Propriétaire', fr: 'Oui, et il y a aussi un parking.', vi: 'Có, và cũng có bãi đỗ xe nữa.' },
      { speaker: 'Locataire', fr: 'Quel est le loyer mensuel ?', vi: 'Tiền thuê hàng tháng là bao nhiêu?' },
      { speaker: 'Propriétaire', fr: 'C\'est huit cents euros par mois, charges comprises.', vi: 'Tám trăm euro một tháng, đã bao gồm phí dịch vụ.' }
    ]
  },
  {
    level:'B1', topic:'Giáo dục',
    title: 'Trao đổi về học tập',
    lines: [
      { speaker: 'A', fr: 'Tu as passé ton examen hier ?', vi: 'Hôm qua bạn đã thi chưa?' },
      { speaker: 'B', fr: 'Oui, mais je pense que j\'ai raté.', vi: 'Rồi, nhưng tôi nghĩ mình đã trượt rồi.' },
      { speaker: 'A', fr: 'Pourquoi tu dis ça ?', vi: 'Sao bạn lại nói vậy?' },
      { speaker: 'B', fr: 'Je n\'avais pas bien préparé la partie grammaire.', vi: 'Tôi không chuẩn bị kỹ phần ngữ pháp.' },
      { speaker: 'A', fr: 'Courage ! Les résultats ne sont pas encore sortis.', vi: 'Cố lên! Kết quả chưa ra mà.' },
      { speaker: 'B', fr: 'Tu as raison. Je vais travailler plus dur la prochaine fois.', vi: 'Bạn nói đúng. Lần sau tôi sẽ cố gắng hơn.' }
    ]
  },
  {
    level:'B1', topic:'Nghề nghiệp',
    title: 'Phỏng vấn xin việc',
    lines: [
      { speaker: 'Giám đốc', fr: 'Pouvez-vous vous présenter ?', vi: 'Bạn có thể tự giới thiệu không?' },
      { speaker: 'Người xin việc', fr: 'Bien sûr. Je m\'appelle Nam, j\'ai cinq ans d\'expérience.', vi: 'Tất nhiên. Tôi là Nam, tôi có 5 năm kinh nghiệm.' },
      { speaker: 'Giám đốc', fr: 'Quelles sont vos qualités principales ?', vi: 'Những ưu điểm chính của bạn là gì?' },
      { speaker: 'Người xin việc', fr: 'Je suis sérieux, organisé et très motivé.', vi: 'Tôi nghiêm túc, có tổ chức và rất nhiệt tình.' },
      { speaker: 'Giám đốc', fr: 'Quelles sont vos prétentions salariales ?', vi: 'Mức lương kỳ vọng của bạn là bao nhiêu?' },
      { speaker: 'Người xin việc', fr: 'Je souhaite un salaire autour de deux mille euros.', vi: 'Tôi mong muốn mức lương khoảng hai nghìn euro.' }
    ]
  },
  {
    level:'B1', topic:'Sức khỏe',
    title: 'Tại phòng khám',
    lines: [
      { speaker: 'Médecin', fr: 'Bonjour, qu\'est-ce qui vous amène ?', vi: 'Xin chào, anh/chị đến vì lý do gì?' },
      { speaker: 'Patient', fr: 'J\'ai mal à la gorge depuis trois jours.', vi: 'Tôi đau họng được ba ngày rồi.' },
      { speaker: 'Médecin', fr: 'Vous avez de la fièvre ?', vi: 'Anh/chị có bị sốt không?' },
      { speaker: 'Patient', fr: 'Oui, trente-huit degrés ce matin.', vi: 'Có, sáng nay ba mươi tám độ.' },
      { speaker: 'Médecin', fr: 'Je vais vous prescrire des antibiotiques.', vi: 'Tôi sẽ kê đơn thuốc kháng sinh cho anh/chị.' },
      { speaker: 'Patient', fr: 'Merci docteur. Je dois revenir quand ?', vi: 'Cảm ơn bác sĩ. Tôi cần quay lại khi nào?' }
    ]
  },
  {
    level:'B1', topic:'Công việc',
    title: 'Họp nhóm tại văn phòng',
    lines: [
      { speaker: 'Chef', fr: 'On va commencer la réunion. Où en est le projet ?', vi: 'Chúng ta bắt đầu họp thôi. Dự án đang tiến triển thế nào?' },
      { speaker: 'Employé', fr: 'Nous avons terminé la première phase.', vi: 'Chúng tôi đã hoàn thành giai đoạn đầu tiên.' },
      { speaker: 'Chef', fr: 'Bien. Quand est-ce que la deuxième phase sera prête ?', vi: 'Tốt. Khi nào giai đoạn hai sẽ sẵn sàng?' },
      { speaker: 'Employé', fr: 'Nous estimons que ce sera fini vendredi prochain.', vi: 'Chúng tôi dự kiến sẽ xong vào thứ Sáu tuần tới.' }
    ]
  },
  {
    level:'B2', topic:'Tự nhiên',
    title: 'Thảo luận về môi trường',
    lines: [
      { speaker: 'A', fr: 'Que penses-tu du réchauffement climatique ?', vi: 'Bạn nghĩ gì về biến đổi khí hậu?' },
      { speaker: 'B', fr: 'C\'est un problème très grave qui nécessite une action immédiate.', vi: 'Đó là vấn đề rất nghiêm trọng cần hành động ngay.' },
      { speaker: 'A', fr: 'Quelles solutions proposes-tu ?', vi: 'Bạn đề xuất giải pháp nào?' },
      { speaker: 'B', fr: 'Il faut utiliser les énergies renouvelables et recycler davantage.', vi: 'Cần sử dụng năng lượng tái tạo và tái chế nhiều hơn.' },
      { speaker: 'A', fr: 'Je suis d\'accord. Chacun doit faire sa part.', vi: 'Tôi đồng ý. Mỗi người phải góp phần của mình.' }
    ]
  },
  {
    level:'B2', topic:'Công nghệ',
    title: 'Trí tuệ nhân tạo và xã hội',
    lines: [
      { speaker: 'A', fr: 'L\'intelligence artificielle va-t-elle remplacer les humains ?', vi: 'Trí tuệ nhân tạo có thay thế con người không?' },
      { speaker: 'B', fr: 'Pas entièrement, mais certains métiers vont disparaître.', vi: 'Không hoàn toàn, nhưng một số ngành nghề sẽ biến mất.' },
      { speaker: 'A', fr: 'Quels métiers sont les plus menacés selon toi ?', vi: 'Theo bạn, ngành nào bị đe dọa nhiều nhất?' },
      { speaker: 'B', fr: 'Les métiers répétitifs comme la comptabilité ou la saisie de données.', vi: 'Những công việc lặp đi lặp lại như kế toán hay nhập liệu.' },
      { speaker: 'A', fr: 'Il faut donc se former aux nouvelles technologies.', vi: 'Vậy thì cần phải học các công nghệ mới.' }
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
let activeSentence = 0;
let wordMode = 'sentence';
let sentenceBankWords = [];
let sentenceAnswerWords = [];
let matchPairs = [];
let matchSelected = null;
let matchSolved = 0;
let quizState = { current: 0, score: 0, total: 0, active: false };
let selectedLevel = 'all';
let selectedTopic = 'all';
let vocabTopics = ['all', ...new Set(vocabularies.map(item => item.topic))];
let searchQuery = '';
let grammarQuery = '';
let favoriteWords = [];
let activityHistoryList = [];
let learnedWordIds = new Set();
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
    const labelEl = activeButton.querySelector('.menu-label');
    currentSectionTitle.textContent = labelEl ? labelEl.textContent : activeButton.textContent;
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
    grammarRead: grammarLessons.length,
    quizScore: 0,
    streak: 0,
    lastPractice: null
  });
  wordsLearned.textContent = learnedWordIds.size;
  grammarRead.textContent = stats.grammarRead;
  quizScore.textContent = stats.quizScore;
  favoriteCount.textContent = favoriteWords.length;
  streakCounter.textContent = `🔥 ${stats.streak} ngày`;
}

function saveStats(overrides = {}) {
  const existing = readStorage('frenchCoachStats', {});
  localStorage.setItem('frenchCoachStats', JSON.stringify({
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

    const wordCount = d.wordCount || 0;
    el.innerHTML = `<div class="eval-rows">
      ${row('🎯','Quiz', qTotal>0?`${qCorrect}/${qTotal} (${qPct}%)`:'Chưa làm', qPct, grade(qPct))}
      ${row('📝','Dịch câu', practice>0?`${practice} câu đúng`:'Chưa làm', Math.min(100,practice*5), 'green')}
      ${row('🧩','Ghép từ', wordCount>0?`${wordCount} lần đúng`:'Chưa chơi', Math.min(100,wordCount*10), 'green')}
      ${row('🎤','Luyện nói', spAttempt>0?`${spCorrect}/${spAttempt} lần tốt (${spPct}%)`:'Chưa luyện', spPct, grade(spPct))}
      ${row('🔊','Phát âm', prAttempt>0?`${prCorrect}/${prAttempt} lần đúng (${prPct}%)`:'Chưa luyện', prPct, grade(prPct))}
      ${row('👂','Nghe hiểu', lsTotal>0?`${lsCorrect}/${lsTotal} câu đúng (${lsPct}%)`:'Chưa làm', lsPct, grade(lsPct))}
      ${row('💬','Hội thoại', dialogue>0?`${dialogue} lần xem`:'Chưa xem', Math.min(100,dialogue*20), 'green')}
      ${row('📖','Ngữ pháp', grammar>0?`${grammar} lần vào trang`:'Chưa xem', Math.min(100,grammar*25), 'green')}
    </div>`;
    renderEvalComment({ qPct, qTotal, spPct, spAttempt, prPct, prAttempt, lsPct, lsTotal, practice, dialogue, grammar, wordCount });
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
    return (e.quizTotal||0) + (e.practiceCount||0) + (e.speakingAttempt||0) + (e.pronunciationAttempt||0) + (e.listeningCorrect||0) + (e.listeningWrong||0) + (e.dialogueCount||0) + (e.wordCount||0);
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

function loadLearnedWords() {
  const arr = readStorage('frenchCoachLearnedWords', []);
  learnedWordIds = new Set(arr);
}

function saveLearnedWords() {
  localStorage.setItem('frenchCoachLearnedWords', JSON.stringify([...learnedWordIds]));
  queueCloudSync();
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
  if (!activityHistory) return;
  if (!activityHistoryList.length) {
    activityHistory.innerHTML = '<div class="history-empty">Chưa có hoạt động. Bắt đầu học ngay!</div>';
    return;
  }
  activityHistory.innerHTML = activityHistoryList.map(item => {
    const sep = item.indexOf(' — ');
    const time = sep > -1 ? item.slice(0, sep) : '';
    const text = sep > -1 ? item.slice(sep + 3) : item;
    const dotCls = text.includes('quiz') || text.includes('Quiz') ? 'history-dot dot-quiz'
      : text.includes('Yêu thích') ? 'history-dot dot-fav'
      : text.includes('mục tiêu') || text.includes('Hoàn thành mục') ? 'history-dot dot-goal'
      : text.includes('lộ trình') || text.includes('Lộ trình') ? 'history-dot dot-road'
      : 'history-dot';
    return `<div class="history-item">
      <span class="${dotCls}"></span>
      <span class="history-time">${time}</span>
      <span class="history-text">${text}</span>
    </div>`;
  }).join('');
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
  let tasks = dialogueTasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || t.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || t.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
  if (practiceFilterOrder === 'hard') tasks = [...tasks].reverse();
  if (!tasks.length) {
    dialogueTitle.textContent = 'Không tìm thấy hội thoại';
    if (dialogueMeta) dialogueMeta.textContent = '';
    dialogueText.innerHTML = '<p style="text-align:center;padding:24px 0;color:var(--muted)">Chưa có hội thoại nào cho bộ lọc này.<br>Thử chọn chủ đề khác.</p>';
    return;
  }
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
  const wordPanel = document.getElementById('wordPanel');
  translatePanel.style.display = tab === 'translate' ? 'block' : 'none';
  speakingPanel.style.display = tab === 'speaking' ? 'block' : 'none';
  pronunciationPanel.style.display = tab === 'pronunciation' ? 'block' : 'none';
  dialoguePanel.style.display = tab === 'dialogue' ? 'block' : 'none';
  if (listeningPanel) listeningPanel.style.display = tab === 'listening' ? 'block' : 'none';
  if (wordPanel) {
    wordPanel.style.display = tab === 'word' ? 'block' : 'none';
    if (tab === 'word') renderWordGame();
  }
}

function getFilteredListeningTasks() {
  const byLevel = listeningTasks.filter(t =>
    practiceFilterLevel === 'all' || !t.level || t.level === practiceFilterLevel
  );
  if (byLevel.length) return byLevel;
  return listeningTasks;
}

function renderListening() {
  const tasks = getFilteredListeningTasks();
  const listeningMeta = document.getElementById('listeningMeta');
  const listeningAnswers = document.getElementById('listeningAnswers');
  const listeningFeedback = document.getElementById('listeningFeedback');
  const listeningTitle = document.getElementById('listeningTitle');
  if (!tasks.length) {
    if (listeningTitle) listeningTitle.textContent = 'Không tìm thấy bài nghe';
    if (listeningMeta) listeningMeta.textContent = '';
    if (listeningFeedback) listeningFeedback.textContent = '';
    if (listeningAnswers) listeningAnswers.innerHTML = '<p style="text-align:center;padding:24px 0;color:var(--muted)">Chưa có bài nghe nào cho bộ lọc này.<br>Thử chọn chủ đề khác.</p>';
    return;
  }
  activeListening = activeListening % tasks.length;
  const task = tasks[activeListening];
  if (listeningMeta) listeningMeta.textContent = [task.level, task.topic].filter(Boolean).join(' · ');
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

function getFilteredSentenceTasks() {
  return sentenceTasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || t.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || t.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
}

function renderSentenceBuilder() {
  const tasks = getFilteredSentenceTasks();
  const answerEl = document.getElementById('sentenceAnswerArea');
  const bankEl = document.getElementById('wordBankArea');
  const promptEl = document.getElementById('sentencePrompt');
  const metaEl = document.getElementById('sentenceMeta');
  const feedbackEl = document.getElementById('sentenceFeedback');
  if (!answerEl || !bankEl) return;
  if (!tasks.length) {
    promptEl.textContent = 'Không có câu nào phù hợp với bộ lọc.';
    bankEl.innerHTML = '';
    answerEl.innerHTML = '<span class="answer-hint">Hãy thay đổi bộ lọc</span>';
    return;
  }
  const task = tasks[activeSentence % tasks.length];
  if (metaEl) metaEl.textContent = `${task.level} · ${task.topic}`;
  if (promptEl) promptEl.textContent = task.vi;
  if (feedbackEl) feedbackEl.textContent = '';

  const words = task.fr.replace(/['']/g, "'").split(' ').filter(Boolean);
  const withDistractors = [...words];
  const extras = vocabularies
    .filter(v => !words.includes(v.word))
    .slice(0, Math.min(3, Math.floor(words.length / 2)));
  extras.forEach(v => withDistractors.push(v.word));
  sentenceBankWords = shuffleArray(withDistractors.map((w, i) => ({ id: i, word: w, used: false })));
  sentenceAnswerWords = [];

  renderWordChips();
}

function renderWordChips() {
  const answerEl = document.getElementById('sentenceAnswerArea');
  const bankEl = document.getElementById('wordBankArea');
  if (!answerEl || !bankEl) return;

  if (sentenceAnswerWords.length === 0) {
    answerEl.innerHTML = '<span class="answer-hint">Nhấn các từ bên dưới để ghép câu</span>';
  } else {
    answerEl.innerHTML = sentenceAnswerWords.map(w =>
      `<button class="word-chip answer-chip" data-chip-id="${w.id}">${w.word}</button>`
    ).join('');
  }

  bankEl.innerHTML = sentenceBankWords
    .filter(w => !w.used)
    .map(w => `<button class="word-chip bank-chip" data-chip-id="${w.id}">${w.word}</button>`)
    .join('');
}

function checkSentenceAnswer() {
  const tasks = getFilteredSentenceTasks();
  const task = tasks[activeSentence % tasks.length];
  const feedbackEl = document.getElementById('sentenceFeedback');
  if (!feedbackEl) return;
  const given = sentenceAnswerWords.map(w => w.word).join(' ').trim().toLowerCase().replace(/[!?.,]/g, '');
  const expected = task.fr.trim().toLowerCase().replace(/[!?.,]/g, '');
  if (given === expected) {
    feedbackEl.textContent = '🎉 Chính xác!';
    feedbackEl.style.color = '#22c55e';
    recordDailyStat('wordCount');
    maybeUpdateStreak();
    playQuizSound(true);
  } else if (given.length === 0) {
    feedbackEl.textContent = 'Hãy ghép câu trước khi kiểm tra.';
    feedbackEl.style.color = '#f59e0b';
  } else {
    feedbackEl.textContent = `Chưa đúng. Đáp án: ${task.fr}`;
    feedbackEl.style.color = '#ef4444';
    playQuizSound(false);
  }
}

function renderMatchGame() {
  const gridEl = document.getElementById('matchGrid');
  const scoreEl = document.getElementById('matchScore');
  const feedbackEl = document.getElementById('matchFeedback');
  if (!gridEl) return;

  const pool = vocabularies.filter(v => {
    const matchLevel = practiceFilterLevel === 'all' || v.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || v.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
  const picked = shuffleArray(pool).slice(0, 6);
  matchPairs = picked.map((v, i) => ({
    id: i, fr: v.word, vi: v.meaning, matched: false
  }));
  matchSelected = null;
  matchSolved = 0;
  if (scoreEl) scoreEl.textContent = `0 / ${matchPairs.length} cặp`;
  if (feedbackEl) feedbackEl.textContent = '';

  renderMatchGrid();
}

function renderMatchGrid() {
  const gridEl = document.getElementById('matchGrid');
  if (!gridEl) return;
  const leftItems = shuffleArray(matchPairs.filter(p => !p.matched).map(p => ({ ...p, side: 'fr' })));
  const rightItems = shuffleArray(matchPairs.filter(p => !p.matched).map(p => ({ ...p, side: 'vi' })));

  gridEl.innerHTML = '';
  const maxLen = Math.max(leftItems.length, rightItems.length);
  for (let i = 0; i < maxLen; i++) {
    const l = leftItems[i];
    const r = rightItems[i];
    if (l) {
      const isSelected = matchSelected && matchSelected.side === 'fr' && matchSelected.id === l.id;
      gridEl.insertAdjacentHTML('beforeend',
        `<button class="match-chip fr-chip${isSelected ? ' selected' : ''}" data-match-id="${l.id}" data-match-side="fr">${l.fr}</button>`);
    } else {
      gridEl.insertAdjacentHTML('beforeend', '<div></div>');
    }
    if (r) {
      const isSelected = matchSelected && matchSelected.side === 'vi' && matchSelected.id === r.id;
      gridEl.insertAdjacentHTML('beforeend',
        `<button class="match-chip vi-chip${isSelected ? ' selected' : ''}" data-match-id="${r.id}" data-match-side="vi">${r.vi}</button>`);
    } else {
      gridEl.insertAdjacentHTML('beforeend', '<div></div>');
    }
  }
}

function handleMatchClick(id, side) {
  const feedbackEl = document.getElementById('matchFeedback');
  const scoreEl = document.getElementById('matchScore');
  if (!matchSelected) {
    matchSelected = { id, side };
    renderMatchGrid();
    return;
  }
  if (matchSelected.side === side) {
    matchSelected = { id, side };
    renderMatchGrid();
    return;
  }
  const frId = side === 'vi' ? matchSelected.id : id;
  const viId = side === 'fr' ? matchSelected.id : id;
  const correct = frId === viId;
  matchSelected = null;
  if (correct) {
    matchPairs.find(p => p.id === frId).matched = true;
    matchSolved++;
    if (scoreEl) scoreEl.textContent = `${matchSolved} / ${matchPairs.length} cặp`;
    if (feedbackEl) { feedbackEl.textContent = '✅ Đúng!'; feedbackEl.style.color = '#22c55e'; }
    playQuizSound(true);
    recordDailyStat('wordCount');
    if (matchSolved === matchPairs.length) {
      if (feedbackEl) { feedbackEl.textContent = '🎉 Hoàn thành tất cả!'; feedbackEl.style.color = '#22c55e'; }
      maybeUpdateStreak();
    }
    renderMatchGrid();
  } else {
    if (feedbackEl) { feedbackEl.textContent = '❌ Không khớp. Thử lại!'; feedbackEl.style.color = '#ef4444'; }
    playQuizSound(false);
    const wrongChips = document.querySelectorAll('.match-chip.selected');
    wrongChips.forEach(c => { c.classList.add('wrong'); setTimeout(() => c.classList.remove('wrong'), 600); });
    renderMatchGrid();
  }
}

function renderWordGame() {
  if (wordMode === 'sentence') {
    renderSentenceBuilder();
  } else {
    renderMatchGame();
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

function renderWordOfDay() {
  const dayIndex = Math.floor(Date.now() / 86400000) % vocabularies.length;
  const word = vocabularies[dayIndex];
  const w = document.getElementById('wodWord');
  const m = document.getElementById('wodMeaning');
  const ex = document.getElementById('wodExample');
  const lv = document.getElementById('wodLevel');
  const tp = document.getElementById('wodTopic');
  if (!w) return;
  w.textContent = word.word;
  m.textContent = word.meaning;
  ex.textContent = word.example ? `“${word.example}”` : '';
  if (lv) lv.textContent = word.level || '';
  if (tp) tp.textContent = word.topic || '';
  const speakBtn = document.getElementById('wodSpeak');
  if (speakBtn) speakBtn.onclick = () => speak(word.word);
}

function renderFlashcard() {
  const item = vocabularies[activeFlashcard];
  flashcardWord.textContent = item.word;
  flashcardDefinition.textContent = item.meaning;
  const counter = document.getElementById('flashcardCounter');
  if (counter) counter.textContent = `${activeFlashcard + 1} / ${vocabularies.length} từ`;
  if (typeof syncLearnedButtonState === 'function') syncLearnedButtonState();
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
  if (syncNowBtn) syncNowBtn.disabled = isLoading || !currentUser || !firebaseReady;
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
  if (syncNowBtn) syncNowBtn.disabled = authLoading || !signedIn || !firebaseReady;
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
      displayName: getDisplayName(currentUser),
      email: currentUser.email || '',
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
      updateTopbarUser(user);
      if (currentUser) {
        if (authEmail && currentUser.email) authEmail.value = currentUser.email;
        if (authPassword) authPassword.value = '';
        setAuthStatus(`Đã đăng nhập: ${getDisplayName(currentUser)}.`);
        updateAuthButtons();
        reattributeGuestScores(currentUser);
        // Ghi tên ngay lập tức để admin thấy
        if (firebaseReady && db) {
          const ref = getCloudDocRef();
          if (ref) ref.set({ displayName: getDisplayName(currentUser), email: currentUser.email || '', updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
        }
        await pullCloudData();
      } else {
        setAuthStatus('Chưa đăng nhập.');
        updateAuthButtons();
      }
      checkBroadcasts();
    });
  } catch {
    setAuthStatus('Khoi tao Firebase that bai. Kiem tra firebaseConfig.', true);
  }
}

/* ── Eval Comment (strengths) ────────────── */
function renderEvalComment({ qPct, qTotal, spPct, spAttempt, prPct, prAttempt, lsPct, lsTotal, practice, dialogue, grammar, wordCount }) {
  const el = document.getElementById('evalComment');
  if (!el) return;
  const strengths = [], improve = [];
  const noActivity = qTotal === 0 && practice === 0 && spAttempt === 0 && prAttempt === 0 && lsTotal === 0 && dialogue === 0 && grammar === 0;
  if (noActivity) { el.innerHTML = ''; return; }

  if (qTotal > 0 && qPct >= 80) strengths.push('Quiz');
  else if (qTotal > 0 && qPct < 60) improve.push('Quiz');

  if (lsTotal > 0 && lsPct >= 80) strengths.push('Nghe hiểu');
  else if (lsTotal === 0) improve.push('Nghe hiểu');

  if (practice >= 3) strengths.push('Dịch câu');
  else if (practice === 0) improve.push('Dịch câu');

  if (spAttempt > 0 && spPct >= 70) strengths.push('Luyện nói');
  else if (spAttempt === 0) improve.push('Luyện nói');

  if (prAttempt > 0 && prPct >= 70) strengths.push('Phát âm');
  else if (prAttempt === 0) improve.push('Phát âm');

  if (dialogue >= 2) strengths.push('Hội thoại');

  let html = '<div class="eval-comment-inner">';
  if (strengths.length) {
    html += `<div class="eval-strength"><span class="eval-comment-icon">💪</span><div><strong>Điểm mạnh hôm nay:</strong> ${strengths.map(s => `<span class="eval-tag green">${s}</span>`).join('')}</div></div>`;
  }
  if (improve.length) {
    html += `<div class="eval-improve"><span class="eval-comment-icon">📌</span><div><strong>Nên luyện thêm:</strong> ${improve.slice(0,3).map(s => `<span class="eval-tag amber">${s}</span>`).join('')}</div></div>`;
  }
  html += '</div>';
  el.innerHTML = html;
}

/* ── Broadcast Notifications ─────────────── */
const broadcastSendBtn = document.getElementById('broadcastSendBtn');
const broadcastBanner = document.getElementById('broadcastBanner');
const broadcastBannerClose = document.getElementById('broadcastBannerClose');

if (broadcastBannerClose) {
  broadcastBannerClose.addEventListener('click', () => {
    if (broadcastBanner) broadcastBanner.style.display = 'none';
  });
}

let broadcastUnsubscribe = null;
let broadcastHideTimer = null;

function showBroadcastBanner(message) {
  const bannerEl = document.getElementById('broadcastBanner');
  const textEl = document.getElementById('broadcastBannerText');
  if (!bannerEl || !textEl) return;
  textEl.textContent = message;
  bannerEl.classList.remove('hiding');
  bannerEl.style.display = 'flex';
  if (broadcastHideTimer) clearTimeout(broadcastHideTimer);
  broadcastHideTimer = setTimeout(() => {
    bannerEl.classList.add('hiding');
    setTimeout(() => {
      bannerEl.style.display = 'none';
      bannerEl.classList.remove('hiding');
    }, 500);
  }, 15000);
}

function checkBroadcasts() {
  if (!firebaseReady || !db) return;
  if (broadcastUnsubscribe) broadcastUnsubscribe();

  broadcastUnsubscribe = db.collection('broadcasts')
    .orderBy('sentAt', 'desc')
    .limit(5)
    .onSnapshot(snap => {
      const lastSeen = localStorage.getItem('lastSeenBroadcast') || '1970-01-01T00:00:00.000Z';
      const newest = snap.docs.find(doc => doc.data().sentAt > lastSeen);
      if (!newest) return;
      const msg = newest.data();
      localStorage.setItem('lastSeenBroadcast', msg.sentAt);
      showBroadcastBanner(msg.message);
    }, e => { console.warn('broadcasts listener error:', e); });
}

if (broadcastSendBtn) {
  broadcastSendBtn.addEventListener('click', async () => {
    if (!isAdmin() || !firebaseReady || !db) return;
    const msg = document.getElementById('broadcastMsg')?.value.trim();
    const statusEl = document.getElementById('broadcastStatus');
    if (!msg) { if (statusEl) { statusEl.textContent = 'Nhập nội dung thông báo.'; statusEl.style.color = '#ef4444'; } return; }
    broadcastSendBtn.disabled = true;
    if (statusEl) statusEl.textContent = 'Đang gửi...';
    try {
      await db.collection('broadcasts').add({ message: msg, sentAt: new Date().toISOString(), sentBy: ADMIN_EMAIL });
      document.getElementById('broadcastMsg').value = '';
      if (statusEl) { statusEl.textContent = '✅ Đã gửi! Người dùng sẽ thấy khi mở app.'; statusEl.style.color = '#22c55e'; }
    } catch {
      if (statusEl) { statusEl.textContent = '❌ Gửi thất bại. Kiểm tra Firestore rules.'; statusEl.style.color = '#ef4444'; }
    } finally { broadcastSendBtn.disabled = false; }
  });
}

/* ── Admin Panel ─────────────────────────── */
const ADMIN_EMAIL = 'tinkmaymo@gmail.com';
const isAdmin = () => currentUser && currentUser.email === ADMIN_EMAIL;
function getDisplayName(user) {
  if (!user) return 'Khách';
  if (user.email === ADMIN_EMAIL) return 'Admin';
  return user.displayName || user.email.split('@')[0];
}

let ejsPublicKey = localStorage.getItem('ejsPublicKey') || '';
let ejsServiceId = localStorage.getItem('ejsServiceId') || '';
let ejsTemplateId = localStorage.getItem('ejsTemplateId') || '';

function initEmailJS() {
  if (ejsPublicKey && window.emailjs) {
    window.emailjs.init({ publicKey: ejsPublicKey });
  }
}

function updateAdminNav() {
  const navItem = document.getElementById('adminNavItem');
  if (navItem) navItem.style.display = isAdmin() ? 'flex' : 'none';
  const topbarAvatar = document.getElementById('topbarAvatar');
  if (topbarAvatar) {
    topbarAvatar.classList.toggle('is-admin', isAdmin());
  }
}

async function loadAdminMessages() {
  if (!isAdmin() || !firebaseReady || !db) return;
  const listEl = document.getElementById('adminMsgList');
  const countEl = document.getElementById('adminMsgCount');
  if (!listEl) return;
  listEl.innerHTML = '<p class="admin-loading">Đang tải...</p>';
  try {
    const snap = await db.collection('adminMessages').orderBy('sentAt', 'desc').limit(50).get();
    if (countEl) countEl.textContent = snap.size;
    if (snap.empty) {
      listEl.innerHTML = '<p class="admin-empty">Chưa có tin nhắn nào.</p>';
      return;
    }
    listEl.innerHTML = snap.docs.map(doc => {
      const d = doc.data();
      const date = d.sentAt ? new Date(d.sentAt).toLocaleString('vi-VN') : '';
      return `<div class="admin-msg-item">
        <div class="admin-msg-meta">
          <span class="admin-msg-name">${d.name || '(Ẩn danh)'}</span>
          <span class="admin-msg-email">${d.email || ''}</span>
          <span class="admin-msg-time">${date}</span>
        </div>
        <p class="admin-msg-body">${d.message || ''}</p>
      </div>`;
    }).join('');
  } catch (e) {
    listEl.innerHTML = '<p class="admin-empty" style="color:#ef4444">Lỗi tải tin nhắn. Kiểm tra Firestore rules.</p>';
  }
}

async function loadAdminUsers() {
  if (!isAdmin() || !firebaseReady || !db) return;
  const listEl = document.getElementById('adminUserList');
  const countEl = document.getElementById('adminUserCount');
  const totalWordsEl = document.getElementById('adminTotalWords');
  if (!listEl) return;
  listEl.innerHTML = '<p class="admin-loading">Đang tải...</p>';
  try {
    const snap = await db.collection('userProgress').get();
    if (countEl) countEl.textContent = snap.size;
    if (snap.empty) { listEl.innerHTML = '<p class="admin-empty">Chưa có học viên nào.</p>'; return; }

    let totalWords = 0;
    const rows = snap.docs.map(doc => {
      const d = doc.data();
      const inner = d.data || {};
      const stats   = inner.frenchCoachStats || {};
      const learned = Array.isArray(inner.frenchCoachLearnedWords) ? inner.frenchCoachLearnedWords.length : 0;
      const history = Array.isArray(inner.frenchCoachHistory) ? inner.frenchCoachHistory : [];
      const daily   = Array.isArray(inner.frenchCoachDailyStats) ? inner.frenchCoachDailyStats : [];
      const streak  = stats.currentStreak || 0;
      const quizDone = history.filter(h => h.type === 'quiz').length;
      const pracDone = history.filter(h => h.type === 'practice').length;
      const lastActive = daily.length ? daily[daily.length-1].date || '' : (d.updatedAt ? new Date(d.updatedAt).toLocaleDateString('vi-VN') : '—');
      const email = d.email || stats.email || doc.id.substring(0,8)+'…';
      const name  = d.displayName || stats.displayName || email;
      totalWords += learned;

      // Recent practice results (last 5)
      const recentHistory = history.slice(-5).reverse();
      const histHTML = recentHistory.length === 0 ? '<span class="aul-none">Chưa có</span>' :
        recentHistory.map(h => `<span class="aul-tag">${h.type==='quiz'?'🧠':'🎯'} ${h.score ?? ''}</span>`).join('');

      return `<div class="admin-user-row">
        <div class="admin-user-info">
          <span class="admin-user-avatar">${(name||'?').charAt(0).toUpperCase()}</span>
          <div>
            <div class="admin-user-name">${name}</div>
            <div class="admin-user-email">${doc.id}</div>
          </div>
        </div>
        <div class="admin-user-stats">
          <div class="admin-user-stat"><span>📚 Từ đã học</span><strong>${learned}</strong></div>
          <div class="admin-user-stat"><span>🔥 Streak</span><strong>${streak} ngày</strong></div>
          <div class="admin-user-stat"><span>🧠 Quiz</span><strong>${quizDone}</strong></div>
          <div class="admin-user-stat"><span>🎯 Luyện tập</span><strong>${pracDone}</strong></div>
          <div class="admin-user-stat"><span>📅 Hoạt động</span><strong>${lastActive}</strong></div>
        </div>
        <div class="admin-user-history"><span class="aul-label">Gần đây:</span>${histHTML}</div>
      </div>`;
    });
    if (totalWordsEl) totalWordsEl.textContent = totalWords;
    listEl.innerHTML = rows.join('');
  } catch(e) {
    listEl.innerHTML = `<p class="admin-empty" style="color:#ef4444">Lỗi: ${e.message}<br>Kiểm tra Firestore rules.</p>`;
  }
}

const adminRefreshBtn = document.getElementById('adminRefreshBtn');
if (adminRefreshBtn) adminRefreshBtn.addEventListener('click', () => { loadAdminMessages(); loadAdminUsers(); });

const adminUsersRefreshBtn = document.getElementById('adminUsersRefreshBtn');
if (adminUsersRefreshBtn) adminUsersRefreshBtn.addEventListener('click', loadAdminUsers);

const ejsSaveBtn = document.getElementById('ejsSaveBtn');
if (ejsSaveBtn) {
  const ejsPublicKeyEl = document.getElementById('ejsPublicKey');
  const ejsServiceIdEl = document.getElementById('ejsServiceId');
  const ejsTemplateIdEl = document.getElementById('ejsTemplateId');
  const ejsStatusEl = document.getElementById('ejsStatus');
  if (ejsPublicKeyEl && ejsPublicKey) ejsPublicKeyEl.value = ejsPublicKey;
  if (ejsServiceIdEl && ejsServiceId) ejsServiceIdEl.value = ejsServiceId;
  if (ejsTemplateIdEl && ejsTemplateId) ejsTemplateIdEl.value = ejsTemplateId;
  ejsSaveBtn.addEventListener('click', () => {
    ejsPublicKey = ejsPublicKeyEl?.value.trim() || '';
    ejsServiceId = ejsServiceIdEl?.value.trim() || '';
    ejsTemplateId = ejsTemplateIdEl?.value.trim() || '';
    if (!ejsPublicKey || !ejsServiceId || !ejsTemplateId) {
      if (ejsStatusEl) { ejsStatusEl.textContent = '⚠️ Vui lòng điền đủ 3 trường.'; ejsStatusEl.style.color = '#ef4444'; }
      return;
    }
    localStorage.setItem('ejsPublicKey', ejsPublicKey);
    localStorage.setItem('ejsServiceId', ejsServiceId);
    localStorage.setItem('ejsTemplateId', ejsTemplateId);
    initEmailJS();
    if (ejsStatusEl) { ejsStatusEl.textContent = '✅ Đã lưu cấu hình EmailJS!'; ejsStatusEl.style.color = '#22c55e'; }
  });
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.menu-item[data-section="admin"]');
  if (btn && isAdmin()) { loadAdminMessages(); loadAdminUsers(); }
});

/* ── Contact Admin Modal ─────────────────── */
const floatingChatBtn = document.getElementById('floatingChatBtn');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');
const contactSendBtn = document.getElementById('contactSendBtn');

function openContactModal() {
  if (!contactModal) return;
  contactModal.style.display = 'flex';
  const user = currentUser;
  if (user) {
    const emailEl = document.getElementById('contactEmail');
    if (emailEl && !emailEl.value) emailEl.value = user.email || '';
  }
  document.getElementById('contactMessage')?.focus();
}
function closeContactModalFn() {
  if (contactModal) contactModal.style.display = 'none';
}
function setContactStatus(msg, isError = false) {
  const el = document.getElementById('contactStatus');
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? '#ef4444' : '#22c55e';
}

if (floatingChatBtn) floatingChatBtn.addEventListener('click', openContactModal);
if (closeContactModal) closeContactModal.addEventListener('click', closeContactModalFn);
if (contactModal) contactModal.addEventListener('click', e => { if (e.target === contactModal) closeContactModalFn(); });

if (contactSendBtn) {
  contactSendBtn.addEventListener('click', async () => {
    const name = document.getElementById('contactName')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const message = document.getElementById('contactMessage')?.value.trim() || '';
    if (!message) { setContactStatus('Vui lòng nhập nội dung tin nhắn.', true); return; }

    contactSendBtn.disabled = true;
    setContactStatus('Đang gửi...');

    const payload = {
      name: name || '(Ẩn danh)',
      email: email || '(Không cung cấp)',
      message,
      uid: currentUser ? currentUser.uid : null,
      sentAt: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    try {
      if (firebaseReady && db) {
        await db.collection('adminMessages').add(payload);
        if (ejsPublicKey && ejsServiceId && ejsTemplateId && window.emailjs) {
          window.emailjs.send(ejsServiceId, ejsTemplateId, {
            from_name: payload.name,
            from_email: payload.email,
            message: payload.message,
            sent_at: payload.sentAt
          }).catch(() => {});
        }
        setContactStatus('✅ Đã gửi tin nhắn! Admin sẽ phản hồi sớm nhất có thể.');
        document.getElementById('contactMessage').value = '';
        setTimeout(closeContactModalFn, 2500);
      } else {
        setContactStatus('Firebase chưa sẵn sàng. Vui lòng thử lại sau.', true);
      }
    } catch (e) {
      setContactStatus('Gửi thất bại. Kiểm tra kết nối mạng.', true);
    } finally {
      contactSendBtn.disabled = false;
    }
  });
}

/* ── Login Modal ─────────────────────────── */
const loginModal = document.getElementById('loginModal');
const topbarLoginBtn = document.getElementById('topbarLoginBtn');
const closeLoginModal = document.getElementById('closeLoginModal');
const topbarUserMenu = document.getElementById('topbarUserMenu');
const topbarAvatar = document.getElementById('topbarAvatar');
const topbarDropdown = document.getElementById('topbarDropdown');
const topbarUserEmail = document.getElementById('topbarUserEmail');
const topbarLogout = document.getElementById('topbarLogout');

function openLoginModal() {
  if (loginModal) { loginModal.style.display = 'flex'; document.getElementById('modalEmail')?.focus(); }
}
function closeLoginModalFn() {
  if (loginModal) loginModal.style.display = 'none';
}

function updateTopbarUser(user) {
  if (!topbarLoginBtn || !topbarUserMenu) return;
  if (user) {
    topbarLoginBtn.style.display = 'none';
    topbarUserMenu.style.display = 'flex';
    if (topbarUserEmail) topbarUserEmail.textContent = getDisplayName(user);
    if (topbarAvatar) {
      const initials = getDisplayName(user).charAt(0).toUpperCase();
      if (user.photoURL) {
        topbarAvatar.innerHTML = `<img src="${user.photoURL}" alt="${initials}" />`;
        topbarAvatar.classList.add('has-photo');
      } else {
        topbarAvatar.textContent = initials;
        topbarAvatar.classList.remove('has-photo');
      }
    }
    closeLoginModalFn();
  } else {
    topbarLoginBtn.style.display = 'flex';
    topbarUserMenu.style.display = 'none';
  }
  updateAdminNav();
}

function setModalStatus(msg, isError = false) {
  const el = document.getElementById('modalAuthStatus');
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? '#ef4444' : '#22c55e';
}

if (topbarLoginBtn) topbarLoginBtn.addEventListener('click', openLoginModal);
if (closeLoginModal) closeLoginModal.addEventListener('click', closeLoginModalFn);
if (loginModal) loginModal.addEventListener('click', e => { if (e.target === loginModal) closeLoginModalFn(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && loginModal?.style.display !== 'none') closeLoginModalFn(); });

if (topbarAvatar) {
  topbarAvatar.addEventListener('click', e => {
    e.stopPropagation();
    if (topbarDropdown) topbarDropdown.style.display = topbarDropdown.style.display === 'none' ? 'block' : 'none';
  });
}
document.addEventListener('click', () => { if (topbarDropdown) topbarDropdown.style.display = 'none'; });
if (topbarLogout) topbarLogout.addEventListener('click', () => { logoutAccount(); });

const modalTogglePw = document.getElementById('modalTogglePw');
const modalPassword = document.getElementById('modalPassword');
if (modalTogglePw && modalPassword) {
  modalTogglePw.addEventListener('click', () => {
    const show = modalPassword.type === 'password';
    modalPassword.type = show ? 'text' : 'password';
    modalTogglePw.textContent = show ? 'Ẩn' : 'Hiện';
  });
}

async function modalLoginEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  const email = document.getElementById('modalEmail')?.value.trim();
  const password = document.getElementById('modalPassword')?.value;
  if (!email || !isValidEmail(email)) { setModalStatus('Email không đúng định dạng.', true); return; }
  if (!password) { setModalStatus('Vui lòng nhập mật khẩu.', true); return; }
  setAuthLoading(true);
  try {
    await auth.signInWithEmailAndPassword(email, password);
    setModalStatus('Đăng nhập thành công!');
    if (authEmail) authEmail.value = email;
  } catch (e) {
    setModalStatus(getAuthErrorMessage(e), true);
  } finally {
    setAuthLoading(false);
  }
}

let _registerMode = false;

function setRegisterMode(on) {
  _registerMode = on;
  const nameField = document.getElementById('modalNameField');
  const title = document.querySelector('#loginModal .modal-title');
  const loginBtn = document.getElementById('modalLoginBtn');
  const registerBtn = document.getElementById('modalRegisterBtn');
  if (nameField) nameField.style.display = on ? 'flex' : 'none';
  if (title) title.textContent = on ? 'Tạo tài khoản' : 'Đăng nhập';
  if (loginBtn) loginBtn.textContent = on ? '← Đã có tài khoản' : '→ Đăng nhập';
  if (registerBtn) registerBtn.textContent = on ? '✓ Đăng ký ngay' : 'Tạo tài khoản mới';
  if (on) document.getElementById('modalDisplayName')?.focus();
  else document.getElementById('modalEmail')?.focus();
  setModalStatus('');
}

async function modalRegisterEmail() {
  if (!firebaseReady || !auth || authLoading) return;
  if (!_registerMode) { setRegisterMode(true); return; }
  const displayName = document.getElementById('modalDisplayName')?.value.trim();
  const email = document.getElementById('modalEmail')?.value.trim();
  const password = document.getElementById('modalPassword')?.value;
  if (!displayName) { setModalStatus('Vui lòng nhập tên hiển thị.', true); document.getElementById('modalDisplayName')?.focus(); return; }
  if (!email || !isValidEmail(email)) { setModalStatus('Email không đúng định dạng.', true); return; }
  if (!password || password.length < 6) { setModalStatus('Mật khẩu cần ít nhất 6 ký tự.', true); return; }
  setAuthLoading(true);
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName });
    setModalStatus(`Chào mừng, ${displayName}! Tài khoản đã tạo.`);
    showToast(`Chào ${displayName}!`);
    setRegisterMode(false);
  } catch (e) {
    setModalStatus(mapAuthError(e), true);
  } finally {
    setAuthLoading(false);
  }
}

async function modalForgotPassword() {
  if (!firebaseReady || !auth) return;
  const email = document.getElementById('modalEmail')?.value.trim();
  if (!email || !isValidEmail(email)) { setModalStatus('Nhập email để nhận link đặt lại mật khẩu.', true); return; }
  try {
    await auth.sendPasswordResetEmail(email);
    setModalStatus('Đã gửi email đặt lại mật khẩu!');
  } catch (e) {
    setModalStatus(getAuthErrorMessage(e), true);
  }
}

const modalLoginBtn = document.getElementById('modalLoginBtn');
const modalRegisterBtn = document.getElementById('modalRegisterBtn');
const modalForgotBtn = document.getElementById('modalForgotBtn');

if (modalLoginBtn) modalLoginBtn.addEventListener('click', () => {
  if (_registerMode) { setRegisterMode(false); } else { modalLoginEmail(); }
});
if (modalRegisterBtn) modalRegisterBtn.addEventListener('click', modalRegisterEmail);
if (modalForgotBtn) modalForgotBtn.addEventListener('click', modalForgotPassword);

document.getElementById('modalEmail')?.addEventListener('keydown', e => { if (e.key === 'Enter') modalLoginEmail(); });
document.getElementById('modalPassword')?.addEventListener('keydown', e => { if (e.key === 'Enter') modalLoginEmail(); });

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
      frenchCoachLearnedWords: readStorage('frenchCoachLearnedWords', []),
      frenchCoachTheme: localStorage.getItem('frenchCoachTheme') || 'light',
      frenchCoachGroqKey: localStorage.getItem('frenchCoachGroqKey') || '',
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
  if (Array.isArray(data.frenchCoachLearnedWords)) {
    localStorage.setItem('frenchCoachLearnedWords', JSON.stringify(data.frenchCoachLearnedWords));
  }
  if (typeof data.frenchCoachTheme === 'string') {
    localStorage.setItem('frenchCoachTheme', data.frenchCoachTheme);
  }
  if (typeof data.frenchCoachGroqKey === 'string' && data.frenchCoachGroqKey) {
    localStorage.setItem('frenchCoachGroqKey', data.frenchCoachGroqKey);
    groqApiKey = data.frenchCoachGroqKey;
    if (groqApiKeyInput) groqApiKeyInput.value = data.frenchCoachGroqKey;
    updateAiUI();
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
  syncThemeToggleUI();
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
  const reverseEl = document.getElementById('quizReverseMode');
  const reverse = reverseEl ? reverseEl.checked : false;
  let pool = vocabularies.filter(v => {
    const matchLevel = quizFilterLevel === 'all' || v.level === quizFilterLevel;
    const matchTopic = quizFilterTopic === 'all' || v.topic === quizFilterTopic;
    return matchLevel && matchTopic;
  });
  if (pool.length < 4) pool = vocabularies;
  const picked = shuffleArray(pool).slice(0, count);
  return picked.map(item => {
    if (reverse) {
      const distractors = shuffleArray(
        vocabularies.filter(v => v.word !== item.word)
      ).slice(0, 3).map(v => v.word);
      const choices = shuffleArray([item.word, ...distractors]);
      return {
        word: item.word,
        question: `"${item.meaning}" — Từ tiếng Pháp là gì?`,
        meta: `${item.level} · ${item.topic}`,
        choices,
        answer: item.word
      };
    }
    const distractors = shuffleArray(
      vocabularies.filter(v => v.word !== item.word && v.meaning !== item.meaning)
    ).slice(0, 3).map(v => v.meaning);
    const choices = shuffleArray([item.meaning, ...distractors]);
    return {
      word: item.word,
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
  if (correct) {
    quizState.score += 1;
    if (currentQuestion.word) {
      learnedWordIds.add(currentQuestion.word);
      saveLearnedWords();
    }
  }
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

const prevFlashcardBtn = document.getElementById('prevFlashcard');
const nextFlashcardBtn = document.getElementById('nextFlashcard');
const markLearnedBtn = document.getElementById('markLearnedBtn');

function advanceFlashcard(markLearned) {
  const item = vocabularies[activeFlashcard];
  if (markLearned && item) {
    const wasNew = !learnedWordIds.has(item.word);
    learnedWordIds.add(item.word);
    saveLearnedWords();
    updateStats();
    if (wasNew) showToast(`✓ Đã học: ${item.word}`);
  }
  activeFlashcard = (activeFlashcard + 1) % vocabularies.length;
  document.getElementById('flashcardInner')?.classList.remove('flipped');
  renderFlashcard();
  syncLearnedButtonState();
}

function syncLearnedButtonState() {
  if (!markLearnedBtn) return;
  const item = vocabularies[activeFlashcard];
  const done = item && learnedWordIds.has(item.word);
  markLearnedBtn.textContent = done ? '✓ Đã học' : '+ Đánh dấu đã học';
  markLearnedBtn.classList.toggle('fc-learned-done', done);
}

if (prevFlashcardBtn) prevFlashcardBtn.addEventListener('click', () => {
  activeFlashcard = (activeFlashcard - 1 + vocabularies.length) % vocabularies.length;
  document.getElementById('flashcardInner')?.classList.remove('flipped');
  renderFlashcard();
});
if (nextFlashcardBtn) nextFlashcardBtn.addEventListener('click', () => advanceFlashcard(true));
if (markLearnedBtn) markLearnedBtn.addEventListener('click', () => {
  const item = vocabularies[activeFlashcard];
  if (!item) return;
  if (!learnedWordIds.has(item.word)) {
    learnedWordIds.add(item.word);
    saveLearnedWords();
    updateStats();
    showToast(`✓ Đã học: ${item.word}`);
  }
  syncLearnedButtonState();
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
  const filteredDialogue = dialogueTasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || t.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || t.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
  if (filteredDialogue.length) {
    activeDialogue = (activeDialogue + 1) % filteredDialogue.length;
    recordDailyStat('dialogueCount');
  }
  renderDialogue();
});

document.getElementById('checkSentence')?.addEventListener('click', checkSentenceAnswer);

document.getElementById('clearSentence')?.addEventListener('click', () => {
  sentenceBankWords.forEach(w => { w.used = false; });
  sentenceAnswerWords = [];
  document.getElementById('sentenceFeedback').textContent = '';
  renderWordChips();
});

document.getElementById('nextSentence')?.addEventListener('click', () => {
  activeSentence = (activeSentence + 1) % Math.max(1, getFilteredSentenceTasks().length);
  renderSentenceBuilder();
});

document.getElementById('wordBankArea')?.addEventListener('click', event => {
  const btn = event.target.closest('.bank-chip');
  if (!btn) return;
  const id = parseInt(btn.dataset.chipId);
  const chip = sentenceBankWords.find(w => w.id === id);
  if (!chip || chip.used) return;
  chip.used = true;
  sentenceAnswerWords.push(chip);
  renderWordChips();
});

document.getElementById('sentenceAnswerArea')?.addEventListener('click', event => {
  const btn = event.target.closest('.answer-chip');
  if (!btn) return;
  const id = parseInt(btn.dataset.chipId);
  sentenceAnswerWords = sentenceAnswerWords.filter(w => w.id !== id);
  const chip = sentenceBankWords.find(w => w.id === id);
  if (chip) chip.used = false;
  renderWordChips();
});

document.getElementById('matchGrid')?.addEventListener('click', event => {
  const btn = event.target.closest('.match-chip');
  if (!btn) return;
  handleMatchClick(parseInt(btn.dataset.matchId), btn.dataset.matchSide);
});

document.getElementById('newMatchGame')?.addEventListener('click', renderMatchGame);

document.querySelectorAll('.word-mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.word-mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    wordMode = btn.dataset.wordMode;
    document.getElementById('sentenceBuilderPanel').style.display = wordMode === 'sentence' ? 'block' : 'none';
    document.getElementById('matchGamePanel').style.display = wordMode === 'match' ? 'block' : 'none';
    renderWordGame();
  });
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
  quizSoundToggleBtn.classList.toggle('toggle-on', quizSoundEnabled);
  quizSoundToggleBtn.setAttribute('aria-checked', quizSoundEnabled);
  quizSoundToggleBtn.addEventListener('click', () => {
    quizSoundEnabled = !quizSoundEnabled;
    localStorage.setItem('frenchCoachQuizSound', quizSoundEnabled ? 'on' : 'off');
    quizSoundToggleBtn.classList.toggle('toggle-on', quizSoundEnabled);
    quizSoundToggleBtn.setAttribute('aria-checked', quizSoundEnabled);
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

if (syncNowBtn) {
  syncNowBtn.addEventListener('click', () => syncToCloudNow({ manual: true }));
}



const playListeningSentenceBtn = document.getElementById('playListeningSentence');
const nextListeningBtn = document.getElementById('nextListening');

if (playListeningSentenceBtn) {
  playListeningSentenceBtn.addEventListener('click', () => {
    const tasks = getFilteredListeningTasks();
    if (tasks.length) speak(tasks[activeListening % tasks.length].sentence);
  });
}

if (nextListeningBtn) {
  nextListeningBtn.addEventListener('click', () => {
    const tasks = getFilteredListeningTasks();
    if (tasks.length) activeListening = (activeListening + 1) % tasks.length;
    renderListening();
  });
}

speakDialogueLine.addEventListener('click', () => {
  const filtered = dialogueTasks.filter(t => {
    const matchLevel = practiceFilterLevel === 'all' || t.level === practiceFilterLevel;
    const matchTopic = practiceFilterTopic === 'all' || t.topic === practiceFilterTopic;
    return matchLevel && matchTopic;
  });
  const tasks = filtered.length ? filtered : dialogueTasks;
  const task = tasks[activeDialogue % tasks.length];
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

function syncThemeToggleUI() {
  const isDark = document.documentElement.classList.contains('dark');
  [themeToggle, themeToggleBottom].forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('toggle-on', isDark);
    btn.setAttribute('aria-checked', isDark);
    if (btn === themeToggle) btn.textContent = isDark ? '🌙' : '☀️';
  });
}

themeToggle.addEventListener('click', () => { setTheme(!document.documentElement.classList.contains('dark')); syncThemeToggleUI(); });
themeToggleBottom.addEventListener('click', () => { setTheme(!document.documentElement.classList.contains('dark')); syncThemeToggleUI(); });

const accentColorPicker = document.getElementById('accentColorPicker');
if (accentColorPicker) {
  const savedColor = localStorage.getItem('frenchCoachAccent');
  if (savedColor) {
    document.documentElement.style.setProperty('--brand', savedColor);
    document.documentElement.style.setProperty('--accent', savedColor);
    accentColorPicker.querySelectorAll('.color-dot').forEach(d => {
      d.classList.toggle('color-dot-active', d.dataset.color === savedColor);
    });
  }
  accentColorPicker.addEventListener('click', e => {
    const dot = e.target.closest('.color-dot');
    if (!dot) return;
    const color = dot.dataset.color;
    document.documentElement.style.setProperty('--brand', color);
    document.documentElement.style.setProperty('--accent', color);
    localStorage.setItem('frenchCoachAccent', color);
    accentColorPicker.querySelectorAll('.color-dot').forEach(d => d.classList.toggle('color-dot-active', d === dot));
  });
}

if (practiceLevelRow) {
  practiceLevelRow.addEventListener('click', event => {
    if (!event.target.matches('[data-practice-level]')) return;
    practiceFilterLevel = event.target.dataset.practiceLevel;
    practiceLevelRow.querySelectorAll('[data-practice-level]').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.practiceLevel === practiceFilterLevel)
    );
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0; activeListening = 0; activeSentence = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue(); renderListening(); renderWordGame();
  });
}

if (practiceLevelFilter) {
  practiceLevelFilter.addEventListener('change', () => {
    practiceFilterLevel = practiceLevelFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0; activeListening = 0; activeSentence = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue(); renderListening(); renderWordGame();
  });
}

if (practiceTopicFilter) {
  practiceTopicFilter.addEventListener('change', () => {
    practiceFilterTopic = practiceTopicFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0; activeListening = 0; activeSentence = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue(); renderListening(); renderWordGame();
  });
}

if (practiceOrderFilter) {
  practiceOrderFilter.addEventListener('change', () => {
    practiceFilterOrder = practiceOrderFilter.value;
    activePractice = 0; activeSpeaking = 0; activePronunciation = 0; activeDialogue = 0; activeListening = 0; activeSentence = 0;
    renderPractice(); renderSpeaking(); renderPronunciation(); renderDialogue(); renderListening(); renderWordGame();
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

/* ── Groq AI Tutor ───────────────────────── */
let groqApiKey = localStorage.getItem('frenchCoachGroqKey') || '';

function updateAiUI() {
  const noKey = document.getElementById('aiNoKey');
  const wrap = document.getElementById('aiChatWrap');
  if (!noKey || !wrap) return;
  const hasKey = !!groqApiKey;
  noKey.style.display = hasKey ? 'none' : 'block';
  wrap.style.display = hasKey ? 'flex' : 'none';
}

function appendAiMessage(role, text) {
  const msgs = document.getElementById('aiMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = `ai-msg ai-msg-${role}`;
  div.innerHTML = `<div class="ai-bubble">${text.replace(/\n/g, '<br>')}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendAiTyping() {
  const msgs = document.getElementById('aiMessages');
  if (!msgs) return null;
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg-assistant';
  div.id = 'aiTyping';
  div.innerHTML = '<div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

const aiConversation = [
  { role: 'system', content: 'Bạn là gia sư tiếng Pháp thân thiện, chuyên giảng dạy cho người Việt. Trả lời ngắn gọn, rõ ràng bằng tiếng Việt. Khi đưa ra ví dụ tiếng Pháp, hãy kèm phiên dịch tiếng Việt. Sử dụng markdown đơn giản khi cần.' }
];

async function sendAiMessage(userText) {
  if (!groqApiKey || !userText.trim()) return;
  const input = document.getElementById('aiInput');
  const sendBtn = document.getElementById('aiSend');
  if (input) input.value = '';
  if (sendBtn) sendBtn.disabled = true;

  appendAiMessage('user', userText);
  aiConversation.push({ role: 'user', content: userText });

  const typingEl = appendAiTyping();

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqApiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: aiConversation,
        max_tokens: 800,
        temperature: 0.7
      })
    });

    if (typingEl) typingEl.remove();

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err?.error?.message || `Lỗi ${res.status}`;
      appendAiMessage('assistant', `⚠️ ${msg}`);
      if (res.status === 401) {
        showToast('API Key không hợp lệ. Kiểm tra lại trong Cài đặt.', 'error');
      }
      return;
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || '(Không có phản hồi)';
    aiConversation.push({ role: 'assistant', content: reply });
    appendAiMessage('assistant', reply);
  } catch (e) {
    if (typingEl) typingEl.remove();
    appendAiMessage('assistant', '⚠️ Không kết nối được. Kiểm tra mạng và thử lại.');
  } finally {
    if (sendBtn) sendBtn.disabled = false;
    if (input) input.focus();
  }
}

const groqApiKeyInput = document.getElementById('groqApiKeyInput');
const groqKeySave = document.getElementById('groqKeySave');
const groqKeyToggle = document.getElementById('groqKeyToggle');
const groqKeyStatus = document.getElementById('groqKeyStatus');

if (groqApiKeyInput && groqApiKey) groqApiKeyInput.value = groqApiKey;
if (groqKeyStatus && groqApiKey) groqKeyStatus.textContent = '✅ Đã lưu API key.';

if (groqKeyToggle && groqApiKeyInput) {
  groqKeyToggle.addEventListener('click', () => {
    const isPassword = groqApiKeyInput.type === 'password';
    groqApiKeyInput.type = isPassword ? 'text' : 'password';
    groqKeyToggle.textContent = isPassword ? '🙈' : '👁';
  });
}

if (groqKeySave) {
  groqKeySave.addEventListener('click', () => {
    const val = groqApiKeyInput?.value.trim() || '';
    if (!val) {
      if (groqKeyStatus) groqKeyStatus.textContent = '⚠️ Vui lòng nhập API key.';
      return;
    }
    groqApiKey = val;
    localStorage.setItem('frenchCoachGroqKey', val);
    if (groqKeyStatus) groqKeyStatus.textContent = '✅ Đã lưu API key thành công!';
    updateAiUI();
    showToast('Đã lưu Groq API key!');
  });
}

const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');

if (aiSend) {
  aiSend.addEventListener('click', () => {
    const q = aiInput?.value.trim();
    if (q) sendAiMessage(q);
  });
}
if (aiInput) {
  aiInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); const q = aiInput.value.trim(); if (q) sendAiMessage(q); }
  });
}

document.addEventListener('click', e => {
  const chip = e.target.closest('.ai-chip');
  if (chip) sendAiMessage(chip.dataset.q);
  const linkBtn = e.target.closest('.link-btn[data-section]');
  if (linkBtn) updateSection(linkBtn.dataset.section);
});

/* ── French Phonetics Dictionary ─────────── */
function frenchToIPA(raw) {
  let w = raw.toLowerCase().trim();
  const rules = [
    [/eau/g,'o'],[/au/g,'o'],[/ou/g,'u'],[/oi/g,'wa'],
    [/ai/g,'ɛ'],[/ei/g,'ɛ'],[/ay/g,'ɛj'],
    [/œu/g,'ø'],[/eu/g,'ø'],
    [/ain/g,'ɛ̃'],[/ein/g,'ɛ̃'],[/in/g,'ɛ̃'],[/im/g,'ɛ̃'],[/yn/g,'ɛ̃'],
    [/an/g,'ɑ̃'],[/am/g,'ɑ̃'],[/en/g,'ɑ̃'],[/em/g,'ɑ̃'],
    [/on/g,'ɔ̃'],[/om/g,'ɔ̃'],
    [/un/g,'œ̃'],[/um/g,'œ̃'],
    [/ill/g,'ij'],[/il/g,'il'],
    [/ch/g,'ʃ'],[/ph/g,'f'],[/gn/g,'ɲ'],
    [/qu/g,'k'],[/gu/g,'g'],
    [/é/g,'e'],[/è/g,'ɛ'],[/ê/g,'ɛ'],[/ë/g,'ɛ'],
    [/â/g,'ɑ'],[/à/g,'a'],[/î/g,'i'],[/ï/g,'i'],
    [/ô/g,'o'],[/û/g,'y'],[/ù/g,'y'],[/ü/g,'y'],
    [/ç/g,'s'],[/j/g,'ʒ'],[/y/g,'j'],[/h/g,''],
    [/r/g,'ʁ'],[/x/g,'ks'],
    [/e\b/g,''],
  ];
  rules.forEach(([re, rep]) => { w = w.replace(re, rep); });
  return '/' + w + '/';
}

function getFrenchPhoneticHints(word) {
  const w = word.toLowerCase();
  const hints = [];
  if (/eau|au/.test(w)) hints.push({ pattern: 'eau/au', sound: '[o] như "o"' });
  if (/ou/.test(w)) hints.push({ pattern: 'ou', sound: '[u] như "oo"' });
  if (/oi/.test(w)) hints.push({ pattern: 'oi', sound: '[wa] như "oa"' });
  if (/ch/.test(w)) hints.push({ pattern: 'ch', sound: '[ʃ] như "sh"' });
  if (/gn/.test(w)) hints.push({ pattern: 'gn', sound: '[ɲ] như "nh"' });
  if (/[aeo]n|[aeo]m/.test(w)) hints.push({ pattern: 'an/en/on', sound: 'âm mũi' });
  if (/in|im|ain|ein/.test(w)) hints.push({ pattern: 'in/ain', sound: '[ɛ̃] âm mũi' });
  if (/[eé]$/.test(w)) hints.push({ pattern: 'âm cuối -e', sound: 'thường câm' });
  if (/[bcdfghjklmnpqrstvwxz]$/.test(w)) hints.push({ pattern: 'phụ âm cuối', sound: 'thường câm' });
  return hints;
}

function getSyllables(word) {
  const vowels = 'aeiouyàâäéèêëîïôùûüæœ';
  const w = word.toLowerCase();
  const sylls = [];
  let current = '';
  for (let i = 0; i < w.length; i++) {
    current += w[i];
    const isVowel = vowels.includes(w[i]);
    const nextIsConsonant = w[i+1] && !vowels.includes(w[i+1]);
    const nextNextIsVowel = w[i+2] && vowels.includes(w[i+2]);
    if (isVowel && nextIsConsonant && nextNextIsVowel && current.length > 1) {
      sylls.push(current); current = '';
    }
  }
  if (current) sylls.push(current);
  return sylls.length > 1 ? sylls.join('·') : word;
}

function renderPhonetics(query) {
  const resultsEl = document.getElementById('phonResults');
  const countEl = document.getElementById('phonResultCount');
  if (!resultsEl) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    resultsEl.innerHTML = '<div class="phon-empty">Nhập từ tiếng Pháp để tra cứu phát âm.</div>';
    if (countEl) countEl.textContent = '';
    return;
  }
  const matches = vocabularies.filter(v =>
    v.word.toLowerCase().includes(q) ||
    v.meaning.toLowerCase().includes(q)
  ).slice(0, 40);

  const exactWord = { word: query.trim(), meaning: '', example: '', level: '', topic: '' };
  const hasExact = matches.some(v => v.word.toLowerCase() === q);
  const items = hasExact ? matches : [exactWord, ...matches];

  if (countEl) countEl.textContent = matches.length > 0 ? `Tìm thấy ${matches.length} từ cho "${query}"` : `Không có trong từ điển — nhấn 🔊 để nghe phát âm`;

  resultsEl.innerHTML = items.map(item => {
    const ipa = frenchToIPA(item.word);
    const hints = getFrenchPhoneticHints(item.word);
    const sylls = getSyllables(item.word);
    return `
    <div class="phon-card">
      <div class="phon-card-left">
        <span class="phon-word">${item.word}</span>
        <span class="phon-syllables">${sylls}</span>
        <span class="phon-ipa">${ipa}</span>
        ${hints.map(h => `<span class="phon-hint"><strong>${h.pattern}</strong> → ${h.sound}</span>`).join('')}
      </div>
      <div class="phon-card-right">
        ${item.meaning ? `<p class="phon-meaning">${item.meaning}</p>` : ''}
        ${item.example ? `<small class="phon-example">${item.example}</small>` : ''}
        <div class="phon-tags">
          ${item.level ? `<span class="vocab-tag">${item.level}</span>` : ''}
          ${item.topic ? `<span class="vocab-tag">${item.topic}</span>` : ''}
        </div>
        <button class="phon-speak-btn" data-speak="${item.word.replace(/"/g,'&quot;')}">🔊 Nghe</button>
      </div>
    </div>`;
  }).join('');
}

const phonSearchEl = document.getElementById('phonSearch');
const phonClearEl = document.getElementById('phonClear');
if (phonSearchEl) {
  phonSearchEl.addEventListener('input', () => renderPhonetics(phonSearchEl.value));
  phonSearchEl.addEventListener('keydown', e => { if (e.key === 'Escape') { phonSearchEl.value = ''; renderPhonetics(''); } });
}
if (phonClearEl) {
  phonClearEl.addEventListener('click', () => { if (phonSearchEl) { phonSearchEl.value = ''; phonSearchEl.focus(); } renderPhonetics(''); });
}
document.addEventListener('click', e => {
  const btn = e.target.closest('.phon-speak-btn');
  if (btn) speak(btn.dataset.speak);
});

function init() {
  loadFavorites();
  loadHistory();
  loadLearnedWords();
  loadRoadmap();
  initEmailJS();
  updateAdminNav();
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
  renderWordOfDay();
  renderPhonetics('');
  updateAiUI();
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

let activeGameCleanup = null;

init();

/* ══════════════════════════════════════════
   🎮 GAMES MODULE
══════════════════════════════════════════ */

function showGameLobby() {
  document.getElementById('gameLobby').style.display = 'block';
  document.getElementById('gamePlayArea').style.display = 'none';
  if (activeGameCleanup) { activeGameCleanup(); activeGameCleanup = null; }
  renderGameLeaderboard();
}

function showGamePlay(title) {
  document.getElementById('gameLobby').style.display = 'none';
  document.getElementById('gamePlayArea').style.display = 'block';
  document.getElementById('gameTitle').textContent = title;
  document.getElementById('gameScore').textContent = '';
  document.getElementById('gameContainer').innerHTML = '';
}

const gameBackBtn = document.getElementById('gameBackBtn');
if (gameBackBtn) gameBackBtn.addEventListener('click', showGameLobby);
document.querySelector('.menu-item[data-section="games"]')?.addEventListener('click', () => setTimeout(renderGameLeaderboard, 50));

function randVocab(n) {
  const pool = vocabularies.filter(v => v.word && v.meaning);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

/* ── Leaderboard ──────────────────────────── */
function reattributeGuestScores(user) {
  if (!user) return;
  const all = JSON.parse(localStorage.getItem('frenchGameScores') || '[]');
  const name = getDisplayName(user);
  let changed = false;
  all.forEach(s => { if (s.name === 'Khách') { s.name = name; changed = true; } });
  if (changed) localStorage.setItem('frenchGameScores', JSON.stringify(all));
}

async function saveGameScore(game, score) {
  const name = getDisplayName(currentUser);
  const entry = {
    game, score, name,
    date: new Date().toLocaleDateString('vi-VN'),
    createdAt: new Date().toISOString(),
    uid: currentUser ? currentUser.uid : null
  };
  // Save locally
  const all = JSON.parse(localStorage.getItem('frenchGameScores') || '[]');
  all.push(entry);
  all.sort((a, b) => b.score - a.score);
  localStorage.setItem('frenchGameScores', JSON.stringify(all.slice(0, 100)));
  // Save to Firestore (global leaderboard)
  if (firebaseReady && db) {
    try { await db.collection('gameScores').add(entry); } catch(e) { console.warn('BXH cloud save failed', e); }
  }
}

async function getTopScoresCloud(game, n = 3) {
  if (firebaseReady && db) {
    try {
      const snap = await db.collection('gameScores')
        .where('game', '==', game)
        .orderBy('score', 'desc')
        .limit(n)
        .get();
      return snap.docs.map(d => d.data());
    } catch(e) { console.warn('BXH cloud fetch failed', e); }
  }
  // Fallback to localStorage
  const all = JSON.parse(localStorage.getItem('frenchGameScores') || '[]');
  return all.filter(s => s.game === game).slice(0, n);
}

const GAME_LIST = [
  { key:'hangman',   icon:'🔤', name:'Đoán từ'       },
  { key:'falling',   icon:'⚡', name:'Gõ nhanh'      },
  { key:'memory',    icon:'🃏', name:'Lật thẻ'       },
  { key:'fillblank', icon:'🎯', name:'Điền chỗ trống'},
];

async function renderGameLeaderboard() {
  const el = document.getElementById('gameLbSection');
  if (!el) return;
  el.innerHTML = `<div class="game-lb-header">🏆 Bảng xếp hạng</div><p class="game-lb-empty" style="padding:8px 0">Đang tải...</p>`;
  const cards = await Promise.all(GAME_LIST.map(async g => {
    const top = await getTopScoresCloud(g.key, 3);
    return `<div class="game-lb-card">
      <div class="game-lb-title">${g.icon} ${g.name}</div>
      ${top.length === 0
        ? `<p class="game-lb-empty">Chưa có điểm</p>`
        : top.map((s,i)=>`<div class="game-lb-row">
            <span class="game-lb-rank">${['🥇','🥈','🥉'][i]||'•'}</span>
            <span class="game-lb-name">${s.name||'Khách'}</span>
            <span class="game-lb-score">${s.score}đ</span>
            <span class="game-lb-date">${s.date}</span>
          </div>`).join('')}
    </div>`;
  }));
  el.innerHTML = `<div class="game-lb-header">🏆 Bảng xếp hạng</div>
    <div class="game-lb-grid">${cards.join('')}</div>`;
}

/* ── 🔤 HANGMAN ───────────────────────────── */
function startHangman() {
  showGamePlay('🔤 Đoán từ');
  const gc = document.getElementById('gameContainer');
  const wordObj = randVocab(1)[0];
  if (!wordObj) { gc.innerHTML = '<p style="padding:20px">Không có từ vựng.</p>'; return; }

  const target = wordObj.word.toLowerCase();
  const uniqueLetters = [...new Set(target.split('').filter(c => /[a-zàâäéèêëîïôùûüÿçœæ]/i.test(c)))];
  let guessed = new Set(), wrong = 0, timeLeft = 90;
  let ticker = null, scoreSaved = false;
  const MAX_WRONG = 6;
  const KEY_ROWS = [
    'azertyuiop'.split(''),
    'qsdfghjklm'.split(''),
    'wxcvbnéèêà'.split(''),
    'âùûîïôçœæë'.split('')
  ];
  const ALL_KEYS = KEY_ROWS.flat();

  function doRender() {
    const won = uniqueLetters.length > 0 && uniqueLetters.every(l => guessed.has(l));
    const lost = wrong >= MAX_WRONG || timeLeft <= 0;
    if (won || lost) clearInterval(ticker);
    if (won && !scoreSaved) { scoreSaved = true; saveGameScore('hangman', (MAX_WRONG - wrong) * 10 + Math.ceil(timeLeft / 3)); }
    document.getElementById('gameScore').textContent = `❌ ${wrong}/${MAX_WRONG}  ⏱ ${timeLeft}s`;

    const wordHTML = target.split('').map(c => {
      if (c === ' ') return '<span class="hm-space">&nbsp;&nbsp;</span>';
      if (!/[a-zàâäéèêëîïôùûüÿçœæ]/i.test(c)) return `<span class="hm-space">${c}</span>`;
      return guessed.has(c)
        ? `<span class="hm-letter revealed">${c.toUpperCase()}</span>`
        : `<span class="hm-letter blank">_</span>`;
    }).join('');

    const kbHTML = KEY_ROWS.map(row =>
      `<div class="hm-key-row">${row.map(k =>
        `<button class="hm-key${guessed.has(k) ? (uniqueLetters.includes(k)?' hit':' miss') : ''}" data-k="${k}"${guessed.has(k)?' disabled':''}>${k.toUpperCase()}</button>`
      ).join('')}</div>`
    ).join('');

    gc.innerHTML = `<div class="hm-wrap">
      <div class="hm-layout">
        ${hangmanSVG(wrong)}
        <div class="hm-right-panel">
          <p class="hm-hint">💡 Nghĩa: <em>${wordObj.meaning}</em></p>
          <div class="hm-word">${wordHTML}</div>
          ${won ? `<div class="game-result win">🎉 Đúng! Từ: <strong>${wordObj.word}</strong></div>
            <button class="pill" onclick="startHangman()" style="margin-top:8px">▶ Từ mới</button>` : ''}
          ${lost ? `<div class="game-result lose">😢 Hết lượt! Đáp án: <strong>${wordObj.word}</strong></div>
            <button class="pill" onclick="startHangman()" style="margin-top:8px">▶ Thử lại</button>` : ''}
        </div>
      </div>
      ${!won && !lost ? `<div class="hm-keyboard">${kbHTML}</div>` : ''}
    </div>`;

    gc.querySelectorAll('.hm-key:not([disabled])').forEach(b => {
      b.onclick = () => {
        const k = b.dataset.k;
        if (guessed.has(k)) return;
        guessed.add(k);
        if (!uniqueLetters.includes(k)) wrong++;
        doRender();
      };
    });
  }

  ticker = setInterval(() => {
    timeLeft--;
    const won = uniqueLetters.every(l => guessed.has(l));
    if (won || timeLeft <= 0 || wrong >= MAX_WRONG) { clearInterval(ticker); doRender(); return; }
    document.getElementById('gameScore').textContent = `❌ ${wrong}/${MAX_WRONG}  ⏱ ${timeLeft}s`;
  }, 1000);

  function onKey(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key.toLowerCase();
    if (ALL_KEYS.includes(k) && !guessed.has(k)) { guessed.add(k); if (!uniqueLetters.includes(k)) wrong++; doRender(); }
  }
  document.addEventListener('keydown', onKey);
  activeGameCleanup = () => { document.removeEventListener('keydown', onKey); clearInterval(ticker); };
  try { doRender(); } catch(e) { gc.innerHTML = `<p style="color:red;padding:20px">Lỗi: ${e.message}</p>`; console.error('hangman error:', e); }
}

function hangmanSVG(wrong) {
  const parts = [
    wrong > 0 ? '<circle cx="60" cy="25" r="10" stroke-width="3"/>' : '',
    wrong > 1 ? '<line x1="60" y1="35" x2="60" y2="70" stroke-width="3"/>' : '',
    wrong > 2 ? '<line x1="60" y1="45" x2="40" y2="60" stroke-width="3"/>' : '',
    wrong > 3 ? '<line x1="60" y1="45" x2="80" y2="60" stroke-width="3"/>' : '',
    wrong > 4 ? '<line x1="60" y1="70" x2="40" y2="90" stroke-width="3"/>' : '',
    wrong > 5 ? '<line x1="60" y1="70" x2="80" y2="90" stroke-width="3"/>' : '',
  ].join('');
  return `<svg width="120" height="110" viewBox="0 0 120 110" class="hm-svg">
    <line x1="10" y1="105" x2="110" y2="105" stroke-width="3"/>
    <line x1="30" y1="105" x2="30" y2="5" stroke-width="3"/>
    <line x1="30" y1="5" x2="60" y2="5" stroke-width="3"/>
    <line x1="60" y1="5" x2="60" y2="15" stroke-width="3"/>
    <g stroke="var(--text)" fill="none">${parts}</g>
  </svg>`;
}

/* ── 🃏 MEMORY MATCH ──────────────────────── */
function startMemory() {
  showGamePlay('🃏 Lật thẻ đôi');
  const gc = document.getElementById('gameContainer');
  const pairs = randVocab(8);
  const cards = [];
  pairs.forEach((v, i) => {
    cards.push({ id: i, type: 'fr', text: v.word, pairId: i });
    cards.push({ id: i + 8, type: 'vi', text: v.meaning, pairId: i });
  });
  cards.sort(() => Math.random() - 0.5);

  let flipped = [], matched = new Set(), moves = 0, locked = false;

  function render() {
    document.getElementById('gameScore').textContent = `🎯 ${matched.size}/8  |  🔄 ${moves} lượt`;
    gc.innerHTML = `<div class="mem-grid">${cards.map((c, idx) => {
      const isFlipped = flipped.includes(idx) || matched.has(c.pairId);
      const isMatched = matched.has(c.pairId);
      return `<button class="mem-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}" data-idx="${idx}">
        <span class="mem-front">?</span>
        <span class="mem-back ${c.type}">${c.text}</span>
      </button>`;
    }).join('')}</div>
    ${matched.size === 8 ? `<div class="game-result win">🎉 Hoàn thành! ${moves} lượt</div><button class="pill" onclick="startMemory()">▶ Chơi lại</button>` : ''}`;

    if (matched.size === 8) saveGameScore('memory', Math.max(1, 100 - moves * 3));

    gc.querySelectorAll('.mem-card:not(.flipped):not(.matched)').forEach(btn => {
      btn.addEventListener('click', () => {
        if (locked) return;
        const idx = parseInt(btn.dataset.idx);
        if (flipped.includes(idx)) return;
        flipped.push(idx);
        render();
        if (flipped.length === 2) {
          moves++;
          locked = true;
          const [a, b] = flipped.map(i => cards[i]);
          if (a.pairId === b.pairId && a.type !== b.type) {
            matched.add(a.pairId);
            flipped = [];
            locked = false;
            render();
          } else {
            setTimeout(() => { flipped = []; locked = false; render(); }, 1000);
          }
        }
      });
    });
  }
  render();
}

/* ── ⚡ FALLING WORDS ─────────────────────── */
function startFalling() {
  showGamePlay('⚡ Gõ nhanh');
  const gc = document.getElementById('gameContainer');
  const pool = randVocab(20);
  let qIdx = 0, score = 0, lives = 3, ticker = null, timePerWord = 8;

  function drawWord(v) {
    const tl = timePerWord;
    gc.innerHTML = `<div class="fall-wrap">
      <div class="fall-status">
        <span>${'❤️'.repeat(lives)}${'🖤'.repeat(3-lives)}</span>
        <span class="fall-score-badge">⭐ ${score}</span>
        <span class="fall-progress">Từ ${qIdx}/${pool.length}</span>
      </div>
      <div class="fall-word-box">
        <div class="fall-fr">${v.word}</div>
        <div class="fall-bar-wrap"><div class="fall-bar" id="fallBar" style="width:100%;background:#22c55e"></div></div>
        <div class="fall-timer" id="fallTimer">${tl}s</div>
      </div>
      <p class="fall-hint">Gõ nghĩa tiếng Việt → Enter</p>
      <input id="fallInput" class="modal-input fall-input" type="text" placeholder="Nghĩa tiếng Việt..." autocomplete="off" spellcheck="false" />
      <p id="fallFeedback" class="fall-feedback"></p>
    </div>`;

    const input = document.getElementById('fallInput');
    input.focus();
    let elapsed = 0;

    function setFeedback(ok, msg) {
      const fb = document.getElementById('fallFeedback');
      if (fb) { fb.textContent = msg; fb.style.color = ok ? '#22c55e' : '#ef4444'; }
    }

    input.onkeydown = (e) => {
      if (e.key !== 'Enter') return;
      const ans = input.value.trim().toLowerCase();
      const correct = v.meaning.toLowerCase();
      if (ans.length >= 2 && correct.includes(ans)) {
        clearInterval(ticker);
        score++;
        timePerWord = Math.max(4, 8 - Math.floor(score / 3));
        setFeedback(true, `✅ Đúng! ${v.word} = ${v.meaning}`);
        document.getElementById('gameScore').textContent = `⭐ ${score}  ❤️ ${lives}/3`;
        qIdx++;
        setTimeout(() => qIdx < pool.length ? drawWord(pool[qIdx]) : endFalling(), 900);
      } else {
        setFeedback(false, '❌ Sai! Thử lại...');
        input.value = '';
      }
    };

    clearInterval(ticker);
    ticker = setInterval(() => {
      elapsed += 0.1;
      const pct = Math.max(0, 100 - (elapsed / timePerWord) * 100);
      const bar = document.getElementById('fallBar');
      const timerEl = document.getElementById('fallTimer');
      if (bar) {
        bar.style.width = pct + '%';
        bar.style.background = pct > 50 ? '#22c55e' : pct > 25 ? '#f59e0b' : '#ef4444';
      }
      if (timerEl) timerEl.textContent = Math.ceil(timePerWord - elapsed) + 's';
      if (elapsed >= timePerWord) {
        clearInterval(ticker);
        lives--;
        const fb = document.getElementById('fallFeedback');
        if (fb) { fb.textContent = `⏰ Hết giờ! Đáp án: ${v.meaning}`; fb.style.color = '#ef4444'; }
        document.getElementById('gameScore').textContent = `⭐ ${score}  ❤️ ${lives}/3`;
        qIdx++;
        if (lives <= 0) { setTimeout(endFalling, 1200); return; }
        setTimeout(() => qIdx < pool.length ? drawWord(pool[qIdx]) : endFalling(), 1400);
      }
    }, 100);
  }

  function endFalling() {
    clearInterval(ticker);
    saveGameScore('falling', score);
    gc.innerHTML = `<div class="fall-wrap">
      <div class="game-result ${score >= 15 ? 'win' : score >= 8 ? 'neutral' : 'lose'}">
        ${score >= 15 ? '🏆' : score >= 8 ? '🎉' : '💪'} Kết thúc!<br>
        Điểm: <strong>${score}</strong>/${pool.length}
      </div>
      <button class="pill" onclick="startFalling()" style="margin-top:12px">▶ Chơi lại</button>
    </div>`;
    document.getElementById('gameScore').textContent = `⭐ ${score}/${pool.length}`;
  }

  activeGameCleanup = () => clearInterval(ticker);
  try {
    if (pool.length > 0) drawWord(pool[qIdx++]);
    else gc.innerHTML = '<p style="padding:20px">Không có từ vựng.</p>';
  } catch(e) { gc.innerHTML = `<p style="color:red;padding:20px">Lỗi: ${e.message}</p>`; console.error('falling error:', e); }
}

/* ── 🎯 FILL IN BLANK ─────────────────────── */
function startFillBlank() {
  showGamePlay('🎯 Điền chỗ trống');
  const gc = document.getElementById('gameContainer');
  const pool = randVocab(10).filter(v => v.example && v.example.includes(v.word));
  const backup = randVocab(20).filter(v => v.word);
  const questions = pool.length >= 5 ? pool : backup.slice(0, 10);
  let qIdx = 0, score = 0;

  function renderQ() {
    if (qIdx >= questions.length) {
      saveGameScore('fillblank', score * 10);
      gc.innerHTML = `<div class="fb-wrap">
        <div class="game-result ${score >= 7 ? 'win' : score >= 4 ? 'neutral' : 'lose'}">
          ${score >= 8 ? '🏆' : score >= 5 ? '🎉' : '💪'} Hoàn thành! <strong>${score}/${questions.length}</strong> câu đúng
        </div>
        <button class="pill" onclick="startFillBlank()">► Chơi lại</button>
      </div>`;
      document.getElementById('gameScore').textContent = `✅ ${score}/${questions.length}`;
      return;
    }
    const v = questions[qIdx];
    const hasExample = v.example && v.example.toLowerCase().includes(v.word.toLowerCase());
    const sentence = hasExample
      ? v.example.replace(new RegExp(v.word, 'i'), '<span class="fb-blank">___</span>')
      : `___ = ${v.meaning}`;
    document.getElementById('gameScore').textContent = `${qIdx + 1}/${questions.length}  ⭐ ${score}`;
    gc.innerHTML = `<div class="fb-wrap">
      <div class="fb-sentence">${sentence}</div>
      <p class="fb-hint">💡 Nghĩa: <em>${v.meaning}</em></p>
      <div class="fb-input-row">
        <input id="fbInput" class="modal-input fb-input" type="text" placeholder="Nhập từ tiếng Pháp..." autocomplete="off" autofocus />
        <button id="fbSubmit" class="pill">Kiểm tra →</button>
      </div>
      <p id="fbFeedback" class="fall-feedback"></p>
    </div>`;
    const input = document.getElementById('fbInput');
    const fb = document.getElementById('fbFeedback');
    input.focus();

    function check() {
      const ans = input.value.trim().toLowerCase();
      const correct = v.word.toLowerCase();
      if (ans === correct || correct.startsWith(ans) && ans.length >= correct.length - 1) {
        score++;
        fb.textContent = `✅ Đúng! "${v.word}"`;
        fb.style.color = '#22c55e';
        input.disabled = true;
        document.getElementById('fbSubmit').disabled = true;
        setTimeout(() => { qIdx++; renderQ(); }, 1000);
      } else {
        fb.textContent = `❌ Chưa đúng. Đáp án: ${v.word}`;
        fb.style.color = '#ef4444';
        input.disabled = true;
        document.getElementById('fbSubmit').disabled = true;
        setTimeout(() => { qIdx++; renderQ(); }, 1500);
      }
    }
    document.getElementById('fbSubmit').addEventListener('click', check);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  }
  renderQ();
}
