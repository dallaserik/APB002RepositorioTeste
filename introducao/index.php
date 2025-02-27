<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP INTRODUÇÃO</title>
</head>
<body>
    <h1>Hello world!</h1>

    <!--<script languege="php"></script>-->
    <?php  
        echo "DALLAS LOPES <br>";
        Echo "BRUNO <br>";
        ECHO "TESTE <br>";

        $palavra = "bolo";
        $palavra = "Banana";
        echo $palavra;
        echo $PALAVRA;

        echo date("d/m/y");
        echo "Todos os direitos reservados @ ".date("Y");
        echo "br";
        echo date_default_timezone_set("America/Sao_Paulo");
        echo date_default_timezone_get();
        echo date("G:i:s T");
        // phpinfo();
    ?>

</body>
</html>