'use strict';

function requirePeer(moduleName) {
  try {
    return require(moduleName);
  } catch (_) {
    const moduleNameBase = moduleName.replace(/\/.*/, '');
    throw new Error(`Cannot find module '${moduleName}'.\n'id-generators' requires a peer of '${moduleNameBase}' but none is installed. You must install peer dependencies yourself.\nRun 'npm install ${moduleNameBase}'`);
  }
}

module.exports = requirePeer;
