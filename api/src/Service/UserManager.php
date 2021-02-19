<?php


namespace App\Service;


use App\Entity\User;
use Exception;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManager extends AbstractEntityManager implements EntityManagerInterface
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(
        UserPasswordEncoderInterface $passwordEncoder
    ){
        parent::__construct();
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @return User|null
     * @throws Exception
     */
    public function create()
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
     * @return bool
     */
    public function isBadRequest(): bool
    {
        return !$this->requestContent['password']
            || !$this->requestContent['username']
            || !$this->requestContent['email']
            || !$this->requestContent['lastname']
            || !$this->requestContent['firstname'];
    }
}
