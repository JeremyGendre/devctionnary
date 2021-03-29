<?php


namespace App\Service;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface as EntityManager;
use Exception;
use LogicException;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
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

    /**
     * @var TokenSTorageInterface
     */
    private $tokenStorage;

    public function __construct(
        UserPasswordEncoderInterface $passwordEncoder,
        EntityManager $em,
        TokenStorageInterface $tokenStorageInterface
    ){
        parent::__construct();
        $this->passwordEncoder = $passwordEncoder;
        $this->em = $em;
        $this->tokenStorage = $tokenStorageInterface;
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
     * @return void
     * @throws Exception
     */
    public function patchUser(User $user): void
    {
        // Check password
        $plainPassword = $this->requestContent['password'];

        if ($plainPassword !== null) {
            if ($this->passwordEncoder->isPasswordValid($user, $plainPassword) === true) {
                if ($this->requestContent['biography']) $user->setBiography($this->requestContent['biography']);
                if ($this->requestContent['firstName']) $user->setFirstName($this->requestContent['firstName']);
                if ($this->requestContent['lastName']) $user->setLastName($this->requestContent['lastName']);
                if ($this->requestContent['email']) $user->setEmail($this->requestContent['email']);
                if ($this->requestContent['username']) $user->setUsername($this->requestContent['username']);
                $user->setUpdatedAt(new \DateTime());

            } else{
                throw new LogicException('Le mot de passe actuel n\'est pas correct');
            }
        } else {
            throw new LogicException('Le mot de passe actuel n\'est pas renseigné');
        }

        $this->em->flush();
    }
}
