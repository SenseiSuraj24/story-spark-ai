export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "pt", name: "Portuguese" },
  { code: "de", name: "German" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "bn", name: "Bengali" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" }
];

export const GENRES = [
  { value: "🎭 Drama", icon: "🎭", name: "Drama" },
  { value: "😂 Comedy", icon: "😂", name: "Comedy" },
  { value: "😱 Horror", icon: "😱", name: "Horror" },
  { value: "💕 Romance", icon: "💕", name: "Romance" },
  { value: "🚀 Sci-Fi", icon: "🚀", name: "Sci-Fi" },
  { value: "🧙 Fantasy", icon: "🧙", name: "Fantasy" },
  { value: "🔍 Mystery", icon: "🔍", name: "Mystery" },
  { value: "🌟 Adventure", icon: "🌟", name: "Adventure" },
] as const;

export type GenreName = (typeof GENRES)[number]["name"];

export const GENRE_LABELS: Record<string, Record<GenreName, string>> = {
  English: {
    Drama: "Drama", Comedy: "Comedy", Horror: "Horror", Romance: "Romance",
    "Sci-Fi": "Sci-Fi", Fantasy: "Fantasy", Mystery: "Mystery", Adventure: "Adventure",
  },
  Spanish: {
    Drama: "Drama", Comedy: "Comedia", Horror: "Terror", Romance: "Romance",
    "Sci-Fi": "Ciencia ficcion", Fantasy: "Fantasia", Mystery: "Misterio", Adventure: "Aventura",
  },
  French: {
    Drama: "Drame", Comedy: "Comedie", Horror: "Horreur", Romance: "Romance",
    "Sci-Fi": "Science-fiction", Fantasy: "Fantastique", Mystery: "Mystere", Adventure: "Aventure",
  },
  Portuguese: {
    Drama: "Drama", Comedy: "Comedia", Horror: "Terror", Romance: "Romance",
    "Sci-Fi": "Ficcao cientifica", Fantasy: "Fantasia", Mystery: "Misterio", Adventure: "Aventura",
  },
  Hindi: {
    Drama: "नाटक", Comedy: "हास्य", Horror: "डरावनी", Romance: "प्रेम",
    "Sci-Fi": "विज्ञान कथा", Fantasy: "कल्पना", Mystery: "रहस्य", Adventure: "रोमांच",
  },
  German: {
    Drama: "Drama", Comedy: "Komodie", Horror: "Horror", Romance: "Romanze",
    "Sci-Fi": "Science-Fiction", Fantasy: "Fantasy", Mystery: "Mysterie", Adventure: "Abenteuer",
  },
  Japanese: {
    Drama: "ドラマ", Comedy: "コメディ", Horror: "ホラー", Romance: "ロマンス",
    "Sci-Fi": "SF", Fantasy: "ファンタジー", Mystery: "ミステリー", Adventure: "冒険",
  },
  Korean: {
    Drama: "드라마", Comedy: "코미디", Horror: "공포", Romance: "로맨스",
    "Sci-Fi": "SF", Fantasy: "판타지", Mystery: "미스터리", Adventure: "모험",
  },
  Bengali: {
    Drama: "নাটক", Comedy: "কৌতুক", Horror: "ভৌতিক", Romance: "প্রেম",
    "Sci-Fi": "বিজ্ঞান কল্পকাহিনি", Fantasy: "কল্পনা", Mystery: "রহস্য", Adventure: "অভিযান",
  },
  Tamil: {
    Drama: "நாடகம்", Comedy: "நகைச்சுவை", Horror: "திகில்", Romance: "காதல்",
    "Sci-Fi": "அறிவியல் புனைவு", Fantasy: "கற்பனை", Mystery: "மர்மம்", Adventure: "சாகசம்",
  },
  Telugu: {
    Drama: "నాటకం", Comedy: "హాస్యం", Horror: "భయానకం", Romance: "ప్రేమ",
    "Sci-Fi": "విజ్ఞాన కథ", Fantasy: "కాల్పనికం", Mystery: "రహస్యం", Adventure: "సాహసం",
  },
  Marathi: {
    Drama: "नाटक", Comedy: "विनोद", Horror: "भयकथा", Romance: "प्रेमकथा",
    "Sci-Fi": "विज्ञानकथा", Fantasy: "कल्पनारम्य", Mystery: "रहस्य", Adventure: "साहस",
  },
};

export type UiText = {
  back: string;
  freeAccess: string;
  login: string;
  forMore: string;
  perMonth: string;
  upgrade: string;
  monthlyRequests: string;
  totalPosts: string;
  titleStart: string;
  titleAccent: string;
  length: string;
  language: string;
  short: string;
  medium: string;
  long: string;
  promptPlaceholder: string;
  keyboardTip: string;
  press: string;
  toGenerate: string;
  alsoWorks: string;
  forNewLine: string;
  generating: string;
  generate: string;
  examples: string;
  selectPrompt: string;
  characterLimit: string;
  charactersRemaining: string;
  shortcuts: string;
  openHelp: string;
  closeHelp: string;
  focusPrompt: string;
  generateStory: string;
  publishStory: string;
  close: string;
  freeLimitReached: string;
  freeLimitMessage: string;
  continueBrowsing: string;
  recentPrompts: string;
  usePrompt: string;
  delete: string;
  clearAll: string;
  noRecentPrompts: string;
};

export const UI_TEXT: Record<string, UiText> = {
  English: {
    back: "BACK", freeAccess: "Free access for 3 requests", login: "Login", forMore: "for more!",
    perMonth: "Per Month", upgrade: "Upgrade", monthlyRequests: "This month request", totalPosts: "Total posts",
    titleStart: "Turn Your Ideas Into", titleAccent: "Amazing Stories!", length: "Length", language: "Language",
    short: "Short", medium: "Medium", long: "Long", promptPlaceholder: "Every great story begins with a single idea. What's yours?",
    keyboardTip: "Keyboard tip:", press: "Press", toGenerate: "to generate", alsoWorks: "also works", forNewLine: "for new line",
    generating: "Generating...", generate: "Generate", examples: "Here are some example prompts you can refer to:-",
    selectPrompt: "Select a prompt", characterLimit: "Character limit reached - generate is disabled",
    charactersRemaining: "characters remaining", shortcuts: "Keyboard Shortcuts", openHelp: "Open help", closeHelp: "Close help",
    focusPrompt: "Focus prompt", generateStory: "Generate story", publishStory: "Publish story", close: "Close",
    freeLimitReached: "Free Limit Reached", freeLimitMessage: "You've used all 3 free story generations. Login to continue creating more stories.",
    continueBrowsing: "Continue Browsing", recentPrompts: "Recent Prompts", usePrompt: "Use", delete: "Delete", clearAll: "Clear All", noRecentPrompts: "No recent prompts yet",
  },
  Spanish: {
    back: "VOLVER", freeAccess: "Acceso gratis para 3 solicitudes", login: "Iniciar sesion", forMore: "para obtener mas!",
    perMonth: "Por mes", upgrade: "Mejorar", monthlyRequests: "Solicitudes este mes", totalPosts: "Publicaciones totales",
    titleStart: "Convierte tus ideas en", titleAccent: "historias increibles!", length: "Longitud", language: "Idioma",
    short: "Corta", medium: "Media", long: "Larga", promptPlaceholder: "Toda gran historia comienza con una sola idea. Cual es la tuya?",
    keyboardTip: "Consejo de teclado:", press: "Pulsa", toGenerate: "para generar", alsoWorks: "tambien funciona", forNewLine: "para una nueva linea",
    generating: "Generando...", generate: "Generar", examples: "Aqui tienes algunos ejemplos de indicaciones:",
    selectPrompt: "Selecciona una indicacion", characterLimit: "Limite de caracteres alcanzado - la generacion esta deshabilitada",
    charactersRemaining: "caracteres restantes", shortcuts: "Atajos de teclado", openHelp: "Abrir ayuda", closeHelp: "Cerrar ayuda",
    focusPrompt: "Enfocar indicacion", generateStory: "Generar historia", publishStory: "Publicar historia", close: "Cerrar",
    freeLimitReached: "Limite gratuito alcanzado", freeLimitMessage: "Has usado las 3 generaciones gratuitas. Inicia sesion para continuar creando historias.",
    continueBrowsing: "Continuar navegando", recentPrompts: "Indicaciones recientes", usePrompt: "Usar", delete: "Eliminar", clearAll: "Limpiar todo", noRecentPrompts: "Sin indicaciones recientes",
  },
  French: {
    back: "RETOUR", freeAccess: "Acces gratuit pour 3 demandes", login: "Connexion", forMore: "pour en obtenir plus !",
    perMonth: "Par mois", upgrade: "Mettre a niveau", monthlyRequests: "Demandes ce mois-ci", totalPosts: "Publications totales",
    titleStart: "Transformez vos idees en", titleAccent: "histoires incroyables !", length: "Longueur", language: "Langue",
    short: "Courte", medium: "Moyenne", long: "Longue", promptPlaceholder: "Chaque grande histoire commence par une seule idee. Quelle est la votre ?",
    keyboardTip: "Astuce clavier :", press: "Appuyez sur", toGenerate: "pour generer", alsoWorks: "fonctionne aussi", forNewLine: "pour une nouvelle ligne",
    generating: "Generation...", generate: "Generer", examples: "Voici quelques exemples d'invites :",
    selectPrompt: "Selectionner une invite", characterLimit: "Limite de caracteres atteinte - generation desactivee",
    charactersRemaining: "caracteres restants", shortcuts: "Raccourcis clavier", openHelp: "Ouvrir l'aide", closeHelp: "Fermer l'aide",
    focusPrompt: "Cibler l'invite", generateStory: "Generer une histoire", publishStory: "Publier l'histoire", close: "Fermer",
    freeLimitReached: "Limite gratuite atteinte", freeLimitMessage: "Vous avez utilise les 3 generations gratuites. Connectez-vous pour continuer a creer des histoires.",
    continueBrowsing: "Continuer la navigation", recentPrompts: "Invites recentes", usePrompt: "Utiliser", delete: "Supprimer", clearAll: "Effacer tout", noRecentPrompts: "Pas d'invites recentes",
  },
  Portuguese: {
    back: "VOLTAR", freeAccess: "Acesso gratuito para 3 solicitacoes", login: "Entrar", forMore: "para ter mais!",
    perMonth: "Por mes", upgrade: "Atualizar", monthlyRequests: "Solicitacoes neste mes", totalPosts: "Total de publicacoes",
    titleStart: "Transforme suas ideias em", titleAccent: "historias incriveis!", length: "Comprimento", language: "Idioma",
    short: "Curta", medium: "Media", long: "Longa", promptPlaceholder: "Toda grande historia comeca com uma unica ideia. Qual e a sua?",
    keyboardTip: "Dica de teclado:", press: "Pressione", toGenerate: "para gerar", alsoWorks: "tambem funciona", forNewLine: "para nova linha",
    generating: "Gerando...", generate: "Gerar", examples: "Aqui estao alguns exemplos de instrucoes:",
    selectPrompt: "Selecione uma instrucao", characterLimit: "Limite de caracteres atingido - geracao desativada",
    charactersRemaining: "caracteres restantes", shortcuts: "Atalhos de teclado", openHelp: "Abrir ajuda", closeHelp: "Fechar ajuda",
    focusPrompt: "Focar instrucao", generateStory: "Gerar historia", publishStory: "Publicar historia", close: "Fechar",
    freeLimitReached: "Limite gratuito atingido", freeLimitMessage: "Voce usou as 3 geracoes gratuitas. Entre para continuar criando historias.",
    continueBrowsing: "Continuar navegando", recentPrompts: "Instrucoes recentes", usePrompt: "Usar", delete: "Deletar", clearAll: "Limpar tudo", noRecentPrompts: "Sem instrucoes recentes",
  },
  Hindi: {
    back: "वापस", freeAccess: "3 अनुरोधों के लिए मुफ्त उपयोग", login: "लॉग इन", forMore: "और पाने के लिए!",
    perMonth: "प्रति माह", upgrade: "अपग्रेड", monthlyRequests: "इस माह के अनुरोध", totalPosts: "कुल पोस्ट",
    titleStart: "अपने विचारों को बदलें", titleAccent: "अद्भुत कहानियों में!", length: "लंबाई", language: "भाषा",
    short: "छोटी", medium: "मध्यम", long: "लंबी", promptPlaceholder: "हर महान कहानी एक विचार से शुरू होती है। आपका विचार क्या है?",
    keyboardTip: "कीबोर्ड सुझाव:", press: "दबाएं", toGenerate: "बनाने के लिए", alsoWorks: "भी काम करता है", forNewLine: "नई पंक्ति के लिए",
    generating: "बन रही है...", generate: "बनाएं", examples: "इन उदाहरण संकेतों का उपयोग करें:",
    selectPrompt: "एक संकेत चुनें", characterLimit: "अक्षर सीमा पूरी - निर्माण अक्षम है", charactersRemaining: "अक्षर शेष",
    shortcuts: "कीबोर्ड शॉर्टकट", openHelp: "सहायता खोलें", closeHelp: "सहायता बंद करें", focusPrompt: "संकेत पर जाएं",
    generateStory: "कहानी बनाएं", publishStory: "कहानी प्रकाशित करें", close: "बंद करें", freeLimitReached: "मुफ्त सीमा पूरी",
    freeLimitMessage: "आपने सभी 3 मुफ्त कहानी निर्माण उपयोग कर लिए हैं। आगे जारी रखने के लिए लॉग इन करें।", continueBrowsing: "ब्राउज़ करना जारी रखें", recentPrompts: "हाल के संकेत", usePrompt: "उपयोग करें", delete: "हटाएं", clearAll: "सब साफ करें", noRecentPrompts: "कोई हाल के संकेत नहीं",
  },
  German: {
    back: "ZURUCK", freeAccess: "Kostenloser Zugang fur 3 Anfragen", login: "Anmelden", forMore: "fur mehr!",
    perMonth: "Pro Monat", upgrade: "Upgrade", monthlyRequests: "Anfragen in diesem Monat", totalPosts: "Beitrage insgesamt",
    titleStart: "Verwandle deine Ideen in", titleAccent: "erstaunliche Geschichten!", length: "Lange", language: "Sprache",
    short: "Kurz", medium: "Mittel", long: "Lang", promptPlaceholder: "Jede grossartige Geschichte beginnt mit einer Idee. Was ist deine?",
    keyboardTip: "Tastaturtipp:", press: "Drucke", toGenerate: "zum Erstellen", alsoWorks: "funktioniert ebenfalls", forNewLine: "fur eine neue Zeile",
    generating: "Wird erstellt...", generate: "Erstellen", examples: "Hier sind einige Beispielvorgaben:",
    selectPrompt: "Vorgabe auswahlen", characterLimit: "Zeichenlimit erreicht - Erstellung deaktiviert", charactersRemaining: "Zeichen ubrig",
    shortcuts: "Tastaturkurzel", openHelp: "Hilfe offnen", closeHelp: "Hilfe schliessen", focusPrompt: "Vorgabe fokussieren",
    generateStory: "Geschichte erstellen", publishStory: "Geschichte veroffentlichen", close: "Schliessen", freeLimitReached: "Kostenloses Limit erreicht",
    freeLimitMessage: "Du hast alle 3 kostenlosen Erstellungen genutzt. Melde dich an, um weiterzumachen.", continueBrowsing: "Weiter ansehen", recentPrompts: "Aktuelle Vorgaben", usePrompt: "Verwenden", delete: "Loschen", clearAll: "Alles loschen", noRecentPrompts: "Keine aktuellen Vorgaben",
  },
  Japanese: {
    back: "戻る", freeAccess: "3回まで無料で利用できます", login: "ログイン", forMore: "してさらに利用！",
    perMonth: "月ごと", upgrade: "アップグレード", monthlyRequests: "今月のリクエスト", totalPosts: "投稿数",
    titleStart: "アイデアを", titleAccent: "すばらしい物語に！", length: "長さ", language: "言語",
    short: "短い", medium: "中程度", long: "長い", promptPlaceholder: "すべての物語は一つのアイデアから始まります。あなたのアイデアは？",
    keyboardTip: "キーボードのヒント:", press: "押す", toGenerate: "で生成", alsoWorks: "も使用可能", forNewLine: "で改行",
    generating: "生成中...", generate: "生成", examples: "参考にできるプロンプト例:",
    selectPrompt: "プロンプトを選択", characterLimit: "文字数の上限に達しました - 生成できません", charactersRemaining: "文字残り",
    shortcuts: "キーボードショートカット", openHelp: "ヘルプを開く", closeHelp: "ヘルプを閉じる", focusPrompt: "プロンプトに移動",
    generateStory: "物語を生成", publishStory: "物語を公開", close: "閉じる", freeLimitReached: "無料上限に達しました",
    freeLimitMessage: "無料の物語生成を3回すべて使用しました。続けるにはログインしてください。", continueBrowsing: "閲覧を続ける", recentPrompts: "最近のプロンプト", usePrompt: "使用", delete: "削除", clearAll: "すべてクリア", noRecentPrompts: "最近のプロンプトはありません",
  },
  Korean: {
    back: "뒤로", freeAccess: "요청 3회 무료 이용", login: "로그인", forMore: "하고 더 이용하세요!",
    perMonth: "월별", upgrade: "업그레이드", monthlyRequests: "이번 달 요청", totalPosts: "전체 게시물",
    titleStart: "아이디어를", titleAccent: "멋진 이야기로!", length: "길이", language: "언어",
    short: "짧게", medium: "중간", long: "길게", promptPlaceholder: "모든 훌륭한 이야기는 하나의 아이디어에서 시작됩니다. 당신의 아이디어는?",
    keyboardTip: "키보드 팁:", press: "누르기", toGenerate: "생성", alsoWorks: "도 가능", forNewLine: "새 줄",
    generating: "생성 중...", generate: "생성", examples: "참고할 수 있는 프롬프트 예시:",
    selectPrompt: "프롬프트 선택", characterLimit: "글자 수 제한 도달 - 생성할 수 없습니다", charactersRemaining: "글자 남음",
    shortcuts: "키보드 단축키", openHelp: "도움말 열기", closeHelp: "도움말 닫기", focusPrompt: "프롬프트에 초점",
    generateStory: "이야기 생성", publishStory: "이야기 게시", close: "닫기", freeLimitReached: "무료 한도 도달",
    freeLimitMessage: "무료 이야기 생성 3회를 모두 사용했습니다. 계속하려면 로그인하세요.", continueBrowsing: "계속 둘러보기", recentPrompts: "최근 프롬프트", usePrompt: "사용", delete: "삭제", clearAll: "모두 지우기", noRecentPrompts: "최근 프롬프트가 없습니다",
  },
  Bengali: {
    back: "ফিরে যান", freeAccess: "৩টি অনুরোধের জন্য বিনামূল্যে ব্যবহার", login: "লগ ইন", forMore: "করে আরও পান!",
    perMonth: "প্রতি মাসে", upgrade: "আপগ্রেড", monthlyRequests: "এই মাসের অনুরোধ", totalPosts: "মোট পোস্ট",
    titleStart: "আপনার ভাবনাকে বদলে দিন", titleAccent: "অসাধারণ গল্পে!", length: "দৈর্ঘ্য", language: "ভাষা",
    short: "ছোট", medium: "মাঝারি", long: "লম্বা", promptPlaceholder: "প্রতিটি মহান গল্প একটি ভাবনা দিয়ে শুরু হয়। আপনারটি কী?",
    keyboardTip: "কীবোর্ড টিপ:", press: "চাপুন", toGenerate: "তৈরি করতে", alsoWorks: "এটিও কাজ করে", forNewLine: "নতুন লাইনের জন্য",
    generating: "তৈরি হচ্ছে...", generate: "তৈরি করুন", examples: "কিছু উদাহরণ প্রম্পট:",
    selectPrompt: "একটি প্রম্পট বেছে নিন", characterLimit: "অক্ষরের সীমা পূর্ণ - তৈরি বন্ধ", charactersRemaining: "অক্ষর বাকি",
    shortcuts: "কীবোর্ড শর্টকাট", openHelp: "সহায়তা খুলুন", closeHelp: "সহায়তা বন্ধ করুন", focusPrompt: "প্রম্পটে যান",
    generateStory: "গল্প তৈরি করুন", publishStory: "গল্প প্রকাশ করুন", close: "বন্ধ করুন", freeLimitReached: "বিনামূল্যের সীমা পূর্ণ",
    freeLimitMessage: "আপনি ৩টি বিনামূল্যের গল্প তৈরি ব্যবহার করেছেন। চালিয়ে যেতে লগ ইন করুন।", continueBrowsing: "ব্রাউজ চালিয়ে যান", recentPrompts: "সম্প্রতি ব্যবহৃত প্রম্পট", usePrompt: "ব্যবহার করুন", delete: "মুছে ফেলুন", clearAll: "সব মুছে দিন", noRecentPrompts: "কোনো সম্প্রতি ব্যবহৃত প্রম্পট নেই",
  },
  Tamil: {
    back: "திரும்பு", freeAccess: "3 கோரிக்கைகளுக்கு இலவச அணுகல்", login: "உள்நுழை", forMore: "செய்து மேலும் பெறுங்கள்!",
    perMonth: "மாதத்திற்கு", upgrade: "மேம்படுத்து", monthlyRequests: "இந்த மாத கோரிக்கைகள்", totalPosts: "மொத்த பதிவுகள்",
    titleStart: "உங்கள் எண்ணங்களை", titleAccent: "அற்புத கதைகளாக மாற்றுங்கள்!", length: "நீளம்", language: "மொழி",
    short: "சிறியது", medium: "நடுத்தரம்", long: "நீளமானது", promptPlaceholder: "ஒவ்வொரு சிறந்த கதையும் ஒரு எண்ணத்தில் தொடங்குகிறது. உங்களுடையது என்ன?",
    keyboardTip: "விசைப்பலகை குறிப்பு:", press: "அழுத்தவும்", toGenerate: "உருவாக்க", alsoWorks: "இதுவும் செயல்படும்", forNewLine: "புதிய வரிக்கு",
    generating: "உருவாக்குகிறது...", generate: "உருவாக்கு", examples: "சில எடுத்துக்காட்டு குறிப்புகள்:",
    selectPrompt: "ஒரு குறிப்பை தேர்வு செய்க", characterLimit: "எழுத்து வரம்பு அடைந்தது - உருவாக்கம் முடக்கப்பட்டது", charactersRemaining: "எழுத்துகள் மீதம்",
    shortcuts: "விசைப்பலகை குறுக்குவழிகள்", openHelp: "உதவி திற", closeHelp: "உதவி மூடு", focusPrompt: "குறிப்பில் கவனம்",
    generateStory: "கதை உருவாக்கு", publishStory: "கதை வெளியிடு", close: "மூடு", freeLimitReached: "இலவச வரம்பு அடைந்தது",
    freeLimitMessage: "3 இலவச கதை உருவாக்கங்களையும் பயன்படுத்திவிட்டீர்கள். தொடர உள்நுழையவும்.", continueBrowsing: "தொடர்ந்து பார்வையிடு", recentPrompts: "சமீபத்திய குறிப்புகள்", usePrompt: "பயன்படுத்து", delete: "நீக்கு", clearAll: "அனைத்தையும் நீக்கு", noRecentPrompts: "சமீபத்திய குறிப்புகள் இல்லை",
  },
  Telugu: {
    back: "వెనుకకు", freeAccess: "3 అభ్యర్థనలకు ఉచిత ప్రవేశం", login: "లాగిన్", forMore: "చేసి మరిన్ని పొందండి!",
    perMonth: "నెలకు", upgrade: "అప్‌గ్రేడ్", monthlyRequests: "ఈ నెల అభ్యర్థనలు", totalPosts: "మొత్తం పోస్టులు",
    titleStart: "మీ ఆలోచనలను", titleAccent: "అద్భుత కథలుగా మార్చండి!", length: "పొడవు", language: "భాష",
    short: "చిన్నది", medium: "మధ్యస్థం", long: "పొడవైనది", promptPlaceholder: "ప్రతి గొప్ప కథ ఒక ఆలోచనతో మొదలవుతుంది. మీది ఏమిటి?",
    keyboardTip: "కీబోర్డ్ చిట్కా:", press: "నొక్కండి", toGenerate: "రూపొందించడానికి", alsoWorks: "కూడా పనిచేస్తుంది", forNewLine: "కొత్త లైన్ కోసం",
    generating: "రూపొందిస్తోంది...", generate: "రూపొందించు", examples: "కొన్ని ఉదాహరణ ప్రాంప్ట్‌లు:",
    selectPrompt: "ప్రాంప్ట్ ఎంచుకోండి", characterLimit: "అక్షర పరిమితి చేరింది - రూపొందింపు నిలిపివేయబడింది", charactersRemaining: "అక్షరాలు మిగిలాయి",
    shortcuts: "కీబోర్డ్ సత్వరమార్గాలు", openHelp: "సహాయం తెరవండి", closeHelp: "సహాయం మూసివేయండి", focusPrompt: "ప్రాంప్ట్‌పై దృష్టి",
    generateStory: "కథ రూపొందించు", publishStory: "కథ ప్రచురించు", close: "మూసివేయి", freeLimitReached: "ఉచిత పరిమితి చేరింది",
    freeLimitMessage: "మీరు 3 ఉచిత కథా రూపొందింపులను ఉపయోగించారు. కొనసాగడానికి లాగిన్ చేయండి.", continueBrowsing: "బ్రౌజింగ్ కొనసాగించు", recentPrompts: "ఇటీవల ప్రాంప్ట్‌లు", usePrompt: "ఉపయోగించు", delete: "తొలగించు", clearAll: "అన్నింటిని తొలగించు", noRecentPrompts: "ఇటీవల ప్రాంప్ట్‌లు లేవు",
  },
  Marathi: {
    back: "मागे", freeAccess: "3 विनंत्यांसाठी मोफत प्रवेश", login: "लॉग इन", forMore: "करून अधिक मिळवा!",
    perMonth: "दर महिना", upgrade: "अपग्रेड", monthlyRequests: "या महिन्यातील विनंत्या", totalPosts: "एकूण पोस्ट",
    titleStart: "तुमच्या कल्पना बदला", titleAccent: "अद्भुत कथांमध्ये!", length: "लांबी", language: "भाषा",
    short: "लहान", medium: "मध्यम", long: "लांब", promptPlaceholder: "प्रत्येक महान कथा एका कल्पनेपासून सुरू होते. तुमची कल्पना काय आहे?",
    keyboardTip: "कीबोर्ड सूचना:", press: "दाबा", toGenerate: "तयार करण्यासाठी", alsoWorks: "हेही चालते", forNewLine: "नवीन ओळीसाठी",
    generating: "तयार होत आहे...", generate: "तयार करा", examples: "काही उदाहरण प्रॉम्प्ट:",
    selectPrompt: "प्रॉम्प्ट निवडा", characterLimit: "अक्षर मर्यादा पूर्ण - निर्मिती बंद आहे", charactersRemaining: "अक्षरे बाकी",
    shortcuts: "कीबोर्ड शॉर्टकट", openHelp: "मदत उघडा", closeHelp: "मदत बंद करा", focusPrompt: "प्रॉम्प्टवर लक्ष",
    generateStory: "कथा तयार करा", publishStory: "कथा प्रकाशित करा", close: "बंद करा", freeLimitReached: "मोफत मर्यादा पूर्ण",
    freeLimitMessage: "तुम्ही सर्व 3 मोफत कथा निर्मिती वापरल्या आहेत. पुढे सुरू ठेवण्यासाठी लॉग इन करा.", continueBrowsing: "ब्राउझिंग सुरू ठेवा", recentPrompts: "अलीकडील प्रॉम्प्ट", usePrompt: "वापरा", delete: "हटवा", clearAll: "सर्व मुडून टाका", noRecentPrompts: "अलीकडील प्रॉम्प्ट नाहीत",
  },
};
