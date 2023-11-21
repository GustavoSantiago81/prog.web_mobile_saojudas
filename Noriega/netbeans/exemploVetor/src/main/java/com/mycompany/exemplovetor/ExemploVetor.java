package com.mycompany.exemplovetor;

import javax.swing.JOptionPane;

public class ExemploVetor {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        
        int[] v = {1, 2, 4, 8 };
        
        for (int i=0; i < v.length; i++){
            System.out.println(v[i]);
        }
        
        //----------------------------------------------------------------
        System.out.println("v2[i]");
        int [] v1 = {1, 2, 4, 8 };
        int [] v2 = new int [4];
        
        for (int i = 0; i < v2.length; i++){
            v2[i] = v1[i];
            System.out.println(v2[i]);
        }
    }
}
