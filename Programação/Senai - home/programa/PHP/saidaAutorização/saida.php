<?php

$name = $_POST['name'];
$data = $_POST['data'];
$hora =  $_POST['hora'];
$turma = $_POST['turma'];
$tabs = $_POST['tabs'];
$responsavel = $_POST['responsavel'];
$senha = $_POST['senha'];
$parentesco = $_POST['parentesco'];
$irSozinho = FALSE;
$funcionarioNome = '';
//10.132.26.241

if (empty($responsavel)) {
    $irSozinho = TRUE;
};



$servername = "10.132.26.241";
$database = "mysql";
$username = "adm";
$password = "1102";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Falha na Conexão: " . mysqli_connect_error());
}
echo "Conectado com Sucesso !";



mysqli_set_charset($conn, "utf8");

$sql = "SELECT nomeFuncionario, IDfuncionario FROM funcionarios WHERE IDfuncionario=$senha";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "asdadsd";
} else {
  echo "0 results";
}

$stmt = $conn->prepare("INSERT INTO autorizacao ('nomeAluno', 'turma', 'data', 'horario', 'parentesco', 'nomeParentesco', 'irSozinho', 'funcionario', 'senha') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $name, $turma, $data, $hora, $parentesco, $responsavel, $irSozinho, NULL, $senha);

if ($stmt->execute()) {
    echo 'Carro criado com sucesso';
} else {
    echo "Erro na base de dados: " . $stmt->error;
}

$stmt->close();
mysqli_close($conn);
?>