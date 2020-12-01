<?php

namespace Drupal\cgov_image;

use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * A service which provides methods to alter and configure form elements.
 */
class CgovImageTools {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Create a new instance of a CgovImageTools class.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   An instance of the entity type manager service.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * Adds our image styles to the default consumer.
   *
   * This is used by the consumer module, and more so the
   * consumer_image_styles modules to add URLs for our styles to the JSONAPI
   * object representation of an image. As this is very dependent on the UI
   * usage, Drupal does not expose this by default on the "data view" given
   * by JSONAPI. Drupal does not expose crop information either, nor offers
   * a direct path to implement such data. So this seems the quickest way to
   * get to a prototype. Unfortunately, they use content entities to store the
   * configuration for a consumer and NOT a config entity. So we need to
   * actually add our image styles to the consumer configuration on install,
   * and that is done through code. This is helper code to do just that.
   */
  public function addImageStylesToDefaultConsumer() {
    // Image Styles to Add.
    $image_styles = [
      'cgov_1x1_placeholder', 'cgov_3x4_placeholder', 'cgov_9x16_placeholder',
      'cgov_article', 'cgov_borderless_card', 'cgov_enlarged', 'cgov_featured',
      'cgov_panoramic', 'cgov_social_media', 'cgov_thumbnail',
    ];

    // Adding this to the default consumers.
    $consumer = $this->getDefaultConsumer();

    // Now add the images.
    foreach ($image_styles as $image_style) {
      $consumer->image_styles[] = ['target_id' => $image_style];
    }

    $consumer->save();
  }

  /**
   * Gets the Consumer module's default consumer entity.
   *
   * @return \Drupal\consumers\Entity\Consumer
   *   The consumer.
   */
  private function getDefaultConsumer() {
    $storage = $this->entityTypeManager->getStorage('consumer');
    // Find the default consumer.
    $results = $storage->getQuery()
      ->condition('is_default', TRUE)
      ->execute();
    $consumer_id = reset($results);
    if (!$consumer_id) {
      // Throw if there is no default consumer..
      throw new MissingConsumer('Unable to find the default consumer.');
    }
    /** @var \Drupal\consumers\Entity\Consumer $consumer */
    $consumer = $storage->load($consumer_id);
    return $consumer;
  }

  /**
   * Helper function to get the crop name from the image style.
   *
   * @param string $image_style
   *   The image_style to find the crop for.
   *
   * @return string
   *   NULL if the style does not have a crop, the name of the crop otherwise.
   */
  public function findCropByStyle($image_style) {
    // TODO: Actually find the crop from the style.
    switch ($image_style) {
      case "cgov_article":
      case "cgov_enlarged":
        return "freeform";

      case "cgov_featured":
      case "cgov_social_media":
        return "4x3";

      case "cgov_panoramic":
        return "16x9";

      case "cgov_thumbnail":
        return "thumbnail";

      case "cgov_borderless_card":
        return "1x1";
    }
    return NULL;
  }

}
