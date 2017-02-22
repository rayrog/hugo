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

// recover data 

 $array = array();

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
//// set parameters and execute
//$firstname = "John";
//$lastname = "Doe";
//$email = "john@example.com";
//$stmt->execute();
//
//$firstname = "Mar";
//$lastname = "Moe";
//$email = "mary@example.com";
//$stmt->execute();
//
//$firstname = "Julie";
//$lastname = "Dooley";
//$email = "julie@example.com";
//$stmt->execute();
//
//echo "New records created successfully";
//



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