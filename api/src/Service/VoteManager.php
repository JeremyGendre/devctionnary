<?php


namespace App\Service;


use App\Entity\Snippet;
use App\Entity\User;
use App\Entity\Vote;
use App\Repository\VoteRepository;
use DateTime;
use Exception;
use Symfony\Component\Security\Core\Security;

class VoteManager extends AbstractEntityManager implements EntityManagerInterface
{
    /**
     * @var Security
     */
    private $security;

    /**
     * @var VoteRepository
     */
    private $voteRepository;

    public function __construct(Security $security, VoteRepository $voteRepository)
    {
        parent::__construct();
        $this->security = $security;
        $this->voteRepository = $voteRepository;
    }

    /**
     * Handles the entity creation
     * @return mixed
     * @throws Exception
     */
    public function create()
    {
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
        if($this->isBadRequest()){
            return null;
        }

        $vote = $this->voteRepository->findOneBy(['voter' => $this->security->getUser(), 'snippet' => $snippet]);

        if($vote){
            $this->updateVoteRating($vote, $this->requestContent['rating']);
        } else {
            /** @var Vote $vote */
            $vote = $this->create();
            if($vote){
                $vote->setSnippet($snippet);
            }
        }

        return $vote;
    }

    /**
     * @param Vote $vote
     * @param int $rating
     * @throws Exception
     */
    public function updateVoteRating(Vote $vote, int $rating)
    {
        $vote->setRating($rating);
        $vote->setUpdatedAt(new DateTime());
    }

    /**
     * @return bool
     */
    public function isBadRequest(): bool
    {
        return !$this->requestContent['rating'] || $this->requestContent['rating'] < 0;
    }
}
