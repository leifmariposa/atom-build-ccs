# build-ccs

[![apm](https://img.shields.io/apm/l/build-ccs.svg?style=flat-square)](https://atom.io/packages/build-ccs)
[![apm](https://img.shields.io/apm/v/build-ccs.svg?style=flat-square)](https://atom.io/packages/build-ccs)
[![apm](https://img.shields.io/apm/dm/build-ccs.svg?style=flat-square)](https://atom.io/packages/build-ccs)

[Atom Build](https://atombuild.github.io/) provider for building Code Composer Studio projects. (Windows only)

This is my first Atom Build provider and it's all manual. Path to eclipsec.exe, workspace, project name and configuration has to be entered in settings and this is what will be built, no matter which project or file is open in Atom.

## Installation

### apm

Install `build-ccs` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-ccs`

### GitHub

Change to your Atom packages directory:

```bash
$ cd %USERPROFILE%\.atom\packages
```

Clone repository as `build-ccs`:

```bash
$ git clone https://github.com/leifmariposa/atom-build-ccs build-ccs
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Settings
#### Path to eclipsec.exe
The path to eclipsec.exe, e.g. c:\\ti\\ccsv6\\eclipse
#### Path to CCS workspace
The path to CCS workspace, e.g. C:\Users\leifm\ccs_workspace_v6_1_3
#### Project name
The name of the project to build
#### Configuration
The configuration to build, e.g. Debug

## Note
For to be able to choose CCS as build target there must be a valid path to eclipsec.exe and the CCS workspace in settings.

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `CCS` — builds Code Composer Studio project

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Choose target**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Toggle build panel**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

**Build script**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).
