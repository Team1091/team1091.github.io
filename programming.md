---
title: Programming
---
# Getting Started with Programming

We write programs to control the robot.  They are compiled and uploaded to the robot before the competition. 

Code for previous years is stored on [Github](https://github.com/team1091).

Most years there is a 15 second fully autonomous period where we need to control the robot in code, then a remote controlled
period where we allowed to use a controller.

## Terms and Abbreviations

* Java - The original JVM programming language.
* Kotlin - A JVM Language, built to make using Java's best practices more concise than Java.
* JVM - Java Virtual Machine - This runs jars which contain our compiled code.
* [RoboRio](https://www.andymark.com/products/ni-roborio) - A small Linux computer that controls our robot.
* [Gradle](https://gradle.org/) - A program that gathers libraries we need, compiles our code, and uploads them to the robot.
* FRC - First Robotics Competition
* IDE - Integrated Development Environment - A text editor with additional features to help programming.


### WPILIB
A control library made by Warcestor Polytechnic Institute.  Documentation on how to use this from Java is 
[here](https://wpilib.screenstepslive.com/s/currentCS/m/java).  It's pretty similar to how we are going to use it in Kotlin.


### Getting Set up with Kotlin
The primary language we use is Kotlin, a language that runs on the Java Virtual Machine (JVM).  It integrates well with code 
written in Java.

If you have done some programming experience, Google has a pretty good introduction on how to get set up [here](https://codelabs.developers.google.com/codelabs/kotlin-bootcamp-introduction/index.html?index=..%2F..index#0).


### Advanced Useful Concepts
* [Command Pattern](https://gameprogrammingpatterns.com/command.html) This allows us to encode instructions as objects.  It allows
 us to program commands that can be chained together to do more complex actions. 
* [Finite State Machines](https://gamedevelopment.tutsplus.com/tutorials/finite-state-machines-theory-and-implementation--gamedev-11867) - When a mechanism
becomes more complex with multiple states and transitions between them, we can represent it in code with an FSM.
* [PID Loop](https://frc-pdr.readthedocs.io/en/latest/control/pid_control.html) - Used to get to and hold a position, speed, or angle.
* [Pathfinding](https://www.redblobgames.com/pathfinding/a-star/introduction.html) - Can be used to plan a path between two points.
* [Planning](https://github.com/stewsters/kaiju/blob/master/src/main/kotlin/kaiju/plan/Planner.kt) - Allows us to use a list of actions to modify a complex world state to reach a goal.