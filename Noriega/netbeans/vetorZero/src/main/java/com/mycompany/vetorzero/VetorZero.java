package com.mycompany.vetorzero;

import java.util.Scanner;

public class VetorZero {

    public static void main(String[] args) {
        String[] nomes;
        nomes = new String[3];
        double[] notas = new double[3];
        double soma = 0, media;
        
        for (int i = 0; i <= 2; i++){
            System.out.println("Entre com o nome do aluno n°" + (i+1) );
            nomes[i] = new Scanner(System.in).nextLine();
            System.out.println("Entre com a nota do aluno n°" + (i+1) );
            notas[i] = new Scanner(System.in).nextDouble();
            
            soma = soma + notas[i];
    }
        
        media = soma / 3;
        
        System.out.println("A média dos alunos é: " + media);
    }
}
