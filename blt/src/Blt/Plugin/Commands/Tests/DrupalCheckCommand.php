<?php

namespace Cgov\Blt\Plugin\Commands\Tests;

use Acquia\Blt\Robo\BltTasks;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * Defines commands in the "validate:deprecated" namespace.
 */
class DrupalCheckCommand extends BltTasks {

  /**
   * Executes the deprecation-validate command.
   *
   * @command validate:deprecated
   */
  public function validateDeprecated() {
    if ($this->getConfigValue('validate.deprecation') == TRUE) {
      $this->validateDeprecatedModules();
      $this->validateDeprecatedProfiles();
      $this->validateDeprecatedThemes();
    }
  }

  /**
   * Executes the deprecation-validate command.
   *
   * @command validate:deprecated:modules
   */
  public function validateDeprecatedModules() {
    $this->runDrupalCheck('modules');
  }

  /**
   * Executes the deprecation-validate command.
   *
   * @command validate:deprecated:themes
   */
  public function validateDeprecatedThemes() {
    $this->runDrupalCheck('themes');
  }

  /**
   * Executes the deprecation-validate command.
   *
   * @command validate:deprecated:profiles
   */
  public function validateDeprecatedProfiles() {
    $this->runDrupalCheck('profiles');
  }

  /**
   * Run Drupal checks.
   *
   * @param string $type
   *   Type of check (module or theme).
   *
   * @throws \Acquia\Blt\Robo\Exceptions\BltException
   * @throws \Robo\Exception\TaskException
   */
  public function runDrupalCheck($type) {
    $this->say("Checking for Deprecated Code in docroot/$type/custom");
    $bin = $this->getConfigValue('composer.bin');
    $docroot = $this->getConfigValue('docroot');
    $result = $this->taskExecStack()
      ->dir($this->getConfigValue('repo.root'))
      ->exec("$bin/drupal-check -d $docroot/$type/custom")
      ->run();
    $exit_code = $result->getExitCode();
    if ($exit_code) {
      $this->logger->notice('Review Deprecation warnings and re-run.');
      throw new BltException("Drupal Check in docroot/$type/custom failed.");
    }
  }

}
