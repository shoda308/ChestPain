<?php
    $comment = $_GET['sample_radio'];
    $dl_file_name = $_GET['text'];
    $dl_file_name .= ".xlsx";
    $command="/usr/local/bin/python3 ConvertJsonToCsv.py ";
    $command .= $comment;
    $command .= " ";
    $command .= $dl_file_name;
    echo($command);
    exec($command);

    $path = $dl_file_name; //実際のパス
    header("Content-Type: application/vnd.ms-excel");
    header('Content-Disposition: attachment; filename="'.$dl_file_name.'"');
    ob_end_clean(); 
    readfile($path);

    unlink($dl_file_name);

    exit;
?>


