# Productivity

Nodefusion best practice for productivity

## Windows User Profile One Time Setup

1. After first Windows sign in - configure Windows Hello, PIN, and optionally FingerPrint, Face Recognition
1. If using Lenovo notebook, configure Lenovo Vantage, setting: Device > Power > Battery charge threshold: On
1. Install Other apps if needed from [Microsoft Intune Web Company Portal](https://portal.manage.microsoft.com/)
    1. Devices > Choose active this current device
    1. Apps > filter Availability: Device management required. Install apps:
        1. Microsoft 365 Apps

##  Microsoft 365 Profile One Time Setup

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

## Microsoft Viva Insights

Use [Viva Insights - Personal App Settings](https://insights.cloud.microsoft/#/PersonalApp/AppSettings) on web link to configure:

* Work week
* Configure your praise schedule reminder
* Protect time
  * Configure your recurring plan for focus
  * Configure your recurring plan for breaks
  * Configure your learning plan
* Virtual commute
* Reflection
* Effective meetings
* Privacy

## Microsoft Outlook

Subscribe / Follow your primary team Groups (such as Administration Team) to receive all emails and events.

### Configure Inbox subfolders

Create Mail Folders as child of the Inbox mail folder:

* CC - for all communication that is not sent directly to you
* Alerts - for all email alerts
* Support - for all support emails
* for each followed Group, such as Administration-Team - for all group related communication

### Configure Mail rules

"Alerts"
Condition: "Recipient address includes" : "alert"
Action: "Move to" : Alerts folder

 "Company Support"
Condition: "To": "support@company.com"
Action: "Move to" : Support folder
Exception: "I'm on the To or CC line"

"My name is not in To line"
Condition: "I'm not on the To line"
Action: "Move to" : CC folder

### Calendar

* Create calendar items for entire day (00-23:59) with "show as" set to "Out of Office" (means "Out of work"), in scenarios like on vacation or sick leave
* For business trip, education etc. use "Busy"

## Microsoft To Do

* Use Microsoft To Do app (for Outlook Tasks) which are personal Tasks, you can use Recurring Tasks when needed.

## Microsoft Teams

* Make sure that, on your mobile Teams application, notifications are blocked when active on desktop
* In Teams - pin channels that you use most often (example IT Team > General)
* In Teams channels, set notifications to All Activity for your primary Groups / channels (example IT Team > Cases, or Nodefusion > Food ordering)

## Digital Communication & Collaboration Guidelines

### 📊 Communication Channels & Priority

With many communication tools available, it can be difficult to determine which messages require immediate attention. Below is our recommended priority order, from highest to lowest:

1. 📞 **Phone Call** (including Teams Calls)
2. 👥 **In-Person or Teams Meetings**
3. 💬 **Teams 1:1 Chat Messages**
4. 🧑‍🤝‍🧑 **Teams Group/Channel Messages**
5. 📥 **Email Messages in Inbox**
6. 📂 **Email Messages in Other Folders**
7. 🧵 **Viva Engage Posts**

### Task Acknowledgement

When someone delegates a task to you via email, always reply once the task is **completed**. A simple message like:

> **"Done"** or **"Completed"**

is sufficient. This confirmation is important because the sender cannot assume the task has been resolved without your response.

> **Avoid sending messages like "Will do" or "Will be done."**  
Only reply once the task is actually completed—especially if a short turnaround is expected.

### Reminder to Email Fields and Their Purpose in Business Communication

In professional settings, understanding how to use the **To**, **CC**, and **BCC** fields appropriately ensures clarity, transparency, and proper etiquette in email communication.

* **To**  
  This field is for the **primary recipients** of the email. These are the individuals who are expected to **take action** or respond. Always address your message directly to those responsible.

* **CC (Carbon Copy)**  
  Use this field to include **secondary recipients** who should be **kept informed** but are **not expected to act**. It promotes transparency and ensures stakeholders are aware of the conversation without being directly involved.

* **BCC (Blind Carbon Copy)**  
  This field allows you to send a copy of the email to someone **without other recipients knowing**. It’s useful for:
  * Protecting privacy when emailing large groups.
  * Discreetly informing a supervisor or colleague.
  * Avoiding reply-all chains in mass communications.

### Viva Engage Communities vs Teams Channels

Viva Engage (formerly Yammer) now refers to groups as **"communities."**

Key Differences:

* **Viva Engage Communities**  
  * *Optional to follow*  
  * Great for staying connected with trends, technology, or casual topics (e.g., the Off-Work group)

* **Teams Channels**  
  * *Mandatory to follow*  
  * Focused on operational and team-specific communication

> **Best Practice:** Use Viva Engage for broader, interest-based discussions. Use Teams Channels for concrete, team-related work.
