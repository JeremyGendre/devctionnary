<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Exception;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @param ObjectManager $manager
     * @throws Exception
     */
    public function load(ObjectManager $manager)
    {
        // we create a bunch of users
        for($i = 0 ; $i < 10; $i++){
            $username = "jvj".$i;
            $user = new User();
            $user->setLastName("Valjean".$i);
            $user->setFirstName("Jean".$i);
            $user->setUsername($username);
            $user->setCreatedAt((new \DateTime())->sub(new \DateInterval('P'.random_int(0,10).'D')));
            $user->setUpdatedAt(new \DateTime());
            $user->setBiography("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
            $user->setEmail($username."@yopmail.com");
            $user->setPassword($this->passwordEncoder->encodePassword($user, 'salut'));
            $manager->persist($user);
        }

        // we create an admin
        $user = new User();
        $user->setLastName("Big");
        $user->setFirstName("Boss");
        $user->setUsername("root");
        $user->setCreatedAt((new \DateTime())->sub(new \DateInterval('P'.random_int(0,10).'D')));
        $user->setUpdatedAt(new \DateTime());
        $user->setRoles(["ROLE_ADMIN"]);
        $user->setBiography("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
        $user->setEmail("bigboss@yopmail.com");
        $user->setPassword($this->passwordEncoder->encodePassword($user, 'salut'));
        $manager->persist($user);

        $manager->flush();
    }
}
