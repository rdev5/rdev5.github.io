---
layout: post
title:  "Raspberry Pi Notes"
date:   2018-03-23
categories: blog
---
I don’t really have any projects relying on the hardware of a Raspberry Pi, but I do like setting things up. For this round, however, I may be interested in:

*   building my own [Tiny Hardware Firewall](http://www.tinyhardwarefirewall.com/) / VPN client;
*   simulating network environments for CCENT/CCNA ICND1-2;
*   building some pentesting practice targets;
*   building an isolated true random number collector;
*   building a hardware security module.

### Hardware

*   Raspberry Pi (Model B)
*   16 GB SanDisk Extreme (Class 10) SD Card
*   ChargeWorx 5v battery pack for portability
*   Raspbian-friendly EDIMAX (EW‑7811Un) wireless adapter

### Base installation

1.  Downloaded and verified 2016-09-23-raspbian-jessie-lite.zip from raspberrypi.org
2.  Used a Windows machine to quick format SD card as FAT32
3.  Used a MacbookPro to write the *.img to the SD Card

### Common post-installation tasks

1.  Setup SSH key and [disabled password authentication](http://raspi.tv/2012/how-to-set-up-keys-and-disable-password-login-for-ssh-on-your-raspberry-pi)
2.  Update package information (apt-get update) and install _ufw_
3.  Configure firewall and enable (i.e. ufw allow ssh; ufw enable)
4.  [Setup a RAM drive](https://www.domoticz.com/wiki/Setting_up_a_RAM_drive_on_Raspberry_Pi) at /var/tmp and replace /tmp with symlink

Building a hardware firewall
----------------------------

_Inspired by the [Tiny Hardware Firewall (THF)](http://www.tinyhardwarefirewall.com/) project._

Configuration files and additional information for this project can be found [here](https://gist.github.com/rdev5/ef1874d7a2d3bc2631b81ea64ec13184).

#### Routing

1.  Configure [IP forwarding and masquerading](https://help.ubuntu.com/lts/serverguide/firewall.html#ip-masquerading) and test [Auto MDI-X](https://en.wikipedia.org/wiki/Medium-dependent_interface#Auto_MDI-X)

#### Private Networking

1.  Install and configure [DNSmasq](https://wiki.debian.org/HowTo/dnsmasq) (DNS forwarder and DHCP server)
2.  Add firewall rules to allow DNS/DHCP services (i.e. ufw allow \[dns,bootps\])

#### Tunneling

1.  Install and configure OpenVPN client
2.  Update /etc/ufw/before.rules to route traffic through VPN tunnel (tun0)
3.  Add [startup script](http://raspberrypi.stackexchange.com/a/8735/55168) for autoselecting VPN server

#### Applications

1.  Configure additional firewall settings (i.e. port forwarding)
