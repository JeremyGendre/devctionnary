<?php


namespace App\Tests\Functional;


class WebTestRequest
{
    /** @var string $method */
    private $method;

    /** @var string $url */
    private $url;

    /** @var array $data */
    private $data;

    /** @var bool $isAjax */
    private $isAjax;

    /** @var int $expectedStatusCode */
    private $expectedStatusCode;

    public function __construct(string $method, string $url, array $data = [], bool $isAjax = false, int $expectedStatusCode = null)
    {
        $this->method = $method;
        $this->url = $url;
        $this->data = $data;
        $this->isAjax = $isAjax;
        $this->expectedStatusCode = $expectedStatusCode;
    }

    /**
     * @return string
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * @param string $method
     * @return $this
     */
    public function setMethod(string $method): self
    {
        $this->method = $method;
        return $this;
    }

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return $this
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;
        return $this;
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * @param array $data
     * @return $this
     */
    public function setData(array $data): self
    {
        $this->data = $data;
        return $this;
    }

    /**
     * @return bool
     */
    public function getIsAjax():bool
    {
        return $this->isAjax;
    }

    /**
     * @param bool $isAjax
     * @return $this
     */
    public function setIsAjax(bool $isAjax): self
    {
        $this->isAjax = $isAjax;
        return $this;
    }

    /**
     * @return int
     */
    public function getExpectedStatusCode(): int
    {
        return $this->expectedStatusCode;
    }

    /**
     * @param int $code
     * @return $this
     */
    public function setExpectedStatusCode(int $code): self
    {
        $this->expectedStatusCode = $code;
        return $this;
    }
}
