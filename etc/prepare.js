#! /usr/bin/env node
var cp = require('node:child_process');
var fs = require('node:fs');
var os = require('node:os');

if (fs.existsSync('src')) {
  cp.spawn('npm', ['run', 'build:dts'], { stdio: 'inherit', shell: os.platform() === 'win32' });
} else {
  if (!fs.existsSync('lib')) {
    console.warn('MongoDB: No compiled javascript present, the driver is not installed correctly.');
  }
}
