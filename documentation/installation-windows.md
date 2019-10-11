---
layout: default
title: Installing Liquibase Command Line Tool for Windows
---

# Installing Liquibase Command Line for Windows #

Once you have downloaded the [Liquibase-Version#-bin.zip file](https://download.liquibase.org/download/), right-click the zipped file and select **Extract All**. You can place the extracted folder, anywhere on your local drive. Before you can use Liquibase, you must set a Path System Variable to the folder on your computer.

To set the Path System Variable:
1. In your Windows Start Menu Search, type `env` and select the **Edit the System Environment** option in the Control Panel.
2. In the System Properties Advanced tab, select **Environment Variables**.
3. In the System Variables section, highlight the Path variable and click **Edit**.
4. In the Edit environment variable window, select **New**, then add the path to the Liquibase-Version#-bin folder.

  **Example:** C:\apps\liquibase-3.8.1-bin

5. Click **Ok** on all windows to close them.

## Verifying ##

Verification is an essential aspect of the Liquibase installation process, and there are three things you need to check:
1. The Liquibase folder was correctly added to your Path System Variables
2. Java is installed on your system
3. You can run the Liquibase help command in PowerShell

### Verification #1: Check Path System Variables ###

To verify that you have correctly added the Liquibase folder to your Path System Variables:
1.	In your Windows Start Menu Search, type “power” and select **Windows PowerShell**.
2.	In the PowerShell window, type: `$env:PATH`

You should see the following:

![Windows verification image](/images/installation/windows/windows-verification.png){:style="width: 100%;"}


### Verification #2: Check for Java Installation ###

For Liquibase to run correctly, Java must be installed on your Windows machine. To verify that Java is installed on your computer:
1.	In your Windows Start Menu Search, Type `cmd` to open the Command Prompt.
2.	In the Command Prompt window, type: `java.exe -version`
If you see the error: `‘java.exe’ is not recognized as an internal or external command, operable program or batch file`, navigate to [https://www.java.com/en/download](https://www.java.com/en/download) to install Java.

### Verification #3: Run the Liquibase Help Command ###

Another way to verify that you installed Liquibase correctly on your computer is to run the Liquibase Help Command. To run the command:
1.	In your Windows Start Menu Search, Type `cmd` to open the Command Prompt.
2.	In the Command Prompt window, type: `liquibase --help`

## Common Troubleshooting ##

- If you cannot run the Liquibase Help command, verify that you have correctly installed Java. Also ensure that the Liquibase folder you downloaded is set to your Path System Variables.
- If you have installed Java, but are still receiving an error, add Java to your Path System Variables using the steps provided in the **Installing** section.
