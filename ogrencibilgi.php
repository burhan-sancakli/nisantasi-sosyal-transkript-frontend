<?php
$servername = "localhost";  // MySQL sunucu adı
$username = "sosylad3_students";  // MySQL kullanıcı adı
$password = "students";  // MySQL şifre
$dbname = "sosylad3_students";  // Kullanılacak veritabanı adı

// POST verilerini al
$studentNumber = $_POST['student_number'];

// MySQL veritabanına bağlanma
$baglanti = new mysqli($servername, $username, $password, $dbname);

// Bağlantı kontrolü
if ($baglanti->connect_error) {
    die("Bağlantı hatası: " . $baglanti->connect_error);
}

// Bağlantı karakter setini ayarla
$baglanti->set_charset("utf8");

// Öğrenci bilgilerini çek
$sorgu = "SELECT * FROM students WHERE student_number = '$studentNumber'";
$sonuc = $baglanti->query($sorgu);

// Sorgu sonuçlarını kontrol etme
if ($sonuc->num_rows > 0) {
    while ($satir = $sonuc->fetch_assoc()) {
        echo "Ad: " . $satir["student_name"] . "<br>";
        echo "Soyad: " . $satir["student_surname"] . "<br>";
        echo "Bölüm: " . $satir["student_department"] . "<br>";
        echo "Fakülte: " . $satir["student_faculty"] . "<br>";
    }
} else {
    echo "Öğrenci bulunamadı.";
}

// Bağlantıyı kapatma
$baglanti->close();
?>