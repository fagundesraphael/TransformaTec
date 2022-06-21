package classes;

public class Comparision {
    

    public static void main(String[] args) {

        //declarando dois arrays de inteiros com mesmos valores

        int array01[] = {1,2,3};
        int array02[] = {1,2,3};

        if (array01 == array02) {
            System.out.println("Iguais");
        } else {
            System.out.println("Diferentes");
        }
    }

}
//Retorna diferente porque não é comparado o conteúdo do array mas a variável de referência 