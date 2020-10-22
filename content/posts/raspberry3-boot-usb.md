---
title: "Raspberry3 Boot USB"
date: 2020-10-22T23:46:47+03:00
draft: false
---

## USB host boot mode

Enable USB host boot mode

```bash
echo program_usb_boot_mode=1 | sudo tee -a /boot/config.txt
```

Reboot and check OTP is set correctly:

```bash
pi@raspberrypi:~ $ vcgencmd otp_dump | grep 17:
17:3020000a
```

Remove SD card and boot from USB!


## Use SD card to boot from USB

If above is NOT working you can use SD card to boot from USB.

1. Format SD card with FAT32.
2. Add https://github.com/raspberrypi/firmware/raw/master/boot/bootcode.bin on it.
3. Put both SD card and USB to RaspberryPi and boot away.
