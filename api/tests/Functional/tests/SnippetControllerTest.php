<?php


namespace App\Tests\Functional\tests;


use App\Tests\Functional\BaseWebTestCase;
use Symfony\Component\HttpFoundation\Response;

class SnippetControllerTest extends BaseWebTestCase
{
    public function testGetAll()
    {
        $this->logIn();
        $this->client->request('GET', '/api/snippets');
        $this->assertEquals(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
    }
}
