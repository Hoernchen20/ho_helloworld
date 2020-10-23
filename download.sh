#!/bin/bash
arm-none-eabi-objcopy -O ihex bin/bluepill/ho_helloworld.elf bin/bluepill/ho_helloworld.hex
~/Downloads/stm32flash/./stm32flash -w bin/bluepill/ho_helloworld.hex -v /dev/ttyUSB0 -b 576000
