<?php
$link = mysqli_connect("", "", "", "");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

if (!empty($_GET)){
  echo "GET! ";
  $mode = $_GET["mode"];
  echo "Got mode... ";
  $sql = "SELECT name,min,sec,centsec FROM ranking WHERE mode = $mode ORDER BY min,sec,centsec ASC LIMIT 10";
  echo "Got sql... ";
  $result = $link-> query($sql);
  echo "Got result... ";
  echo "Post result";
  $x = 0;
  $writer = new XMLWriter();
  $path = '/var/www/html/out.xml';
  $writer->openURI($path);
  $writer->startDocument('1.0','UTF-8');
  $writer->setIndent(4);
  $writer->startElement('table');
  while ($row = mysqli_fetch_array($result)) {
      $arr[x][0] = $row['name'];
      if($row['min'] < 10){
        $arr[x][1] = "0" .$row['min'];
      }else {
        $arr[x][1] = $row['min'];
      }if($row['sec'] < 10){
        $arr[x][2] = "0" .$row['sec'];
      }else {
        $arr[x][2] = $row['sec'];
      }if($row['centsec'] < 10){
        $arr[x][3] = "0" .$row['centsec'];
      }else {
        $arr[x][3] = $row['centsec'];
      }
      $time = $arr[x][1]. ":" .$arr[x][2]. ":" .$arr[x][3];
      $writer->startElement("pos" .$x);
      $writer->writeAttribute('name', $arr[x][0]);
      $writer->writeAttribute('time', $time);
      $writer->endElement();
      echo "\nNome: " .$arr[x][0]. "   Tempo: " .$arr[x][1]. ":" .$arr[x][2]. ":" .$arr[x][3];
      $x = $x +1;

  }
  $writer->endElement();
  $writer->endDocument();
  $writer->flush();
  echo "\nCycle done!";
}

if (!empty($_POST)){
	$mode = $_POST["mode"];
	$name = $_POST["name"];
	$min = (int)$_POST["min"];
	$sec = (int)$_POST["sec"];
	$centsec = (int)$_POST["centsec"];
	$sql = "INSERT INTO ranking (mode,name,min,sec,centsec)
	VALUES ('$mode','$name','$min','$sec','$centsec')";
  if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
  } else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
  }
}
// Close connection
mysqli_close($link);
?>
