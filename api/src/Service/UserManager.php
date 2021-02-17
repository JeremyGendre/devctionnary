<?php


namespace App\Service;


use App\Entity\User;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManager
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var mixed
     */
    private $requestContent;

    public function __construct(
        UserPasswordEncoderInterface $passwordEncoder
    ){
        $this->passwordEncoder = $passwordEncoder;
        $this->requestContent = $this->setUpRequestContent();
    }

    /**
     * @return User|null
     * @throws Exception
     */
    public function createFromRequest()
    {
        if($this->isBadRequest()){
            return null;
        }

        $user = new User();
        $user->setPassword($this->passwordEncoder->encodePassword($user, $this->requestContent['password']));
        $user->setUsername($this->requestContent['username']);
        $now = new \DateTime();
        $user->setCreatedAt($now);
        $user->setUpdatedAt($now);
        $user->setFirstName($this->requestContent['firstname']);
        $user->setLastName($this->requestContent['lastname']);
        $user->setEmail($this->requestContent['email']);

        return $user;
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

    /**
     * @return bool
     */
    private function isBadRequest(): bool
    {
        return !$this->requestContent['password']
            || !$this->requestContent['username']
            || !$this->requestContent['email']
            || !$this->requestContent['lastname']
            || !$this->requestContent['firstname'];
    }
}
