<?php


namespace App\Service;


use App\Entity\Snippet;
use App\Entity\User;
use App\Entity\Vote;
use DateTime;
use Exception;
use Symfony\Component\Security\Core\Security;

class VoteManager extends AbstractEntityManager implements EntityManagerInterface
{
    /**
     * @var Security
     */
    private $security;

    public function __construct(Security $security)
    {
        parent::__construct();
        $this->security = $security;
    }

    /**
     * Handles the entity creation
     * @return mixed
     * @throws Exception
     */
    public function create()
    {
        if($this->isBadRequest()){
            return null;
        }
        /** @var User $user */
        $user = $this->security->getUser();
        $now = new DateTime();

        $vote = new Vote();
        $vote->setCreatedAt($now);
        $vote->setUpdatedAt($now);
        $vote->setVoter($user);
        $vote->setRating($this->requestContent['rating']);
        return $vote;
    }

    /**
     * @param Snippet $snippet
     * @return Vote
     * @throws Exception
     */
    public function voteForSnippet(Snippet $snippet)
    {
        /** @var Vote $vote */
        $vote = $this->create();
        if($vote){
            $vote->setSnippet($snippet);
        }
        return $vote;
    }

    /**
     * @return bool
     */
    public function isBadRequest(): bool
    {
        return !$this->requestContent['rating'] || $this->requestContent['rating'] < 0;
    }
}
