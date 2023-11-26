<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Yap</title>
</head>
<body>

<?php
// Hata mesajları için değişkenler
$errorMessage = '';

// Form gönderildi mi kontrol et
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Kullanıcı adı ve şifreyi al
    $ogrencino = $_POST['username'];
    $ogrencisifre = $_POST['password'];

    // Veritabanı bağlantısı
    $servername = "localhost";
    $username = "sosylad3_students";
    $password = "students";
    $dbName = "sosylad3_students";

    $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Bağlantı hatası: " . $conn->connect_error);
    }

    // Kullanıcı adını kullanarak veritabanından şifreyi al
    $query = "SELECT * FROM students WHERE username = '$ogrencino'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['student_password'];

        // Şifre doğrulama
        if (password_verify($password, $hashedPassword)) {
            echo "Giriş başarılı!";
            // Giriş başarılıysa, kullanıcıyı ana sayfaya yönlendirme veya başka bir işlem yapabilirsiniz.
        } else {
            $errorMessage = 'Geçersiz şifre!';
        }
    } else {
        $errorMessage = 'Kullanıcı bulunamadı!';
    }

    $conn->close();
}
?>

<h2>Giriş Yap</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    Kullanıcı Adı: <input type="text" name="username" required><br>
    Şifre: <input type="password" name="password" required><br>
    <input type="submit" value="Giriş Yap">
</form>

<?php
// Hata mesajını göster
if ($errorMessage != '') {
    echo "<p style='color:red;'>$errorMessage</p>";
}
?>

</body>
</html>