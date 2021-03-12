<?php

namespace App\DataFixtures;

use App\Entity\Snippet;
use App\Entity\SnippetValidation;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SnippetFixtures extends Fixture implements DependentFixtureInterface
{

    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager)
    {
        $admin = $this->userRepository->findOneBy(['username' => 'root']);
        for($i = 0 ; $i < 20; $i++){
            $snippet = new Snippet();
            $snippet->setUpdatedAt(new DateTime());
            $snippet->setCreatedAt((new \DateTime())->sub(new \DateInterval('P'.random_int(0,10).'D')));
            $snippet->setTitle('title snippet'.$i);
            $snippet->setDescription('description'.$i);
            $snippet->setContent('content'.$i);
            $snippet->setAuthor($this->userRepository->findOneBy([]));

            $snippetValidation = new SnippetValidation();
            $snippetValidation->setCreatedAt((new \DateTime())->sub(new \DateInterval('P'.random_int(0,10).'D')));
            $snippetValidation->setUpdatedAt(new DateTime());
            $snippetValidation->setSnippet($snippet);
            $snippetValidation->setValidator($admin);
            if(($i%3) === 0){
                $snippetValidation->setValidated(false);
                $snippetValidation->setMessage("pas ouf");
            }else{
                $snippetValidation->setValidated(true);
                $snippetValidation->setMessage("good :)");
            }

            $manager->persist($snippet);
            $manager->persist($snippetValidation);
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
            UserFixtures::class
        ];
    }
}
