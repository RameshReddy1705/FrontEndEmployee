package com.emp.EmployeeDetails.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Employee02
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String firstName;
    private String lastName;
    private String email;
    @OneToMany(mappedBy = "employee02")
    @JsonIgnore
    private List<Projects> projects;
    
	public Employee02() {
		super();
	}
	public Employee02(long id, String firstName, String lastName, String email) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<Projects> getProjects() {
		return projects;
	}
	public void setProjects(List<Projects> projects) {
		this.projects = projects;
	}
	
	
	
//	@Override
//	public String toString() {
//		return "Employee02 [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
//				+ "]";
//	}
	
    
    
}
