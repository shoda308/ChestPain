<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>change</title>
</head>

<body>
<h1><?php echo 'excelファイルに変換します'; ?></h1>
<form action="convert.php" method="GET">
<p>どのファイルをexcel化しますか：
<input type="radio" name="sample_radio" value="data.json" <?= $checked0 ?>>通常版
<input type="radio" name="sample_radio" value="ERdata.kindai.json" <?= $checked1 ?>>ER版
<p> 作成するファイルの名前を入力してください: <input type="text" name="text" value=""></p>
<p>excelファイルに変換します：<input type="submit" name="btn_submit" value="変換">
</form>
</body>
</html>