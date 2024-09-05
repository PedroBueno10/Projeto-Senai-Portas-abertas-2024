import 'dart:io';

void main() {
  // Solicita o número do usuário
  stdout.write("Digite um número para a tabuada: ");
  int numero = int.parse(stdin.readLineSync()!);

  // Loop para imprimir a tabuada de 1 a 10
  for (int i = 1; i <= 10; i++) {
    print("$numero x $i = ${numero * i}");
  }
}
