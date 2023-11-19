
// the old solution is very bad since it keeps looping through the number, which is very bad for time and forces O(n)
// The better solution is to use bit manipulation to do so, shifting left and right for multiplication and division
// class Solution {
//     public int divide(int dividend, int divisor) {

//         if (dividend == Integer.MIN_VALUE && divisor == -1) return Integer.MAX_VALUE;
//         if ((dividend >= Integer.MAX_VALUE || dividend <= Integer.MIN_VALUE) && divisor == 1) return dividend;

//         int absDividend = Math.abs(dividend);
//         int absDivisor= Math.abs(divisor);
//         boolean isDividentPstv = dividend > 0;
//         boolean isDivisorPstv = divisor > 0;
//         int result = 0;
//         System.out.println(2147483647 > Integer.MAX_VALUE);
        
//         if(absDividend < absDivisor) return 0;
//         if(absDividend == absDivisor) return changeValue(isDividentPstv, isDivisorPstv, 1);
//         if(absDivisor == 1 || absDivisor == -1) return changeValue(isDividentPstv, isDivisorPstv, dividend);

//         while (absDividend >= 0 && absDividend >= absDivisor) {
//             System.out.println("result " + result);
//             System.out.println("absDividend " + absDividend);
//             int dividendSub = absDividend - absDivisor - absDivisor - absDivisor;
//             absDividend = dividendSub;
//             result += 3;
//             if(dividendSub < 0) {
//                 int result1 = absDividend + absDivisor;
//                 if(result1 >= 0) {
//                     result--;
//                     return changeValue(isDividentPstv, isDivisorPstv, result);
//                 }
//                 int result2 = absDividend + absDivisor + absDivisor;
//                 if(result2 >= 0) {
//                     result-=2;
//                     return changeValue(isDividentPstv, isDivisorPstv, result);
//                 }
//             }
//         }


//         return changeValue(isDividentPstv, isDivisorPstv, result);
//     }


//     public int changeValue(Boolean isDividentPstv, Boolean isDivisorPstv, int result) {
//         int finalRes = result;
//         if((!isDividentPstv && isDivisorPstv) || (isDividentPstv && !isDivisorPstv)) {
//             return finalRes = -result;
//         } else if((isDividentPstv && isDivisorPstv) || (!isDividentPstv && !isDivisorPstv)) {
//             return finalRes = result;
//         } 
//            return finalRes;
        
//     }
// }

