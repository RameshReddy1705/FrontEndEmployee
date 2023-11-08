package com.emp.EmployeeDetails.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.emp.EmployeeDetails.JpaRepository.Employee02Repository;
import com.emp.EmployeeDetails.dto.Employee02;

@Repository
public class Employee02Dao
{
	private Employee02Repository employee02Repository;
	
	public Employee02Dao(Employee02Repository employee02Repository) {
		super();
		this.employee02Repository = employee02Repository;
	}

	public Employee02 create(Employee02 employee02)
	{
		return employee02Repository.save(employee02);
	}
	public Employee02 update(Employee02 employee02)
	{
		return employee02Repository.save(employee02);
	}
	
	public List<Employee02> retriveAll()
	{
		return employee02Repository.findAll();
	}
	public Employee02 daoFindId(long id)
	{
		Optional<Employee02> emplOptional=employee02Repository.findById(id);
		return emplOptional.get();
	}

	public void daodeleteId(long id)
	{
		employee02Repository.deleteById(id);
	}
	
	
}
