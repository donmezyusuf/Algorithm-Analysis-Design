/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package algorithm.analysis.design;

/**
 *
 * @author yusuf
 */
public class Lab01_Homework {

    public static void main(String[] args) {

        int number1 = 36743;
        int number2 = 19648;

        int result1 = gcd_computer.consIntCheck(number1, number2);
        int result2 = gcd_computer.Euclid(number1, number2);

        if (result1 != result2) {
            System.out.println("Error");
        }
        System.out.println(result1);
        System.out.println(result2);
        System.out.format("GCD of the numbers %d and %d is %d\n", number1, number2, result1);

    }

}

class gcd_computer {

    public static int consIntCheck(int m, int n) {

        int consIntCheckCount = 0;
        
        int x = m < n ? m : n;

        while (x > 1) {
            consIntCheckCount = consIntCheckCount + 1;
    
            if (m % x == 0 && n % x == 0) {           
                break;
            }
            //counter burada arttırılırsa eksik counter sayılmış olur.
            x--;         
        }
        System.out.println("consIntCheck iteration count "+ consIntCheckCount);
        return x;

    }

    public static int Euclid(int m, int n) {
        
        int euclidCount= 0;
        int r = 0;

        while (n != 0) {
            euclidCount = euclidCount + 1;
            r = m % n;
            m = n;
            n = r;
        }
        System.out.println("Euclid iteration count "+ euclidCount);
        return m;

    }
}
