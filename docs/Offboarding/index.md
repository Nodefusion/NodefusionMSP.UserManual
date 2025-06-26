
# Offboarding

## Offboarding Device - Windows

In case, Windows corporate owned device has been sold, or recycled.

Windows Autopilot devices and Active Directory Computers 
1. Intune Admin Center > Devices > Windows > Find device in search and select it> Select Retire/Wipe
1. Disable Computer object in Active Directory and move to Disabled OU if exists
1. Remove from Windows Autopilot Devices > Intune Admin Center, Devices > Enrollment > Windows Autopilot > Devices > Select Device> Delete
1. Reinstall Windows OS or use Reset this PC option in System > Recovery in Windows to be ready for future use of the new owner, select to remove all existing files.

## Offboarding Device - Android Corporate-owned, Fully managed user devices

In case, Android corporate owned device has been sold, or recycled.

1. Go to Intune > Devices > Adroid > Device > Wipe > Yes
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
