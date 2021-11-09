package HueMotorcycleMarket.model;

public class User {
	private int id;
	private String name;
	private UserStatus status;
	private Role role;
	private String phone;
	private String email;
	private String password;
	
	public User(int id, String name, String phone, String email, String password) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}
	
	public User(int id, String name, UserStatus status, Role role, String phone, String email, String password) {
		this.id = id;
		this.name = name;
		this.status = status;
		this.role = role;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}
	
	public User(String raw) {
		String[] fields = raw.split(",");
		id = Integer.parseInt(fields[0]);
		name = fields[1];
		status = UserStatus.fromValue(Integer.parseInt(fields[2]));
		role = Role.fromValue(fields[3]);
		phone = fields[4];
		email = fields[5];
		password = fields[6];
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public UserStatus getStatus() {
		return status;
	}
	
	public void setStatus(UserStatus status) {
		this.status = status;
	}
	
	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role = role;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String toString() {
		return String.format("%d, %s,%d,%s,%s,%s", id, name, status.getValue(), phone, email, password);
	}
	
	public static void transferFields(User oldUser, User newUser) {
		oldUser.id = newUser.id;
		oldUser.status = newUser.status;
		oldUser.name = newUser.name;
		oldUser.phone = newUser.phone;
		oldUser.password = newUser.password;
	}
}
