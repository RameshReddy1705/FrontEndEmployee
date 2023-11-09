package com.emp.EmployeeDetails.Loose;

public class Loose_Coupling
{
	public static void main(String[] args)
	{
		//SnakeGame game=new SnakeGame();
		ChessGame game=new ChessGame();
		GameRun runner=new GameRun(game);
		runner.run();
		
	}
}
