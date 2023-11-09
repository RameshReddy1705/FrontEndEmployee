package com.emp.EmployeeDetails.bean;

public class Tight_And_Loose_Coupling
{
	public static void main(String[] args)
	{
		SnakeGame game=new SnakeGame();
		ChessGame game1=new ChessGame();
		GameRun runner=new GameRun(game);
		runner.run();
		
	}
}
