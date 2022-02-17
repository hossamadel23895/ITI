public class Complex{
	private int real;
	private int imag;
	public void setReal(int r){real = r;}
	public void setImag(int i){imag = i;}
	public int getReal(){return real;}
	public int getImag(){return imag;}

	public static Complex addComplex(Complex c1, Complex c2){
		Complex temp = new Complex();
		temp.real = c1.real - c2.real;
		temp.imag = c1.imag - c2.imag;
		return temp;
	}

	public static Complex subComplex(Complex c1, Complex c2){
		Complex temp = new Complex();
		temp.real = c1.real - c2.real;
		temp.imag = c1.imag - c2.imag;
		return temp;
	}
	public static void main(String[] args){
		Complex c1 = new Complex();
		Complex c2 = new Complex();
		Complex c3 = new Complex();
		Complex c4 = new Complex();
		Complex c5 = new Complex();
		Complex c6 = new Complex();

		//Data input
		c1.setReal(10);
		c1.setImag(20);

		c2.setReal(5);
		c2.setImag(5);

		c3.setReal(10);
		c3.setImag(20);

		c4.setReal(5);
		c4.setImag(5);

		//Operations
		c5 = Complex.addComplex(c1,c2);
		c6 = Complex.subComplex(c3,c4);
		System.out.println("Add operation imaginary result = " + c5.getImag());
		System.out.println("Add operation real result = " + c5.getReal());
		System.out.println("Add operation imaginary result = " + c6.getImag());
		System.out.println("Add operation real result = " + c6.getReal());
	}
}