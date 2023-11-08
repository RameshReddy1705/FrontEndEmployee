package com.emp.EmployeeDetails.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class Projects
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String projectname;
	private long memeberesduration;
	@ManyToOne
	@JsonIgnore
	private Employee02 employee02;
	
	public Projects() {
		super();
	}
	public Projects(long id, String projectname, long memeberesduration) {
		super();
		this.id = id;
		this.projectname = projectname;
		this.memeberesduration = memeberesduration;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public long getMemeberesduration() {
		return memeberesduration;
	}
	public void setDuration(long memeberesduration) {
		this.memeberesduration = memeberesduration;
	}
	
	
	
	public Employee02 getEmployee02() {
		return employee02;
	}
	public void setEmployee02(Employee02 employee02) {
		this.employee02 = employee02;
	}
	@Override
	public String toString() {
		return "Projects [id=" + id + ", projectname=" + projectname + ", duration=" + memeberesduration + "]";
	}
	
	
}
