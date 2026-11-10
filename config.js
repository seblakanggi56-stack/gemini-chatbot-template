/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "CasperBot",
    botSubtitle: "ChatBot Tentang Informasi Sekolah",
    botAvatar: "🤖",
    userAvatar: "🧑‍💻",
    welcomeHeading: "Hai Apakah Ada Yang Bisa Saya Bantu?",
    welcomeSubtext: "Silahkan Pilih Topik Pertanyaan Di Bawah Ini Atau Ketik Pesan Anda Untuk Mulai Berkonsultasi.",

    introCards: [
        {
        
            icon: "🏫",
            title: "Daftar Jurusan Sekolah",
            description: "Informasi lengkap mengenai jurusan RPL, TKJ, TSM, TKR, BDP, TO, dan LP.",
            prompt: "Apa saja profil, keunggulan, dan prospek kerja untuk jurusan RPL, TKJ, TSM, TKR, BDP, TO, dan LP di sekolah ini?"
        },
        {
            icon: "🏆",
            title: "Kegiatan Ekstrakurikuler",
            description: "Pramuka, Band, Basket, Futsal, Karawitan, Paskibra, Renang, Silat, PMR, dan Balap Motor.",
            prompt: "Apa saja jadwal dan kegiatan untuk ekstrakurikuler Pramuka, Band, Basket, Futsal, Karawitan, Paskibra, Renang, Silat, PMR, dan Balap Motor?"
        },
        {
            icon: "🏢",
            title: "Fasilitas & Sarana Sekolah",
            description: "Gedung Kembar RPL-TKJ, Taman RPL, Kantin SPW, GOR, Kolam Renang, Taman LP, Masjid, TU, Ruang Guru, Parkiran, Perpustakaan, Ruang Kelas, Lab Komputer, Lab VR, Studio Musik, UKS, Kantin, Toilet, dan Ruang BK.",
            prompt: "Tolong jelaskan secara lengkap fungsi dan lokasi dari fasilitas Gedung Kembar RPL-TKJ, Taman RPL, Kantin SPW, GOR, Kolam Renang, Taman LP, Masjid, TU, Ruang Guru, Parkiran, Perpustakaan, Ruang Kelas, Lab Komputer, Lab VR, Studio Musik, UKS, Kantin, Toilet, dan Ruang BK di sekolah ini."
        },
        {
            icon: "🎓",
            title: "Program Kursus & Keterampilan",
            description: "Kursus Mengemudi, Servis Motor, Bahasa Jepang, Las, Balap Motor, Desain Grafis, Robotika, dan Investasi.",
            prompt: "Apa saja informasi dan materi yang tersedia untuk program kursus Mengemudi, Servis Motor, Bahasa Jepang, Las, Balap Motor, Desain Grafis, Robotika, dan Investasi?"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://your-site.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------
    contextWindowLimit: 10,

    ragConfig: {
        enabled: true,
        topKChunks: 2,
        minRelevanceScore: 0.12
    },

    // ------------------------------------------------------------------------
    // 5. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are Nexus, a helpful, accurate, and friendly AI assistant created for a school project.
Follow these core rules at all times:
1. Tone & Style: Be clear, encouraging, concise, and structured. Use bullet points or bold text for readability.
2. Grounded Answers: When "[REFERENCE DOCUMENTS]" are provided with the user's message, prioritize those facts above all else.
3. Honesty: If you do not know the answer, state clearly what you know and do not fabricate facts.
4. Safety: Refuse to generate harmful, inappropriate, or academic-dishonesty content.`,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
