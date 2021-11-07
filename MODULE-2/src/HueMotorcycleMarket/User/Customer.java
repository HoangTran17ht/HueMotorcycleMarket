package User;

public abstract class Customer {
	private String id, userName, password;
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Customer(){
	}
}
