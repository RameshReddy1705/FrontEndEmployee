package com.emp.EmployeeDetails.JpaRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.EmployeeDetails.dto.Projects;

public interface ProjectRepository extends JpaRepository<Projects, Long> {

}
