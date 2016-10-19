'use babel';

import { install } from 'atom-package-deps';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { EventEmitter } from 'events';

// Package settings
import meta from '../package.json';

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

export const config = {
  eclipsec_path: {
    title: 'Path to eclipsec.exe',
    description: 'Enter path to eclipsec.exe',
    type: 'string',
    default: 'c:\\ti\\ccsv6\\eclipse',
    order: 1
  },
  workspace_path: {
    title: 'Path to CCS workspace',
    description: 'Enter path to workspace',
    type: 'string',
    default: '',
    order: 2
  },
  project_name: {
    title: 'Project name',
    description: 'Name of project to build',
    type: 'string',
    default: '',
    order: 3
  },
  configuration: {
    title: 'Configuration',
    description: 'Configuration to build, e.g. Debug',
    type: 'string',
    default: 'Debug',
    order: 4
  },
};

export function provideBuilder() {
  return class CcsProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-ccs.eclipsec_path', () => this.emit('refresh'));
      atom.config.observe('build-ccs.workspace_path', () => this.emit('refresh'));
      atom.config.observe('build-ccs.project_name', () => this.emit('refresh'));
      atom.config.observe('build-ccs.configuration', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'CCS';
    }

    isEligible() {
      if (os.platform() === 'win32') {
        this.files = [ 'eclipsec.exe' ]
          .map(f => path.join(atom.config.get('build-ccs.eclipsec_path'), f))
          .filter(fs.existsSync);
        return this.files.length > 0 && fs.existsSync(atom.config.get('build-ccs.workspace_path'));
      }
      return false;
    }

    settings() {
      const cwdPath = '{FILE_ACTIVE_PATH}';

      const args = [
        '/q',
        '/c',
        path.join(atom.config.get('build-ccs.eclipsec_path'), 'eclipsec.exe'),
        '-noSplash',
        '-data',
        atom.config.get('build-ccs.workspace_path'),
        '-application',
        'com.ti.ccstudio.apps.projectBuild',
        '-ccs.projects',
        atom.config.get('build-ccs.project_name'),
        '-ccs.configuration',
        atom.config.get('build-ccs.configuration'),
        '-ccs.buildType incremental'
      ];

      return {
        name: 'CCS',
        exec: 'cmd',
        args: args,
        cwd: cwdPath,
        sh: false,
        atomCommandName: 'ccs:run-script'
      };
    }
  };
}
