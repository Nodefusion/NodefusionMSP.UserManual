
# Offboarding

## Offboarding Device - Windows

Windows Autopilot devices and Active Directory Computers

1. Retire/Wipe from Intune
1. Disable Computer object in Active Directory and move to Disabled OU if exists
1. Remove from Windows Autopilot Devices
1. Reinstall Windows OS or use Reset this PC option in System > Recovery in Windows

## Offboarding Device - Android Corporate-owned, Fully managed user devices

1. Ensure company has access to the device
1. Go to Intune > Device > Wipe > Yes
1. Check if device has been removed from Intune

## Offboarding Device - Android Personally-owned devices with work profile

1. Go to Intune > Device > Retire> Yes
1. Check if device has been removed from Intune

### Offboarding Device - iOS web based enrollment

1. Go to Intune > Apps > App selective Wipe > Create Wipe Request > Select User > Select Device > Create Request
1. Go to Intune > Device > Retire> Yes
