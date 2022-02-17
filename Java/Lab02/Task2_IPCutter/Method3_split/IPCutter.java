public class IPCutter
{
    public static void main(String[] args)
    {
        String[] splittedString = args[0].split("[.]");
		
        for(String s : splittedString)
        {
            System.out.println(s);
        }
    }
}