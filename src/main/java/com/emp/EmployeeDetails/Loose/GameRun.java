package com.emp.EmployeeDetails.Loose;

public class GameRun
{
//	private SnakeGame game;

//	public GameRun(SnakeGame game) {
//		super();
//		this.game = game;
//	}
	private InterfaceConsole console;
	
	public GameRun(InterfaceConsole console) {
	super();
	this.console = console;
}

	public void run()
	{
		console.Ups();
		console.Down();
		console.forward();
	}
}
