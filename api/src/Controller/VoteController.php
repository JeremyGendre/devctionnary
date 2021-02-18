<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Service\VoteManager;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/vote")
 * Class VoteController
 * @package App\Controller
 */
class VoteController extends BaseAbstractController
{
    /**
     * @Route("/{id}", name="vote_post_one", methods={"POST"})
     * @param Snippet $snippet
     * @param VoteManager $voteManager
     * @return JsonResponse
     * @throws Exception
     */
    public function vote(
        Snippet $snippet,
        VoteManager $voteManager
    ): JsonResponse {
        $vote = $voteManager->voteForSnippet($snippet);

        if(!$vote){
            return $this->errorJsonResponse("Création du vote impossible");
        }

        return $this->successJsonResponse([
            'id' => $vote->getId()
        ]);
    }
}
