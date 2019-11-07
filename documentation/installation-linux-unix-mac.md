---
layout: default
title: Installing Liquibase Command Line Tool for Linux/Unix/Mac
---


# Installing Liquibase Command Line for Linux/Unix/Mac #

Once you have downloaded the [Liquibase-Version#-bin.tar.gz file](https://download.liquibase.org/download), create a local directory on your computer (**Example:** `/usr/apps/Liquibase-<version>-bin`), then add the directory to your PATH.
To add the directory to your PATH:
1. Open the Terminal or Linux Command Line.
2. Run the following command: `export PATH=$PATH:/path/to/Liquibase-<version>-bin`

This command will not permanently update your PATH after the termination of your session. To update your PATH permanently, run the following command: `source ~/.profile  or source ~/.bashrc`<br />
Restart your command line.

**Note for MacOS users only:** There is a more convenient way to set path using Terminal in Default mode.  
To set path you can run: `sudo nano /etc/paths` then append the path `/path/to/Liquibase-<version>-bin` at the end of the file.  Hit `Ctrl+x` and `y` for yes, to save the file.  
Restart your Terminal.

## Verifying ##

Verification is an essential aspect of the Liquibase installation process, and there are three things you need to check:
1. The Liquibase folder was correctly added to your PATH.
2. Java is installed on your system.
3. You can run the Liquibase help command.

### Verification #1: Check your PATH ###

To verify that you have correctly added the Liquibase folder to your PATHs, type `env` in your Terminal or Linux command to display all your available PATHs.

### Verification #2: Check for Java Installation ###

For Liquibase to run correctly, Java must be installed on your Linux/Mac/Unix machine. To verify that Java is installed on your computer:
1. Open your Terminal or Linux Command Line.
2. In the Command Prompt window, type: `java -version`

If you see the error: `-bash: java: command not found`, then you need to either install Java, or you need to add the location of the Java to your PATH environment as a variable.
To install Java on your computer
1. Navigate to [https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and install the Java JDK.
2. Add the location of the Java file to your PATH environment as a variable.


### Verification #3: Run the Liquibase Help Command ###

Another way to verify that you installed Liquibase correctly on your computer is to run the Liquibase Help Command. To run the command:
1. Open your Terminal or Linux Command.
2. In the Command Prompt window, type: `liquibase --help`

## Common Troubleshooting ##
- If you cannot run the Liquibase Help command, verify that you have correctly installed Java. Also ensure that the Liquibase folder you downloaded is set to your PATHs.
- If you have installed Java, but are still receiving an error, add Java to your PATHs using the steps provided in the **Installing** section.
