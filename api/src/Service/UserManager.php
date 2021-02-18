<?php


namespace App\Service;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface as EntityManager;
use Exception;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManager extends AbstractEntityManager implements EntityManagerInterface
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(
        UserPasswordEncoderInterface $passwordEncoder,
        EntityManager $em
    ){
        parent::__construct();
        $this->passwordEncoder = $passwordEncoder;
        $this->em = $em;
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

    /**
     * Patch a user.
     *
     * @param User $user
     * @param array $data
     * @return void
     */
    public function patchUser(User $user): void
    {
        $data = $this->requestContent;
    
        if (isset($data['biography']) === true) $user->setBiography($data['biography']);
        if (isset($data['firstName']) === true) $user->setFirstName($data['firstName']);
        if (isset($data['lastName']) === true) $user->setLastName($data['lastName']);
        if (isset($data['email']) === true) $user->setEmail($data['email']);
        if (isset($data['username']) === true) $user->setUsername($data['username']);
        $user->setUpdatedAt(new \DateTime());
    }
}
