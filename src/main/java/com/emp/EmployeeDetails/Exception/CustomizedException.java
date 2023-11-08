package com.emp.EmployeeDetails.Exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class CustomizedException
{
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ErrorDetails> handleAllException(Exception ex, WebRequest req)
	{
		ErrorDetails details=new ErrorDetails(LocalDateTime.now(), ex.getMessage(), req.getDescription(false));
		return new ResponseEntity<ErrorDetails>(details,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(Employee02IdNotFoundException.class)
	public final ResponseEntity<ErrorDetails> Employee02IdNotFoundException(Exception ex, WebRequest req)
	{
		ErrorDetails details=new ErrorDetails(LocalDateTime.now(), ex.getMessage(), req.getDescription(false));
		return new ResponseEntity<ErrorDetails>(details,HttpStatus.NOT_FOUND);
	}
}
