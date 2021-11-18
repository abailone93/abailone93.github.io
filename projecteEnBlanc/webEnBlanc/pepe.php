<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <th>Nom</th>
        </thead>
        <tr>
            <td>
                <?php
                    echo $_GET['name_nom'];
                ?>
            </td>
            <td>
                <?php
                    echo $_GET['cbxCurso'];
                ?>
            </td>
            <td>
                <?php 
                    foreach($_GET['chxIdioma'] as $value) {
                        echo $value;
                    }
                ?>
            </td>
            <td>
                <?php 
                    if ($_FILES["archivo"]["error"] > 0){
                        echo "Error: " . $_FILES["archivo"]["error"] . "<br />";
                    }
                    else{
                        echo $_GET['archivo'];
                    }
                ?>
            </td>
        </tr>
    </table>    
</body>
</html>
