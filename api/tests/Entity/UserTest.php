<?php

namespace App\Tests\Entity;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserTest extends KernelTestCase
{
    public function testUserCreate(){
        $user = (new User())
            ->setUsername('user1')
            ->setPassword('user1')
            ->setEmail('user1@gmail.com')
            ->setBiography('user1 biography')
            ->setFirstName('User')
            ->setLastName('One')
            ->setCreatedAt(new \DateTime())
            ->setUpdatedAt(new \DateTime());

        $this->assertEquals("user1", $user->getUserName());
        $this->assertEquals("user1@gmail.com", $user->getEmail());
        $this->assertEquals("user1 biography", $user->getBiography());
        $this->assertEquals("User", $user->getFirstName());
        $this->assertEquals("One", $user->getLastName());
    }
}

