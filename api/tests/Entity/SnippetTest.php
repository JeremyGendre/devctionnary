<?php

namespace App\Tests\Entity;

use App\Entity\Snippet;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SnippetTest extends KernelTestCase
{
    public function testValidity()
    {
        $user = (new User())
            ->setUsername('user1')
            ->setPassword('user1')
            ->setEmail('user1@gmail.com')
            ->setBiography('user1 biography')
            ->setFirstName('User')
            ->setLastName('One')
            ->setCreatedAt(new \DateTime())
            ->setUpdatedAt(new \DateTime());

        $code = (new Snippet())
            ->setTitle('Snippet Code 123')
            ->setDescription('Description snippet code 123')
            ->setContent('Content 123')
            ->setCreatedAt(new \DateTime())
            ->setUpdatedAt(new \DateTime())
            ->setAuthor($user);

        $this->assertEquals("Snippet Code 123", $code->getTitle());
        $this->assertEquals("Description snippet code 123", $code->getDescription());
        $this->assertEquals("Content 123", $code->getContent());
        $this->assertEquals($user, $code->getAuthor());

    }
}
