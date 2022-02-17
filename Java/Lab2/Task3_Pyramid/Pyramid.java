public class Pyramid
{
    public static void main(String args[])
    {
        if(args.length>0)
        {

            int rowsNumber = Integer.parseInt(args[0]);                      //taking rows number from the user
            int currentRow;

            //Doing the first half of the diamond
            for (currentRow=1; currentRow <= rowsNumber; currentRow++)       //Rows number loop
            {

                for (int j=1; j<=currentRow; j++)                            //First stars loop
                {
                    System.out.print("*");
                }

                for (int j=1; j<=rowsNumber-currentRow; j++)                 //First Spaces loop
                {
                    System.out.print("  ");
                }

                System.out.print(" ");                                       //Controls the spacing between the two shapes

                for (int j=1; j<=currentRow; j++)                            //Second stars loop
                {   
                    System.out.print("* ");
                }

                System.out.print("\n");                                         //Takes us to the next row

            }


            /*For the second part we only change the current row value and pattern to be decreasing
            and that will get us the needed result without changing the first part logic*/
            for (currentRow=rowsNumber-1; currentRow > 0; currentRow--)         
            {
                for (int j=1; j<=currentRow; j++)                            //First stars loop
                {
                    System.out.print("*");
                }

                for (int j=1; j<=rowsNumber-currentRow; j++)                 //First Spaces loop
                {
                    System.out.print("  ");
                }

                System.out.print(" ");                                       //Controls the spacing between the two shapes

                for (int j=1; j<=currentRow; j++)                            //Second stars loop
                {   
                    System.out.print("* ");
                }

            System.out.print("\n");                                         //Takes us to the next row

            }
                        
        }
        else
        {
            System.out.println("Please enter a value for the app to work!");
        }
    }
}