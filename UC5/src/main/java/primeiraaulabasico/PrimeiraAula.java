package primeiraaulabasico;
import java.util.Scanner;

public class PrimeiraAula {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in); //entrada de dados


        System.out.println("Entre com o primerio número: ");
        int numero1 = entrada.nextInt();

        System.out.println("Entre com o segundo número: ");
        int numero2 = entrada.nextInt();

        int soma = numero1 + numero2;

        System.out.println("Primeiro número: " + numero1);
        System.out.println("Segundo número: " + numero2);
        System.out.println("A soma de " +numero1+ " com " +numero2+ " é: " + soma);
    }
}
