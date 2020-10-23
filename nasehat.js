let nasehat = [
    "Anda berminat menjadi developer, sayang sekali ini bukan pekerjaan yang cocok untuk anda",
    "putusin pacar keduamu, yang pertama udah mulai curiga",
    "Kamu kelihatan senang??? jangan senang dulu bayar hutangmu",
    "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
    "Hidup tak selamanya tentang pacar.",
    "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
    "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
    "Meski kamu gagal membuka hatimu tapi setidaknya kamu pernah membuka resletingmu.....untuk pipis",
    "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
    "Cuek adalah karakter, tapi nyuekin itu pilihan. pilihan kamu??",
    "Sepandai-pandai menyimpan istri muda, akhirnya tua juga. Masih mau?",
    "Cintailah seorang wanita saja. Tapi dua wanita lebih baik daripada tidak ada.",
    "Hukuman gantung aja udah diganti tembak, kenapa kamu masih gantung dia? Tembak dong!",
    "Gagal Phase 0?? Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
    "Jadilah pribadi yang menantang masa depan, bukan pengecut yang aman di zona nyaman.",
    "Pengusaha itu bukan orang yang pintar tetapi mereka pintar mencari orang pintar.",
    "Siapapun yang berusaha menjatuhkanmu memang sudah berada di bawahmu.",
    "Wanita cantik bukan jaminan untuk kehidupan bahagia dan menyenagkan, apalagi yang jelek.",
    "Sahabat sejati nggak saling menilai. Melainkan, mereka menilai orang lain bersama-sama.",
    "Iman itu kaya tato. Baru punya dikit, diunjuk-unjukin mulu.",
    "Kamu sebagai jomblo jangan pernah merasa malu. Jomblo bukan berarti gak laku, tapi emang nggak ada yang mau."
];
let klikNasehat = document.getElementById("nasehat")
let nasehatMbah = document.getElementById(randomNasehat)

klikNasehat.addEventListener("click", function() {
    let randomNasehat = Math.floor(Math.random() * nasehat.length)
    nasehatMbah.innerText = nasehat[randomNasehat]
})