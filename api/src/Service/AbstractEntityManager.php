<?php


namespace App\Service;


use Symfony\Component\HttpFoundation\Request;

abstract class AbstractEntityManager
{
    /**
     * @var array
     */
    protected $requestContent;

    public function __construct()
    {
        $this->requestContent = $this->setUpRequestContent();
    }

    /**
     * @return array
     */
    private function setUpRequestContent(): array
    {
        $request = Request::createFromGlobals();
        if(!$request->getContent()){
            return [];
        }
        return json_decode($request->getContent(), true);
    }
}
