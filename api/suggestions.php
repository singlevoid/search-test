<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
    die();
}

if($method == 'GET'){

    $term = $_GET["term"];

    $suggestions = array('suggestion', 'textbox', 'jquery', 'javascript',
                         'suggestion textbox', 'suggestion textbox javascript', 
                         'suggestion textbox jquery');

    $count = 0;
    $matches = [];

    foreach ($suggestions as &$value) {
        if(is_int(strpos($value, $term))){
            array_push($matches, $value);
            ++$count;
        }
        $value = $value * 2;
    }

    $response["count"] = $count;
    $response["suggestions"] = $matches;

    echo json_encode($response);
    exit;

}

?>