package primeiraaulabasico;
import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

//entra com 4 notas pelo sistema e trazer a média
public class Atividade2Java {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Entre com a 1º nota: ");
        float nota1 = entrada.nextFloat();
        System.out.println("Entre com a 2º nota: ");
        float nota2 = entrada.nextFloat();;
        System.out.println("Entre com a 3º nota: ");
        float nota3 = entrada.nextFloat();;
        System.out.println("Entre com a 4º nota: ");
        float nota4 = entrada.nextFloat();;

        float media = (nota1 + nota2 + nota3 + nota4) / 4;
        System.out.println("Primeira nota: " + nota1);
        System.out.println("Segunda nota: " + nota2);
        System.out.println("Terceira nota: " + nota3);
        System.out.println("Quarta nota: " + nota4);
        System.out.println("Média: " + media);
    }



}
