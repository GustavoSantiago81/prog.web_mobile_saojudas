package com.mycompany.calcularareaesfera;

import java.util.Scanner;

public class CalcularAreaEsfera {

    public static void main(String[] args) {
        
        double raio = 0;
        double pi = 3.14;
        double volume = 0;
        double area = 0;
        
        System.out.println("Entre com o raio da esfera");
        raio = new Scanner(System.in).nextDouble();
        
        volume = (4*pi*Math.pow(raio, 3) )/ 3;
        area = (4*pi*Math.pow(raio, 2));
        
  
        System.out.println("O volume da esfera é:" + volume);
        System.out.println("A area da esfera é:" + area);
    }
}
