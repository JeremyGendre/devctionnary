<?php


namespace App\Tests\Functional;


use Doctrine\Common\Collections\ArrayCollection;

class WebTestRequestCollection
{
    /** @var ArrayCollection $collection */
    private $collection;

    public function __construct()
    {
        $this->collection = new ArrayCollection();
    }

    /**
     * @param string $method
     * @param string $url
     * @param array $data
     * @param bool $isAjax
     * @param int|null $expectedStatusCode
     * @return $this
     */
    public function add(
        string $method,
        string $url,
        array $data = [],
        bool $isAjax = false,
        int $expectedStatusCode = null
    ): self{
        $this->collection->add(new WebTestRequest($method,$url,$data,$isAjax,$expectedStatusCode));
        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getRequests():ArrayCollection
    {
        return $this->collection;
    }
}
