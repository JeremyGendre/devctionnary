<?php

namespace App\Service;

use App\Entity\SnippetValidation;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use LogicException;

class UserService
{
    /** @var EntityManagerInterface */
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * Patch a user.
     *
     * @param User $user
     * @param array $data
     * @return void
     */
    public function patchUser(User $user, array $data = []): void
    {
        if (isset($data['biography']) === true) $user->setBiography($data['biography']);
        if (isset($data['firstname']) === true) $user->setFirstName($data['firstname']);
        if (isset($data['lastname']) === true) $user->setLastName($data['lastname']);
        if (isset($data['email']) === true) $user->setEmail($data['email']);
        if (isset($data['username']) === true) $user->setUsername($data['username']);

        $this->em->flush();
    }

    /**
     * Delete a user
     *
     * @param User $user
     * @return void
     */
    public function deleteUser(User $user): void
    {
        $this->em->remove($user);
        $this->em->flush();
    }
}