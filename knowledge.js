/**
 * ============================================================================
 * LOCAL RAG KNOWLEDGE BASE (knowledge.js)
 * ============================================================================
 */

const KNOWLEDGE_BASE = [
  {
    id: "doc-01",
    title: "About This Chatbot Template",
    keywords: ["template", "creator", "author", "ramadhirra", "architecture", "project", "who made"],
    content: `This Gemini Chatbot Template was architected and created by Ramadhirra Azzahra Putri, S.T. It is designed as a clean, modular, industry-standard starter kit for students to build and deploy custom AI assistants.`
  },
  {
    id: "doc-02",
    title: "API Key Security",
    keywords: ["api key", "security", "github pages", "expose", "proxy", "safe"],
    content: `This template protects API keys by routing all requests through a serverless backend proxy (like Netlify Functions). The frontend never possesses or exposes the raw API key.`
  },
  {
    id: "doc-03",
    title: "Profil & Identitas SMK Pertiwi Kuningan",
    keywords: ["sekolah apa", "smk pertiwi", "kuningan", "npsn", "alamat", "lokasi", "berdiri", "stm pertama", "yayasan", "telepon", "email", "akreditasi", "iso", "pusat keunggulan"],
    content: `SMK Pertiwi Kuningan (NPSN: 20212908) adalah Sekolah Menengah Kejuruan yang berlokasi di Jl. Siliwangi No. 26A, Kasturi, Kec. Kramatmulya, Kabupaten Kuningan, Jawa Barat 45521. Berdiri sejak tahun 1979, sekolah ini merupakan STM pertama di Kabupaten Kuningan di bawah naungan Yayasan Pendidikan Abdhi Pertiwi Kuningan. Kontak resmi: Telepon (0232) 875135 dan Email smkpertiwikng@yahoo.com. Sekolah ini terakreditasi A ("Sangat Baik"), bersertifikat ISO 9001:2015, serta ditetapkan sebagai SMK Pusat Keunggulan.`
  },
  {
    id: "doc-04",
    title: "Jurusan, Kerja Sama Industri, Kegiatan & Lulusan SMK Pertiwi Kuningan",
    keywords: ["jurusan", "program keahlian", "tsm", "tkr", "tkj", "rpl", "ototronik", "lp", "perkantoran", "bisnis", "pemasaran", "yamaha", "axioo", "bni", "toyota", "ekstrakurikuler", "olahraga", "balap motor", "seni", "esports", "kerja", "jepang", "magang", "ausbildung"],
    content: `SMK Pertiwi Kuningan memiliki program keahlian di bidang teknologi dan bisnis, antara lain Teknik Sepeda Motor (TSM), Teknik Kendaraan Ringan (TKR), Teknik Komputer dan Jaringan (TKJ), Rekayasa Perangkat Lunak (RPL), Ototronik, Layanan Penunjang/Perkantoran (LP), dan Bisnis/Pemasaran. Untuk program & kerja sama industri, sekolah ini memiliki Kelas Khusus Yamaha Grade A, Axioo Class Program, serta pembinaan dan kerja sama dengan mitra industri/lembaga seperti BNI dan Toyota. Siswa juga aktif di bidang olahraga, balap motor, seni, dan e-sports, serta memiliki jalur peluang kerja luar negeri (seperti ke Jepang) maupun program magang/Ausbildung.`
  }
];

Object.freeze(KNOWLEDGE_BASE);
