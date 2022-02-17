import java.util.zip.InflaterOutputStream;

import java.util.stream.IntStream;
public class EvenSortedStream {
    public static void main(String[] args){
        int[] values = {2,15,180,10,7,60,5,34,12,37};
        System.out.println("Original values");
        IntStream.of(values).forEach(value->System.out.printf("%d \n",value));
        System.out.println();
        System.out.println("Values After Stream");
        IntStream.of(values).filter(value ->value % 2== 0).sorted().forEach(System.out::println);
        System.out.println();    
    }   
}