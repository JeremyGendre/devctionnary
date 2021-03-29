<?php


namespace App\Tests\Functional\tests;


use App\Entity\Snippet;
use App\Repository\SnippetRepository;
use App\Tests\Functional\BaseWebTestCase;
use App\Tests\Functional\WebTestRequestCollection;
use Symfony\Component\HttpFoundation\Response;

class SnippetControllerTest extends BaseWebTestCase
{
    public function testRoutesStatus()
    {
        $this->logIn();
        /** @var Snippet $snippet */
        $snippet = $this->getOneInstanceFromRepository(SnippetRepository::class);

        $requests = new WebTestRequestCollection();
        $requests->add('GET','/api/snippets');
        $requests->add('GET','/api/snippets/'.$snippet->getId());

        $this->areMultipleRequestsSuccessfull($requests);
    }
}
