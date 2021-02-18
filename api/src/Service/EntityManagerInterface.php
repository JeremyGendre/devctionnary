<?php


namespace App\Service;

/**
 * Interface EntityManagerInterface
 * @package App\Service
 */
interface EntityManagerInterface
{
    /**
     * Handles the entity creation
     * @return mixed
     */
    function create();

    /**
     * @return bool
     */
    function isBadRequest(): bool;
}
