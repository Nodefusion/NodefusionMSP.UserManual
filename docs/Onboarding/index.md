# Onboarding

## Onboarding Device - Windows

1. If a device is not Brand / OEM then (re)install Windows

    Use specific internal procedure, windows image etc. Keep in mind for secure boot to setup mode. EFI partition to be above 260 MB due to EFI firmware upgrades etc.

1. Make sure that correct BIOS/EFI settings are configured, like:
    1. Enable Secure Boot
    1. Enable Device Guard
    1. Enable Virtualization Technology
    1. Enable Microsoft Pluton (if available)
    1. Specific other hardware vendor settings

1. If organization owned device and using Intune, then Enroll device to Windows Autopilot

    On fresh Windows installation and OOBE screen proceed with Shift+F10 to open CMD and get Autopilot info. Need to specify your GroupTag as per organization policy.

    ```powershell
    PowerShell.exe -ExecutionPolicy RemoteSigned
    Install-Script -Name Get-WindowsAutopilotInfo -Force
    
    # Option A - Sign-in and add directly to Windows Autopilot devices 
    Get-WindowsAutopilotInfo -GroupTag "Default" -Online 
    Get-WindowsAutopilotInfo -GroupTag "Shared" -Online 
    
    # Option B - Get info to file
    Get-WindowsAutopilotInfo -GroupTag "Default" -OutputFile C:\AutopilotHWID.csv 
    Get-WindowsAutopilotInfo -GroupTag "Shared" -OutputFile C:\AutopilotHWID.csv 
    ```

    If Option B is used, use import on Intune Admin Center, Devices > Enrollment > Windows Autopilot > Devices with proper account which has Intune Admin permissions. On the upper menu select "Import and then selsect "AutoPilot.csv" from previous step.

1. Windows Out-Of-Box Experience (OOBE = the initial setup process users encounter when first turning on a new Windows computer), go with one scenario:

    * Scenario A - Intune on organization owned device for one primary user (using Windows Autopilot - user driven deployment)
        1. Should not ask for initial language, if it asks, wait and reboot
        1. If Microsoft Entry hybrid - be connected to local network and connectivity to Domain Controller
        1. End-user sign-in with Microsoft Entra account. Can use Microsoft Authenticator, or (preferred) temporary access pass provided by IT admin
        1. Computer will start MDM/Intune enrollment (if hybrid, also local domain join)
    * Scenario B - Intune on organization owned device for shared user scenario (without primary user) (using Windows Autopilot - self-deployment)
        1. Should not ask for initial language, if it asks, wait and reboot
        1. If Microsoft Entry hybrid - be connected to local network and connectivity to Domain Controller
        1. Computer will start MDM/Intune enrollment (if hybrid, also local domain join)
    * Scenario C - Microsoft Entra cloud only (without Intune)
        1. End-user sign-in with Microsoft Entra account. Can use Microsoft Authenticator, or (preferred) temporary access pass provided by IT admin
    * Scenario D - Microsoft Windows Server Active Directory (without Intune)
        1. Sign-in to local Windows Server Active Directory
        1. Move AD computer object to corresponding AD Organization Unit
    * Scenario E - Without Microsoft Entra and without Windows Server Active Directory
        1. Ask for confirmation from project owner, should it be personal Microsoft Account, or Windows local account
        1. If using, hybrid or on-prem, move Windows Server Active Directory - Computer object to corresponding AD Organization Unit

1. After OOBE which includes Intune enrollment and/or domain join, users can do the first login on Windows sign-in prompt:

    * If using hybrid, use Windows Server Active directory username or password
    * If using cloud-only, use Microsoft Entra account. Should use the web-sign option (available in a while after policy is deployed) with sign-in from temporary access pass (from IT admin, preferred) or with Microsoft authenticator

1. After end-user first login, end-user need to setup Windows Hello for Business where use minimum PIN (additional options fingerprint, face recognition etc.). In future logins use username and PIN as minimum.

## Onboarding Microsoft Authenticator on Android

1. Requirement - have Android with logged in Google Account (your personal @gmail.com) in Google Play Store
1. Download and install [Microsoft Authenticator](https://play.google.com/store/apps/details?id=com.azure.authenticator) from Google Play Store
1. Add "Work or school account" > Select "Sign in" option
1. Enter your organization username/email
1. Enter Temporary Access Password (TAP) which can be obtained one time from your IT Administrator
1. Let's secure your device > Continue
1. "Register your device" > Register
1. Enter your existing Android device PIN/password to complete registration and phone-based passwordless sign-in

## Onboarding Device - Android Corporate-owned, Fully managed user devices

1. Must be factory reset
1. On language prompt, tap few times on right blank space to open enrollment
1. Scan QR code - Corporate Device Enrollment Token
1. connect device to WiFi or mobile internet
1. This device belongs to your organization > Next
1. Setup your phone > Continue
1. This device isn't private > Next
1. Log in with user account and TAP
1. Next set PIN/Password
1. "Install Work Apps", choose Next
1. On "Register your device" select Set-up and login with your MS account with TAP, and when registration is complete click "Done"
1. Give Google Services permissions (location, diagnostic data etc...) and click on "Accept"
1. Agree to End user License Agreement and click "Next"
1. Configure Microsoft Authenticator app (login with organizational account of user that is going to be using device and then register authenticator with organization)
1. Login to Microsoft Defender (if already logged in with organizational account account should be present, just select it) and give it requested  permissions, wait for the scan to complete
1. Open Outlook and Teams app, check if auto logged in (if already logged in with organizational account account should be present, just select it)

## Onboarding Device - Android Personally-owned devices with work profile

1. Prerequisite - Have working personal Android device with Google Account logged in Google Play Store
1. Prerequisite - [Microsoft Authenticator on Android](https://msp-manual.nodefusion.com/Onboarding/#onboarding-microsoft-authenticator-on-android)
1. Install Microsoft Intune Company Portal from Google Play store, [https://play.google.com/store/apps/details?id=com.microsoft.windowsintune.companyportal](https://play.google.com/store/apps/details?id=com.microsoft.windowsintune.companyportal)
1. Login to Company Portal with organizational account of user that is going to be using device (using Microsoft Authenticator) and within Company portal:
    1. Create work profile
    1. Activate work profile
    1. On last step resolve any warnings and Confirm Device settings
1. Configure Microsoft Authenticator app (login with organizational account of user that is going to be using device)
1. Login to Microsoft Defender and give it required permissions (if already logged in, organizational account account should be present, just select it)
1. Open Outlook and Teams app, check if auto logged in (if already logged in with organizational account account should be present, just select it)

## Onboarding Device - iOS web based enrollment

Reference: [Set up web based device enrollment](https://learn.microsoft.com/en-us/mem/intune-service/enrollment/web-based-device-enrollment-ios)

1. Open Safari and go to [https://portal.manage.microsoft.com/enrollment/webenrollment/ios](https://portal.manage.microsoft.com/enrollment/webenrollment/ios). Login with organizational account of user that is going to be using device (with Temporary Access Password)
1. On welcome screen select "Get started"
1. On the next screen download management profile
1. Open device settings > Profile downloaded> Install profile
1. Root certificate > Install
1. Confirm installation of default apps when prompted
1. Configure Microsoft Authenticator app (login with users organizational account and then register authenticator with organization)
1. Login to Microsoft Defender (if already logged in with organizational account should be present, just select it)
1. Open Outlook and Teams app, check if auto logged in (if already logged in with organizational account should be present, just select it)

## Onboarding Device - macOS

1. Open Safari web browser and go to [https://go.microsoft.com/fwlink/?linkid=853070](https://go.microsoft.com/fwlink/?linkid=853070), download Microsoft Intune Company app package and install it
1. Open Intune and login with organizational account
1. Wait for Intune to download configuration profiles
1. In order to encrypt drive Intune will ask you to change local user password to numerical (min 6 numbers without sequential numbers)
1. navigate to System Preferences > Security & Privacy > FileVault. Then, click "Turn On FileVault"

## Onboarding User - Windows Server Active Directory + Microsoft Entra (Microsoft hybrid environment)

* Create a user inside Windows Server Active Directory with valid attributes (First Name, Last Name, Display Name, Department, Job Title, Company Name, Office Location, City, Employee ID, Hire Date etc.)
* Common username is the same as primary email address
* Configure ProxyAddress
* Set Manager
* Add User to other AD Distribution Groups or Security Groups as per organization policy
* Start Domain Controller sync/replication
* Start Microsoft Entra Connect sync
* Add user to other cloud only groups, such as Distribution Groups, Security Groups or Microsoft 365 Groups as per organization policy
* Assign a license (through Group membership is preferred)
* Enable mailbox auditing

## Onboarding User - Microsoft Entra (Microsoft cloud only environment)

* Create a User inside Microsoft Entra with valid attributes (First Name, Last Name, Display Name, Department, Job Title, Company Name, Office Location, City, Employee ID, Usage Location, Hire Date etc.)
* Common username is the same as primary email address
* Set Manager
* Add User to other Distribution Groups, Security Groups or Microsoft 365 Groups as per organization policy
* Assign a license (through Group membership is preferred)
* Enable mailbox auditing
