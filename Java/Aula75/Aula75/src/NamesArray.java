public class NamesArray {

    public static void main(String[] args) {
        String[] names = { "João", "Maria", "José", "Pedro", "Raphael" };

        for (String name : names) {
            System.out.println(name);
        }

        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }
    }
}