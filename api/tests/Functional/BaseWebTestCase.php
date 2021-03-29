<?php


namespace App\Tests\Functional;


use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BaseWebTestCase extends WebTestCase
{
    /**
     * @var KernelBrowser|null
     */
    protected $client = null;

    /**
     * Fake a user log-in
     */
    protected function logIn()
    {
        $this->client = static::createClient();
        $userRepository = static::$container->get(UserRepository::class);
        // retrieve the test user
        $testUser = $userRepository->findOneBy([]);

        // simulate $testUser being logged in
        $this->client->loginUser($testUser);
    }

    /**
     * @param string $class
     * @return object|null
     */
    protected function getClass(string $class)
    {
        return static::$container->get($class);
    }

    /**
     * @param WebTestRequestCollection $requests
     */
    protected function areMultipleRequestsSuccessfull(WebTestRequestCollection $requests)
    {
        foreach ($requests->getRequests() as $webTestingRequest){
            if($webTestingRequest->getIsAjax() === true){
                $this->client->xmlHttpRequest($webTestingRequest->getMethod(), $webTestingRequest->getUrl(), $webTestingRequest->getData());
            }else{
                $this->client->request($webTestingRequest->getMethod(), $webTestingRequest->getUrl(),$webTestingRequest->getData());
            }
            $this->assertResponseIsSuccessful();
        }
    }

    /**
     * @param WebTestRequestCollection $requests
     */
    protected function checkMultipleRequestsStatusCode(WebTestRequestCollection $requests)
    {
        foreach ($requests->getRequests() as $webTestingRequest){
            if($webTestingRequest->getIsAjax() === true){
                $this->client->xmlHttpRequest($webTestingRequest->getMethod(), $webTestingRequest->getUrl(), $webTestingRequest->getData());
            }else{
                $this->client->request($webTestingRequest->getMethod(), $webTestingRequest->getUrl(),$webTestingRequest->getData());
            }
            $this->assertEquals($webTestingRequest->getExpectedStatusCode(), $this->client->getResponse()->getStatusCode());
        }
    }

    /**
     * @param string $repositoryClass
     * @return mixed
     */
    protected function getOneInstanceFromRepository(string $repositoryClass)
    {
        $entityRepository = $this->getClass($repositoryClass);
        return $entityRepository->findOneBy([]);
    }
}
