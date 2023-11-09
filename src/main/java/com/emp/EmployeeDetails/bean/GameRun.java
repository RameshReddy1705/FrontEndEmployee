package com.emp.EmployeeDetails.bean;

public class GameRun
{
	private SnakeGame game;

	public GameRun(SnakeGame game) {
		super();
		this.game = game;
	}
	public void run()
	{
		game.Ups();
		game.Down();
		game.forward();
	}
}
