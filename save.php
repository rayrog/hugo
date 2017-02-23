<?php

$dsn = 'mysql:host=hugo_database_1;dbname=hugo;port=3306';
$username = "root";
$password = "Azertyuiop@1";

// BD connect
try {
  $db = new PDO($dsn, $username, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "<h1>There was an error with the connection :</h1><br> ".$e;
}

// recover data posted
$array = array();
$questionnaire_name = $_POST["questionnaire_name"];

echo $questionnaire_name;
foreach ($_POST as $key=>$value){
  if(startsWith($key, "question")){
    $array[] = $_POST[$key];
    
  }
}
 
// prepare and bind
$query = 'SELECT * FROM questions';
try{
//  $request = $db->query($query);
//  while ($d = $request->fetch(PDO::FETCH_OBJ)){
//    print_r($d);
//  }
  
  
} catch (PDOException $e){
  echo "Can't fetch objects";
}


/* Utils */
function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}

//$stmt->close();
//$conn->close();
?>