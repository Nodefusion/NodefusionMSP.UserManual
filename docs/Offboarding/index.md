
# Offboarding

## Offboarding Device - Windows

In case, Windows corporate owned device has been sold, donated or recycled as e-waste.

Windows Autopilot devices and Active Directory Computers:

1. Intune Admin Center > Devices > Windows > Find device in search and select it> Select Retire/Wipe
1. Disable Computer object in Active Directory and move to Disabled OU if exists
1. Remove from Windows Autopilot Devices > Intune Admin Center, Devices > Enrollment > Windows Autopilot > Devices > Select Device> Delete
1. Reinstall Windows OS or use Reset this PC option in System > Recovery in Windows to be ready for future use of the new owner, select to remove all existing files.

## Offboarding Device - Android Corporate-owned, Fully managed user devices

In case, Android corporate owned device has been sold, or recycled.

1. Go to Intune > Devices > Android > Device > Wipe > Yes
1. Check if device has been removed from Intune

## Offboarding Device - Android Personally-owned devices with work profile

In case, Android personal owned device has been stolen or removed, and user did not initiate retire itself using Intune Company Portal Web App.

1. Go to Intune > Apps > Android > App selective Wipe > Create Wipe Request > Select User > Select Device > Create Request
1. Go to Intune > Device > Retire > Yes
1. Check if device has been removed from Intune

### Offboarding Device - iOS web based enrollment

In case, iOS device has been stolen or removed, and user did not initiate retire itself using Intune Company Portal Web App.

1. Go to Intune > Apps > iOS> App selective Wipe > Create Wipe Request > Select User > Select Device > Create Request
1. Go to Intune > Device > Retire> Yes

## Offboarding Device - macOS

In case, Windows corporate owned device has been sold, or recycled.

1. Intune Admin Center > Devices > Windows > Find device in search and select it> Select Retire/Wipe

## Pre-Offboarding user

In case a user is leaving the organization and is on a notice period, still working. Apply as needed.

1. Enable Exchange mailbox Litigation Hold for 60 days

## Offboarding user

1. If having Exchange Online mailbox

    1. Remove future calendar events inside mailbox
    1. Set mailbox type to shared
    1. If cloud only, hide in HAL
    1. If needed, set Message forwarding to another user
    1. Otherwise, if no forwarding, configure message delivery restrictions to self only

1. If have Windows Server Active Directory

    1. Disable user account login
    1. Remove Manager
    1. Remove user from all AD groups
    1. Clear all proxyAddresses (if no email forwarding previously set)
    1. Hide in GAL
    1. Start Domain Controller sync/replication
    1. Start Microsoft Entra Connect sync

1. If Microsoft Entra cloud only user
    1. Disable user account login
    1. Remove Manager
    1. Hide in GAL
    1. Rename user to initial .onmicrosoft domain
    1. Remove old email address from other domains in Mailbox proxyAddress (if no email forwarding previously set)

1. Revoke sign in sessions
1. Microsoft Intune Retire Android and iOS devices of the user
1. Remove from Microsoft Entra roles
1. Remove from Microsoft Entra Groups and Exchange distribution and mail-enabled security groups
1. Remove direct assigned User licenses
1. Microsoft Intune - Remote wipe and reinstall device:
    * Personally-owned phone - Retire (The Retire action removes managed app data (where applicable), settings, and email profiles that were assigned by using Intune. The device is removed from Intune management.)
    * Corporate owned phone - Wipe (The Wipe action restores a device to its factory default settings. The user data is kept if you choose the Retain enrollment state and user account checkbox. Otherwise, all data, apps, and settings will be removed.)
    * Corporate owned laptop/PC - Retire/Wipe
