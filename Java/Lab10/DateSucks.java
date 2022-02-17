import java.util.Date;
import java.time.*;

class DateSucks
{
    public static void main(String args[]) 
    {
        Date date = new Date(12, 12, 12);
        System.out.println(date);
        LocalDate ld1 = LocalDate.of(1995, Month.AUGUST, 23);
        System.out.println(ld1);
        LocalDate ld2 = LocalDate.ofYearDay(2017, 90);
        System.out.println(ld2);
        LocalDate ld3 = LocalDate.ofYearDay(2018, 187);
        System.out.println(ld3);
        

        System.out.println(Duration.between(ld2, ld3).toDays());
        LocalDate ld5 = LocalDate.ofEpochDay(90);
        System.out.println(ld5);
    }
}