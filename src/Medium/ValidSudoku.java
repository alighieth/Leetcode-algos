import java.util.HashSet;

public class ValidSudoku {
    public boolean isValidSudoku(char[][] board) {
        System.out.println(board[0].toString());
        // for (int i = 0; i < 9; i++) {
        //     boolean isValidRow = isValidRow(board[i]);
        //     if(!isValidRow) return false;
        // }

        // for (int i = 0; i < 9; i++) {
        //     boolean isValidCol = isValidCol(board, i);
        //     if(!isValidCol) return false;
        // }

        // for (int i = 0; i < 9; i+=3) {
        //     for (int j = 0; j < 9; j+=3) {
        //         boolean isValidArea = isValidArea(board, i, j);
        //         if(!isValidArea) return false;
        //     }
        // }

        return true;
    }

    public boolean isValidRow(char[] rowArr) {
        HashSet<Integer> numSet = new HashSet<>();
        for (int i = 0; i < rowArr.length; i++) {
            if(rowArr[i] == '.') 
                continue;
            int numValue = Integer.parseInt(String.valueOf(rowArr[i]));
            if(numSet.contains(numValue)) {
                return false;
            }
            numSet.add(numValue);
        }
        return true;
    }

    public boolean isValidCol(char[][] rowArr, int columnIndex) {
        HashSet<Integer> numSet = new HashSet<>();
        for (int i = 0; i < rowArr.length; i++) {
            if(rowArr[i][columnIndex] == '.') 
                continue;
            int numValue = Integer.parseInt(String.valueOf(rowArr[i][columnIndex]));
            if(numSet.contains(numValue)) {
                return false;
            }
            numSet.add(numValue);
        }
        return true;
    }

    public boolean isValidArea(char[][] rowArr, int startRow, int startColumn) {
        HashSet<Integer> numSet = new HashSet<>();
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startColumn; j < startColumn + 3; j++) {
                if(rowArr[i][j] == '.') 
                    continue;
                int numValue = Integer.parseInt(String.valueOf(rowArr[i][j]));
                if(numSet.contains(numValue)) {
                    return false;
                }
                numSet.add(numValue);
            }
        }
        return true;
    }
}