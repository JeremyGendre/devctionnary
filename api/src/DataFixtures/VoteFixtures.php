<?php

namespace App\DataFixtures;

use App\Entity\Vote;
use App\Repository\SnippetRepository;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Exception;

class VoteFixtures extends Fixture implements DependentFixtureInterface
{

    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @var SnippetRepository
     */
    private $snippetRepository;

    public function __construct(UserRepository $userRepository, SnippetRepository $snippetRepository)
    {
        $this->userRepository = $userRepository;
        $this->snippetRepository = $snippetRepository;
    }

    /**
     * @param ObjectManager $manager
     * @throws Exception
     */
    public function load(ObjectManager $manager)
    {
        for($i = 0 ; $i < 20; $i++){
            $vote = new Vote();
            $vote->setUpdatedAt(new DateTime());
            $vote->setCreatedAt(new DateTime());
            $vote->setRating(($i%3 === 0) ? 3 : (($i%4 === 0) ? 4 : 2));
            $vote->setVoter($this->userRepository->findOneBy([]));
            $vote->setSnippet($this->snippetRepository->findOneBy([]));
            $manager->persist($vote);
        }

        $manager->flush();
    }

    /**
     * This method must return an array of fixtures classes
     * on which the implementing class depends on
     *
     * @psalm-return array<class-string<FixtureInterface>>
     */
    public function getDependencies()
    {
        return [
            UserFixtures::class,
            SnippetFixtures::class
        ];
    }
}
