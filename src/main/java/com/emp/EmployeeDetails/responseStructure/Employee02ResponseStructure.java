package com.emp.EmployeeDetails.responseStructure;

public class Employee02ResponseStructure<T>
{
	private T body;
	private String msg;
	private int code;
	
	public Employee02ResponseStructure() {
		super();
	}
	public Employee02ResponseStructure(T body, String msg, int code) {
		super();
		this.body = body;
		this.msg = msg;
		this.code = code;
	}
	public T getBody() {
		return body;
	}
	public void setBody(T body) {
		this.body = body;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	@Override
	public String toString() {
		return "EmployeeResponseStructure [body=" + body + ", msg=" + msg + ", code=" + code + "]";
	}
	
	
	
}
