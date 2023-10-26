---
title: Programming
order: 6
---
# Programming Team

We write programs to control the robot.  They are compiled and uploaded to the robot before the competition.

Most years there is a 15 second fully autonomous period where we need to control the robot in code, then a remote controlled
period where we allowed to use a controller.

Code for previous years is stored on [GitHub](https://github.com/team1091).

### Getting setup with WPILIB
WpiLib is a control library made by Warcestor Polytechnic Institute (WPI).  They have a pretty good site with documentation on how to use this from Java
[here](https://docs.wpilib.org).  We will need to follow the step in there to get our robot code started.

## Terms and Abbreviations
* FRC - First Robotics Competition
* Java - The programming language we are using to write code for the robot.
* JVM - Java Virtual Machine - This runs jars which contain our compiled code.
* [RoboRio](https://www.andymark.com/products/ni-roborio) - A small Linux computer that controls our robot.
* [Gradle](https://gradle.org/) - A program that gathers libraries we need, compiles our code, and uploads them to the robot.
* IDE - Integrated Development Environment - A text editor with additional features to help programming.  We will use either [Intellij Community Edition](https://www.jetbrains.com/idea/download/) or [Visual Studio Code](https://code.visualstudio.com/)


### Advanced Useful Concepts
There are a ton of advanced topics we can cover depending on what we try to do.

* [Command Pattern](https://gameprogrammingpatterns.com/command.html) This allows us to encode instructions as objects.  It allows
 us to program commands that can be chained together to do more complex actions. 
* [Finite State Machines](https://gamedevelopment.tutsplus.com/tutorials/finite-state-machines-theory-and-implementation--gamedev-11867) - When a mechanism
becomes more complex with multiple states and transitions between them, we can represent it in code with an FSM.
* [PID Loop](https://frc-pdr.readthedocs.io/en/latest/control/pid_control.html) - Used to get to and hold a position, speed, or angle.
* [Pathfinding](https://www.redblobgames.com/pathfinding/a-star/introduction.html) - Can be used to plan a path between two points.
* Planning - Allows us to use a list of actions to modify a complex world state to reach a goal.
* [Vision](https://docs.wpilib.org/en/stable/docs/software/vision-processing/index.html) - Allows the robot to see and aim at targets.


<br>

# Build Team
