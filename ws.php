<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$publicaciones_dragon_ball = [
    [
        "titulo" => "El inicio de la aventura",
        "saga" => "Dragon Ball",
        "descripcion" => "Goku comienza su viaje junto a Bulma en busca de las esferas del dragón.",
        "personaje" => "Goku"
    ],
    [
        "titulo" => "La llegada de los Saiyajin",
        "saga" => "Dragon Ball Z",
        "descripcion" => "Raditz revela el origen de Goku y amenaza la Tierra.",
        "personaje" => "Raditz"
    ],
    [
        "titulo" => "La batalla contra Freezer",
        "saga" => "Dragon Ball Z",
        "descripcion" => "Goku alcanza la transformación en Super Saiyajin por primera vez.",
        "personaje" => "Freezer"
    ],
    [
        "titulo" => "La saga de Cell",
        "saga" => "Dragon Ball Z",
        "descripcion" => "Gohan libera su poder oculto y derrota a Cell en una épica batalla.",
        "personaje" => "Gohan"
    ],
    [
        "titulo" => "La amenaza de Baby",
        "saga" => "Dragon Ball GT",
        "descripcion" => "Un nuevo enemigo controla a los Saiyajin y pone en peligro el universo.",
        "personaje" => "Baby"
    ],
    [
        "titulo" => "Super Saiyajin 4",
        "saga" => "Dragon Ball GT",
        "descripcion" => "Goku alcanza una nueva transformación con apariencia salvaje y poderosa.",
        "personaje" => "Goku SSJ4"
    ],
    [
        "titulo" => "El torneo de Champa",
        "saga" => "Dragon Ball Super",
        "descripcion" => "Universo 6 y 7 se enfrentan en un torneo organizado por los dioses.",
        "personaje" => "Beerus"
    ],
    [
        "titulo" => "La batalla contra Jiren",
        "saga" => "Dragon Ball Super",
        "descripcion" => "Goku domina el Ultra Instinto en el Torneo del Poder.",
        "personaje" => "Jiren"
    ],
    [
        "titulo" => "La saga de Moro",
        "saga" => "Dragon Ball Super (Manga)",
        "descripcion" => "Un antiguo hechicero amenaza con absorber la energía de los planetas.",
        "personaje" => "Moro"
    ]
];
echo json_encode($publicaciones_dragon_ball);
?>
