<?php


namespace App\Service\Serializer;

/**
 * Interface SerializerInterface
 * @package App\Service\Serializer
 */
interface Serializable
{
    /**
     * @return array
     */
    public function serialize():array;
}
