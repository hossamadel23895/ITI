public class Calc
{
    public static void main(String[] args)
    {
        if(args.length ==3)
        {
            double num1 = Double.parseDouble(args[0]);
            double num2 = Double.parseDouble(args[2]);
            double output = 0.0;
            switch(args[1])
            {
                case "+" :
                    output = num1 + num2;
                    break;
                case "-" :
                    output = num1 - num2;
                    break;
                case "x" :
                    output = num1 * num2;
                    break;
                case "/" :
                    output = num1 / num2;
                    break;
            }
            System.out.println(num1 + args[1] + num2 + "=" + output);
        }
        else
        {
            System.out.println("Please enter a valid argument");
        }
    }
}