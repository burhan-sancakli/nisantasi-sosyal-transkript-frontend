<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Öğrenci Bilgileri</title>
</head>
<body>
    <h1>Öğrenci Bilgileri</h1>

    <?php
    // Form gönderildiğinde çalışacak kod
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
                echo "<p>Ad: " . $satir["student_name"] . "</p>";
                echo "<p>Soyad: " . $satir["student_surname"] . "</p>";
                echo "<p>Bölüm: " . $satir["student_department"] . "</p>";
                echo "<p>Fakülte: " . $satir["student_faculty"] . "</p>";
            }
        } else {
            echo "<p>Öğrenci bulunamadı.</p>";
        }

        // Bağlantıyı kapatma
        $baglanti->close();
    }
    ?>

    <!-- Formu gösterme veya sonuçları gösterme -->
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        Öğrenci Numarası: <input type="text" name="student_number" required>
        <input type="submit" value="Bilgileri Getir">
    </form>
</body>
</html>
