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

1. If company owned device and using Intune, then Enroll device to Windows Autopilot

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

    If Option B is used, use import on Intune Admin Center > Enrollment > Windows Devices with proper account which has Intune Admin permissions

1. Windows Out-Of-Box Experience (OOBE), go with one scenario:

    * Scenario A - Intune on Company owned device for one primary user (using Windows Autopilot - user driven deployment)
        1. Should not ask for initial language, if it asks, wait and reboot
        1. If Microsoft Entry hybrid - be connected to local network and connectivity to Domain Controller
        1. End-user sign-in with Microsoft Entra account. Can use Microsoft Authenticator, or (preferred) temporary access pass provided by IT admin
        1. Computer will start MDM/Intune enrollment (if hybrid, also local domain join)
    * Scenario B - Intune on Company owned device for shared user scenario (without primary user) (using Windows Autopilot - self-deployment)
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

## Onboarding Device - Android Corporate-owned, Fully managed user devices

1. Must be factory reset
1. On language prompt, tap few times on right blank space to open enrollment
1. Scan QR code - Corporate Device Enrollment Token
1. connect device to WiFi or mobile internet
1. This device belongs to your organization> Next
1. Setup your phone > Continue
1. This device isn't private > Next
1. Log in with user account and TAP
1. Next set PIN/Password
1. "Install Work Apps", choose Next
1. On "Register your device" select Set-up and login with your MS account with TAP, and when registration is complete click "Done"
1. Give Google Services permissions (location, diagnostic data etc...) and click on "Accept"
1. Agree to End user License Agreement and click "Next"
1. Configure Microsoft Authenticator app (login with company account and then register authenticator with company)
1. Login to Microsoft Defender (if already logged in with company account account should be present, just select it) and give it requested  permissions, wait for the scan to complete
1. Open Outlook and Teams app, check if auto logged in (if already logged in with company account account should be present, just select it)

## Onboarding Device - Android Personally-owned devices with work profile

1. Install Intune Company Portal from Google Play store, [https://play.google.com/store/apps/details?id=com.microsoft.windowsintune.companyportal](https://play.google.com/store/apps/details?id=com.microsoft.windowsintune.companyportal)
1. Login to Company Portal (using Microsoft Entra with TAP) and within Company portal:
    1. Create work profile
    1. Activate work profile
    1. On last step resolve any warnings and Confirm Device settings
1. Configure Microsoft Authenticator app (login with company account and then register authenticator with company)
1. Login to Microsoft Defender (if already logged in, company account account should be present, just select it)
1. Open Outlook and Teams app, check if auto logged in (if already logged in with company account account should be present, just select it)

## Onboarding Device - iOS web based enrollment

Reference: [Set up web based device enrollment](https://learn.microsoft.com/en-us/mem/intune-service/enrollment/web-based-device-enrollment-ios)

1. Open Safari and go to https://portal.manage.microsoft.com/enrollment/webenrollment/ios. Sign in with your work or school account (with TAP)
1. On welcome screen select "Get started"
1. On the next screen download management profile
1. Open device settings > Profile downloaded> Install profile
1. Root certificate > Install
1. Confirm installation of default apps when prompted
1. Configure Microsoft Authenticator app (login with company account and then register authenticator with company)
1. Login to Microsoft Defender (if already logged in with company account account should be present, just select it)
1. Open Outlook and Teams app, check if auto logged in (if already logged in with company account account should be present, just select it)

## Onboarding User - Windows Users Profile

1. After first Windows sign in - configure Windows Hello, PIN, and optionally FingerPrint, Face Recognition
1. If using Lenovo notebook, configure Lenovo Vantage, setting: Device > Power > Battery charge threshold: On
1. Install Other apps if needed from [Microsoft Intune Web Company Portal](https://portal.manage.microsoft.com/)
    1. Devices > Choose active this current device
    1. Apps > filter Availability: Device management required. Install apps:
        1. Microsoft 365 Apps

## Onboarding User - Microsoft 365 Profile

1. Configure Outlook as user
    * General > Language and Time
        * Turn on "Use my Microsoft 365 settings"
        * Time Format: 01:01 - 23:59
        * Time zone: UTC+01 Zagreb
    * General > Appearance - Dark mode: "Use system settings"
    * Mail > Compose and reply:
        * Configure "My signature"
        * Select default signatures: for new messages
        * Message format: Always show Bcc, Always show From
        * Reply All
    * Calendar > View
        * Calendar appearance - Monday
        * Time zones: Zagreb
    * Calendar > Events and invitations - Invitations from other people - Turn Off "Delete.."
    * Go to Outlook Places, set work location to Office
    * [Set your work hours and location in Outlook](https://support.microsoft.com/en-us/office/set-your-work-hours-and-location-in-outlook-af2fddf9-249e-4710-9c95-5911edfd76f6)
        * Mon-Fri
        * 9:00 - 17:00, Location: Office
        * Turn on "Show work location on my calendar"
        * Turn on "Share office location details"
    * [User Profile, Add your pronouns, He/Him or She/Her](https://support.microsoft.com/en-us/office/pronouns-on-your-profile-in-microsoft-365-232c3bfb-a947-4310-86db-b22d63663d85)    
    * Add shared mailbox (if needed)
1. Configure Microsoft Teams, Settings
    * [Change your translation settings](https://support.microsoft.com/en-us/office/translate-a-message-in-microsoft-teams-d8926ce9-d6a6-47df-a416-f1adb62d3194) to Croatian, English
    * [Creating voice and face recognition profiles](https://support.microsoft.com/en-us/office/create-recognition-profiles-for-microsoft-intelliframe-f0084478-52a7-4c52-bcdc-9063ed0e0bc0)
    * [Record and display your name pronunciation on your profile card](https://support.microsoft.com/en-us/office/record-and-display-your-name-pronunciation-on-your-profile-card-8553d377-d0ca-40d4-8281-425dabcf55e2)
1. [Edit your profile in Microsoft 365](https://support.microsoft.com/en-us/office/edit-your-profile-in-microsoft-365-e7056090-56d4-4b81-bb3f-b6af31089ebe)
    * Update About tab with your Biography, Skills, Interests and hobbies, Projects
1. [Connect your LinkedIn and work or school accounts](https://support.microsoft.com/en-us/office/connect-your-linkedin-and-work-or-school-accounts-c7c245f2-fa56-4c9b-ba20-3fceb23c5772)
1. Set Dynamics 365 - Personal Options (timezone and currency)
