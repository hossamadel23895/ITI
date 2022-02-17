public class IPCutter
{
    public static void main(String[] args)
    {
        String RemainingIpPart = args[0] + ".";
        int CurrentIndex = 0;

        for(int i=0; i<4; i++)
        {
            CurrentIndex = RemainingIpPart.indexOf(".");
            String currentIpPart = RemainingIpPart.substring(0,CurrentIndex);
            RemainingIpPart = RemainingIpPart.substring(CurrentIndex+1);
            System.out.println(currentIpPart);
        }
    }
}